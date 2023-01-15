const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      trans: "transparent",
      white: "#ffffff",
      black: "#000000",
      parent: "inherit",
      primary: {
        50:  "#e0f2f1",
        100: "#b2dfdb",
        200: "#80cbc4",
        300: "#4db6ac",
        400: "#26a69a",
        500: "#009688",
        600: "#00897b",
        700: "#00796b",
        800: "#00695c",
        900: "#004d40",
      },
      secondary: {
        50: "#eceff1",
        100: "#cfd8dc",
        200: "#b0bec5",
        300: "#90a4ae",
        400: "#78909c",
        500: "#607d8b",
        600: "#546e7a",
        700: "#455a64",
        800: "#37474f",
        900: "#263238",
      },
      tertiary: {
       50:  "#fff8e1",
       100: "#ffecb3",
       200: "#ffe082",
       300: "#ffd54f",
       400: "#ffca28",
       500: "#ffc107",
       600: "#ffb300",
       700: "#ffa000",
       800: "#ff8f00",
       900: "#ff6f00",
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
      error: {
        50: "#FFEBEE",
        100: "#fce2d5",
        200: "#fac0ac",
        300: "#f19380",
        400: "#e3695e",
        500: "#d12e2e",
        600: "#b3212e",
        700: "#96172d",
        800: "#790e2a",
        900: "#640828",
      },
      success: {
        100: "#e4f9d3",
        200: "#c4f4aa",
        300: "#94de79",
        400: "#66be52",
        500: "#309324",
        600: "#1d7e1a",
        700: "#126916",
        800: "#0b5515",
        900: "#064614",
      },
      info: {
        100: "#c9fbef",
        200: "#95f8e8",
        300: "#5eebe0",
        400: "#36d8d8",
        500: "#00afbf",
        600: "#0089a4",
        700: "#006789",
        800: "#004a6e",
        900: "#00355b",
      },
      warning: {
        50: "#fffde7",
        100: "#fff9c4",
        200: "#fff59d",
        300: "#fff176",
        400: "#ffee58",
        500: "#ffeb3b",
        600: "#fdd835",
        700: "#fbc02d",
        800: "#f9a825",
        900: "#f57f17",
      }
    },
    extend: {
      fontSize: {
        "inherit": "inherit"
      },
      boxShadow: {
        "1": "0 0 4px #e0e0e0",
        "2": "0 0 8px #e0e0e0",
      },
      animation: {
        "ripple": "ripple 600ms linear",
        "echo": "ripple 3s ease-out infinite",
        "echo-delay": "ripple 3s ease-out 1s infinite"
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
        addVariant(`in-any`, `& *`)
        addVariant(`in-${key}`, `& ${key}`)
        addVariant(`not-${key}`, `& *:not(${key})`)
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
