const ProfileCard = ({ name, age, bio, location }) => {
  return (
    <div className="profile-card">
      <div className="profile-name">Name: {name}</div>
      <div className="profile-age">Age: {age}</div>
      <div className="profile-bio">{bio}</div>
      <div className="profile-location">Location: {location}</div>
    </div>
  );
};

export default ProfileCard;
