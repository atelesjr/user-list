import * as S from './styles'
// api
import { User } from '../../api'

interface BodyProps {
    list: User[]
    isLoading: boolean
}

const Body = ({ list, isLoading }:BodyProps) => {

    return (
        <S.Body>
            {
                !isLoading && list?.slice(0, 50).map((user, i) => {
                    const { name, age } = user

                    return (
                        <S.User key={ name }>
                          { name }, { age }
                        </S.User>
                    )
                })
            }
            {
                isLoading && <h2>Loading...</h2>
            }
        </S.Body>
    )
}

export default Body
