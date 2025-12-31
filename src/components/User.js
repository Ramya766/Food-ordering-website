import {useState} from "react";
const User=({name})=>{
    const[count,Setcount]=useState(0);
    console.log(count);
    return(
        <div className="user-card">
            <h2>{name}</h2>
            <button onClick={()=>Setcount(1)}>FullStack Developer</button>
            <h4>Chennai</h4>
        </div>
    )
}
export default User;