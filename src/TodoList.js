import React, { useState } from "react";

const TodoList = () => {

       const [inputdata, setinputdata] = useState("");

       const [storedata, setstoredata] = useState([]);
       const arr=[...storedata]



       const setdata1 = (e) => {

              // e.preventDefault();
              setinputdata(e.target.value);


       }




       const adddata = () => {


              setstoredata([...storedata, inputdata])

              setinputdata("");

       }

       const removelist = (index) => {

              console.log('inside remove',index );
              arr.splice(index,1)
              setstoredata(arr)


       }

       const editdata = (index) => {

                      
                    


       }



       return (


              <>
                     <div>
                            <input type="text" placeholder="Enter data" name='name' value={inputdata} onChange={setdata1}></input>
                            <button onClick={adddata}>Add</button>
                     </div>

                     <div>
                            {
                                   storedata.map((elemvalue, index) => 
                                          (
                                                 <>
                                                 <li key={index} id={index}>
                                                        {elemvalue}<i class="fa fa-times" aria-hidden="true" onClick={()=>removelist(index)}></i>
                                                        
                                                        <i class="fa fa-pencil" aria-hidden="true" onClick={()=>editdata(index)}></i>


                                                 </li>
                                                 

                                                 </>

                                          )
                                   )
                            }

                     </div>





              </>





       )


}

export default TodoList


{/* <i class="fa fa-pencil-square-o" aria-hidden="true" onClick={()=>editdata(index)}></i> */}