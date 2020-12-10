import db from '../config/fbConfig';


   function newUid () {
      const uid = localStorage.getItem('uid');
      return uid;
    }

   function startData(){
      const uid = newUid();
   
      db.ref( uid + '/taskList').on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(uid);
      const dataValue = data ? Object.values(data) : [];
      console.log(dataValue);
       }
     );
   }

   export default startData

