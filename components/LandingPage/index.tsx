import Image from "next/image";
import { LandingContainer } from "./styled";

const LandingPage = () => {
    const c = "dfd";
    return (
        <LandingContainer>
            <div className="title-container">
                <h1>Vineet Sridhar</h1>
                <p>Software Engineer</p>
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