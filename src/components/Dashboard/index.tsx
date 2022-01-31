import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Container, Content, Values, MenuSide } from './styles'
import {ModalTransaction} from '../ModalTransaction'
import logo from '../../assets/controlpay_logo.svg'
import dash from '../../assets/graphic.svg'
import clock from '../../assets/clock.svg'
import person from '../../assets/person.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'
import { BoxIndividual } from '../BoxIndividual'

interface TransactionsProps {
    id: number;
    description: string;
    type: string;
    value:string;
    date:string;
    idPerson: number;
}
export function Dashboard(){

    const [type, setType] = useState('income');
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
    const {transactions} = useTransactions()
  
    const summary = transactions.reduce((acc,transaction)=>{
        if(transaction.type==="income"){
            acc.income += Number(transaction.value);
            acc.total += Number(transaction.value);
        }else{
            acc.outcome += Number(transaction.value);
            acc.total -= Number(transaction.value);
        }

        return acc
    },{
        income:0,
        outcome:0,
        total:0
    })

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
  }
    function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }
    return (
        <Container>
        <MenuSide>
            <div className="ContentLogo">
            <img src={logo} alt="" />
            </div>
            <div className="Content">

                <button className='buttons'>
                    <img src={dash} alt="" />
                    <p>Dashboard</p>
                </button>
                <button className='buttons' >
                    <a href="/history">
                    <img src={clock} alt="" />
                    <p>Histórico</p>
                    </a>
                </button>
                <button className='buttons'>
                    <a href="/users">
                    <img src={person} alt="" />
                    <p>Pessoas</p>
                    </a>
                    
                </button>
            </div>
        </MenuSide>
        
        <Content>
          
       <BoxIndividual/>


        {/* <div className="boxIndividual">
            <div className="options"></div>
            <h2>Rafael</h2>
            <div className="ListOfTransactions">
                
                <div className="transaction">
                    <div className="text">
                        <ValueTransaction type={type}>
                        <h3>R$100,00</h3>
                        <img src={type=='income'? income : outcome} alt="" />
                        </ValueTransaction>
                        <p id="description">Salário</p>
                    </div>

                    <div className="typeTransaction">
                    {type == "income" ? <h4>Entrada</h4> : <h4>Saída</h4>}    
                    </div>
                    

                </div>


                <div className="transaction">
                    <div className="text">
                        <ValueTransaction type={type}>
                        <h3>R$50    ,00</h3>
                        <img src={type=='income'? income : outcome} alt="" />
                        </ValueTransaction>
                        <p id="description">Salário</p>
                    </div>

                    <div className="typeTransaction">
                    {type == "income" ? <h4>Entrada</h4> : <h4>Saída</h4>}    
                    </div>
                    

                </div>

                <div className="transaction">
                    <div className="text">
                        <ValueTransaction type={type}>
                        <h3>R$300,00</h3>
                        <img src={type=='income'? income : outcome} alt="" />
                        </ValueTransaction>
                        <p id="description">Salário</p>
                    </div>

                    <div className="typeTransaction">
                    {type == "income" ? <h4>Entrada</h4> : <h4>Saída</h4>}    
                    </div>
                    

                </div>
            </div>
        </div> */}
        </Content>
        
        
        <Values>
            <button onClick={handleOpenNewTransactionModal}>Nova transação</button>

            <div id={!!isNewTransactionModalOpen ? 'valuesGroupOnModal' : 'valuesGroup'}>
                <div id="valueIncome">
                    <strong>Entradas</strong>
                    <div>
                    <h1>{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.income)}</h1>
                    <img src={income} alt="" />
                    </div>
                </div>
                <div id="valueOutcome">
                    <strong>Saídas</strong>
                    <div>
                    <h1>{new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.outcome)}</h1>
                    <img src={outcome} alt="" />
                    </div>
                </div>
                <div id="valueTotal">
                    <strong>Total do mês</strong>
                    <div>
                    <h1>{new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency: "BRL"
                    }).format(summary.total)}</h1>
                    </div>
                </div>
                
            </div>
        <ModalTransaction onRequestClose={handleCloseNewTransactionModal} isOpen={isNewTransactionModalOpen}/>
        </Values>

        </Container>
    )
}