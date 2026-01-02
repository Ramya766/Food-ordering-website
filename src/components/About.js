import UserClass from "./UserClass"
import User from "./User"
import React from "react";

class About extends React.Component{
constructor(props){
    super(props);
}
componentDidMount(){

}
render(){
    return(
        <div>
            <h1>About page</h1>
            <h1>This is About page</h1>
            <UserClass name={"Ramya Developer"} location={"India"}/>
        </div>
    )
}
}
export default About;
