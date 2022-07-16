
import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasError: FnameInputHasError,
    valueChangeHandler: FnameChangedHandler,
    valueBlurHandler: FnameInputBlurHandler,
    reset: resetFNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: LnameInputHasError,
    valueChangeHandler: LnameChangedHandler,
    valueBlurHandler: LnameInputBlurHandler,
    reset: resetLNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmailinput,
  } = useInput((value) => value.includes("@"));
  let formIsValid = false
  if(enteredFNameIsValid && enteredEmailIsValid && enteredLNameIsValid ){
    formIsValid= true
  }
  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!enteredFNameIsValid || !enteredLNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredFName);
    console.log(enteredLName);
    console.log(enteredEmail);
    resetFNameInput();
    resetLNameInput();
    resetEmailinput();
  };

  const FirstNameClass =
    FnameInputHasError 
      ? "form-control invalid"
      : "form-control ";

  const LastNameClass =
    LnameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const EmailNameClass =
     emailInputHasError
      ? "form-control invalid"
      : "form-control ";
  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={FirstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFName}
            onChange={FnameChangedHandler}
            onBlur={FnameInputBlurHandler}
          />
        {FnameInputHasError &&<p className="error-text">Please Enter a valid Name</p>}
        </div>
        <div className={LastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLName}
            onChange={LnameChangedHandler}
            onBlur={LnameInputBlurHandler}
          />
          {LnameInputHasError &&<p className="error-text">Please Enter a valid Name</p>}
        </div>
      </div>
      <div className={EmailNameClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailInputBlurHandler}
          id="name"
        />
        {emailInputHasError &&<p className="error-text">Please Enter a valid Name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
