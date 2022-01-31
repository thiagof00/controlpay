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

export const Content = styled.div`

display:flex;
flex-direction: row;
align-items: center;


.boxIndividual{
    background: var(--cinza);

    height: 90%;
    width: 22rem;
    

    margin-left: 2rem;

    margin-top:5rem;

    border-radius: 0.5rem;

    .options{
        height: 2rem;
    }

    h2{
        font-size:2.2rem;
        padding-left: 1.8rem;
    }
    

    .ListOfTransactions{
       
        display:flex;
        flex-direction: column;
        padding-top:3.5rem;
        padding-bottom:3.5rem;
        
        .transaction{
    display: flex;
    flex-direction:row;

    justify-content: space-around;

    .text{
        display: flex;
        flex-direction: column;
        
        #description{
            font-size: 0.8rem;
            color: #818181;
            padding-bottom:1rem;
        }
    }

    .typeTransaction{
        display: flex;
        align-items: center;

        padding-bottom: 2rem;
    }
}
    }
}



`

export const Values = styled.div`
height: 100vh;
width: 20rem;
margin-left:auto;

display: flex;
flex-direction: column;
align-items: center;



    button{
        height: 2.5rem;
        width: 12rem;
        border:0;
        background: var(--roxo);
        border-radius: 0.4rem;

        font-size: 1rem;
        font-weight: 500;

        margin-top:2.5rem;
        transition: 0.4s;

    }button:hover{
        background: var(--roxo-escuro);
    }
    #valuesGroupOnModal{
        display: none;
    }
    #valuesGroup{
        margin-top: 8rem;

        div{
            margin-bottom: 1rem;
        }

        #valueIncome{
            strong{
                color: var(--verde);
            }
            div{
                display: flex;
                flex-direction:row;
                align-items:center;
            }
        }
        #valueOutcome{
            strong{
                color: var(--vermelho);
            }
            div{
                display: flex;
                flex-direction:row;
                align-items:center;
            }
        }#valueTotal{
            strong{
                color: var(--roxo);
            }
            div{
                display: flex;
                flex-direction:row;
                align-items:center;
            }
        }
    }

`
