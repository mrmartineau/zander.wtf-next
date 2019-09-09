import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Prismic from 'prismic-javascript'
import subIn from 'sub-in'
import randomArray from '@libshin/random-array'
import MasterLayout from '../layouts/master'
import PinboardFeed from '../components/PinboardFeed'
import ArticleFeed from '../components/ArticleFeed'
import WorkFeed from '../components/WorkFeed'
import Container from '../components/Container'
import { initApi } from '../utils/prismic'
import { Inverse } from '../components/Inverse'
import { ds } from '../designsystem'
import { MassiveLogo, Logo } from '../components/Logo'
import { FeedTitle } from '../components/Feed'
import { Gig } from '../components/Gig'
import { links } from '../data/links'
import { Link } from '../components/Link'

const IntroCopy = styled(FeedTitle)`
  text-align: left;
`

const Description = styled.h2`
  font-size: ${ds.fs('m')};
  line-height: 1.3;
  line-height: 1.3;
  font-weight: normal;
`

const Links = styled.div`
  margin: ${ds.spacing(3)} 0;
`

const FullHeight = styled.div`
  min-height: 100vh;
`

export default class Page extends Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
    }

    const homePageData = await initApi()
      .then(api => {
        return api
          .query(
            Prismic.Predicates.any('document.type', [
              'article',
              'work',
              'global',
            ]),
            {
              fetch: [
                'article.title',
                'article.uid',
                'article.date',
                'article.subtitle',
                'work.title',
                'work.description',
                'work.short_description',
                'work.long_description',
                'work.link',
                'work.date',
                'work.image',
                'work.project_metadata',
                'global.intro_title',
                'global.intro_copy',
                'global.site_name',
                'global.site_description',
                'global.descriptor',
                'global.now',
              ],
              orderings: '[my.article.date desc, my.work.date desc]',
              pageSize: 100,
            }
          )
          .then(response => {
            return response.results
          })
      })
      .catch(err => console.log(err))

    const articles = homePageData.filter(item => item.type === 'article')
    const work = homePageData.filter(item => item.type === 'work')
    const globalInfo = homePageData.filter(item => item.type === 'global')[0]
      .data
    const descriptors = globalInfo.descriptor.reduce((accumulator, item) => {
      return [...accumulator, item.descriptor_copy] //accumulator.push(item.descriptor_copy)
    }, [])

    return {
      articles,
      work,
      globalInfo,
      descriptors: randomArray(descriptors),
    }
  }

  render() {
    const { work, articles, globalInfo, descriptors } = this.props

    return (
      <MasterLayout
        title={globalInfo.site_name}
        description={globalInfo.site_description}
      >
        <FullHeight>
          <MassiveLogo>
            <Logo size="50vmin" fill="var(--theme-foreground)" />
          </MassiveLogo>
        </FullHeight>

        <Container id="info">
          <IntroCopy>{globalInfo.intro_title}</IntroCopy>
          <Description>{subIn(globalInfo.intro_copy, descriptors)}</Description>

          <Links>
            {links.map((item, index, arr) => (
              <Fragment key={index}>
                <Link href={item.href}>{item.copy}</Link>
                {arr.length - 1 !== index && ' / '}
              </Fragment>
            ))}
          </Links>

          {!!globalInfo.now.length && <Gig text={globalInfo.now} />}
        </Container>

        {!!articles && (
          <Container id="words">
            <ArticleFeed results={articles} title="Words" />
          </Container>
        )}

        {!!work && (
          <Inverse id="projects">
            <Container>
              <WorkFeed results={work} title="Projects" />
            </Container>
          </Inverse>
        )}

        <Container id="reading">
          <PinboardFeed
            tag="zm:reading"
            title="Reading"
            subtitle="Interesting articles that I've read recently"
          />
        </Container>

        <Inverse id="bookmarks">
          <Container>
            <PinboardFeed tag="zm:link" title="Bookmarks" />
          </Container>
        </Inverse>
      </MasterLayout>
    )
  }
}
