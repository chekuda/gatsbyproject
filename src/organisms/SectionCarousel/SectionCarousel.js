import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

import { Carousel } from '../../molecules/Carousel'
import { FadeInWhenVisible } from '../../molecules/FadeInWhenVisible'
import { Section, SectionInfoLayout } from '../../atoms/Section'

export const SectionCarousel = ({
  title,
  nodesToRender,
  item,
  list,
  gap,
  withPseudo,
  isAfterPseudo,
  isBeforePseudo,
  maxH = 200,
  height = 'auto',
  titlePadding = 0,
}) => {
  return (
    <Section
      mandatoryDirection="column"
      alignItems="center"
      withPseudo={withPseudo}
      isAfterPseudo={isAfterPseudo}
      isBeforePseudo={isBeforePseudo}
      height={height}
    >
      {title && (
        <Heading as="h1" size="xl" pb="40px" textAlign="center">
          {title}
        </Heading>
      )}
      <Carousel gap={gap}>
        {nodesToRender.map(node => (
          <FadeInWhenVisible key={node.id || node.title} list={list} node={node} threshold={0.2}>
            <Flex
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              flexDirection="row"
              overflow="hidden"
              maxH={maxH}
              padding={5}
              rounded={5}
              bgColor="white"
            >
              <SectionInfoLayout
                itemAnimation={item}
                title={node.title}
                titlePadding={titlePadding}
                titleSize="md"
                contentSize="0.7rem"
                content={node?.contentNode?.childMarkdownRemark}
                image={node.image}
                imageMaxH="150px"
                imageMaxW="150px"
              />
            </Flex>
          </FadeInWhenVisible>
        ))}
      </Carousel>
    </Section>
  )
}
