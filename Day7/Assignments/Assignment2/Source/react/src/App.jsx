import PostList from "./components/PostList";

function App() {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-center h-16">
        <div className="container">
          <h1 className="m-0 text-3xl text-center text-primary">Posts</h1>
        </div>
      </div>
      <div className="container mt-5">
        <PostList />
      </div>
    </div>
  );
}

export default App;
