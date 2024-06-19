const links = {
  state: {
    header: {
      id: 0,
      icon: 'Logo.svg',
      link: '/'
    },
    footer: {
      id: 0,
      icon: 'Logo_black.svg',
      link: '/'
    },
    other: [
      {
        id: 1,
        text: 'Our coffee',
        link: '/our-coffee'
      },
      {
        id: 2,
        text: 'For your pleasure',
        link: '/your-pleasure'
      },
      {
        id: 3,
        text: 'Contact us',
        link: '/contact'
      },
    ]
  },
  getters: {
    getHeaderLinks(state) {
      return {header: state.header, other: state.other}
    },
    getFooterLinks(state) {
      return {footer: state.footer, other: state.other}
    }
  }
}

export default links