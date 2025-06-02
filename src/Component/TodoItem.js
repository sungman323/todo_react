import React from 'react';
import '../css/TodoItem.css';

const TodoItem = ({text, checked, id, color, onToggle, onRemove}) => {
  return (
    <div className='todo_item' onClick={()=>onToggle(id)}>
      {
        <div className={`check_mark ${checked&&'checked_v'}`} style={checked ? {color:color} : {}}>✔</div>
      }

      <div className={`todo_text ${checked&&'checked'}`} style={checked ? {color:color} : {}}>
        <div>{text}</div>
      </div>

      <div className='remove' onClick={(e)=>{
        e.stopPropagation(); // onToggle 실행 방지
        onRemove(id);
      }}>&times;
      </div>
    </div>
  );
}

export default TodoItem;