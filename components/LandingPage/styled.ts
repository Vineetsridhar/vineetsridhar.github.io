import styled from "styled-components";
import css from "styled-jsx/css";

export const LandingContainer = styled.section`
  display: flex;
  max-height: 175vh;

  .image {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    transform: scaleX(-1);
    object-position: 0px;
  }

  .scrollable {
    flex: 1;
  }

  .sticky {
    flex: 1;
  }

  .title-container {
    height: 100vh;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .scrollmagic-pin-spacer {
    flex: 1;
    min-height: 0px !important;
  }

  .description {
    margin: 0px;
    font-size: min(3vw, 3em);
    font-weight: 200;
  }

  p {
    font-size: min(1.5vw, 1.5em);
  }

  @media only screen and (max-aspect-ratio: 10/9) {
    flex-direction: column-reverse;
    justify-content: start;
    align-items: center;
    .image {
      width: 100%;
      max-height: 50vh;
      margin-bottom: 16px;
    }
    .title-container {
      min-height: 50vh;
    }
    .scrollable {
      display: flex;
      flex-direction: column;
      align-items: center;
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
    // Scroll magic really like to inject garbage styles -_-
    .scrollmagic-pin-spacer {
      padding-bottom: 0 !important;
      padding-top: 0 !important;
      width: 100% !important;
      max-height: 50% !important;
      margin-bottom: 0px !important;
      min-height: 0px !important;
      flex: 0 !important;
    }
  }
`;

export const BioContainer = styled.div`
  margin: 20px 10vw;

  p {
    font-size: min(1.8em, 2vmin);
  }

  @media only screen and (max-aspect-ratio: 10/9) {
    width: 70vw;
    margin: auto;

    h1 {
      width: auto !important;
    }
    p {
      text-align: center;
      font-size: 3vw;
    }
  }
`;
