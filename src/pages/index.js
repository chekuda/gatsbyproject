import React from 'react'
import { Box } from '@chakra-ui/react'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import { FadeInWhenVisible } from '../molecules/FadeInWhenVisible'
import { Section } from '../atoms/Section'
import { graphql } from 'gatsby'

const IndexPage = ({ data = {} }) => {
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

  return (
    <Box w="100%">
      <HelmetDatoCms seo={home?.seoMetaTags} />
      {[home].concat(sections?.nodes || []).map(node => (
        <FadeInWhenVisible key={node.id} list={list} node={node} threshold={0.2}>
          <Section
            itemAnimation={item}
            title={node.title}
            content={node?.contentNode?.childMarkdownRemark}
            image={node.image}
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
