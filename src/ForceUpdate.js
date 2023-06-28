import React,{Component} from "react";
class ForceUpdate extends React.Component
{
    constructor()
    {
        super();
        this.StateUpdate=this.StateUpdate.bind(this);
    }
    StateUpdate()
    {
        this.forceUpdate();
    }
    render()
    {
        return(
            <div>
                <h2>Example to generating Random Numbers</h2>
                <p>Random Numbers:{Math.random()}</p>
                <button onClick={this.StateUpdate}>Generate</button>
            </div>
        );
    }
}
export default ForceUpdate;