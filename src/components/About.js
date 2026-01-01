import UserClass from "./UserClass"
import User from "./User"
import React from "react";

class About extends React.Component{
constructor(props){
    super(props);
    console.log("Parent constructor");
}
componentDidMount(){
    console.log("Parent Mounted");
}
render(){
    console.log("Parent Rendered");
    return(
        <div>
            <h1>About page</h1>
            <h1>This is About page</h1>
            <User name={"Ramya Programmer"}/>
            <UserClass name={"Ramya Developer"}/>
        </div>
    )
}
}
export default About;
