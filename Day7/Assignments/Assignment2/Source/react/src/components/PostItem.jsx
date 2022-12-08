const PostItem = (props) => {
  const post = props.post;

  const likeButtonClass = () => {
    if (post.isLiked) return "fa-solid text-rose-500";
    else return "fa-regular";
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.onLike(post.id);
  };

  return (
    <div className="w-full p-4">
      <div className="p-3 transition-shadow duration-500 bg-slate-200 hover:shadow-xl rounded-3xl">
        <div className="mx-1 my-2">
          <h1 className="text-3xl uppercase">{post.title}</h1>
        </div>
        <div className="mt-3" v-if="post.imageUrl">
          <img
            src={post.imageUrl}
            alt=""
            className="object-cover rounded-2xl aspect-video"
          />
        </div>
        <div className="mt-3">
          <h2 className="px-4 py-1 bg-white rounded-2xl line-clamp-2">
            {post.desc}
          </h2>
        </div>
        <div className="flex justify-between p-3">
          <button
            className="flex items-center gap-1 group"
            onClick={handleClick}
          >
            <span
              className={
                likeButtonClass() + " fa-heart transition-all duration-300"
              }
            ></span>
            <span className="transition-all group-hover:tracking-widest">
              Like
            </span>
          </button>
          <p className="self-end text-sm opacity-50">{post.date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
