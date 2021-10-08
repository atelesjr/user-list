import { useState, useEffect } from 'react'
import * as S from './styles'
//component
import Input from '../generics/Input'
import Dropdown from '../generics/Dropdown'

export interface SearchProps {
    field: string
    value: string
}
interface HeaderProps {
    setSearch: (props: SearchProps) => void
}

const list = [
    { label: 'Name', value: 'name'},
    { label: 'Age', value: 'age'}
]

const Header = ({ setSearch }:HeaderProps) => {
    const [ text, setText ] = useState('')
    const [ field, setField ] = useState<string>(list[0].value)
    const [ previousFiled, setPreviousField ] = useState<string>('')

    useEffect(() => {
        
        if( field !== previousFiled){
            setPreviousField(field)
            setText('')
        }

        if(text !== '' &&  field === previousFiled) {
            setSearch({ field,value: text })
        } 

        if( text === ''){
            setSearch({ field, value: '' })
        }

    }, [field, text, setSearch, previousFiled])


    return (
        <S.Header>
            <span className="title">Users List</span>
            <div className="form">
                <div className="dropdown">
                    <Dropdown onChange={setField} list={ list }/>
                </div>
                <div className="input">
                    <Input 
                        name='search'
                        placeholder='Filter name'
                        value={text}
                        onChange={ setText }
                        clearInput
                    />
                </div>
            </div>
        </S.Header>
    )
}

export default Header