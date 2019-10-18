import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import Slider from "../components/Slider"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query MoviesQuery {
      allMovie(limit: 50, skip: 0) {
        edges {
          node {
            id
            title
            releaseDate
            poster
            backdrop
            description
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <Hero />
      <Section>
        <SectionTitle>Em alta</SectionTitle>
        <Slider>
          {data.allMovie.edges.map(({ node }) => (
            <Slider.Item key={node.id} mediaInfo={node} />
          ))}
        </Slider>
      </Section>
      <Section>
        <SectionTitle>Ação</SectionTitle>
        <Slider>
          {data.allMovie.edges.map(({ node }) => (
            <Slider.Item key={node.id} mediaInfo={node} />
          ))}
        </Slider>
      </Section>
      <Section>
        <SectionTitle>Drama</SectionTitle>
        <Slider>
          {data.allMovie.edges.map(({ node }) => (
            <Slider.Item key={node.id} mediaInfo={node} />
          ))}
        </Slider>
      </Section>
    </Layout>
  )
}

export default HomePage
