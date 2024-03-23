const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <div className="profile-name">{user.name}</div>
      <div className="profile-age">{user.age}</div>
      <div className="profile-bio">{user.bio}</div>
      <div className="profile-location">{user.location}</div>
    </div>
  );
};

export default ProfileCard;
