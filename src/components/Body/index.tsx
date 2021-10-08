import * as S from './styles'
// api
import { User } from '../../api'

interface BodyProps {
    list: User[]
    isLoading: boolean
    error: boolean
}

const Body = ({ list, isLoading, error }:BodyProps) => {

    return (
        <S.Body>
            {
                !isLoading && list?.slice(0, 50).map((user, i) => {
                    const { name, age } = user

                    return (
                        <S.User key={ i }>
                          { name }, { age }
                        </S.User>
                    )
                })
            }
            {
                error && <h2>Server might have some issue. Please try again later.</h2>
            }

            {
                isLoading && <h2>Loading...</h2>
            }
        </S.Body>
    )
}

export default Body
