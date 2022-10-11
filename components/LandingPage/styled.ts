import styled from 'styled-components';

export const LandingContainer = styled.section`
    display: flex;

    .image {
        width: 50%;
        object-fit: cover;
        transform: scaleX(-1);
        object-position: 10px;
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
`