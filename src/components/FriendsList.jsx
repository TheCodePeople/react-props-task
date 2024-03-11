const FriendsList = ({friends}) => {
  return (
    <div className="friends-list">
      <h2>Friends</h2>
      {friends.map((friend) => (
        <div className="friend" key={friend.id}>
          <div className="friend-details">
            <div>{friend.name}</div>
            <div>Mutual friends: {friend.mutualFriends}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
