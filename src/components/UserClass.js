import React from "react";
class UserClass extends React.Component{
      constructor(props){
            super(props) //It's compulsory to use //if not initialized we can't acess this
            console.log(props)
        }
        
    render(){
        const  {name}=this.props;
        
        return(
            
            <div className="user-card">
             
                <h2>{name}</h2>
                <h3>Chennai</h3>
                <h3>Software Developer,Programmer</h3>
            </div>
        )
    }
}
export default UserClass;