import React from 'react';


//For Redux
import { useSelector, useDispatch } from 'react-redux';
import { incrNumber, decrNumber } from './Actions';
//


const Redux = () => {
    //For Redux
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
     //
    return (
        <div>
            <div onClick={() => dispatch(decrNumber())}>-</div>
            <input type="text" name="quantity" value={myState} />
            <div onClick={() => dispatch(incrNumber(5))}>+</div>
        </div>
    );
}

export default Redux;
