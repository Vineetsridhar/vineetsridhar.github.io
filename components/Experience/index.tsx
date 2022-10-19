import React from 'react'
import { FlyIn } from '../shared/animations/FlyIn'
import { ProjectItem, ProjectItemProps } from '../shared/ProjectItem'
import { ProjectItemsContainer } from '../shared/ProjectItem/styled'
import { ExperienceContainer } from './styled'

const EXPERIENCE_DATA: ProjectItemProps[] = [
  {
    title: "Glyde",
    imageSrc: '/glyde.png',
    description: "Founding Engineer",
    subImageSrc: ["/languages/react.png", "/languages/nodejs.png"],
    dateRange: "09/2019-10/2021",
    borderColor: 'rgb(27, 210, 199)',
    url: "https://www.joinglyde.com/"
  },
  {
    title: 'Secureframe',
    imageSrc: '/secureframe.png',
    description: "Software Engineer",
    subImageSrc: ["/languages/react.png", "/languages/ruby.png"],
    dateRange: "01/2022-Present",
    borderColor: 'rgb(36, 133, 230)',
    url: "https://secureframe.com/"
  },
]

export const Experience = () => {
  return <ExperienceContainer>
    <h1>Experience</h1>

    <ProjectItemsContainer>
      {EXPERIENCE_DATA.map((experience, index) => (
        <FlyIn direction={index % 2 === 0 ? 'left' : 'right'}>
          <ProjectItem
            {...experience}
          />
        </FlyIn>
      ))}
    </ProjectItemsContainer>

  </ExperienceContainer>
}