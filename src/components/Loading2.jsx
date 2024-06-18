import React from "react";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  font-size: 10rem;
  height: 800px;
  width: 800px;
  text-align: center;
`;

const StyledSyncLoader = styled(SyncLoader)`
  color: #000000;
`

function Loading() {
  return (
    <div>
      <Container>
        <h3>잠시만 기다려주세요.</h3>
        <StyledSyncLoader />
      </Container>
    </div>
  );
};

export default Loading;