import React from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem'

export const Logo = ({
  size = '1rem',
  fill = 'currentColor',
  stroke = 'none',
}) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    strokeWidth="1"
    strokeLinecap="round"
  >
    <path
      d="M0 0h200L94 147l106 53H0L106 53 0 0z"
      fill={fill}
      stroke={stroke}
    />
  </svg>
)

export const MasterLogo = styled.a`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${ds.color('bright')};
  color: var(--theme-foreground);
  z-index: ${ds.z('mid')};
  cursor: pointer;
  transition: ${ds.get('motion.default')};
  mix-blend-mode: difference;
  max-width: 3rem;

  &:hover {
    color: ${ds.color('link')};
  }
`

export const MassiveLogo = styled.div`
  display: none;

  @media screen and (min-width: ${ds.bp('m')}) {
    display: block;
    color: var(--theme-foreground);
    background-color: var(--theme-background);
    opacity: 1;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${ds.z('mid')};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    min-height: 100vh;
    svg {
      width: 50vh;
    }
  }
`
