import { ReactNode } from 'react'
import { usePersons } from '../../hooks/usePersons'
import { LisTransactions } from '../ListTransactions'

interface BoxIndividualProps{
    children:ReactNode

}
export function BoxIndividual(){
    const {persons} = usePersons()
    return (
        <>
        {persons.map(person=>(
            <div className="boxIndividual" key={person.id}>
            <div className="options"></div>
            <h2>{person.name}</h2>
            <div className="ListOfTransactions">
            <LisTransactions idPerson={person.id}/>
            </div>
        </div>
        ))}
        </>
    )
}