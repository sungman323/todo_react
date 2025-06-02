import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = ({todos, onToggle, onRemove}) => {
  /* 
    todos = 출력 내용
    onToggle = 완료 항목 체크
    onRemove = 삭제 기능
  */
  return (
    <>
      {todos.map(({id, text, checked, color}) => 
      <TodoItem 
        id={id}
        text={text}
        checked={checked}
        color={color}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    )}
    </>
  );
}

export default TodoItemList;