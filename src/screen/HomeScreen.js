import React from "react";
// import { useUser } from "../context/userContext";
function HomeScreen() {
  // const {}=useUser();
  // const { userInfo } = useUser();
  // // console.log("home screen", userInfo);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="container">
      {!user?(
      <div className="container" style={{ textAlign: "center" }}>
        <br></br>
        <br></br>
        <h1>ThinkTank: An Online Examination Platform</h1>
        <br></br>
        <br></br>
        <em>
          A project,<br></br>
          trying to use the learned concepts in making real world projects
        </em>
        <br></br>
        <strong>
          that could really make a difference in the lives of people around us.
        </strong>

        <br></br>
        <br></br>
        <em>by</em>

        <br></br>
        <br></br>
        <strong>AMIT KUMAR</strong>
        <br></br>

        <br></br>
        <br></br>
        <h3>
          MOTILAL NEHRU NATIONAL INSTITUTE<br></br>
          OF TECHNOLOGY<br></br>
          ALLAHABAD<br></br>
          <br></br>
        </h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      ) : (
      <div>
        <br />
        <br />
        <div className="container">
          <h1>Hi, Welcome to ThinkTank ...</h1>
          <h3>{user.name}</h3>

          <hr />
        </div>

        <br />
      </div>
      )}
    </div>
  );
}

export default HomeScreen;
