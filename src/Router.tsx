import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import {History} from './components/History'
import { Person } from './components/Person'
export function Router(){

    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/users" element={<Person/>}/>
        </Routes>
        </BrowserRouter>

    )
}