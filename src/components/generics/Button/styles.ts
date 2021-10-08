import styled from 'styled-components'

export const Button = styled.button`
    position: absolute;
    top: 0.4rem;
    right: 1rem;

    border: none;
    outline: none;
    background: none;
    cursor: pointer;

    i {
        font-size: 2.2rem;
        color: #818181;

        &:hover, &:active{
            color: #00bcc1;
        }
    }
`
