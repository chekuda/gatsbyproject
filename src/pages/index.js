import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Pintura from "./pintura"
import { HorizontalLayout } from '../components/HorizontalLayout'

import '../components/test.scss'

const IndexPage = ({ data }) => {
  console.log('data', data)
  //     <Pintura data={data} />
  return <HorizontalLayout>
    jose
    {/* <Masonry className="showcase">
      {data.allDatoCmsPintura.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="jose">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))} */}
    </Masonry>
  </HorizontalLayout>
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsPintura {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`