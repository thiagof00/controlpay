import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {api} from '../services/api'
interface TransactionProps{
    id: string;
    value: number;
    type:string;
    description: string;
    idPerson: number;
    date:string
}
type TransactionCreate = Omit<TransactionProps, 'id' | 'date'>
interface TransactionProviderProps{
    children: ReactNode
}

interface TransactionsContextData{
    transactions: TransactionProps[];
    createTransaction: (transactionInput:TransactionCreate)=>Promise<void>;
}



const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionProvider({children}: TransactionProviderProps){

    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(()=>{

        api.get("transactions").then(transactions=>{
         setTransactions(transactions.data.transactions);
        })
        
    },[])

    async function createTransaction(transactionInput:TransactionCreate){

        const response = await api.post("createtransactions", {...transactionInput, date: new Date })
        const {transaction} = response.data
        console.log(response.data)
        setTransactions([...transactions, transaction])

    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionContext)

    return context;
}