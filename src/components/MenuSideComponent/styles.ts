import styled from 'styled-components'



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