const UserPosts = ({posts}) => {
  return (
    <div className="user-posts">
      <h2>Posts</h2>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <p>{post.content}</p>
          <span className="post-timestamp">{post.timestamp}</span>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
