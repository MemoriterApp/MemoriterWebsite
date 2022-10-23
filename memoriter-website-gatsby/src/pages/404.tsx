import * as React from "react"
import { Link, HeadFC } from "gatsby"

const PageNotFound = () => {
  return (
    <main>
      <h1>Error 404</h1>
      <Link to="/">Back to site</Link>
    </main>
  )
}

export default PageNotFound

export const Head: HeadFC = () => <title>Not found</title>