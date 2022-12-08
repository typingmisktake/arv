import { useState } from "react";
const PostForm = (props) => {
  const [post, setPost] = useState({});

  const submit = (e) => {
    e.preventDefault();

    props.onCreatePost({
      ...post,
      date: new Date().toLocaleDateString("en-in", { dateStyle: "full" }),
    });
  };

  return (
    <div className="p-3 shadow rounded-3xl bg-slate-200">
      <form action="">
        <div className="p-3 mb-3">
          <input
            type="text"
            name="name"
            id="name"
            className="w-full text-xl outline-none bg-inherit"
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
            autoComplete="off"
            placeholder="Write post name here..."
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            className="w-full px-4 py-2 rounded-2xl"
            placeholder="Past image url here..."
            onChange={(e) => {
              setPost({ ...post, imageUrl: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <textarea
            name="post"
            id="post"
            rows="2"
            className="w-full px-4 py-2 outline-none resize-none rounded-2xl"
            placeholder="Write post description here..."
            onChange={(e) => {
              setPost({ ...post, desc: e.target.value });
            }}
          ></textarea>
        </div>
        <div className="mb-3 text-end">
          <button
            type="submit"
            onClick={submit}
            className="px-4 py-2 text-white rounded-full cursor-pointer bg-primary group"
          >
            Post
            <span className="transition-all fa-solid fa-paper-plane group-hover:ml-1"></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
