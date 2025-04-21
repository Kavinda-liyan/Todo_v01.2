import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faCheckSquare, faQuoteLeft, faS, fas, faThumbTack, faTrash } from '@fortawesome/free-solid-svg-icons';

const Content = () => {

  const [todo,setTodo]=useState([]);
  const [input,setInput]=useState('');
  const [completed,setCompleted]=useState([]);


  const onChangeinput=(event)=>{
   setInput(event.target.value);

  }
  const addTodo=()=>{
    if (input.trim()==="") return;
    const newTodo={
      id:Date.now(),
      todo:input
    }

    setTodo([...todo,newTodo]);
    setInput("");
   
    
   
  }
  const deleteTodo=(id)=>{
    setTodo(prevTodo=>(prevTodo.filter(todo=>todo.id!==id)));

  }

  const checkCompleted=(id)=>{
    const completedTodo=todo.find(item=>item.id===id);
    if(completedTodo){
      setCompleted(prevCompleted=>[...prevCompleted,completedTodo]);
    }

    setTodo(prevTodo=>prevTodo.filter(item=>item.id!==id));
  }
const deleteCompleted=(id)=>{
    setCompleted(prevCompleted=>prevCompleted.filter(completed=>completed.id!==id));
}
 
    

  return (
    <div className='flex items-center min-h-96  flex-col'>

        <div className='mt-10'>
        <input value={input} onChange={onChangeinput} className='bg-blue-100 text-xl border-1 border-blue-500 py-1 px-2 m-2 rounded-md text-gray-600 w-2xl max-w-sm' type="text" placeholder='Add new Todo here...' />
        <button onClick={addTodo} type='submit' className='bg-blue-500 text-xl py-1 px-2 m-2 rounded-md shadow-sm shadow-gray-900 text-blue-50 hover:bg-blue-400 hover:cursor-pointer hover:text-blue-100'><span className='font-bold'>+</span> Add Todo</button>

        </div>
        <div className='w-2/3'>
        {todo.length>0?<h4 className='text-lg text-blue-600 px-2'>Todo</h4>:<></>}
        
          <ul className='p-2 my-2'>{todo.map((item)=>(
              <li className='bg-blue-500 p-1 m-1 rounded-md shadow-sm shadow-gray-400 flex justify-between' key={item.id}>
                <div className='text-gray-50 font-bold flex items-center'>
                  
                <button onClick={()=>checkCompleted(item.id)}><FontAwesomeIcon className='mx-2 p-1 hover:text-green-400 hover:cursor-pointer text-xl ' icon={faCheckSquare}/></button>
                
                {item.todo}

                </div>
                <div className='text-xl'>
                  <button onClick={()=>deleteTodo(item.id)}><FontAwesomeIcon className='mx-2 p-1 text-gray-50 hover:text-red-600 hover:cursor-pointer' icon={faTrash}/></button>
                  
                </div>
                
              </li>
          ))}
           
          </ul>
        </div>
        <div className='w-2/3'>
        {completed.length>0?<h4 className='text-lg px-2 text-green-600'>Completed Todos</h4>:<></>}
          <ul className='p-2 my-2'>{completed.map((item)=>(
              <li className='bg-green-500 p-1 m-1 rounded-md shadow-sm shadow-gray-400 flex justify-between' key={item.id}>
                <div className='text-gray-50 font-bold flex items-center'>
                  
                <button><FontAwesomeIcon className='mx-2 p-1 text-xl ' icon={faCheckSquare}/></button>
                
                {item.todo}

                </div>
                <div className='text-xl'>
                  <button onClick={()=>deleteCompleted(item.id)}><FontAwesomeIcon className='mx-2 p-1 text-gray-50 hover:text-red-600 hover:cursor-pointer' icon={faTrash}/></button>
                  
                </div>
                
              </li>
          ))}
           
          </ul>
        </div>
        
    </div>
  )
}

export default Content