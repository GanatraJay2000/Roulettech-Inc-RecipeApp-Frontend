import RegisterForm from "../components/RegisterForm";
import Wrapper from "../components/Wrapper";

function Register() {
  return (
    <>
      <Wrapper>
        <RegisterForm />

        <div className="flex justify-between underline">
          <a href="/">Already have an acount?</a>
          <a href="/about" className="text-red-500">
            Read This
          </a>
        </div>
      </Wrapper>
    </>
  );
}

export default Register;
