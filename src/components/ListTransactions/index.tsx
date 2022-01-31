import { ReactNode, useEffect, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import {ValueTransaction} from './styles'
import { api } from '../../services/api'
interface LisTransactionsProps{
    idPerson:number
}
interface TransactionProps{
    id: string;
    value: string;
    type:string;
    description: string;
    idPerson: number;
}
export function LisTransactions({idPerson}:LisTransactionsProps){
    const {transactions } = useTransactions()
    const [individualTransactions, setIndividualTransactions] = useState<TransactionProps[]>([])
     async function a(){
       const data =  await api.get(`transactions/${idPerson}`)
    console.log(data)}

    useEffect(()=>{
        api.get(`transactions/${idPerson}`).then(transaction=>{
            setIndividualTransactions(transaction.data)
        })
    },[transactions])
    return (
        <>
        {
                    individualTransactions.map(transaction=>(
                        
                        <div className="transaction" key={transaction.id}>
                        <div className="text">
                            <ValueTransaction type={transaction.type}>
                            <h3>R${transaction.value}</h3>
                            <img src={transaction.type == "income" ? income : outcome} alt="" />
                            </ValueTransaction>
                            <p id="description">{transaction.description}</p>
                        </div>
    
                        <div className="typeTransaction">
                        {transaction.type == "income" ? <h4>Entrada</h4> : <h4>Saída</h4>}    
                        </div>
                        
    
                    </div>
                    ))}
        </>
    )
}