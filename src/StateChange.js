import React,{Component} from "react";
class StateChange extends React.Component
{
    constructor()
    {
        super();
        this.state={displayBio:false};
        console.log('Component this', this);  
        this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio()
    {
        this.setState({displayBio:!this.state.displayBio});
    }
    render()
    {
        return(
            <div>
                <h1>React Tutorial</h1>
                {
                    this.state.displayBio?
                    (
                        <div>
                            <p> This is React Tutorial.
                                In this topic,We Learn about change the state clicking on button of trigger the toggelDisplayBio() method.The state is an updatable structure that is used to contain data or information about the component. 
                                The state in a component can change over time. </p>
                                <button onClick={this.toggleDisplayBio}>Show less</button>
                         </div>   
                    ):(
                        <div>
                            <button onClick={this.toggleDisplayBio}>Show More</button>
                            </div>
                    )
                }
            </div>
            
        )
    }
}
export default StateChange;