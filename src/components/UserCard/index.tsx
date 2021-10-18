import * as S from './styles'

interface UserCardProps {
    name: string
    age: number
}

const UserCard =({ name, age}: UserCardProps) => {
    
    return (
        <S.UserCard>
            { name }, { age }
        </S.UserCard>
    )
}

export default UserCard