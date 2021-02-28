import { useState } from "react";

let input1 = "";
let input2 = "";
let isDisabled = false;

export default function PasswordMatching() {
  const [matchOutput, setMatchOutput] = useState("Enter the Passwords");
  const [alphaNumeric, setAlphaNumeric] = useState(
    "Password need to be alphanumeric"
  );
  const [showPassword, setShowPassword] = useState(false);
  function inputHandler(event, inputBox) {
    if (inputBox === 1) {
      input1 = event.target.value;
    } else if (inputBox === 2) {
      input2 = event.target.value;
    }
    if (input1 === input2) {
      setMatchOutput("");
      isDisabled = false;
    } else {
      setMatchOutput("Passwords Do not match");
      isDisabled = true;
    }
    var regexAlphaNumeric = /^(?=.*[a-z])(?=.*[0-9])/i;
    if (regexAlphaNumeric.test(input1)) {
      setAlphaNumeric(() => "Password Strength: GOOD");
    } else {
      setAlphaNumeric(() => "Password Strength: WEAK");
    }
  }
  function submitPasswords() {
    console.log("Password:", input2);
  }

  function toggleShowPassword() {
    setShowPassword(() => !showPassword);
  }
  return (
    <div className="App">
      <h1>PassWord Match</h1>
      <input
        type={showPassword ? "text" : "password"}
        onChange={(event) => inputHandler(event, 1)}
      ></input>
      <input
        type={showPassword ? "text" : "password"}
        onChange={(event) => inputHandler(event, 2)}
      ></input>
      <button onClick={toggleShowPassword}>
        {showPassword ? "Hide" : "Show"} PassWord
      </button>
      <h2>{matchOutput}</h2>
      <h2>{alphaNumeric}</h2>
      <button disabled={isDisabled} onClick={submitPasswords}>
        Submit
      </button>
    </div>
  );
}
