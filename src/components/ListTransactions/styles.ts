import styled from 'styled-components'
interface ValueTransactionProps{
    type: string
}


export const ValueTransaction = styled.div<ValueTransactionProps>`
display: flex;
flex-direction:row;

font-size: 1.3rem;

color: ${props => props.type == 'income' ? '#37DB08' : '#DB1F14'};

align-items:center;


`

