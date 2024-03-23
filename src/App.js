import data from "./data";
import ProfileCard from "./components/ProfileCard";
import UserPosts from "./components/UserPosts";
import FriendsList from "./components/FriendsList";

import "./App.css";

function App() {
  return (
    <>
      <ProfileCard user={data.user} />
      <UserPosts posts={data.posts} />
      <FriendsList friendsList={data.friends} />
    </>
  );
}

export default App;
