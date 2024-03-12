import ProfileCard from "./components/ProfileCard";
import UserPosts from "./components/UserPosts";
import FriendsList from "./components/FriendsList";

import "./App.css";
import data from "./data";

function App() {
  return (
    <>
      <ProfileCard
        age={data.user.age}
        bio={data.user.bio}
        location={data.user.name}
      />
      <UserPosts posts={data.posts} />
      <FriendsList friends={data.friends} />
    </>
  );
}

export default App;
