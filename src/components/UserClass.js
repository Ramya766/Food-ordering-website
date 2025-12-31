import React from "react";
class UserClass extends React.Component{
      constructor(props){
            super(props) //It's compulsory to use //if not initialized we can't acess this
            this.state={
                count:0,
              
            };
        }
         
        
        
    render(){
        const  {name}=this.props;
        const{count}=this.state;
        return(
            
            <div className="user-card">
             <h1>Count:{count}</h1>
            <button onClick={()=>{
                //Never update state variables directly
                //this.state.count=this.state.count+1 [Wrong];
                this.setState({
                    count:this.state.count+1,
                });
            }}>Click me</button>
                <h2>{name}</h2>
                <h3>Chennai</h3>
                <h3>Software Developer,Programmer</h3>
            </div>
        )
    }
}
export default UserClass;