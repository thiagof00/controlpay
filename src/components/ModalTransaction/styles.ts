import styled from 'styled-components'

interface RadioBox{
isActive: boolean;
activeColor: 'green' | 'red'
}
const colors = {
    green: '#37DB08',
    red: '#DB1F14'
}

export const Content = styled.div`

background: var(--cinza);

height: 100%;

display: flex;
flex-direction: column;
align-items: center;

.react-modal-close{
    position: absolute;

    right: 0.2rem;

    background: transparent;
    border: 0;

    color: var(--cinza-claro);
}

input{
    margin-top: 4rem;
    background: var(--cinza-claro);
    border: 0;
    border-radius: 0.4rem;

    height: 3.5rem;
    width: 88%;

    font-size: 1.2rem;
    padding-left: 0.2rem;
}

.typeOfTransaction{
    display: flex;
    flex-direction: row;
    width: 100%;

    justify-content: space-between;

    padding-left: 0.8rem;
    padding-right: 0.8rem;
    padding-top: 0.8rem;
}

#submit{
    width: 80%;
    height: 4.5rem;

    margin-top:1.5rem;

    border:0;
    border-radius: 0.4rem;

    background: var(--roxo);

    font-size: 1rem;
    font-weight: 500;

    transition: 0.2s;
    &:hover{
        background:var(--roxo-escuro);
    }
}
`

export const RadioBox = styled.button<RadioBox>`
    height: 3rem;
    width: 9rem;
    border:0;
    border-radius: 0.25rem;
    border: 1px solid ${(props)=>props.isActive ? colors[props.activeColor] : 'transparent'};
    background: var(--cinza-claro);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;


    img{
        width:20px;
        height:20px;

    }
    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }

`
export const SelectPerson = styled.select`

height: 3.5rem;
width: 88%;
margin-top: 1rem;

border:0;
border-radius: 0.4rem;

background: var(--cinza-claro);

color: #fff;
font-size: 1rem;
`
export const DescriptionInput = styled.textarea`

width: 88%;
height: 10rem;

background: var(--cinza-claro);

border:0;
border-radius: 0.4rem;

margin-top: 1rem;

padding: 1rem 0.5rem;


`