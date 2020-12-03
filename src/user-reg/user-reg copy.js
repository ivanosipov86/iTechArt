// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase';

// function UserReg(props) {



// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [hasAccount, setHasAccount] = useState(false);
// const [name, setName] = useState('');
// const [key, setKey] = useState('');
// const [value, setValue] = useState('');


// useEffect(() => {
//    const db = firebase.database();
//    const userName = db.ref('name');
//    userName.on( 'value', (elem) =>
//    setName(elem.val()) );
// })


// function createUser(){
//    firebase.auth().createUserWithEmailAndPassword( email, password )
//    .then(response => console.log(response))
//    .catch(error => console.log(error))
// }

// function signUser(){
//    firebase.auth().signInWithEmailAndPassword( email, password )
//       .then(response => {
//          setHasAccount(true)
//    })
//    .catch(error => console.log(error));
// }


// function sendData(){
//    const db = firebase.database();
//    db.ref(key).push(value);
//    alert('data push');
// }

// // useEffect (() => {
// //    const db = firebase.database();
// //    const surname = db.ref('surname')
// //    surname.on('value', (elem) => console.log(elem.val(), '111') )
// // })



// return(

//    <div>
//        {
//           hasAccount ?
//             (<div>
//                   Hello {email}
//                <button
//                   onClick={() => setHasAccount(false)}>Exit
//                </button>

//           <div
//           className="auth_form">
//              <input
//                onChange={e => setKey(e.target.value)}
//                type="text" id="key"
//                placeholder="enter key"/>
//              <input
//                onChange={e => setValue(e.target.value)}
//                type="text" id="value"
//                placeholder="enter value"/>
//              <input
//                type="submit" onClick={sendData}
//             />
//           </div>
//           </div>) :

//           (<div className="login_block">
//             <input
//                type="text"
//                id="email"
//                placeholder="email"
//                onChange={e => setEmail(e.target.value)}
//             />
//             <input
//                type="password"
//                id="password"
//                placeholder="password"
//                onChange={e => setPassword(e.target.value)}
//             />
//             <input
//                type="submit"
//                onClick={createUser}
//             />
//             <button
//                onClick={signUser}
//                >Enter
//                </button>
//          </div>
//           )
//        }
//    </div>

// )

// }

// export default UserReg
