import React from "react";
class UserClass extends React.Component{
      constructor(props){
            super(props) 
            this.state={
                UserInfo:{
                    name:"Dummy-name",
                    location:"default",
             
                }
      

            }
             
        }
       async componentDidMount(){ //i can use async and await to make an api call
        const data=await fetch("https://api.github.com/users/Ramya766");
        const json=await data.json();
        console.log(json);
        this.setState({
            UserInfo:json,
        })
        }
        
    render(){
        const{name,repos_url,avatar_url}=this.state.UserInfo;
        return(
            <div className="user-card">
                <img src={avatar_url} className="class-img"/>
                <h2>{name}</h2>
                <h3>{repos_url}</h3>
                <h3>Software Developer,Programmer</h3>
            </div>
        )
    }
}
export default UserClass;