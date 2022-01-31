import { FormEvent, SelectHTMLAttributes, useContext, useState } from 'react'
import Modal from 'react-modal'
import {RadioBox, Content, SelectPerson, DescriptionInput} from './styles'

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { api } from '../../services/api'
import { useTransactions } from '../../hooks/useTransactions'


interface TransactionProps{

    value: string;
    type:string;
    description: string;
    person: number;
    date:string;

}


interface TransactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=>void;
}
export function ModalTransaction({isOpen,onRequestClose}:TransactionModalProps){

    const [type, setType] = useState('income')
    const [value, setValue] = useState(0)
    const [description, setDescription] = useState('')
    const [idPerson, setIdPerson] = useState(0)
    const {createTransaction} = useTransactions()

    async function create(event:FormEvent) {
        event.preventDefault()
        const data = {type,value,description,idPerson}

        createTransaction({
            type,
            value,
            description,
            idPerson
        })
    }
    return (
        
        <Modal isOpen={isOpen} 
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    onRequestClose={onRequestClose}
    style={{
        overlay:{
            position:'fixed',
            bottom: 0,
            right: 0,
            height: '80vh',
            width: '20rem'
        },content:{height: '80vh'}
    }}
    >
        <Content>
   <button 
    type="button" 
    onClick={onRequestClose} className="react-modal-close">
        <h3>X</h3>
    </button>

    <form onSubmit={create}>
            <input type="number" placeholder='Valor' required onChange={(event)=>{setValue(Number(event.target.value))
                }}/>

            <div className="typeOfTransaction">

            <RadioBox 
            isActive={type === 'income'}
            activeColor="green"
            type="button" onClick={()=>{setType('income')}}>
                <img src={income} alt="" />
                <span>Entrada</span>
            </RadioBox>

            <RadioBox 
            isActive={type === 'outcome'}
            activeColor="red"
            type="button" onClick={()=>{setType('outcome')}}>
                <img src={outcome} alt="" />
                <span>Saída</span>
            </RadioBox>
            </div>
            <SelectPerson name="person" id="" onChange={(event)=>{setIdPerson(
                Number(event.target.value)
                )
                console.log(event.target.value)
                }}>
                <option value={0}>Thiago</option>
                <option value={1}>Rafael</option>
            </SelectPerson>
            <DescriptionInput name="description" id="description" cols={30} rows={30} placeholder='Digite a descrição aqui'onChange={(event)=>{
                setDescription(event.target.value)
                }}>
            </DescriptionInput>

            <button type='submit' id="submit"> Registrar </button>
            </form>
            </Content>
        </Modal>
        
    )
}