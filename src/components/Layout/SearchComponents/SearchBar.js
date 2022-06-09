import React, { useReducer, useEffect, useState } from "react";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from './SearchBar.module.css';

const patternEnglish = new RegExp("[A-Za-z]+");

const inputReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.value, isValid: patternEnglish.test(action.value) };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: patternEnglish.test(state.value) };
    }
    return { value: '', isValid: false };
}

const SearchBar = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [inputState, dispatchInput] = useReducer(inputReducer, {
        value: '',
        isValid: null
    });

    useEffect(() => {
      console.log('EFFECT RUNNING');
  
      return () => {
        console.log('EFFECT CLEANUP');
      };
    }, []);

    const { isValid: inputIsValid } = inputState;

    useEffect(() => {
      const identifier = setTimeout(() => {
        console.log('Checking form validity!');
        setFormIsValid(inputIsValid);
      }, 500);
  
      return () => {
        console.log('CLEANUP');
        clearTimeout(identifier);
      };
    }, [inputIsValid]);

    const inputChangeHandler = (event) => {
        dispatchInput({type: "USER_INPUT", value: event.target.value});
    }

    const inputFocusHandler = (event) => {
        event.target.placeholder = ''
    }

    const validateInputHandler = (event) => {
        dispatchInput({ type: "INPUT_BLUR" });
        event.target.placeholder = placeholderInfo;
    }

    const placeholderInfo = "請使用「英文」搜尋 hashtags，如：haohistory";

    const submitHandler = (event) => {
      event.preventDefault();
      props.onInput(inputState.value);
    };

    return (
      <div className={classes.searchbar}>
        <form onSubmit={submitHandler}>
          <Input
            type="inputhashtag"
            id="inputhashtag"
            value={inputState.value}
            onChange={inputChangeHandler}
            onFocus={inputFocusHandler}
            placeholder={placeholderInfo}
            onBlur={validateInputHandler}
            isValid={inputIsValid}
          />
          <div>
            <Button
              type="submit"
              disabled={!formIsValid}
            >
              輸入
            </Button>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;