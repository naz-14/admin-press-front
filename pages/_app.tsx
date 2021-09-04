import { AppProps } from 'next/app'
import { css, Global } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          html {
            font-family: 'Gothic A1', sans-serif;
            box-sizing: border-box;
            font-size: 62.5%;
          }

          body {
            margin: 0;
            padding: 0;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          p,
          h1,
          h2,
          h4,
          a,
          li,
          ul {
            margin: 0;
            padding: 0;
          }

          img {
            max-width: 100%;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
