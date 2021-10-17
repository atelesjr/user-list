import { useState, useEffect, useMemo } from 'react'
import * as S from './styles'
// api
import { User } from '../../api'
//component
import UserCard from '../UserCard'
import ReactPaginate from 'react-paginate'
import { SearchProps } from '../Header'

interface BodyProps {
    list: User[]
    isLoading: boolean
    error: boolean
    search: SearchProps
}

const Body = ({ list, isLoading, error, search }:BodyProps) => {
    const [ users, setUsers ] = useState<User[]>([])
    const { value } = search
    // screen resolution
    const [ width, setWidth ] = useState<number>(window.screen.width)
    // pagination
    const [ pageNumber, setPageNumber] = useState<number>(0)
    const usersPage = 50
    const pagesVisited = pageNumber * usersPage
    const pageCount = list.length / usersPage


    const handleResize = () => {
        const screenSize = window.screen.width;
        setWidth(screenSize)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width])

    useEffect(() => {
        setPageNumber(0)
    }, [value])

    useEffect(() => {
        if(list.length > 0) {
            setUsers(list.slice(pagesVisited, pagesVisited + usersPage))  
        } else {
            setUsers([]) 
        }

    }, [list, pagesVisited])

    const changePage = ({ selected }:any) => {
        setPageNumber(selected)
    }

    const displayUsers = useMemo(
        () => {
            return  (
            users.map((user, i:number) => {
                const { name, age } = user
                
                return <UserCard key={ i } name={ name } age={ age } />
            })
        )},
        [users]
    )
 
    
    return (
            <>
                <S.Body>
                    <div className="tableArea">
                        {
                            !isLoading && !error && (
                                (users.length > 0)                 
                                ? displayUsers
                                : (
                                    <h2>Nenhum registro encontrado</h2>
                                )
                            ) 

                        }

                        {
                            !isLoading && error && <h2>Server might have some issue. Please try again later.</h2>
                        }

                        {
                            isLoading && <h2>Loading...</h2>
                        }
                    </div>

                    {
                        !isLoading && users.length > 0 && (                    
                            <ReactPaginate 
                                pageCount={pageCount}
                                pageRangeDisplayed={1}
                                marginPagesDisplayed={ width <= 425 ? 2 : 4 }
                                previousLabel='Previous'
                                nextLabel='Next'
                                onPageChange={ changePage }
                                containerClassName={'pagination_btn'}
                                previousClassName={'previous_btn'}
                                nextLinkClassName={'next_btn'}
                                disabledClassName={'paginationDisabled'}
                                activeClassName={'paginationAtive'}
                            />
                        )
                    }

                </S.Body>

            </>
    )
}

export default Body
