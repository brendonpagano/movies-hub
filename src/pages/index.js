import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import ContentSlider from "../components/ContentSlider"
import SliderItem from "../components/SliderItem"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query MoviesQuery {
      allMovie(limit: 20, skip: 0) {
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
        <ContentSlider>
          {data.allMovie.edges.map(({ node }) => (
            <SliderItem
              key={node.id}
              title={node.title}
              posterUrl={node.poster}
            />
          ))}
        </ContentSlider>
      </Section>
      <Section>
        <SectionTitle>Ação</SectionTitle>
        <ContentSlider>
          {data.allMovie.edges.map(({ node }) => (
            <SliderItem
              key={node.id}
              title={node.title}
              posterUrl={node.poster}
            />
          ))}
        </ContentSlider>
      </Section>
      <Section>
        <SectionTitle>Drama</SectionTitle>
        <ContentSlider>
          {data.allMovie.edges.map(({ node }) => (
            <SliderItem
              key={node.id}
              title={node.title}
              posterUrl={node.poster}
            />
          ))}
        </ContentSlider>
      </Section>
    </Layout>
  )
}

export default HomePage
