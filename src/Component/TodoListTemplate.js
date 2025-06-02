import React from 'react';
import '../css/TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {  // Form, TodoItemList를 감싼 컴포넌트
  return (
    <>
      <main className='todo_list_template'>
        <header className='title'>
          오늘의 할 일
        </header>

        <section className='form_wrapper'>
          {form}
        </section>

        <section className='todos_wrapper'>
          {children}
        </section>
      </main>
    </>
  );
}

export default TodoListTemplate;