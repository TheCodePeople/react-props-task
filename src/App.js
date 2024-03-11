import ProfileCard from "./components/ProfileCard";
import UserPosts from "./components/UserPosts";
import FriendsList from "./components/FriendsList";
import data from "./data";
import "./App.css";

function App() {
  return (
    <>
      <ProfileCard
        age={data.user.age}
        bio={data.user.bio}
        location={data.user.location}
        name={data.user.name}
      />
      <UserPosts posts={data.posts} />
      <FriendsList friends={data.friends} />
    </>
  );
}

export default App;
