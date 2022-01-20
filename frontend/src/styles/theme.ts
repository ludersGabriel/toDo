
export const lightTheme = {
  colors: {
    background: '#F5F5F5',
    text: 'black',
    primary: '#892CDC',
    subHeader: 'rgba(31, 31, 42, 0.4)',
    buttonDarkBackground: '#1F1F2A',
    buttonLightBackground: '#E0E0E1',
    buttonDarkText: 'white',
    buttonLightText: 'black',
    header: '#E0E0E1',
    footer: '#E0E0E1'
  },
  girl: './girl4.png',
  logoFill: '#1F1F2A'
}

export type Theme = typeof lightTheme;

export const darkTheme: Theme = {
  colors: {
    background: '#1F1F2A',
    text: 'white',
    primary: '#892CDC',
    subHeader: 'rgba(245, 245, 245, 0.4)',
    buttonDarkBackground: '#F5F5F5;',
    buttonDarkText: 'black',
    buttonLightBackground: 'rgba(245, 245, 245, 0.1)',
    buttonLightText: 'white',
    header: '#34343E',
    footer: '#34343E'
  },
  girl: './girlDark.png',
  logoFill: 'white'
}
