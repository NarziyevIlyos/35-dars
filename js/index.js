tailwind.config = {
  theme: {
    container: {
      center: true,
      width: {
        DEFAULT: "100%",
        t: "600px",
        lt: "960px",
        d: "1312px",
      },
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      t: "640px",
      lt: "1000px",
      d: "1440px",
    },
    extend: {
      colors: {
        blue: "#3563E9",
        black: "#1A202C",
        gray: "#90A3BF",

        dark_gray: "#391400A3",
        redish: "#EF6D58",
        pink: "#B550F8",

        text_black: "#391400",
        bg_cream: "#fdf0e9",
        bg_dark_blue: "#28293e",
      },
    },
  },
};

