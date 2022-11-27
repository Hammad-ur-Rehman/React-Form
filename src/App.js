import React, { useState } from "react";


function App() {

  const [name, setname] = useState();
  const [age, setage] = useState('');
  const [email, setemail] = useState('');
  const [data, setdata] = useState([])


  const add = () => {


    if ((name && age && email) === "") {

      alert("Please Field First");
    }
                      else {
                      

      const obj = {

        name: name,//saad
        age: age,//23
        email: email//x

      }
      const a=obj.email;//x
      const b=data.find(val=>val.email===a)//(val)=>{
//val.email===a   succes  {}   failure undefined
      console.log(b)
      if(b!==undefined){
        alert(' Already Email exist')
      }
      else{
      setname("");
      setage("");
      setemail("");
      setdata([...data, obj]);
    }
  
} 
  }

  

  return (

    <>
    <div className="container mt-5">
      <input type="text" placeholder="Enter Name" value={name}  onChange={(e) => setname(e.target.value)}></input>
      <input type="age" placeholder="Enter Age" value={age}  onChange={(e) => setage(e.target.value)}></input>
      <input type="email" placeholder="Enter email" value={email}  onChange={(e) =>setemail (e.target.value)}></input>
      <button onClick={add} className="ml-3">Add</button>
<table className="table table-striped ">
  <tbody>
    {
      data.map((val,indx)=>
        <tr key={indx}>
        <td>{val.name}</td>
        <td>{val.age}</td>
        <td>{val.email}</td>
        </tr>
      )
    }
  </tbody>
</table>
</div>
    </>
  )
}

  




// export function ParentComponent() {
//   const [userName,setUserName] = useState('')
//   const [password, setPassword] = useState('')
  
//   function Listener(data) {
//     setUserName(data.userName);
//     setPassword(data.password);
//   }

//   function showData() {
//     if (userName && password) {
//       return <>Welcome {userName}</>
//     }
//     else {
//       return<>Username not set</>
//     }
//   }

//   function onLogutClicked() {
//     setUserName('');
//     setPassword('');
//   }

//   return <>
//     <ChildComponent callback={(data) => Listener(data)} />
//     <br/>
//     {showData()}
//     <br />
//     <button onClick={onLogutClicked}>Log out</button>
//   </>
// }

// function ChildComponent({ callback }) {
//   const [userName,setUserName] = useState('')
//   const [password,setPassword] = useState('')
//   function onClick() {
//     callback({ userName,password });
//   }
//   return <>
//     UserName: &nbsp;<input onChange={(e) => setUserName(e.target.value)}></input>
//     <br/>
//     Password: &nbsp;<input onChange={(e) => setPassword(e.target.value)}></input>
//     <br/>
//     <button onClick={() => onClick()}>Ok here</button>
//     <br />
//     <br/>
export default App;