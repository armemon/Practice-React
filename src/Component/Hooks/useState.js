import React from 'react';

const Usestate = () => {
    // const initialData=10
    const [myNum, setNum] = React.useState(0);
    console.log(myNum)
    return (
        <>
            <div>
                <p>{myNum}</p>
                <div onClick={() => setNum(myNum +1)}>
                    Incr
                </div>
                <div onClick={() => (myNum >0 ? setNum(myNum -1): setNum(0))}>
                    Decr
                </div>
            </div>
        </>
    );
}

export default Usestate;
