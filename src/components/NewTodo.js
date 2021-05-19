import  React,{useState}  from 'react';
import {connect} from "react-redux"
import {addTodo} from "../redux/actions/todoActions"




const NewTodo = (props)=>{
    
    const [todoState,setTodoState]= useState("");
    
    const handleSubmit =(e)=>{
        
      e.preventDefault();
      props.addTodo(todoState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" placeholder="enter todo input"
            value={todoState} onChange={(e)=>{setTodoState(e.target.value)}}/>
            <button type="submit">todo</button>
        </form>
    )
}

export default connect(null,{addTodo})(NewTodo);