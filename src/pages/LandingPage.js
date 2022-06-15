import { Container, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <Stack>
        <Button onClick={() => navigate("/dashboard")}>Go to Dashboard </Button>
        <Button onClick={() => navigate("/signin")}>Go to Sign In</Button>
        <Button onClick={() => navigate("/signup")}>Go to Sign Up</Button>
      </Stack>
    </Container>
  );
};

export default LandingPage;
