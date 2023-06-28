import React, { Component } from 'react';  
class ClassComponent extends React.Component
{
    constructor()
    {
        super();
        this.state={
            data: 
            [
                {
                    "name":"Aarthi"
                },
                {
                    "name":"Monica"
                },
                {
                    "name":"Sandhiya"
                }
            ]
        }
    }
    render()
    {
        return(
            <div>
                <StudentName/>
                <ul>
                {this.state.data.map((item) => <List data = {item} />)}                           
                </ul>
            </div>
        );
    }
}
    class StudentName extends React.Component {  
        render() {  
           return (  
              <div>  
                 <h1>Student Name Detail</h1>  
              </div>  
           );  
        }  
     }  
     class List extends React.Component {  
        render() {  
           return (  
              <ul>            
                 <li>{this.props.data.name}</li>   
              </ul>  
           );  
        }  
}

export default ClassComponent;