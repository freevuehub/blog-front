import { IThemeSet } from '../types'

export const breakPoint = {
  desktop: '1920px',
  tabletPro: '1024px',
  tabletAir: '840px',
  mobile: '640px',
}

const primary = '#6bb3b8'

export const colorSet: {
  primary: string
  light: IThemeSet
  dark: IThemeSet
} = {
  primary,
  light: {
    white: '#ffffff',
    primary,
    background: {
      app: '#ffffff',
      content: '#ffffff',
    },
    text: '#37352f',
    shadow: {
      new: '5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff',
      material: `
        0 2px 4px -1px rgba(0, 0 ,0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12);
      `,
      flat: 'unset',
      background: '25px 25px 50px #bcbcbc, -25px -25px 50px #fefefe',
    },
    border: {
      color: '#e6e6e6',
    },
    table: {
      th: '#263747',
      td: '#263747',
      background: '#32329005',
      border: '#D7E2EB',
    },
    contributions: {
      phase0: '#1e1e1e',
      phase1: '#253c3e',
      phase2: '#3d6467',
      phase3: '#51878b',
    }
  },
  dark: {
    white: '#ffffff',
    primary,
    background: {
      app: '#121212',
      content: '#1e1e1e',
    },
    text: '#ffffff',
    shadow: {
      new: '5px 5px 10px #0f0f0f, -5px -5px 10px #151515',
      material: `
        0 2px 4px -1px rgba(0, 0 ,0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12);
      `,
      flat: 'unset',
      background: '25px 25px 50px #0f0f0f, -25px -25px 50px #151515;',
    },
    border: {
      color: '#1c1c1c',
    },
    table: {
      th: '#ffffff',
      td: '#b2c0cc',
      background: '#202B3D',
      border: '#172334',
    },
    contributions: {
      phase0: '#1e1e1e',
      phase1: '#253c3e',
      phase2: '#3d6467',
      phase3: '#51878b',
    }
  },
}
