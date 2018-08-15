import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import styled, { injectGlobal } from 'styled-components'
import MasterLayout from '../layouts/master'
import globalStyles from '../designsystem/globalStyles'
import BigType from '../components/BigType'
const BigName = dynamic(import('../components/BigName'), {
  ssr: false,
  loading: () => <BigType />,
})
import PinboardFeed from '../components/PinboardFeed'
import ArticleFeed from '../components/ArticleFeed'
import WorkFeed from '../components/WorkFeed'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { initApi } from '../utils/prismic'
import Prismic from 'prismic-javascript'

injectGlobal`
  ${globalStyles}
`

const Inverse = styled.div`
  --theme-background: #fff;
  --theme-foreground: #000;

  background-color: var(--theme-background);
  color: var(--theme-foreground);
  padding: 1px 0;
`

export default class Page extends Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps() {
    const homePageData = await initApi()
      .then(api => {
        return api
          .query(Prismic.Predicates.any('document.type', ['article', 'work']), {
            fetch: [
              'article.title',
              'article.uid',
              'article.date',
              'article.subtitle',
              'work.title',
              'work.description',
              'work.link',
              'work.date',
            ],
            orderings: '[my.article.date desc, my.work.date desc]',
          })
          .then(response => {
            return response.results
          })
      })
      .catch(err => console.log(err))

    const articles = homePageData.filter(item => item.type === 'article')
    const work = homePageData.filter(item => item.type === 'work')

    return {
      articles: articles,
      work: work,
    }
  }

  render() {
    return (
      <MasterLayout title="Zander Martineau. Front-end developer in London.">
        <BigName />
        <h3 style={{ textAlign: 'center', fontSize: '30vw' }}>WTF?!</h3>
        <main id="main" style={{ display: 'block' }} />
        <Spacer intro>
          <Container>
            <h1>
              I’m Zander Martineau, <br />
              a freelance Front-end developer in London.
            </h1>
            <h2>
              I’ve been making the web accessible, easy-to-use & fast since the
              &lt;blink&gt; tag was cool.
            </h2>
          </Container>
        </Spacer>
        <Container>
          {this.props.articles && (
            <ArticleFeed results={this.props.articles} title="Writing" />
          )}
        </Container>

        {this.props.work && (
          <Inverse>
            <Container>
              <Spacer>
                <WorkFeed results={this.props.work} title="Work" />
              </Spacer>
            </Container>
          </Inverse>
        )}
        <Container>
          <Spacer>
            <PinboardFeed
              feed="u:MrMartineau/t:zm:reading/"
              title="Reading"
              subtitle="Interesting articles that I've read recently"
            />
          </Spacer>
        </Container>

        <Inverse>
          <Container>
            <Spacer>
              <PinboardFeed
                feed="u:MrMartineau/t:zm:link/"
                title="Links"
                subtitle="My most recent bookmarks"
              />
            </Spacer>
          </Container>
        </Inverse>
      </MasterLayout>
    )
  }
}
