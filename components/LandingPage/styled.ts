import styled from "styled-components";

export const LandingContainer = styled.section`
  display: flex;

  .image {
    width: 50%;
    object-fit: cover;
    transform: scaleX(-1);
    object-position: 0px;
  }

  .title-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-size: min(5vw, 5em);
    margin: 0px;
  }

  .description {
    margin: 0px;
    font-size: min(3vw, 3em);
    font-weight: 200;
  }

  @media only screen and (max-aspect-ratio: 10/9) {
    flex-direction: column-reverse;
    justify-content: start;
    align-items: center;
    .image {
      width: 100%;
      max-height: 50%;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 12vw;
      width: 100vw;
      text-align: center;
    }
    .description {
      font-size: 8vw;
      width: 100vw;
      text-align: center;
    }
  }
`;
