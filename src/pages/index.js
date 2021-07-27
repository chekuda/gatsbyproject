import React, { useMemo } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import { FadeInWhenVisible } from '../molecules/FadeInWhenVisible'
import { Section } from '../atoms/Section'
import { graphql } from 'gatsby'

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
            itemAnimation={item}
            title={node.title}
            content={node?.contentNode?.childMarkdownRemark}
            image={node.image}
            withPseudo={showPseudoByDevice && withPseudo}
            isBeforePseudo={id !== 0}
            isAfterPseudo={id !== nodesToRender.length - 1}
          />
        </FadeInWhenVisible>
      ))}
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
