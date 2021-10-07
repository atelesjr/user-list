import axios from 'axios'

const apiUrl = 'https://random-persons.herokuapp.com/users'

export interface User {
    name: string
    age: number
}

export interface UserData {
    data: User[]
    message: string
    status: boolean
}

export const getUsers = async () => {
    const response = await axios.get(apiUrl)
    .then((res) => res.data as UserData
    )
    .catch((e) => console.log(e))

    return  response
}