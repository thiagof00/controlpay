import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import {History} from './components/History'
import { Person } from './components/Person'
export function Router(){

    return(
        <Switch>
            
        <Route path="/" exact component={Dashboard}/>
        <Route path="/history" component={History}/>
        <Route path="/users" component={Person}/>
        </Switch>

    )
}