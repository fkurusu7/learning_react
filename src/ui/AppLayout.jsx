import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  background-color: var(--color-grey-900);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  padding: 0 5rem;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  height: 86vh; // Header is 4vh, footer 6vh
  width: 100%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <h1>Practice Web Apps</h1>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
