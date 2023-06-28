import React,{Component} from "react";
class Props extends React.Component
{
    render(){
        return(
            <div>
                <h2>Welcome to {this.props.name}</h2>
                <p>In this topic,We Learn about Props component.</p>
            </div>
        )
    }
}
export default Props;