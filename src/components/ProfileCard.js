const ProfileCard = ( {name,age,bio,location}) => {
  return (
    <div className="profile-card">
      <div className="profile-name">name</div>
      <div className="profile-age">age</div>
      <div className="profile-bio">bio</div>
      <div className="profile-location">location</div>
      <div className="profile-name"> Name:{name}</div>
      <div className="profile-age"> age:{age}</div>
      <div className="profile-bio">{bio}</div>
      <div className="profile-location">{location}</div>
    </div>
  );
};

export default ProfileCard;
