import { useState } from 'react'
import * as S from './styles'

interface Option {
    label: string,
    value: string
}

interface DropdownProps {
    list: Option[]
    onChange: (value: string) => void
}


const Dropdown = ( {onChange, list }: DropdownProps) => {
    const [ open, setOpen ] = useState(false)
    const [ label , setlabel ] = useState(list[0].label)

    const handleClick = ({label, value}: Option) => {
        setlabel(label)
        onChange(value)
        setOpen(false)
        
    }

    return (
        <S.Dropdown>
            <S.Button onClick={ () => setOpen(!open) }>
                <span>{label}</span> <i className="fas fa-sort-down"/>
            </S.Button>
            {
                open && (
                    <S.List>
                        {
                            list?.map((option: Option) => {
                                const { label } = option
                                return (
                                    <div 
                                        key={label}
                                        className='option' 
                                        onClick={ () => handleClick(option) }>
                                            { label }
                                    </div>
                                ) 
                            })
                        }
                    </S.List>
                )

            }

        </S.Dropdown>
    )
}

export default Dropdown