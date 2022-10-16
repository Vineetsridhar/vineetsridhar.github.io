import styled from "styled-components";

export const FadeInContainer = styled.div`
  .hidden {
    opacity: 0;
    transition: all 0.5s;
  }

  .show {
    opacity: 1;
    transition: all 1s;
  }
`;
