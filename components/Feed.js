import React, { Component } from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem'

export const FeedWrapper = styled.div`
  margin: ${ds.spacing(10)} 0;
`

export const FeedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const FeedItem = styled.li`
  border-bottom: 1px solid #ddd;
`

export const FeedItemLink = styled.a`
  display: block;
  padding: ${ds.spacing(2)} 0;
  color: ${ds.color('text')};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${ds.color('link', 'over')};
  }
`
export const FeedItemLinkTitle = styled.div`
  font-weight: bold;
`

export const FeedItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FeedItemDate = styled.div`
  font-size: ${ds.fs('s')};
`

export const FeedItemDesc = styled.div`
  opacity: 0.6;
  margin-top: ${ds.spacing(1)};
`

export const FeedItemLinkUrl = styled.div`
  opacity: 0.6;
  font-size: ${ds.fs('s')};
  margin-top: ${ds.space(1)};
`

export const FeedItemImage = styled.img`
  display: block;
  margin-bottom: ${ds.space(2)};
`
