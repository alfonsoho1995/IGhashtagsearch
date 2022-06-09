import React from "react";

import classes from './Input.module.css'

const Input = (props) => {
    return (
      <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          onFocus={props.onFocus}
          className={classes.font}
        />
      </div>
    );
}

export default Input;