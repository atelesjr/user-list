import styled from 'styled-components'
import { device } from '../../styles'

export const Header = styled.header`
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #000;

    .container{
        display: flex;
        flex-flow: column;

        width: 100%;
        margin: auto;
        box-sizing: border-box;

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
    }



    @media ${ device.tablet } {
        .container {
            flex-flow: row;
            justify-content: space-between;
            align-items: center;
            
            max-width: 110rem;

            .title {
                margin: 0 4rem 0 0;
            }

            .form {
                width: 60%;
            }
        }

    }

`