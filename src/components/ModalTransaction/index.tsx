import { useState } from 'react'
import Modal from 'react-modal'
import {RadioBox, Content, SelectPerson, DescriptionInput} from './styles'

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'



interface TransactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=>void;
}
export function ModalTransaction({isOpen,onRequestClose}:TransactionModalProps){

    const [type, setType] = useState('income')
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
            <input type="text" placeholder='Valor'/>

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
            <SelectPerson name="person" id="">
                <option value="thiago">Thiago</option>
                <option value="rafael">Rafael</option>
            </SelectPerson>
            <DescriptionInput name="description" id="description" cols={30} rows={30} placeholder='Digite a descrição aqui'>
            </DescriptionInput>

            <button type='submit' id="submit"> Registrar </button>

            </Content>
        </Modal>
        
    )
}