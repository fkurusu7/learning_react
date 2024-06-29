import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StyledHeading from "./Heading";

const StyledAppLayout = styled.div`
  background-color: var(--color-grey-900);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;
  padding: 0 5rem;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  margin: 3rem 0;
  min-height: calc(83vh - 6rem); // Header is 4vh, footer 6vh
  width: 100%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <StyledHeading as="h1">Practiced Web Apps</StyledHeading>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
