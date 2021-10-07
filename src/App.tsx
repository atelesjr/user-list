import { useState, useEffect } from 'react';
import * as S from './styles'
//components 
import Header from './components/Header'

function App() {
  const [ search, setSearch ] = useState<{field: string, value: string }>({ field: '', value: ''})

  useEffect(() => {
    console.log('search', search)
  }, [search])

  

  return (
    <S.Container>
      <Header setSearch={ setSearch }/>
      <div>
        Body
      </div>
      <S.Global />
    </S.Container>
  );
}

export default App;
