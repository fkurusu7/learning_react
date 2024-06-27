import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

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

  height: 90vh; // Header is 4vh, footer 6vh
  width: 100%;
`;

const Styledfooter = styled.footer`
  height: 3vh;
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
      <Styledfooter>FOOTER</Styledfooter>
    </StyledAppLayout>
  );
}

export default AppLayout;
