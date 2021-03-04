import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       newItem:'',
       list:[]
    }
  }

  

  addItem () {
    const newValue={
      //creating item with unique id
      id: Math.random() + 1,
      value: this.state.newItem.slice()
    }
    //copy all array of list variable in the same variable
    const list = [...this.state.list]

    //push all newItem object to list object i.e array of object

    list.push(newValue)
//upadate state after rendering

this.setState({
  list,
  newItem:''
})

  }

  updateInput(key, value) {
    this.setState({[key]:value})
    
  }

  deleteItem(id){
    const primaryList=[...this.state.list]
    const updatedList=primaryList.filter(item =>item.id!==id)
    this.setState({
      list:updatedList
    })
  }

  
  render() {
    return (
      <div className='App'>
        Add todo list...
        <br/>
        <input
        type='text'
        placeholder='add items'
        value={this.state.newItem}
        onChange={e=>this.updateInput('newItem', e.target.value)}
        />
        <button onClick={() =>this.addItem()}>add</button>
        <br/>
        <ul>
          {
            this.state.list.map(item =>{
              return(
                <li key={item.id}>{item.value}
                <button onClick={() => this.deleteItem(item.id)}> X</button></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default App

