import React,{Component} from "react";
class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.updateSubmit=this.updateSubmit.bind(this);
        this.input=React.createRef();

    }
    updateSubmit(event)
    {
        alert("You have entered your Name and CompanyName sucessfully");
        event.preventDefault();
    }
    render()
    {
        return(
            <form onSubmit={this.updateSubmit}> 
            <h1>Uncontrolled Form Example</h1>
            <label> 
                Name:
                <input type="text" name="Name" ref={this.input}/>
            </label>
            <label>
                CompanyName: 
                <input type="text" name="CompanyName" ref={this.input}/>
            </label>
            <label> 
                <input type="submit" value="Submit"/>
            </label>
            </form>
        );
    }
}
export default Form;