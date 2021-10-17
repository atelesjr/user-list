import styled from 'styled-components'

export const Dropdown = styled.div`
    position: relative;

    width: 80px;

    font-size: 1.4rem;
`

export const Button = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    color: #CCC;

    i{
        margin-bottom: .5rem;
    }

    &:hover, &:active{
        color: #00bcc1;
    }

`
export const List = styled.div`
    position: absolute;
    top: 2.3rem;
    left: -.6rem;
    z-index: 5;
    
    width: 8.3rem; ;
    background-color: #CCC;
    border: 1px solid #000;

    font-size: 1.3rem;

    .option{
        padding: .8rem .8rem .5rem;

        &:hover, &:active{
            background: #00bcc1;
        }
    }

`