import * as S from './styles'

interface ButtonProps {
    name: string
    onClick: () => void
}

const Button = ({name, onClick}:ButtonProps) => {
    return (
        <S.Button 
            name={name}
            onClick={onClick}
        >
           <i className="fas fa-times-circle" />
        </S.Button>
    )
}

export default Button