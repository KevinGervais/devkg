const plugin = require("tailwindcss/plugin")


function withOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      trans: "transparent",
      white: "#ffffff",
      black: "#000000",
      facebook: "#4267B2",
      paypal: "#0070BA",
      instagram: "#E1306C",
      google: "#F4B400",
      rating: "#FBC02D",
      primary: {
        "50":  withOpacity("--tw-primary-50"),
        "100": withOpacity("--tw-primary-100"),
        "200": withOpacity("--tw-primary-200"),
        "300": withOpacity("--tw-primary-300"),
        "400": withOpacity("--tw-primary-400"),
        "500": withOpacity("--tw-primary-500"),
        "600": withOpacity("--tw-primary-600"),
        "700": withOpacity("--tw-primary-700"),
        "800": withOpacity("--tw-primary-800"),
        "900": withOpacity("--tw-primary-900"),
      },
      secondary: {
        "50":  withOpacity("--tw-secondary-50"),
        "100": withOpacity("--tw-secondary-100"),
        "200": withOpacity("--tw-secondary-200"),
        "300": withOpacity("--tw-secondary-300"),
        "400": withOpacity("--tw-secondary-400"),
        "500": withOpacity("--tw-secondary-500"),
        "600": withOpacity("--tw-secondary-600"),
        "700": withOpacity("--tw-secondary-700"),
        "800": withOpacity("--tw-secondary-800"),
        "900": withOpacity("--tw-secondary-900"),
      },
      tertiary: {
        "50":  withOpacity("--tw-tertiary-50"),
        "100": withOpacity("--tw-tertiary-100"),
        "200": withOpacity("--tw-tertiary-200"),
        "300": withOpacity("--tw-tertiary-300"),
        "400": withOpacity("--tw-tertiary-400"),
        "500": withOpacity("--tw-tertiary-500"),
        "600": withOpacity("--tw-tertiary-600"),
        "700": withOpacity("--tw-tertiary-700"),
        "800": withOpacity("--tw-tertiary-800"),
        "900": withOpacity("--tw-tertiary-900"),
      },
      grey: {
        "50": withOpacity("--tw-grey-50"),
        "100": withOpacity("--tw-grey-100"),
        "200": withOpacity("--tw-grey-200"),
        "300": withOpacity("--tw-grey-300"),
        "400": withOpacity("--tw-grey-400"),
        "500": withOpacity("--tw-grey-500"),
        "600": withOpacity("--tw-grey-600"),
        "700": withOpacity("--tw-grey-700"),
        "750": withOpacity("--tw-grey-750"),
        "800": withOpacity("--tw-grey-800"),
        "850": withOpacity("--tw-grey-850"),
        "900": withOpacity("--tw-grey-900"),
      },
      error: {
        "50":  withOpacity("--tw-error-50"),
        "100": withOpacity("--tw-error-100"),
        "200": withOpacity("--tw-error-200"),
        "300": withOpacity("--tw-error-300"),
        "400": withOpacity("--tw-error-400"),
        "500": withOpacity("--tw-error-500"),
        "600": withOpacity("--tw-error-600"),
        "700": withOpacity("--tw-error-700"),
        "800": withOpacity("--tw-error-800"),
        "900": withOpacity("--tw-error-900"),
      },
      success: {
        "50":  withOpacity("--tw-success-50"),
        "100": withOpacity("--tw-success-100"),
        "200": withOpacity("--tw-success-200"),
        "300": withOpacity("--tw-success-300"),
        "400": withOpacity("--tw-success-400"),
        "500": withOpacity("--tw-success-500"),
        "600": withOpacity("--tw-success-600"),
        "700": withOpacity("--tw-success-700"),
        "800": withOpacity("--tw-success-800"),
        "900": withOpacity("--tw-success-900"),
      },
      info: {
        "50":  withOpacity("--tw-info-50"),
        "100": withOpacity("--tw-info-100"),
        "200": withOpacity("--tw-info-200"),
        "300": withOpacity("--tw-info-300"),
        "400": withOpacity("--tw-info-400"),
        "500": withOpacity("--tw-info-500"),
        "600": withOpacity("--tw-info-600"),
        "700": withOpacity("--tw-info-700"),
        "800": withOpacity("--tw-info-800"),
        "900": withOpacity("--tw-info-900"),
      },
      warning: {
        "50":  withOpacity("--tw-warning-50"),
        "100": withOpacity("--tw-warning-100"),
        "200": withOpacity("--tw-warning-200"),
        "300": withOpacity("--tw-warning-300"),
        "400": withOpacity("--tw-warning-400"),
        "500": withOpacity("--tw-warning-500"),
        "600": withOpacity("--tw-warning-600"),
        "700": withOpacity("--tw-warning-700"),
        "800": withOpacity("--tw-warning-800"),
        "900": withOpacity("--tw-warning-900"),
      },     
    },
    extend: {
      fontFamily: {
        'title': ["aclonica"],
      },
      fontSize: {
        "inherit": "inherit"
      },
      boxShadow: {
        "1": "0 0 4px var(--grey-300)",
        "2": "0 0 8px var(--grey-300)",
      },
      animation: {
        "ripple": "ripple 600ms linear",
      },
      screens: {
        "touch": { "raw": "(pointer: coarse)" },
        "mouse": { "raw": "(pointer: fine)" },
        "2xl-max": {"max": "1535px"},
        "xl-max": {"max": "1279px"},
        "lg-max": {"max": "1023px"},
        "md-max": {"max": "767px"},
        "sm-max": {"max": "639px"},
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        }
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          circle: (value) => ({
            borderRadius: "9999px",
            width: `${value/ 4}rem`,
            height: `${value/ 4}rem`,

          }),
        },
        { values: [1,2,2.5,3,4,5,6,7,8,9,10] }
      )
    }),
    function ({ addVariant }) {
      addVariant("children", "& > *")
    },
    function ({ addVariant }) {
      addVariant("all", "& *")
    },
    function ({ addVariant }) {
      addVariant("hover-children", "&:hover > *")
    },
    function ({ addVariant }) {
      addVariant("active-children", "&:active > *")
    },
    function ({ addVariant }) {
      addVariant("first-children", "& > *:first-child")
    },
    function ({ addVariant }) {
      addVariant("not-first-children", "& > *:not(:first-child)")
    },
    function ({ addVariant }) {
      addVariant("not-last-children", "& > *:not(:last-child)")
    },
    function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)")
    },
    function ({ addVariant }) {
      addVariant("last-children", "& > *:last-child")
    },
    function ({ addVariant }) {
      const childList = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "div",
        "iframe",
        "p",
        "span",
        "blockquote",
        "pre",
        "a",
        "abbr",
        "code",
        "img",
        "small",
        "strong",
        "sub",
        "sup",
        "b",
        "u",
        "i",
        "fieldset",
        "label",
        "legend",
        "canvas",
        "embed",
        "footer",
        "header",
        "menu",
        "nav",
        "output",
        "button",
        "section",
        "audio",
        "video",
        "svg",
        "input",
        "textarea",
        ".address-field",
        ".checkbox",
        ".checkbox-list",
        ".fieldset",
        ".files-output",
        ".full-gallery",
        ".gallery",
        ".fa-icon",
        ".input",
        ".keyword-list",
        ".quote",
        ".tabs",
        ".tab",
        ".rating",
        ".review-list",
        ".select",
        ".textarea",
        ".textarea-content",
        ".DraftEditor-root",
        ".katex"
      ]
      childList.forEach(key => {
        addVariant(`children-${key}`, `& > ${key}`)
        addVariant(`in-${key}`, `& ${key}`)
        addVariant(`hover-children-${key}`, `&:hover > ${key}`)
        addVariant(`active-children-${key}`, `&:active >  ${key}`)
        addVariant(`hover-in-${key}`, `&:hover ${key}`)
        addVariant(`active-in-${key}`, `&:active  ${key}`)
      })
    },
    plugin(function({ matchUtilities }) {
      matchUtilities(
        {
          "center-bg-img": (value) => ({
          "backgroundImage": `url("${value}")`,
          "backgroundPosition": "center",
          "backgroundSize": "cover",
          "backgroundRepeat": "no-repeat",
          }),
        },
      )
    }),
    plugin(function({ matchUtilities, theme }) {
      const shadeMap = {}
      const allTypes = ["bg", "text", "border"]
      const whiteTrans = ["white", "trans"]
      const allColors = ["primary", "secondary","tertiary", "grey", "error", "success", "info", "warning"]
      const allShades = ["50","100","200","300","400","500","600","700","750","800","850","900"]
      allTypes.forEach(type => 
        allColors.forEach(color => {
          allShades.filter(shade => color=== "g" ? true : shade !== "750" && shade !== "850")
          .forEach(shade => {
            shadeMap[`${type}-${color}-${shade}`] = `${type}-${color}-${shade}`
          })
          
          whiteTrans.forEach(color => allColors.forEach(hoverColor => (
            shadeMap[`${type}-${color}-${hoverColor}`] = `${type}-${color}-${hoverColor}`
          )))
        })
        )
      matchUtilities({"shade": (data) => {
        const [shortType, color, shadeOrHoverColor] = data.split("-")
        let increm = [100, 200]
        let hoverColor = color

        const isWhiteTrans = color === "white" ||color === "trans"
        const shadeNum = Number(isWhiteTrans  ? 0 : shadeOrHoverColor)
        const isDecreasing = shadeNum >= 700
        if (shadeNum === 0) {
          increm = [50, 100]
        }
        if (shadeNum === 50 || shadeNum === 750) {
          increm = [50, 150]
        }
        if (shadeNum === 850) {
          increm = [50, 100]
        }
        if (isDecreasing) {
          increm = increm.map(num => -num)
        }
        if (isWhiteTrans) {
          hoverColor = shadeOrHoverColor
        }
        const type =  {
          bg: "backgroundColor",
          text: "color",
          border: "border-color"
        }[shortType]
        return {
          [type]: theme(`colors.${color}${isWhiteTrans ? "": `.${shadeOrHoverColor}`}`),
          "@media (pointer: fine)": {
            "&:hover": {
              [type]: theme(`colors.${hoverColor}.${shadeNum + increm[0]}`),
            },
            "&:active": {
              [type]: theme(`colors.${hoverColor}.${shadeNum + increm[1]}`),
            },
          },
          "@media (pointer: coarse)": {
            "&:active": {
              [type]: theme(`colors.${hoverColor}.${shadeNum + increm[1]}`),
            },
          }
        }
      },
    },
    {
      values: shadeMap
    })
  }),
        
    plugin(function({ matchUtilities, theme }) {
      const bubbleMap = {}
      const whiteTrans = ["white", "trans"]
      const allColors = ["primary", "secondary","tertiary", "grey", "error", "success", "info", "warning"]
      const allShades = ["50","100","200","300","400","500","600","700","750","800","850","900"]
      allColors.forEach(color => {
        allShades.filter(shade => color=== "g" ? true : shade !== "750" && shade !== "850")
        .forEach(shade => {
          bubbleMap[`${color}-${shade}`] = `${color}-${shade}`
        })
        
        whiteTrans.forEach(color => allColors.forEach(hoverColor => (
          bubbleMap[`${color}-${hoverColor}`] = `${color}-${hoverColor}`
        )))
      })
      matchUtilities({ "bubble": (data) => {
          const [color, shadeOrHoverColor] = data.split("-")
          let increm = [100, 200]
          let hoverColor = color

          const isWhiteTrans = color === "white" ||color === "trans"
          const shadeNum = Number(isWhiteTrans  ? 0 : shadeOrHoverColor)
          const isDecreasing = shadeNum >= 700
          if (shadeNum === 0) {
            increm = [50, 100]
          }
          if (shadeNum === 50 || shadeNum === 750) {
            increm = [50, 150]
          }
          if (shadeNum === 850) {
            increm = [50, 100]
          }
          if (isDecreasing) {
            increm = increm.map(num => -num)
          }
          if (isWhiteTrans) {
            hoverColor = shadeOrHoverColor
          }
          
          return {
            backgroundColor: theme(`colors.${color}${isWhiteTrans ? "": `.${shadeOrHoverColor}`}`),
            "@media (pointer: fine)": {
              "&:hover": {
                backgroundColor: theme(`colors.${hoverColor}.${shadeNum + increm[0]}`),
              },
            },
          }
        },
      },
      {
        values: bubbleMap
      })
    }),
    plugin(function({ addComponents }) {
      addComponents({
        ".center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        ".row": {
          display: "flex",
          flexDirection: "row",
        },
        ".row-middle": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        ".col": {
          display: "flex",
          flexDirection: "column",
        },
        ".col-center": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        },
        ".center-bg-img": {
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        },
        ".center-img": {
          objectFit: "cover",
          objectPosition: "center",
        },
        ".full-absolute": {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        },
        ".full-fixed": {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        },
        ".clickable": {
          userSelect: "none",
          cursor: "pointer",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          scrollbarWidth: "none",
        },
      })
    })
  ]
}
