const Profile = (props) => {
  return (
    <input
      type="text"
      name="name"
      id="name"
      onChange={(e) => {
        props.onNameChange(e.target.value);
      }}
      placeholder="Enter your name..."
      autoComplete="off"
      className="px-4 py-2 rounded-full caret-sky-500 text-sky-500 outline-sky-500 focus:shadow-lg focus:shadow-black/50"
    />
  );
};

export default Profile;
