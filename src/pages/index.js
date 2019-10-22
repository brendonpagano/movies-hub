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
      allMediaGenre {
        edges {
          node {
            id
            genreId
            name
          }
        }
      }
      allMovie(limit: 150, skip: 0) {
        edges {
          node {
            id
            movieId
            genreIds
            title
            description
            releaseDate
            poster
            backdrop
          }
        }
      }
    }
  `)

  const movieSections = data.allMovie.edges.reduce((acc, { node }) => {
    for (const gId of node.genreIds) {
      if (!acc.hasOwnProperty(gId)) {
        acc[gId] = {
          title: "",
          movies: [],
        }
      }

      acc[gId].movies.push(node)
    }

    return acc
  }, {})

  for (const { node } of data.allMediaGenre.edges) {
    if (movieSections.hasOwnProperty(node.genreId)) {
      movieSections[node.genreId].title = node.name
    }
  }

  return (
    <Layout>
      <Hero />
      {Object.keys(movieSections).map(k => {
        const section = movieSections[k]
        return (
          <Section key={k}>
            <SectionTitle>{section.title}</SectionTitle>
            <Slider>
              {section.movies.map(node => (
                <Slider.Item key={node.id} mediaInfo={node} />
              ))}
            </Slider>
          </Section>
        )
      })}
    </Layout>
  )
}

export default HomePage
