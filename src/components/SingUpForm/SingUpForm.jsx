// import React, { Component } from 'react';

import useLocalStorage from 'hooks/useLocalStorage';
import css from './SingUpForm.module.css';
import shortid from 'shortid';

// // ?? це як ||, але він повернає праву частину якщо undefined або null
// console.log(undefined ?? 1);
// console.log(null ?? 5);
// console.log(0 ?? 1);
// console.log(false ?? true);

function SingUpForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  // useEffect(() => {
  //   window.localStorage.setItem('email', JSON.stringify(email));
  // }, [email]);

  // useEffect(() => {
  //   window.localStorage.setItem('password', JSON.stringify(password));
  // }, [password]);

  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

  const handleChange = event => {
    // console.log(event.target.name);
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };
  return (
    <div className='container'>
      <div className={css.container}>
        <form className={css.form} autoComplete="off">
          <label htmlFor={emailInputId} className={css.textInput}>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              id={emailInputId}
            />
          </label>
          <label htmlFor={passwordInputId} className={css.textInput}>
            Password:
            <input
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
              id={passwordInputId}
            />
          </label>
          <button type="submit" className={css.submitBtn}>
            Sent
          </button>
        </form>{' '}
      </div>
    </div>
  );
}

export default SingUpForm;

// class SecondLesson extends Component {
//   state = {
//     // inputValue: '',
//     name: '',
//     lastName: '',
//     experience: 'junior',
//     ok: false,
//   };

//   nameInputId = shortid.generate();
//   lastNameInputId = shortid.generate();

//   //   handleInputChange = e => {
//   //     console.log(e.currentTarget.value);
//   //     this.setState({ inputValue: e.currentTarget.value });
//   //   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };
//   //   handleNameChange = e => {
//   //     this.setState({ name: e.currentTarget.value });
//   //   };
//   //   handleLastName  = e => {
//   //     this.setState({ lastName: e.currentTarget.value });
//   //   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   handleOkChange = e => {
//     // console.log(e.currentTarget.checked);
//     this.setState({ ok: e.currentTarget.checked });
//   };

//   reset = () => {
//     this.setState({ name: '', lastName: '' });
//   };
//   render() {
//     // const { inputValue } = this.state;
//     const { name } = this.state;
//     const { lastName } = this.state;
//     const { experience } = this.state;
//     const { ok } = this.state;
//     return (
//       <div className={css.container}>
//         {/* <input
//           type="text"
//           value={inputValue}
//           onChange={this.handleInputChange}
//         ></input> */}

//         <form onSubmit={this.handleSubmit} className={css.form}>
//           <label htmlFor={this.nameInputId} className={css.textInput}>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//               id={this.nameInputId}
//             />
//           </label>
//           <label htmlFor={this.lastNameInputId} className={css.textInput}>
//             Last name:
//             <input
//               type="text"
//               name="lastName"
//               value={lastName}
//               onChange={this.handleChange}
//               id={this.lastNameInputId}
//             />
//           </label>

//           <p>Your level is:</p>
//           <div className={css.radioBtn}>
//             <label>
//               <input
//                 type="radio"
//                 name="experience"
//                 value="junior"
//                 onChange={this.handleChange}
//                 checked={experience === 'junior'}
//               />
//               Junior
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="experience"
//                 value="middle"
//                 onChange={this.handleChange}
//                 checked={experience === 'middle'}
//               />
//               Middle
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="experience"
//                 value="senior"
//                 onChange={this.handleChange}
//                 checked={experience === 'senior'}
//               />
//               Senior
//             </label>
//           </div>

//           <label>
//             <input
//               type="checkbox"
//               name=""
//               checked={ok}
//               onChange={this.handleOkChange}
//             />
//             Ok
//           </label>

//           <button type="submit" disabled={!ok} className={css.submitBtn}>
//             Sent
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default SecondLesson;
