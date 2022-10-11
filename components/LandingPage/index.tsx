import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { LandingContainer } from "./styled";
const DESCRIPTIONS = [
  "Software engineer 🧑💻",
  "Lifelong learner 🧑🎓",
  "Hiker ⛰️",
  "Leader 👑",
  "Techie 🎧🖥️",
];

const generateTypingSequence = (backspaceDelay: number) => {
  return DESCRIPTIONS.map((description) => [
    description,
    backspaceDelay,
  ]).flat();
};

const LandingPage = () => {
  return (
    <LandingContainer>
      <div className="title-container">
        <h1>Vineet Sridhar</h1>
        <TypeAnimation
          sequence={generateTypingSequence(3000)}
          wrapper="div"
          cursor
          repeat={Infinity}
          className="description"
        />
      </div>
      <img alt="Picture of me" src="/profile.jpg" className="image" />
    </LandingContainer>
  );
};
export default LandingPage;
