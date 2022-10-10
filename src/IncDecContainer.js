import React from 'react'
import { ACTIONS } from './actions/inc_dec_action'
import { useDispatch, useSelector } from 'react-redux';

const IncDecContainer = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.count);

  function increment(){
    dispatch({type:ACTIONS.INCREMENT})
  }

  function decrement(){
    dispatch({type:ACTIONS.DECREMENT})
  }
  return (
    <>
      <h1>Counter</h1>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

export default IncDecContainer