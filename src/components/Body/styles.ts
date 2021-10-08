import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-flow: wrap;

    width: 100%;
    height: auto;
    max-height: 90vh;
    box-sizing: border-box;
    overflow-y: auto;

    padding: 1rem 1rem 2rem;
    background-color: #fff;

`

export const User = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    width: 20rem;
    height: 5rem;
    box-sizing: border-box;
    border: .2rem solid #00bcc1;
    background-color: #fff;
    border-radius: 1rem ;
    padding: 1rem 1rem 1rem 5rem;
    margin: 0 1rem 1.2rem 0;
    -webkit-box-shadow: 0px 1px 14px 0px rgba(0,0,0,0.15); 
    box-shadow: 0px 1px 14px 0px rgba(0,0,0,0.15);;
    overflow: hidden;


    font-size: 1.2rem;
    color: #444;

    &:before {
        position: absolute;
        z-index: 0;
        top: -.2rem;
        left: -.4rem;

        content: "\f406";
        font-family: 'FontAwesome';
        font-size: 5rem;
        color:  #ccc;
        opacity: .6;
    
    }
`