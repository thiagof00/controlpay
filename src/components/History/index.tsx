import { Container, MenuSide, Content, BoxTransaction } from "./styles";
import logo from '../../assets/controlpay_logo.svg'
import dash from '../../assets/graphic.svg'
import clock from '../../assets/clock.svg'
import person from '../../assets/person.svg'

export function History(){
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
            <BoxTransaction>
                <div className="typeIncome">
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
                            <td>R$40,00</td>
                            <td>Saída</td>
                            <td>Thiago</td>
                            <td>05/01/2022</td>
                            <td>Compra no duckbill</td>
                        </tr>

                    </table>
                </div>
            </BoxTransaction>
        </Content>
        </Container>

    )
}