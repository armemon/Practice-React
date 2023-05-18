import React from 'react';




const Website = ({ WebsiteData }) => {
    const myStyle = { color: "orange" }; //object
    return (
        <>
            {WebsiteData.map((curElement) => {
                const { id, name, image, video} = curElement //Destructuring
                return (
                    <div key={id}>
                        <h1 style={{ color: "red" }} >Website 1</h1>
                        <h1 style={myStyle}>Website 2</h1>
                        {/* <img src={image} alt="website" /> */}
                    </div>
                )
            })}
        </>

    );
}

export default Website;
