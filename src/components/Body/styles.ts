import styled from 'styled-components'
import { device } from '../../styles'

export const Body = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    width: 100%;
    max-height: 100vh;
    box-sizing: border-box;
    padding: 1rem 1rem 2rem;
    overflow-y: auto;
   

    .tableArea {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-flow: wrap;

        width: 100%;
        height: auto;
        box-sizing: border-box;
        background-color: #fff;
        
    }

    ul {
        display: flex;
        justify-content: center;

        width: 100%;
        padding: 2rem;
        margin: 1rem 0 2rem;
        list-style: none;

        font-size: 1.1rem;

        .previous_btn, .next, .break {

            a {
                color: #000;
            }
            
        }

        .break a {
            font-weight: 700;
        }


        a { 
            padding: .7rem .5rem;
            margin: .5rem;
            border-radius: .5rem;
            border: 1px solid #00bcc1;
            cursor: pointer;
            transition: all .2s ease-in-out;

            color:  #00bcc1;
            user-select: none;

            &:hover {
                background-color: #00bcc1;
                color: #fff;
            }
        }

        .next {
            a {
                padding: .7rem 1.3rem .7rem 1.3rem;
            }
            
        }


        .paginationAtive a {
            background-color: #00bcc1;
            color: #fff;
        }
    }

    @media ${ device.tablet } {
        max-height: 90vh;

        ul {
            width: 80%;
            height: 4rem;
            padding: 2rem;
            margin-top: 1rem;

            font-size: 1.5rem;

            .next {
                a {
                    padding: .7rem 2.1rem .7rem 2.1rem;
                }
                
            }
            
        }
    }

    @media ${ device.laptop } {
        .tableArea {
            max-width: 110rem;
        }
    }
`
