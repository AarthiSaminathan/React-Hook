import React,{Component} from "react";
class Form1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.updateDetails=this.updateDetails.bind(this);
        this.input=React.createRef();
    }
    updateDetails(event)
    {
        alert("You have Successfully entered your UserName and Password");
        event.preventDefault();
    }
    render()
    {
        return(
         <form onSubmit={this.updateDetails}>
            <h1>Uncontrolled Form Example </h1>
            <label> 
                UserName:
                <input type="text" name="username" ref={this.input}/>
            </label>
            <label> 
                Password:
                <input type="password " name="password" ref={this.input}/>
            </label>
            <lable>
                <input type="submit" value="OK"/>
            </lable>
            </form>
        );
    }
}
export default Form1;