import React from 'react';
import '../css/Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
  /*
    TodoListTemplate 컴포넌트로부터 4가지 props값을 받아온다.
    value : 사용자가 input태그에 입력한 내용
    onCreate : 버튼이 클릭되면 배열 추가 실행 함수
    onChange : input 내용 변경 실행 함수
    onKeyPress : input에 키를 입력할 때 실행 함수(Enter)
  */
  return (
    <div className='form'>
      <input type="text" value={value} onChange={onChange} onKeyDown={onKeyPress} />
      <button className='create_btn' onClick={onCreate}>추가</button>
    </div>
  );
}

export default Form;