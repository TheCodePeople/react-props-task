import ProfileCard from "./components/ProfileCard";
import UserPosts from "./components/UserPosts";
import FriendsList from "./components/FriendsList";
import data from "./data";
import "./App.css";
import { Children } from "react";

function App() {
  return (
    <>
      <ProfileCard
        name={data.user.name}
        age={data.user.age}
        bio={data.user.bio}
        location={data.user.location}
      />
      <UserPosts posts={data.posts} />
      <FriendsList friends={data.friends} />
    </>
  );
}

export default App;
