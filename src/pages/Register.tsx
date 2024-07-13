import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <>
      <div className="w-1/3 mx-auto my-10">
        <RegisterForm />

        <div className="flex justify-between text-blue-500">
          <a href="/">Already have an acount?</a>
          <a href="/about">About</a>
        </div>
      </div>
    </>
  );
}

export default Register;
