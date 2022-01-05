import { useState } from 'react'
import Modal from 'react-modal'
import { Container, Content, Values, MenuSide, ValueTransaction } from './styles'
import {ModalTransaction} from '../ModalTransaction'
import logo from '../../assets/controlpay_logo.svg'
import dash from '../../assets/graphic.svg'
import clock from '../../assets/clock.svg'
import person from '../../assets/person.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'

export function Dashboard(){

    const [type, setType] = useState('income');
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

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
        <div className="boxIndividual">
            <div className="options"></div>
            <h2>Thiago</h2>
            <div className="ListOfTransactions">
                
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
        </div>


        <div className="boxIndividual">
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
        </div>
        </Content>
        
        
        <Values>
            <button onClick={handleOpenNewTransactionModal}>Nova transação</button>

            <div id={!!isNewTransactionModalOpen ? 'valuesGroupOnModal' : 'valuesGroup'}>
                <div id="valueIncome">
                    <strong>Entradas</strong>
                    <div>
                    <h1>R$ 460,00</h1>
                    <img src={income} alt="" />
                    </div>
                </div>
                <div id="valueOutcome">
                    <strong>Saídas</strong>
                    <div>
                    <h1>R$ 60,00</h1>
                    <img src={income} alt="" />
                    </div>
                </div>
                <div id="valueTotal">
                    <strong>Total do mês</strong>
                    <div>
                    <h1>R$ 400,00</h1>
                    </div>
                </div>
                
            </div>
        <ModalTransaction onRequestClose={handleCloseNewTransactionModal} isOpen={isNewTransactionModalOpen}/>
        </Values>

        </Container>
    )
}