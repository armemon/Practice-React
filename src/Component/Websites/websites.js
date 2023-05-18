import React, { useState } from 'react';
import "./website.css"
import WebsiteAPI from './websiteApi.js';
import Website from './website';

const uniqueCategory = [...        //To convert in array and spread data
    WebsiteAPI.map((curElement) => {
    return curElement.category
    }), 
    "All"
];

console.log(uniqueCategory)


const Websites = () => {

    const [WebsiteData, setWebsiteData] = useState(WebsiteAPI);
    const [navList, setNavList] = useState(uniqueCategory)

    const filterItem = (category) => {
        if (category === "All") {
            setWebsiteData(WebsiteAPI);
            return;
        }
        const updatedList = WebsiteAPI.filter((curElem) => {
            return curElem.category === category
        });
        setWebsiteData(updatedList);
    }
    return (
        <>
            <nav>
                {navList.map((curElem) => {
                    return (
                        <button onClick={() => filterItem(curElem)} key={curElem}>{curElem}</button>
                    )
                })}
            </nav>
            <Website WebsiteData={WebsiteData} />
        </>
    );
}

// const Website = ({ WebsiteData }) => {
//     console.log(WebsiteData)
//     const myStyle = { color: "orange" }; //object
//     return (


//     );
// }



export { Websites };
// export default Websites;
