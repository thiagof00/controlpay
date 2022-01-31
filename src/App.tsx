import { GlobalStyle } from "./global";
import {BrowserRouter} from 'react-router-dom'
import { TransactionProvider } from "./hooks/useTransactions";
import { Router } from "./Router";
import { PersonProvider } from "./hooks/usePersons";
// Modal.setAppElement('#valuesGroup')



export function App() {

  
  return (
    <>
  <GlobalStyle/>
  <BrowserRouter>
  <TransactionProvider>
    <PersonProvider>
  <Router/>
    </PersonProvider>
  </TransactionProvider>
  </BrowserRouter>
    </>
  
  );
}

