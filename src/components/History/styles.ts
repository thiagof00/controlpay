import styled from 'styled-components'
interface typeTransaction{
    type:string
}
export const Container = styled.div`
display:flex;
flex-direction: row;

`

export const MenuSide= styled.div`

.ContentLogo{
    img{
        width: 8rem;
    }
}
.Content{
    display: flex;
    flex-direction:column;
    align-items:center;
    button{
        background: transparent;
        width:4rem;
        height:6rem;
        border: none;

        margin-bottom: 2rem;

        a{
        text-decoration: none;
        color: #FFF;
    }
    }
}
`
export const Content = styled.div`


`
export const BoxTransaction = styled.div<typeTransaction>`
margin-top: 4rem;
margin-left: 4rem;

width:72em;

background: var(--cinza);

border-radius: 0.2rem;

display: flex;
flex-direction: row;

    .typeTransaction{
        background: ${props=>props.type == 'income' ? "var(--verde)" : "var(--vermelho)"};
        width: 2rem;
        height: 4.6rem;
    }
    .contentTransaction{
        width: 100%;
        padding-left: 1rem;
        align-items: center;
        table{
            width: 100%;
            height: 100%;
        }
    }
`
