import logo from '../../assets/controlpay_logo.svg'
import dash from '../../assets/graphic.svg'
import clock from '../../assets/clock.svg'
import person from '../../assets/person.svg'
import {Container, MenuSide} from './styles'
import { ReactNode } from 'react'
interface menuProps{
    children:ReactNode
}
export function MenuSideComponent ({children}:menuProps){
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
        {children}
  </Container>
    )
}
