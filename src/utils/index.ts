import { darkTheme, lightTheme } from "@rainbow-me/rainbowkit"

export function DEFAULT_RAINBOWKIT_THEME_CONF(mode: "dark" | "light") {
     const theme = mode === "dark" ? darkTheme() : lightTheme()

     return {
          blurs: { ...theme.blurs },
          colors: {
               ...theme.colors,
               accentColor: "#9EE972",
               accentColorForeground: "black",
          },
          fonts: {
               body: theme.fonts.body,
          },
          radii: {
               ...theme.radii,
          },
          shadows: {
               ...theme.shadows,
          },
     }
}
