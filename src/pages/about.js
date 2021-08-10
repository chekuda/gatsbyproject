import React from 'react'
import { Box, useBreakpointValue, Divider } from '@chakra-ui/react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { FadeInWhenVisible } from '../molecules/FadeInWhenVisible'
import { Section, SectionInfoLayout } from '../atoms/Section'
import { SectionCarousel } from '../organisms/SectionCarousel'

const AboutPage = ({ data = {}, withPseudo = true }) => {
  const { showPseudoByDevice, titleSize, displayDivider, textSectionAlign, subtitleSize, contentPadding } =
    useBreakpointValue({
      base: {
        howPseudoByDevice: false,
        titleSize: '3xl',
        subtitleSize: 'sm',
        displayDivider: true,
        textSectionAlign: 'center',
        contentPadding: '20px 0',
      },
      md: {
        showPseudoByDevice: true,
        titleSize: '4xl',
        subtitleSize: 'md',
        textSectionAlign: 'left',
      },
    }) || {}
  const { about, sections } = data
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
    <Box w="100%" className="indes-page-container container-white">
      <HelmetDatoCms seo={about?.seoMetaTags} />
      <FadeInWhenVisible key={about.id || about.title} list={list} node={about} threshold={0.2}>
        <Section
          withPseudo={showPseudoByDevice && withPseudo}
          isAfterPseudo={true}
          width="80%"
          maxW={1024}
          alignItems="center"
          padding="40px 0"
        >
          <SectionInfoLayout
            itemAnimation={item}
            title={about.title}
            textAlign={textSectionAlign}
            titlePadding="0 0 20px 0"
            titleSize={titleSize}
            subtitle={about?.subtitle}
            subtitleSize={subtitleSize}
            content={about?.contentNode?.childMarkdownRemark}
            image={about.image}
            imageMaxH="400px"
            imageMaxW="300px"
            contentPadding={contentPadding}
          />
        </Section>
        {displayDivider && <Divider w="80%" margin="0 auto" />}
      </FadeInWhenVisible>
      <Box maxW="80%" m="0 auto" pos="relative">
        <SectionCarousel gap={20} nodesToRender={sections?.nodes} title="Eventos" />
      </Box>
    </Box>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    about: datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      title
      subtitle
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
