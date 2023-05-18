import React from 'react';

const Todo = () => {
    return (
        <>
            <div>
                <figure>
                    <img src="./images/todo.svg" alt="" /> {/* //in public folder */}
                    <figcaption>Add your list here</figcaption>
                    <div>
                        <input type="text" placeholder="✍ Add Item" />
                    </div>
                </figure>
            </div>
        </>
    );
}

export default Todo;
