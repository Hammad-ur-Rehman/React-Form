
import React ,{useState}from 'react'

function Singlestateform() {


    const [name, setname] = useState({

        name:"",
        age:"",
        email:""


    });

  const [data, setdata] = useState([])


  function on_Change(e){

   let obj = {...name,[e.target.name]: e.target.value}

    setname(obj)
}

  const add = (e) => {

    

    // if ((name.name && name.age && name.email) === "") {

    //   alert("Please Field First");
    // }
        e.preventDefault();
        setdata([...data,name]);
        console.log(data)
    
   
  }

  

  return (

    <>
    <form>
    <div className="container mt-5">
      <input type="text" placeholder="Enter Name" name='name' required onChange={on_Change}></input>
      <input type="age" placeholder="Enter Age" name='age' required onChange={on_Change}></input>
      <input type="email" placeholder="Enter email" name='email'  required onChange={on_Change}></input>
      <button onClick={add} className="ml-3">Add</button>
      </div>
      </form>
<table className="table table-striped ">
  <tbody>
    {
      data.map((val,indx)=>{

       return (
        <tr key={indx}>
        <td>{val.name}</td>
        <td>{val.age}</td>
        <td>{val.email}</td>
        </tr>
       )
})
    }
  </tbody>
</table>

    </>
  )
}

export default Singlestateform;