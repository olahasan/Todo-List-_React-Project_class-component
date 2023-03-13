import { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import TodoItems from './components/Todoitems/Todoitems'
import Additems from './components/Additem/Additems'

class App extends Component{
  
state={
  items:[
    // {id:1, name:'ola', age:27},
    // {id:2, name:'ali', age:28},
    // {id:3, name:'mona', age:50}
  ]
}

deleteItem = (id) => {
   console.log(id)
  //  let {items} = this.state;
  //  let i = items.findIndex(item => item.id === id)
  //  items.splice(i,1)
  //  this.setState({items})

  let items = this.state.items.filter((e)=>{
    return e.id !== id 
  })
  this.setState({items})

}

addItem = (item)=>{
  item.id =Math.random();
  let items = this.state.items;
  items.push(item)
  this.setState({items})
}


render(){
    return(
      <div className='App container'>
       <h1 className='Text-center'>Todo list olaa</h1>
       <TodoItems  items={this.state.items} deleteItem={this.deleteItem}/>
       <Additems addItem={this.addItem}/>
      </div>
    )
  }
}



export default App;


