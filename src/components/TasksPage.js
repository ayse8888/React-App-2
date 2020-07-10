import React, { Component } from 'react'
import './TasksPage.css'

export class TasksPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isDisplayed: false,
             items:[],
             currentItem: {
                text: ''
             }
        }
    }
    
    handleInput = (event) =>{
        this.setState({
            currentItem:{
                text:event.target.value
            }
        })
    }

    addItem = (event) =>{
        event.preventDefault();
        const newItem=this.state.currentItem;
        if(newItem.text!==''){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem:{
                    text: ''
                }
            })
        }

    }

    hideEvent(){
        this.setState({
            isDisplayed: !this.state.isDisplayed
        })
    }
    render() {
        return (
            <div className="container">
         <div className="header">
            <div className="nav-bar">
                <div className="btn-bar">
                    <button onClick={()=>this.hideEvent()}>Choose</button>
                </div>
                <div className="task-bar">
                    <h2>Task Manager</h2>
                </div> 
            </div>
            {this.state.isDisplayed ?
                <form>
                <div className="task-title">
                <input type="text" placeholder="Task Title" onChange={this.handleInput}></input>
                </div>
                <div className="task-description">
                <textarea type="text" placeholder="task-description" onChange={this.handleInput}></textarea>
                </div>
                <div className="btn-bar btn-second">
                <button type="submit" onSubmit={this.addItem}>Submit</button>
                </div>
            </form> 
            : null}
            </div> 
        </div>
        )
    }
}

export default TasksPage
