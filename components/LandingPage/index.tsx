import Image from "next/image";
import ReactTyped from "react-typed";
import { LandingContainer } from "./styled";

const LandingPage = () => {
    const c = "dfd";
    return (
        <LandingContainer>
            <div className="title-container">
                <h1>Vineet Sridhar</h1>
                <ReactTyped
                    strings={[
                        "Software engineer",
                        "Lifelong learner",
                        "Hiker",
                        "Leader",
                        "Nature lover"
                    ]}
                    typeSpeed={50}
                    backSpeed={50}
                    backDelay={3000}
                    loop
                    className="description"
                />

            </div>
            <img
                alt="Picture of me"
                src="/profile.jpg"
                className="image"
            />
        </LandingContainer>
    )
}
export default LandingPage;