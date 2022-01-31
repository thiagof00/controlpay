import { Container, MenuSide, Content, BoxTransaction } from "./styles";
import logo from '../../assets/controlpay_logo.svg'
import dash from '../../assets/graphic.svg'
import clock from '../../assets/clock.svg'
import person from '../../assets/person.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function History(){
    
    const {transactions} = useTransactions()
    return (
        <Container>
            <MenuSide>
            <div className="ContentLogo">
            <img src={logo} alt="" />
            </div>
            <div className="Content">

                <button className='buttons'>
                    <a href="/">
                    <img src={dash} alt="" />
                    <p>Dashboard</p>
                    </a>
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
            {transactions.map(transaction=>(
                <BoxTransaction key={transaction.id} type={transaction.type}>
                <div className="typeTransaction">
                </div>

                <div className="contentTransaction">
                    <table>
                        <tr>
                            <td>Valor</td>
                            <td>Tipo</td>
                            <td>Pessoa</td>
                            <td>Data</td>
                            <td>Descrição</td>
                        </tr>

                        <tr>
                            <td>{new Intl.NumberFormat('pt-BR',{
                                style:"currency",
                                currency:"BRL"
                            }).format(transaction.value)
                            }
                            </td>
                            <td>{transaction.type == 'outcome' ? "Saída" : "Entrada"}</td>
                            <td>Thiago</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                        </tr>

                    </table>
                </div>
            </BoxTransaction>
            ))}
        </Content>
        </Container>

    )
}