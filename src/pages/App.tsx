import LoginForm from "../components/LoginForm";
import Wrapper from "../components/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <LoginForm />
        <div className="flex justify-between underline">
          <a href="/register">Register a new acount!</a>
          <a href="/about" className="text-red-500">
            Read This
          </a>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
