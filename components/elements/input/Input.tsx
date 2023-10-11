import React, { useReducer, useEffect } from 'react';
import { validate } from '@/validation/Validation';


const inputReducer = (state:any, action:any) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const Input = (props:any) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { id, onInput, element } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  
  const changeHandler = (event:any) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  let inputElement;

  switch (element) {
    case 'input':
      inputElement = (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
          className={`${
            !inputState.isValid &&
            inputState.isTouched &&
            "bg-red-200 border-red-600"
          } h-[32px] bg-gray-100 border rounded-md p-6 outline-none`}
        />
      ) ;
      break;
      case 'textarea':
      inputElement = (
        <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        className="form_input form_inp"
      />
      );
      break;
      case 'select':
      inputElement = (
        <select
          id={id}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
          className={`${
            (!inputState.isValid && inputState.isTouched) ? "bg-red-200 border-red-600" : ""
          } h-[52px] bg-gray-100 border rounded-md px-6 outline-none text-gray-400`}
        >
          {props.options.map((option:any) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
      case 'checkbox':
      inputElement = (
        <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value='yes'
        className="form_checkbox"
      />
      );
      break;
      default:
      inputElement = null;
  }

  return (
     <div  className={`w-full flex flex-col mb-5`}>
     <label  className={`${
         !inputState.isValid && inputState.isTouched && "text-red-600"
       }`} htmlFor={props.id}>{props.label}</label>
    {inputElement}
     {!inputState.isValid && inputState.isTouched && <p className={`${
           !inputState.isValid && inputState.isTouched && "text-red-600 text-xs lg:text-sm"
         }`}>{props.errorText}</p>}
   </div>
  );
};

export default Input;