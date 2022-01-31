import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model, Server} from 'miragejs'
import Modal from 'react-modal'
Modal.setAppElement("#root")
createServer({
  models:{
    transaction:Model,
    person:Model
  },
  seeds(server){
    server.db.loadData({
      "transactions": [{id:1,idPerson:1, value: 34.5, date:"23/04/2021",
     description:"Duckbill", type:"outcome"},
     {id:2,idPerson:0, value: 70, date:"24/04/2021",
     description:"Plantão trabalho", type:"income"},
     {id:3,idPerson:0, value: 7, date:"24/04/2021",
     description:"telemoto", type:"outcome"}
    ],
    "people":[{
      id:0,
      name: "Thiago",
      wage:"1600"
    },
    {
      id:1,
      name: "Rafael",
      wage:"1600"
    }
    ]
  
  })
  },
  routes() {
    this.namespace='controlapi';
    this.get("transactions", (schema, request)=>{
      
      return {"transactions":schema.db.transactions}
    })
    this.get("persons", ()=>{
      return this.schema.all('person')
    })
    this.get("transactions/:idPerson", (schema, request)=>{
      let id = Number(request.params.idPerson)
      const person = schema.db.transactions.where({idPerson:id})
      return person
    })




    this.post("createtransactions", (schema, request)=>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)

    })

  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);