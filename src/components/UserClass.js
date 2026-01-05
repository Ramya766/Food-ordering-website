import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo: {
        name: "Dummy-name",
        location: "default",
        image: "Loding..",
      },
    };
  }
 componentDidMount() {
 this.timer=setInterval(()=>{
    console.log("Ramya")
  },1000);
  }
  componentWillUnmount(){
  clearInterval(this.timer);
    console.log("Unmounting...");
  }

  render() {
    const { name, repos_url, avatar_url } = this.state.UserInfo;
    // debugger; => used to debug
    return (
      <div className="user-card">
        <img src={avatar_url} className="class-img" />
        <h2>{name}</h2>
        <h3>{repos_url}</h3>
        <h3>Software Developer,Programmer</h3>
      </div>
    );
  }
}
export default UserClass;


