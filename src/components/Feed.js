import styled from 'styled-components'
import { ds } from '../designsystem'
import { pxTo } from 'design-system-utils'

export const FeedWrapper = styled.div`
  margin: ${pxTo(80, 25, 'rem')} 0;
`

export const FeedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const FeedTitle = styled.h2`
  text-align: center;
  font-size: ${ds.fs('xxl')};
  margin: 2rem 0;
  font-style: italic;
  font-weight: normal;
`

export const FeedSubtitle = styled.p`
  text-align: center;
  margin: 2rem 0;
`

export const FeedItemLink = styled.a`
  display: block;
  padding: 1rem;
  color: ${ds.color('bright')};
  color: var(--theme-foreground);
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    outline: 0;
    color: ${ds.color('dark')};
    color: var(--theme-background);
    background-color: ${ds.color('bright')};
    background-color: var(--theme-foreground);
  }
`

export const FeedItemLinkTitle = styled.h3`
  font-style: italic;
  font-size: ${ds.fs('m')};
  line-height: ${ds.get('type.lineHeight.headings')};
  margin-bottom: 0;
`

export const FeedItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FeedItemDate = styled.div`
  font-size: ${ds.fs('xs')};
  opacity: 0.6;
  width: 100px;
  text-align: right;
  flex-shrink: 0;
`

export const FeedItemDesc = styled.div`
  opacity: 0.8;
  margin-top: ${pxTo(8, 25, 'rem')};
  font-size: ${ds.fs('s')};
`

export const FeedItemLinkUrl = styled.div`
  opacity: 0.6;
  margin-top: ${pxTo(8, 25, 'rem')};
  word-wrap: break-word;
  font-size: ${ds.fs('xs')};

  &:link,
  &:visited {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:active {
    opacity: 1;
  }
`
