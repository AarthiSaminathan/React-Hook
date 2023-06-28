import React from "react";
import  ReactDOM  from "react";
const myList=["Aarthi","Monica","Sandhiya","Deepika","TamilSelvi"];
const listItems=myList.map((myList)=>{
    return <li>{myList}</li>
});
ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('list')
);
export default listItems; 