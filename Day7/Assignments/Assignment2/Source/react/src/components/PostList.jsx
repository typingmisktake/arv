import PostForm from "./PostForm";
import PostItem from "./PostItem";

import { useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At adipisci earum atque cumque quo culpa velit suscipit distinctio. Amet omnis blanditiis dolor! Officia fuga modi amet similique consequuntur quibusdam at.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/11/20/13/18/squirrel-7604249_960_720.jpg",
      date: "Wednesday, 23 November, 2022",
      isLiked: false,
    },
  ]);
  const [showLiked, setShowLiked] = useState(false);

  //   Methods
  const handleCreatePost = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
  };

  const handleLike = (id) => {
    const index = posts.findIndex((post) => post.id === id);
    if (posts[index].isLiked) {
      setPosts(
        posts.map((post, i) => {
          if (i === index) return { ...post, isLiked: false };
          return post;
        })
      );
    } else
      setPosts(
        posts.map((post, i) => {
          if (i === index) return { ...post, isLiked: true };
          return post;
        })
      );
  };

  const likedPosts = () => {
    return posts.filter((post) => post.isLiked);
  };

  const toggleLikedPosts = () => {
    if (showLiked) setShowLiked(false);
    else setShowLiked(true);
  };

  const toggleButtonIconClass = () => {
    if (showLiked) return "fa-minus";
    return "fa-plus";
  };

  const toggleButtonText = () => {
    if (showLiked) return "Hide Liked Posts";
    return "Show Liked Posts";
  };

  return (
    <div className="flex gap-8">
      <div className="w-3/5">
        <div className="p-3">
          <PostForm onCreatePost={handleCreatePost} />
        </div>
        <hr />
        <div className="flex flex-wrap">
          {posts.map((post) => {
            return <PostItem post={post} key={post.id} onLike={handleLike} />;
          })}
        </div>
      </div>
      <div className="w-2/5">
        <div className="flex items-center justify-between">
          <p className="text-primary">
            Liked Posts : {posts.filter((post) => post.isLiked).length}
          </p>
          <a
            href="#"
            className="px-4 py-2 text-white rounded-full bg-primary group"
            onClick={toggleLikedPosts}
          >
            <span
              className={
                "mr-1 fa-solid group-hover:mr-2 transition-all " +
                toggleButtonIconClass()
              }
            ></span>
            {toggleButtonText()}
          </a>
        </div>
        {showLiked &&
          likedPosts().map((post) => {
            return <PostItem post={post} onLike={handleLike} key={post.id} />;
          })}
      </div>
    </div>
  );
};

export default PostList;
