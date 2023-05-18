import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    // const initialData=10
    const [myNum, setNum] = useState(0);

    useEffect(() => {
document.title = `Chats(${myNum})`
        console.log("Hi")
    }, );

    console.log(myNum)
    return (
        <>
            <div>
                <p>{myNum}</p>
                <div onClick={() => setNum(myNum + 1)}>
                    Incr
                </div>
                <div onClick={() => (myNum > 0 ? setNum(myNum - 1) : setNum(0))}>
                    Decr
                </div>
            </div>
        </>
    );
}

export default UseEffect;
