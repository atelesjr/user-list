import * as S from './styles'

interface UserCardProps {
    name: string
    age: number
    index: number
}

const UserCard =({ name, age, index}: UserCardProps) => {
    
    return (
        <S.UserCard>
            { name }, { age }
        </S.UserCard>
    )

}

export default UserCard