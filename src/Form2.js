import React,{Component} from "react";
class Form2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={value:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event) 
{  
    this.setState({value: event.target.value});  
}  
handleSubmit(event)
{
    alert("you have submitted successfully"+this.state.value);
    event.preventDefault();
}
render()
{
    return(
        <form onSubmit={this.handleSubmit}>
            <h1>Controlled Form Example</h1>
            <lable>
                Email:
                <input type="email" value={this.state.value} onChange={this.handleChange}/>
            </lable>
            <lable>
                <input type="submit" value="Submit"/>
            </lable>

        </form>
    );
}
}
export default Form2;
