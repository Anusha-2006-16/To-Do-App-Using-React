import React, { useState } from 'react'
import Addtodoitems from './Addtodoitems';
import './Style.css'

const Todos = () => {

    const[title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const[todos,setTodos]=useState([]);
    const[id,setId]=useState(0);
    const[editId,setEditId]=useState(null);

    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleDesc=(e)=>{
        setDesc(e.target.value);
    }

    const handleSubmit=()=>{

        if(title === "" || desc === "")
        {
            alert("Title and Description should not be left empty!!!");
            return;
        }

     //adding new todo logic
     if(editId === null)
     {
        setTodos([...todos,{id,title,desc}]);
        setId(id+1);
     }
     //updating todo logic
     //loop through all the todos
     // if todo.id === editid ? update :  print todo;
     else{
       setTodos(
        todos.map((todo)=>
            todo.id === editId ?{...todo,title,desc}:todo
        )
       )
       setEditId(null);
     }
setTitle("");
setDesc("");
    }
   const handleDelete=(todo)=>{
    setTodos(
        todos.filter((el)=>{
        return el.id !== todo.id;
    })
    )
   }
   const onEdit=(todo)=>{
    setTitle(todo.title);
    setDesc(todo.desc);
    setEditId(todo.id);
   }
  return (
   <>
    <div className='conatiner my-2' style={{margin:"auto",width:"800px"}} >
        <h3>Todo-Items</h3>
      <div class="mb-3 row">
  <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
  <div class="col-sm-10">
    <input type="text"  class="form-control" id="staticEmail" value={title} onChange={handleTitle}/>
  </div>
</div>
<div class="mb-3 row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="inputPassword"  onChange={handleDesc} value={desc}/>
  </div>
</div>
<div className='my-3'>
    <button type="button" class="btn btn-success" onClick={handleSubmit}>{editId==null?"Add":"Update"}</button>
</div>

    </div>
    <div className='todo_items'>
        {todos.map((todo)=>(
        <Addtodoitems title={todo.title} desc={todo.desc} key={todo.id} ondelete={()=>{handleDelete(todo)}} onEdit={()=>{onEdit(todo)}}/>
    ))}
    </div>
   </>
  )
}

export default Todos
