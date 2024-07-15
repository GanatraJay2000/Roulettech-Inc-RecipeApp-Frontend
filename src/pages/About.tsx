import { IoChevronBackOutline } from "react-icons/io5";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";

function About() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <a
        href="#"
        onClick={() => navigate(-1)}
        className="text-xl font-medium mb-3 flex items-center gap-2"
      >
        <IoChevronBackOutline />
        Back
      </a>
      <Card>
        <h1 className="text-3xl font-semibold mb-8">About the Project</h1>
        <p className="mb-5 text-justify">
          For the team at Roulettech, to showcase my skills, I have developed a
          demo recipe CRUD app as part of my application for the Kangacook
          platform.
        </p>
        <p className="text-justify mb-5">
          This app features user authentication, allowing users to manage and
          display their recipes based on individual accounts.
        </p>
        <p className="text-justify mb-5">
          The frontend is built using React.js, the backend is powered by Django
          and the entire application is deployed on AWS -- S3 for frontend
          hosting and EC2 for backend deployment.
        </p>
      </Card>
    </Wrapper>
  );
}

export default About;
