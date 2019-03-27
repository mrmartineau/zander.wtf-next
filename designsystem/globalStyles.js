import { css, createGlobalStyle } from 'styled-components'
import { ds } from './index'
import { pxTo } from 'design-system-utils'
// import fluidType, { fluidSpace } from '../utils/fluidType'

export const baseline = pxTo(35, 20, 'rem')
// const baseFluidType = fluidType('15px', '20px', '320px', '1000px')
// const baseFluidType = fluidSpace('16px', '25px', '320px', '1000px')

// global styles
export default createGlobalStyle`
  @supports (--theme-foreground: #F7F7F9) {
    :root,
    :root.theme-inverse .inverse {
      --theme-foreground: #F7F7F9;
      --theme-background: #161a1d;
    }

    :root.theme-inverse,
    :root .inverse {
      --theme-foreground: #161a1d;
      --theme-background: #F7F7F9;
    }
  }

  /* https://websemantics.uk/tools/responsive-font-calculator/ */
  /* 16px @ 300px increasing to 20px @ 1000px */
  @media (min-width: 300px) {
    :root {
      font-size: calc(1rem + ((1vw - 3px) * 0.5714));
      /* Where: * 0.5714 = 100 * font_Size_Difference / viewport_Width_Difference */
    }
  }
  /* Prevent font scaling beyond this breakpoint */
  @media (min-width: 1000px) {
    :root {
      font-size: 20px;
    }
  }

  html {
    box-sizing: border-box;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  @font-face {
    font-family: 'iA Writer Duospace';
    font-weight: normal;
    src: url('/static/fonts/iAWriterDuospace/iAWriterDuospace-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'iA Writer Duospace';
    font-weight: normal;
    font-style: italic;
    src: url('/static/fonts/iAWriterDuospace/iAWriterDuospace-Italic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'iA Writer Duospace';
    font-weight: bold;
    src: url('/static/fonts/iAWriterDuospace/iAWriterDuospace-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'iA Writer Duospace';
    font-weight: bold;
    font-style: italic;
    src: url('/static/fonts/iAWriterDuospace/iAWriterDuospace-BoldItalic.woff2') format('woff2');
  }

  html {
    color: ${ds.color('bright')};
    color: var(--theme-foreground);
    background-color: ${ds.color('dark')};
    background-color: var(--theme-background);
    font-family: ${ds.get('type.fontFamilyBase')};
    line-height: ${ds.get('type.lineHeight.base')};
  }

  p {
    margin-top: 0;
    margin-bottom: ${baseline};
  }

  /**
  * Headings
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${ds.get('type.fontFamilyHeadings')};
    line-height: ${ds.get('type.lineHeight.headings')};
    margin-top: 0;
    margin-bottom: ${baseline};
    font-weight: normal;
    font-style: italic;
  }

  h1 {
    font-size: ${ds.fs('xxl')};
    margin-bottom: ${pxTo(70, 25, 'rem')};
  }

  h2 {
    font-size: ${ds.fs('xl')};
  }

  h3 {
    font-size: ${ds.fs('l')};
  }

  h4 {
    font-size: ${ds.fs('m')};
  }

  h5,
  h6 {
    font-size: ${ds.fs('m')};
    margin-bottom: 0;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5,
  * + h6 {
    margin-top: ${baseline};
  }

  ::-moz-selection {
    background: var(--theme-foreground);
    color: var(--theme-background);
  }

  ::selection {
    background: var(--theme-foreground);
    color: var(--theme-background);
  }
`

export const linkStyles = css`
  word-wrap: break-word;
  text-decoration: none;

  &:link,
  &:visited {
    color: ${ds.color('bright')};
    color: var(--theme-foreground);
    border-bottom: 2px solid ${ds.color('link')};
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${ds.color('link')};
    outline: 0;
  }
`

export const paddedLinkStyles = css`
  ${linkStyles};
  display: inline-block;
  padding: 0.05em 0.2em;
`

export const codeStyles = css`
  code,
  pre {
    font-family: ${ds.get('type.fontFamily.mono')};
    font-size: ${ds.fs('xs')};
    color: ${ds.color('dark')};
    color: var(--theme-background);
    background-color: ${ds.color('bright')};
    background-color: var(--theme-foreground);
  }

  code {
    padding: 2px 4px;
  }

  pre {
    position: relative;
    display: block;
    padding: ${baseline};
    margin: 0 0 ${baseline};
    /* max-height: 90vh; */
    overflow: auto;
    tab-size: 3;
    white-space: pre;

    code {
      padding: 0;
      color: ${ds.color('bright')};
      color: var(--theme-foreground);
      background-color: ${ds.color('dark')};
      background-color: var(--theme-background);
      border: 0;
    }
  }
`
