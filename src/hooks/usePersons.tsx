import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {api} from '../services/api'
interface PersonProviderProps{
    children: ReactNode
}
interface PersonsProps{
    id:number;
    name:string;
    wage:string
}
type PersonsPropsCreate = Omit<PersonsProps, 'id'>

interface PersonsContextProps{
    persons: PersonsProps[];
    createPerson: (personInput:PersonsPropsCreate)=>Promise<void>
}


const PersonsContext = createContext<PersonsContextProps>({} as PersonsContextProps)

export function PersonProvider({children}:PersonProviderProps){

    const [persons, setPersons] = useState<PersonsProps[]>([]) 

    useEffect(()=>{
        api.get("persons").then(person=>{
            setPersons(person.data.people)
        })
    },[])

    async function createPerson(personInput:PersonsPropsCreate){

    }

    return (
        <PersonsContext.Provider value={{persons, createPerson}}>
            {children}
        </PersonsContext.Provider>
    )
}

export function usePersons(){
    const context = useContext(PersonsContext)

    return context
}