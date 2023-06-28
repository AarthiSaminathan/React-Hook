import React,{Component} from "react";
import PropTypes  from "prop-types";
class SetState extends React.Component
{
    constructor()
    {
        super();
        this.state={
            msg:"Welcome to React Tutorial"
        };
        this.updateSetState=this.updateSetState.bind(this);
    }
    updateSetState()
    {
        this.setState(
            {
                msg:"This is best React Tutorial"
            }
        );
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.updateSetState}>SET STATE</button>
            </div>
        );
    }
}
export default SetState;
