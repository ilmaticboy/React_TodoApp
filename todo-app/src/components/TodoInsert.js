import React, { useState, useCallback } from 'react';
import { MdDone } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    return setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value); //App에서 받아온 것. value 값 = text 값
      setValue(''); // value값 초기화
      e.preventDefault(); // onSubmit이 새로고침을 유발하기 떄문에 그것을 방지하기 위함.
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdDone />
      </button>
    </form>
  );
};

export default TodoInsert;
