import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    width: 100%;
    max-height: 85vh;
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

        width: 80%;
        height: 4rem;
        padding: 2rem;
        margin-top: 1rem;
        list-style: none;

        font-size: 1.5rem;

        a{ 
            padding: 1rem;
            margin: 1rem;
            border-radius: .5rem;
            border: 1px solid #00bcc1;
            cursor: pointer;
            transition: all .2s ease-in-out;
            user-select: none;

            &:hover {
                background-color: #00bcc1;
                color: #fff;
            }
        }

        .paginationAtive a {
            background-color: #00bcc1;
            color: #fff;
        }
    }

`
