import React from 'react'
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment, decrement,reset,change} from '../state/reducers/countReducer'

export default function Counter() {
    const [data,setdata] = useState(0)
    //
    let value = Number(data) || 1;
    const val = useSelector((state)=>{return state.counting.count})
    //
    const dispatch = useDispatch()
    //
    let changeValue = (e)=>{
        setdata(e.target.value);
    }
  return (
    <>
    <h2>{val}</h2>
    <button onClick={()=>dispatch(increment())}>up</button>
    <button onClick={()=>dispatch(decrement())}>down</button>
    <button onClick={()=>dispatch(reset())}>reset</button>
    <button onClick={()=>dispatch(change(value))}>change</button>
    <input type="text" value={data}  onChange={changeValue}/>
    </>
  )
}
