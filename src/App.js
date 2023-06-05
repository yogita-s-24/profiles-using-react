import "./App.css";

import UserCard from "./UserCard";

function App() {
  return (
    <>
      <h1 className="header-app">Student Profiles</h1>
      <UserCard name="Yogita" email="yogita@gmail.com" imageURL= "https://avatars.githubusercontent.com/u/124052924?v=4"/>
      <UserCard name="Harshda" email="harshda@gmail.com" imageURL="https://avatars.githubusercontent.com/u/119927094?v=4"/>
      <UserCard name="Saurabh" email="saurabh@gmail.com" imageURL="https://avatars.githubusercontent.com/u/124028591?v=4" />
      </>
  )
}
export default App;
