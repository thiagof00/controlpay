import { useEffect, useState } from 'react'
import {Content, Values} from './styles'
import {ModalTransaction} from '../ModalTransaction'
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
        <>
        <Content>
          
       <BoxIndividual/>
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
        </>
    )
}