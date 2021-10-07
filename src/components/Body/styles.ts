import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;

    width: 100%;
    height: 90vh;
    box-sizing: border-box;
    overflow-y: auto;

    padding: 1rem 1rem 2rem;
    background-color: #FFF;

`

export const User = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    width: 20rem;
    height: 5rem;
    box-sizing: border-box;
    border: .1rem solid #00bcc1;
    background-color: #fff;
    border-radius: 2rem;
    padding: 1rem 1rem 1rem 2rem;
    margin: 0 1rem 1.2rem 0;

    font-size: 1.3rem;
    color: #444;

    &:before {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;

        content: "\f2bd";
        font-family: 'FontAwesome';
        font-size: 5rem;
        color:  #00bcc1;
    
    }
`