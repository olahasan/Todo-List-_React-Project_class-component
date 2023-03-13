import React, { Component } from 'react'
import './Additems.css'

class Additems extends Component{

state={
    name:"",
    age:""
}

handlechange= (e)=>{
    // console.log(e.target.value);
    this.setState({
       [ e.target.id] : e.target.value
    })
}

handlesubmit=(e)=>{
    e.preventDefault();
    if(e.target.name.value ==='' || e.target.age.value ===''){
            return ''
    }else{
        // console.log(this.state)
    this.props.addItem(this.state)
    this.setState({
        name:"",
        age:""
    })
    }
}

    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" placeholder='Enter Your Name' id='name' onChange={this.handlechange} value={this.state.name}/>
                    <input type="number" placeholder='Enter Your Age' id='age' onChange={this.handlechange} value={this.state.age} min="1"/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default Additems