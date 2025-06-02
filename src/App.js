import { useState, useRef } from 'react';
import './css/App.css';
import TodoListTemplate from './Component/TodoListTemplate';
import Form from './Component/Form';
import TodoItemList from './Component/TodoItemList';

const color = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

function App() {

  const [inputs, setInput] = useState('');
  const [todos, setTodo] = useState([
    {id:0, text:'리액트 실습하기', checked:true, color:color[0]},
    {id:1, text:'Todo List 구현하기', checked:false, color:color[1]},
    {id:2, text:'Copyright 2025 todolist', checked:false, color:color[2]}
  ]);
  const [colors, setColor] = useState('#228ae6');
  const nextId = useRef(3);
  let nextColor = color[(nextId%4)];

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleCreate = () => {
    if(!inputs.trim()) return;
    
    const newTodo = {
      id:nextId.current,
      text:inputs,
      checked:false,
      color:colors
    }

    setTodo(todos.concat(newTodo));
    setInput('');
    nextId.current += 1;
    nextColor = color[(nextId.current%4)];
    setColor(nextColor);
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleCreate();
    }
  }

  const handleToggle = (id) => {
    setTodo(
      todos.map((todo)=>
        todo.id === id ? {...todo, checked:!todo.checked}:todo
      )
    )
  }

  const handleRemove = (id) => {
    setTodo(todos.filter((todo)=>todo.id !== id));
  }

  return (
    <>
      <TodoListTemplate form={<Form 
        value={inputs} 
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
        color={color}
      />}>
      <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    </>
  );
}

export default App;
