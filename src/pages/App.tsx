import LoginForm from "../components/LoginForm";

function App() {
  return (
    <>
      <div className="w-1/3 mx-auto my-10">
        <LoginForm />

        <div className="flex justify-between text-blue-500">
          <a href="/register">Register a new acount!</a>
          <a href="/about">About</a>
        </div>
      </div>
    </>
  );
}

export default App;
