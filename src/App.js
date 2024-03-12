import ProfileCard from "./components/ProfileCard";
import UserPosts from "./components/UserPosts";
import FriendsList from "./components/FriendsList";
import data from "./data";
import "./App.css";

function App() {
  return (
    <>
      <ProfileCard name={data.name} age={data.age} bio={data.bio} location={data.location} />
      <UserPosts posts={data.posts}/>
      <FriendsList friends={data.friends} />
    </>
  );
}

export default App;
