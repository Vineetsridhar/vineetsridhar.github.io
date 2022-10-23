import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FadeIn } from '../shared/animations/FadeIn';
import { FlyIn } from '../shared/animations/FlyIn';
import { StaggerIn } from '../shared/animations/StaggerIn';
import { StageItem } from '../shared/StageItem';
import { LangaugesContainer } from './styled';

const FAVORITE_LANGUAGES = [
  {
    logo: "/languages/python.png",
    title: "Python",
  },
  {
    logo: "/languages/typescript.png",
    title: "Typescript",
  },
  {
    logo: "/languages/ruby.png",
    title: "Ruby",
  },
]

const ADDITIONAL_LANGUAGES = [
  {
    logo: "/languages/java.png",
    title: "Java"
  },
  {
    logo: "/languages/cpp.png",
    title: "C++"
  },
  {
    logo: "/languages/dart.png",
    title: "Dart"
  },
  {
    logo: "/languages/bash.png",
    title: "Bash"
  },
  {
    logo: "/languages/postgres.png",
    title: "SQL"
  }
]

const SKILLS = [
  {
    logo: "/languages/mongo.png",
    title: "MongoDB"
  },
  {
    logo: "/languages/git.png",
    title: "Git"
  },
  {
    logo: "/languages/graphql.png",
    title: "GraphQL"
  },
  {
    logo: "/languages/aws.png",
    title: "AWS"
  },
  {
    logo: "/languages/nodejs.png",
    title: "NodeJS"
  },
  {
    logo: "/languages/react.png",
    title: "React"
  },
  {
    logo: "/languages/firebase.png",
    title: "Firebase"
  },
  {
    logo: "/languages/docker.png",
    title: "Docker"
  },
  {
    logo: "/languages/elasticsearch.png",
    title: "Elastic Search"
  },
]



export const Languages = () => {
  return (
    <LangaugesContainer>
      <FlyIn direction="left">
        <h1>Languages</h1>
      </FlyIn>

      <FadeIn>
        <h2>My Favorites</h2>
      </FadeIn>

      <StaggerIn
        animation="fly-in"
        animationFunctionProps={{ direction: 'left' }}
        containerClassName='favorites-container'
      >
        {FAVORITE_LANGUAGES.map((languageObj) => (
          <StageItem
            title={languageObj.title}
            logo={languageObj.logo}
          />
        ))}
      </StaggerIn>


      <FadeIn>
        <h2>I've also worked with</h2>
      </FadeIn>

      <StaggerIn
        animation="fly-in"
        animationFunctionProps={{ direction: 'right' }}
        containerClassName='favorites-container'
        threshold={0.35}
      >
        {ADDITIONAL_LANGUAGES.map((languageObj) => (
          <StageItem
            title={languageObj.title}
            logo={languageObj.logo}
            variant="small"
          />
        ))}
      </StaggerIn>

      <FlyIn direction="left">
        <h1>Skills</h1>
      </FlyIn>

      <StaggerIn
        animation="fly-in"
        animationFunctionProps={{ direction: 'bottom' }}
        containerClassName='favorites-container'
        animationDelay={100}
        threshold={0.35}
      >
        {SKILLS.map((languageObj) => (
          <StageItem
            title={languageObj.title}
            logo={languageObj.logo}
            variant="small"
          />
        ))}
      </StaggerIn>

    </LangaugesContainer>
  )
}