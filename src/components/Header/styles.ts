import styled from 'styled-components'
import { device } from '../../styles'

export const Header = styled.header`
    display: flex;
    flex-flow: column;

    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #000;

    .title {
        margin: 0  1rem 1rem 0;

        font-size: 2rem;
        color: #fff;
    }

    .form{
        display: flex;
        align-items: center;

        width: 100%;
        box-sizing: border-box;
        
        .dropdown{
            width: 9.3rem;
            padding-right: 1rem;
        }

        .input{
            width: calc(100% - 9.3rem);
        }
    }

    @media ${ device.tablet } {
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        .title {
            margin: 0 4rem 0 0;
        }

        .form {
            width: 60%;
        }
    }

    @media ${ device.laptop } {  
        padding: 1rem 14rem 1rem 13rem;
        
    }

`