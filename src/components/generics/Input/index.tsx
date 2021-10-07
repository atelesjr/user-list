import { ChangeEvent } from 'react'
import Button from '../Button'
import * as S from './styles'

interface InputProps {
    name: string
    placeholder: string
    value: string
    clearInput?: boolean
    onChange: (value: string) => void
}

const Input = ({name, placeholder, value, onChange, clearInput }: InputProps) => {

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange(value)
    }

    return (
        <S.Container>
            <S.Input 
                name={name} 
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(e)}
            />
            
            {
                clearInput && (
                    <Button 
                        name='clear' 
                        onClick={() => onChange('')} 
                    />
                )
            }

        </S.Container>
        )
}

export default Input