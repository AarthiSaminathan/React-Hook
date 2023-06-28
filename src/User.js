import React,{Component} from "react";
class User extends React.Component
{
    constructor(props)
    {
        super(props);
        this.userDetails=this.userDetails.bind(this);
        this.input=React.createRef();
    }
    userDetails(event)
    {
        alert("You have entered your details successfully.");
        event.preventDefault();
    }
    render()
    {
        return(
            
            <form onSubmit={this.userDetails}>
            <h1>Details Form</h1>
            <label>
                Name:
                <input type="text" ref={this.input}/>
            </label><br></br>
            <label>
                Age:
                <input type="number" ref={this.input}/>
            </label><br></br>
            <label>
                Address:
                <input type="text" ref={this.input}/>
            </label><br></br>
            <label>
                Mobile:
                <input type="text" ref={this.input}/>
            </label><br></br>
            <label>
                Aadhaar No:
                <input type="text" ref={this.input}/>
            </label><br></br>
            <label>
                City:
                <input type="text" ref={this.input}/>
            </label><br></br>
            <label>
                District:
                <input type="text" ref={this.input}/>
            </label><br></br>
            <label>
                State:
                <input type="text" ref={this.input}/>
            </label><br></br>
            <label>
                Country:
                <input type="text" ref={this.input}/>
            </label><br></br>
            <input type="Submit" value="Submit"/>
            </form>
        );
    }
}
export default User;