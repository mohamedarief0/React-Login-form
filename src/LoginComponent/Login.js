import { useState } from "react";
import "../LoginComponent/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateEmail = (email) => {
    const re = /'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'/;
    return re.test(String(email).toLowerCase());
  };

  console.log(email);
  console.log(password);

  function validform() {
    // let isValid = true;

    // if (!email) {
    //   setErrorEmail("Email is required");
    //   isValid = false;
    // } else if (!validateEmail(email)) {
    //   setEmailError("Invalid email format");
    //   isValid = false;
    // } else {
    //   setEmailError("");
    // }
  }

  return (
    <div className="col-md-4 container ">
      <form className="w-100">
        <h1>Login</h1>
        <div className="mb-3  mt-3">
          <input type="email" placeholder="email" className="form-control" id="exampleInputEmail1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="error">
            {errorEmail}
          </div>
        </div>

        <div className="mb-3  mt-3">
          <input type="password" placeholder="password" className="form-control" id="exampleInputPassword1" value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div id="passwordlHelp" className="error">
            password required
          </div>
        </div>
        <button type="submit" className="btns" onClick={validform}>
          submit
        </button>
      </form>

      {/* <div>
        <div className="toggle text-center ">Join us</div>
      </div> */}
    </div>
  );
}
export default Login;

// import { useState } from 'react'

// function App() {
//   const [firstName, setFirstName] = useState('') // useState to store First Name
//   const [lastName, setLastName] = useState('') // useState to store Last Name
//   const [mobile, setMobile] = useState('') // useState to store Mobile Number
//   const [age, setAge] = useState('') // useState to store Age
//   const [email, setEmail] = useState('') // useState to store Email address of the user
//   const [password, setPassword] = useState('') // useState to store Password

//   // Function which will validate the input data whenever submit button is clicked.

//   function validateForm() {
//     // Check if the First Name is an Empty string or not.

//     if (firstName.length == 0) {
//       alert('Invalid Form, First Name can not be empty')
//       return
//     }

//     // Check if the Email is an Empty string or not.

//     if (email.length == 0) {
//       alert('Invalid Form, Email Address can not be empty')
//       return
//     }

//     // check if the password follows constraints or not.

//     // if password length is less than 8 characters, alert invalid form.

//     if (password.length < 8) {
//       alert(
//         'Invalid Form, Password must contain greater than or equal to 8 characters.',
//       )
//       return
//     }

//     // variable to count upper case characters in the password.
//     let countUpperCase = 0
//     // variable to count lowercase characters in the password.
//     let countLowerCase = 0
//     // variable to count digit characters in the password.
//     let countDigit = 0
//     // variable to count special characters in the password.
//     let countSpecialCharacters = 0

//     for (let i = 0; i < password.length; i++) {
//       const specialChars = [
//         '!',
//         '@',
//         '#',
//         '$',
//         '%',
//         '^',
//         '&',
//         '*',
//         '(',
//         ')',
//         '_',
//         '-',
//         '+',
//         '=',
//         '[',
//         '{',
//         ']',
//         '}',
//         ':',
//         ';',
//         '<',
//         '>',
//       ]

//       if (specialChars.includes(password[i])) {
//         // this means that the character is special, so increment countSpecialCharacters
//         countSpecialCharacters++
//       } else if (!isNaN(password[i] * 1)) {
//         // this means that the character is a digit, so increment countDigit
//         countDigit++
//       } else {
//         if (password[i] == password[i].toUpperCase()) {
//           // this means that the character is an upper case character, so increment countUpperCase
//           countUpperCase++
//         }
//         if (password[i] == password[i].toLowerCase()) {
//           // this means that the character is lowercase, so increment countUpperCase
//           countLowerCase++
//         }
//       }
//     }

//     if (countLowerCase == 0) {
//       // invalid form, 0 lowercase characters
//       alert('Invalid Form, 0 lower case characters in password')
//       return
//     }

//     if (countUpperCase == 0) {
//       // invalid form, 0 upper case characters
//       alert('Invalid Form, 0 upper case characters in password')
//       return
//     }

//     if (countDigit == 0) {
//       // invalid form, 0 digit characters
//       alert('Invalid Form, 0 digit characters in password')
//       return
//     }

//     if (countSpecialCharacters == 0) {
//       // invalid form, 0 special characters characters
//       alert('Invalid Form, 0 special characters in password')
//       return
//     }

//     // if all the conditions are valid, this means that the form is valid

//     alert('Form is valid')
//   }

//   return (
//     <div className="main">
//       <form>
//         {/* Input Field to insert First Name */}
//         <input
//           placeholder="First Name"
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         {/* Input Field to insert Last Name */}
//         <input
//           placeholder="Last Name"
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         {/* Input Field to insert Mobile Number */}
//         <input
//           placeholder="Mobile Number"
//           onChange={(e) => setMobile(e.target.value)}
//         />
//         {/* Input Field to insert Age */}
//         <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
//         {/* Input Field to insert Email Address of the user */}
//         <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         {/* Input Field to insert Password */}
//         <input
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           onClick={() => {
//             validateForm()
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const handleLogin = () => {
//     let isValid = true;

//     // Validate email
//     if (!email) {
//       setEmailError('Email is required');
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       setEmailError('Invalid email format');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     // Validate password
//     if (!password) {
//       setPasswordError('Password is required');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (isValid) {
//       // Here you can implement your login logic, for simplicity, I'll just check if the email and password match
//       if (email === 'user@example.com' && password === 'password') {
//         // Successful login, you can redirect the user to another page or perform any other action
//         alert('Login Successful!');
//       } else {
//         // Display error message if login fails
//         setErrorMessage('Invalid email or password');
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
//       </div>
//       <button onClick={handleLogin}>Login</button>
//       {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
//     </div>
//   );
// }

// export default LoginPage;
