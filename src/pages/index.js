import React from "react"

// Components
import Layout from "../components/Layout"

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
      <p style={{ color: "white" }}>
        Teste <i className="fas fa-star "></i>
      </p>
    </Layout>
  )
}

export default HomePage
