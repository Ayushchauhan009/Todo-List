import React, { useState } from 'react';


export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc ){
      alert("Title and Description cannot be empty!!");
    }
    else{
      addTodo(title, desc);
    setTitle("");
    setDesc("");
    }
    
  }


  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
           Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            id="title"
            
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description here
          </label>
          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            id="desc"
          />
        </div>
        
        <button type="submit" className="btn btn-success btn-sm">
          Add
        </button>
      </form>
    </div>
  );
};
