import React, { useMemo } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { FadeInWhenVisible } from '../molecules/FadeInWhenVisible'
import { Section, SectionInfoLayout } from '../atoms/Section'
import { SectionCarousel } from '../organisms/SectionCarousel'

const IndexPage = ({ data = {}, withPseudo = true }) => {
  const showPseudoByDevice = useBreakpointValue({ md: true })
  const { home, sections } = data
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  }

  const item = {
    visible: { opacity: 1, y: 0, duration: 0.3 },
    hidden: { opacity: 0, y: 20 },
  }
  const nodesToRender = useMemo(() => [home].concat(sections?.nodes || []), [home, sections])

  return (
    <Box w="100%" className="indes-page-container">
      <HelmetDatoCms seo={home?.seoMetaTags} />
      {nodesToRender.map((node, id) => (
        <FadeInWhenVisible key={node.id || node.title} list={list} node={node} threshold={0.2}>
          <Section
            withPseudo={showPseudoByDevice && withPseudo}
            isBeforePseudo={id !== 0}
            isAfterPseudo={true}
            width="80%"
            maxW={1024}
            alignItems="center"
          >
            <SectionInfoLayout
              itemAnimation={item}
              title={node.title}
              titlePadding="0 0 30px 0"
              titleSize="4xl"
              content={node?.contentNode?.childMarkdownRemark}
              image={node.image}
              imageMaxH="400px"
              imageMaxW="300px"
            />
          </Section>
        </FadeInWhenVisible>
      ))}
      <Box maxW="80%" m="0 auto" pos="relative">
        <SectionCarousel gap={20} nodesToRender={nodesToRender} title="Events" />
      </Box>
    </Box>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      image {
        alt
        isImage
        title
        url
        sizes {
          aspectRatio
        }
      }
      introText
    }
    sections: allDatoCmsHomeSection {
      nodes {
        id
        title
        content
        contentNode {
          childMarkdownRemark {
            html
          }
        }
        image {
          alt
          isImage
          title
          url
          sizes {
            aspectRatio
          }
        }
      }
    }
  }
`
