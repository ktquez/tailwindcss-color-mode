module.exports = function () {
  return function ({ addVariant, theme, e }) {
    const colorModes = theme('colorModes', ['dark'])
    const tplSelector = theme('selector', '.%cm-mode')

    colorModes.forEach(function (mode) {
      const selector = tplSelector.replace('%cm', mode)

      addVariant(mode, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${selector} .${e(`${mode}${separator}${className}`)}, ${selector}.${e(`${mode}${separator}${className}`)}`
        })
      })

      addVariant(`${mode}-hover`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${selector} .${e(`${mode}-hover${separator}${className}`)}:hover, ${selector}.${e(`${mode}-hover${separator}${className}`)}:hover`
        })
      })

      addVariant(`${mode}-focus`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${selector} .${e(`${mode}-focus${separator}${className}`)}:focus, ${selector}.${e(`${mode}-focus${separator}${className}`)}:focus`
        })
      })

      addVariant(`${mode}-active`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${selector} .${e(`${mode}-active${separator}${className}`)}:active, ${selector}.${e(`${mode}-active${separator}${className}`)}:active`
        })
      })

      addVariant(`${mode}-disabled`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${selector} .${e(`${mode}-disabled${separator}${className}`)}:disabled, ${selector}.${e(`${mode}-disabled${separator}${className}`)}:disabled`
        })
      })

      addVariant(`${mode}-group-hover`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${selector} .group:hover .${e(`${mode}-group-hover${separator}${className}`)}, ${selector}.group:hover .${e(`${mode}-group-hover${separator}${className}`)}`
        })
      })

      addVariant(`${mode}-focus-within`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${selector} .${e(`${mode}-focus-within${separator}${className}`)}:focus-within, ${selector}.${e(`${mode}-focus-within${separator}${className}`)}:focus-within`
        })
      })

      addVariant(`${mode}-even`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${selector} .${e(`${mode}-even${separator}${className}`)}:nth-child(even), ${selector}.${e(`${mode}-even${separator}${className}`)}:nth-child(even)`
        })
      })

      addVariant(`${mode}-odd`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${selector} .${e(`${mode}-odd${separator}${className}`)}:nth-child(odd), ${selector}.${e(`${mode}-odd${separator}${className}`)}:nth-child(odd)`
        })
      })

      addVariant(`${mode}-placeholder`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${selector} .${e(`${mode}-placeholder${separator}${className}`)}::placeholder, ${selector}.${e(`${mode}-placeholder${separator}${className}`)}::placeholder`
        })
      })
    })
  }
}
