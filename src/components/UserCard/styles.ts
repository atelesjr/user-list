import styled from "styled-components"
import { device } from '../../styles'

export const UserCard = styled.div`
    display: flex;
    align-items: center;  

    position: relative;

    width: 18rem;
    height: 5rem;
    box-sizing: border-box;
    border: .2rem solid #00bcc1;
    background-color: #fff;
    border-radius: 1rem ;
    padding: 1rem 1rem 1rem 5rem;
    margin: 0 1rem 1.2rem 0;
    -webkit-box-shadow: 0 .1rem .6rem .1rem rgba(0,0,0,0.4); 
    box-shadow: 0 .1rem .6rem .1rem rgba(0,0,0,0.4);;
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

    @media ${ device.tablet } {
        width: 20rem;
        -webkit-box-shadow: 0px 1px 14px 0px rgba(0,0,0,0.15); 
        box-shadow: 0px 1px 14px 0px rgba(0,0,0,0.15);;
    }
`