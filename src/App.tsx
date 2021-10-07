import { useState, useEffect } from 'react';
import * as S from './styles'
// components 
import Header, { SearchProps } from './components/Header'
import Body from './components/Body'
// api
import { getUsers, User } from './api'

function App() {
  const [ search, setSearch ] = useState<SearchProps>({ field: '', value: ''})
  const [ list, setList ] = useState<User[]>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  const getUsersList = async () => {
    setIsLoading(true)
    const response = await getUsers()
    response && setList(response?.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getUsersList()
  }, [])

  useEffect(() => {
    console.log('search', search)
  }, [search])

  return (
    <S.Container>
      <Header setSearch={ setSearch }/>
      <Body list={list} isLoading={isLoading}/>
      <S.Global />
    </S.Container>
  );
}

export default App;
