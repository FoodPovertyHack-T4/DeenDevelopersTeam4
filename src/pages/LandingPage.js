import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Landingpage/Hero";
import Header from "../components/Landingpage/Header";
import Section from "../components/Landingpage/Section";
import Footer from "../components/Landingpage/Footer";

const LandingPage = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Hero />
      <Section />
      <Footer />
    </Container>
  );
};

export default LandingPage;
