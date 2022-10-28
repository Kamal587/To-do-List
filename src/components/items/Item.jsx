import React from 'react';
import s from './Item.module.css';

let Item = ({ children, checked, handleCheck }) => {
  return (
    <>
      <div>
        <input
          type="checkbox"
          defaultChecked={checked}
          className={s.check}
          onChange={(e) => handleCheck(children)}
        />
        <span className={s.label}>
          <label htmlFor="">{children.task}</label>
        </span>
      </div>
    </>
  );
};

export default Item;
