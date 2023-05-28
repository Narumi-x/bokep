document.addEventListener('alpine:init', () => {
  Alpine.store('darkMode', {
    init() {
      const isDark = window.localStorage.getItem('hugo-theme-dream-is-dark')

      if (isDark) {
        this.on = isDark
      } else {
        this.mql.addEventListener('change', (event) => {
          this.on = event.matches ? 'y' : 'n'
        })

        this.on = 'auto'
      }
    },

    mql: window.matchMedia('(prefers-color-scheme: dark)'),
    on: 'n',

    class() {
      if (this.on === 'auto') {
        return this.mql.matches ? 'dark' : 'light'
      } else {
        return this.on === 'y' ? 'dark' : 'light'
      }
    },
    theme() {
      if (this.on === 'auto') {
        return this.mql.matches ? window.darkTheme : window.lightTheme
      } else {
        return this.on === 'y' ? window.darkTheme : window.lightTheme
      }
    },

    iconMap: {
      n: 'sunny',
      y: 'moon',
      auto: 'desktop',
    },
    icon() {
      return this.iconMap[this.on]
    },

    statusMap: {
      sunny: 'n',
      moon: 'y',
      desktop: 'auto',
    },
    toggle(icon) {
      const on = this.statusMap[icon]

      this.on = on
      if (on === 'auto') {
        window.localStorage.removeItem('hugo-theme-dream-is-dark')
      } else {
        window.localStorage.setItem('hugo-theme-dream-is-dark', on)
      }
    },
  })
})
