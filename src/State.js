import React,{Component} from "react";
class State extends React.Component
{
    constructor()
    {
        super();
        this.state={displayBio: true};
    }
    render()
    {
        const name =this.state.displayBio ?(
            <div>
                <p>This is Aarthi.I am an Employee.</p>
            </div>
        ):null;
        return(
            <div>
                <p>Not a Student</p>
                {name}
            </div>
        );
    }
}
export default State;