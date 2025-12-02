import UsersList from "./UsersList";

const App = () => {

  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800 my-2">سامانه مدیریت کاربران</h1>
      <UsersList/>
      <div className="fixed bottom-0 left-0 right-0 p-4 shadow-lg bg-blue-400">
        <h1>Footer</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fuga sit quis blanditiis dolorem id tempore molestias asperiores earum numquam? Quia, sunt totam maxime vitae mollitia aliquid ducimus non fugiat!
      </div>
    </div>
  )
};

export default App;
