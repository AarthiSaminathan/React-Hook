import React from "react";
import ReactDOM from "react-dom/client";

    function UserLoggin(props) {
    return <h1>Welcome Back!</h1>
}
function GuestLoggin(props)
{
    return <h1>Please Sign up.</h1>
}
function Signup(props)
{
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn)
    {
        return <UserLoggin/>
    }
    return <GuestLoggin/>
}

ReactDOM.render(
    <Signup isLoggedIn={false}/>,
    document.getElementById('root')
);

export default UserLoggin;
