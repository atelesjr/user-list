import { useState, useEffect, useCallback } from 'react';
import * as S from './styles'
// components 
import Header, { SearchProps } from './components/Header'
import Body from './components/Body'
// api
import { getUsers, User } from './api'

function App() {
  const [ search, setSearch ] = useState<SearchProps>({ field: '', value: ''})
  const [ list, setList ] = useState<User[]>([])
  const [ filteredList, setFilteredList ] = useState<undefined | User[]>(undefined)
  const [ isLoading, setIsLoading ] = useState<boolean>(true)
  const [ errorApi, setErrorApi ] = useState<boolean>(false)

  const getUsersList = async () => {
    setIsLoading(true)

    const response = await getUsers()

    if(response?.status){
      setList(response?.data)
    } else {
      setErrorApi(true)
    }
    
    setIsLoading(false)
  }

  useEffect(() => {
    getUsersList()
  }, [])

  const setFilter = useCallback(
    (search: SearchProps) => {
      const { field, value } = search
      let result

      if(field === 'name' && value !== '') {
        result = list?.filter((user) => user.name === value)
      }

      if(field === 'age' && value !== '' ) {
        result = list?.filter((user) => user.age === +value)
      }

      if(value === ''){
        setFilteredList(undefined)
      } else {
        setFilteredList(result)
      }

      setIsLoading(false)
    },
    [list],
  )

  useEffect(() => {
    setIsLoading(true)
    setTimeout(setFilter, 3000, search)
    // eslint-disable-next-line 
  }, [search.value])


  return (
    <S.Container>
      <Header setSearch={ setSearch }/>
      <Body 
        list={ filteredList ?? list } 
        isLoading={isLoading} 
        error={errorApi} 
        search={search}
      />
      <S.Global />
    </S.Container>
  );
}

export default App;
