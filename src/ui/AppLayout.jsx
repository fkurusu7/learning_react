import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
