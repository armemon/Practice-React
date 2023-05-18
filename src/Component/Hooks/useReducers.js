import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react';



const reducer = (state, action) => {
    if (action.type === "INCR") {
        state += 1;
    }
    if (state >0 && action.type === "DECR") {
        state -= 1;
    }
    return state;
}
const Usereducer = () => {
    // const initialData=10
    // const [myNum, setNum] = React.useState(0);
    const [state, dispatch] = useReducer(reducer, 0)   //dispatch to trigger reducer function
    // console.log(myNum)
    return (
        <>
            <div>
                <p>{state}</p>
                <div onClick={() => dispatch({ type: "INCR" })}>
                    Incr
                </div>
                <div onClick={() => dispatch({ type: "DECR" })}>
                    Decr
                </div>
            </div>
        </>
    );
}

export default Usereducer;
