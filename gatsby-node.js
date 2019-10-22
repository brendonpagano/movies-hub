// Node Modules
const axios = require("axios")
const delay = require("delay")
const dotenv = require("dotenv")

dotenv.config()

const makeTmdbApiWrapper = () => {
  const apiKey = process.env.TMDB_API_KEY

  let remainingRequests = 40
  let resetRateLimitingTimer = 0

  return async function request(endpoint, queryParams) {
    const epochTime = Math.round(new Date().getTime() / 1000)

    if (remainingRequests <= 0 && epochTime < resetRateLimitingTimer) {
      const secondsToWait = resetRateLimitingTimer - epochTime
      console.log(
        `Used all requests on bucket, waiting ${secondsToWait} seconds until reset.`
      )
      await delay(secondsToWait * 1000)
    }

    if (endpoint[0] !== "/") {
      endpoint = `/${endpoint}`
    }

    try {
      let urlParameters = ""
      if (typeof queryParams === "object") {
        urlParameters = Object.keys(queryParams).reduce(
          (acc, k) => `${acc}&${k}=${queryParams[k]}`,
          ""
        )
      }

      const { status, headers, data } = await axios.get(
        `https://api.themoviedb.org/3${endpoint}?api_key=${apiKey}${urlParameters}`
      )

      if (status !== 200) {
        throw new Error(
          "Something went wrong on request to " +
            endpoint +
            "\n\n" +
            JSON.stringify({ status, headers, data }, null, 4)
        )
      }

      remainingRequests = headers["x-ratelimit-remaining"]
      resetRateLimitingTimer = headers["x-ratelimit-reset"]

      return data
    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const request = makeTmdbApiWrapper()
  const movies = []
  const { genres } = await request("/genre/movie/list", { language: "pt-BR" })

  await Promise.all(
    Array.from(new Array(10)).map(async (_, i) => {
      const page = i + 1

      console.log("Fetching page ", page)
      const response = await request("/movie/popular", {
        page,
        language: "pt-BR",
      })
      movies.push(...response.results)
    })
  )

  movies.forEach(movie =>
    actions.createNode({
      id: createNodeId(movie.id),
      movieId: movie.id,
      title: movie.original_title,
      poster: `https://image.tmdb.org/t/p/w780` + movie.poster_path,
      backdrop: `https://image.tmdb.org/t/p/w1280` + movie.backdrop_path,
      description: movie.overview,
      releaseDate: movie.release_date,
      genreIds: movie.genre_ids,
      internal: {
        type: "Movie",
        contentDigest: createContentDigest(movie),
      },
    })
  )

  genres.forEach(genre =>
    actions.createNode({
      id: createNodeId(genre.id),
      genreId: genre.id,
      name: genre.name,
      internal: {
        type: "MediaGenre",
        contentDigest: createContentDigest(genre),
      },
    })
  )
}
