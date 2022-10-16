import { TypeAnimation } from "react-type-animation";
import { BioContainer, LandingContainer } from "./styled";
import { Controller, Scene } from 'react-scrollmagic';
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../../hooks/useWindowSize";
import { FadeIn } from "../shared/animations/FadeIn";

const DESCRIPTIONS = [
  "Software engineer 🧑💻",
  "Lifelong learner 🧑🎓",
  "Hiker ⛰️",
  "Leader 👑",
  "Techie 🎧🖥️",
];

const BIO = [
  "I began developing applications my sophomore year of college when I cofounded a company called Glyde. It helped me break out of the world of academia and exposed me to real software engineering.",
  "Today, I am a full stack developer eager to hone my skills and create great software. I currently live in the NYC metro area but I'm looking forward to living all across the country. New England weather is not for me 😅",
  "Besides programming, my passions include going to the gym, hiking, and (more recently) bouldering. I'm also a huge fan of mystery/thriller books!"
]

const generateTypingSequence = (backspaceDelay: number) => {
  return DESCRIPTIONS.map((description) => [
    description,
    backspaceDelay,
  ]).flat();
};

const LandingPage = () => {
  const { width, height } = useWindowSize();

  const isMobile = width && height && (width / height) <= (10 / 9)

  return (
    <LandingContainer>
      <Controller>
        <div className="scrollable">
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
          <BioContainer>
            <h1>About me</h1>
            {BIO.map((paragraph) => <FadeIn threshold={0.9}><p>{paragraph}</p></FadeIn>)}
          </BioContainer>
        </div>
        <Scene
          duration={"75%"}
          triggerHook={0}
          pin={!isMobile}
          enabled={!isMobile}
        >
          <div className="sticky">
            <img alt="Picture of me" src="/profile.jpg" className="image" />
          </div>
        </Scene>
      </Controller>
    </LandingContainer>
  );
};
export default LandingPage;
