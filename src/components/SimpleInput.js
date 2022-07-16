
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput((value)=>(value.trim() !== ''));


  let formIsValid = false
  
  if(enteredNameIsValid){
    formIsValid= true
  }

  const formSubmissionHandler = event =>{
    event.preventDefault();
    if(!enteredNameIsValid){
        return;
    }
    console.log(enteredName);
    resetNameInput();
  }


  const NameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={NameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError &&<p className="error-text"> Name Must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
