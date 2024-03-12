import ProfileCard from "./components/ProfileCard";
import UserPosts from "./components/UserPosts";
import FriendsList from "./components/FriendsList";

import "./App.css";
import "./data";
import data from "./data";
function App() {
  return (
    <>
      <ProfileCard
        name={data.user.name}
        age={data.age}
        bio={data.bio}
        location={data.location}
      />
      <UserPosts posts={data.posts} />
      <FriendsList friends={data.friends} />
    </>
  );
}

export default App;
