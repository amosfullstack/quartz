import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "MGODI⛏‍💎",
    pageTitleSuffix: " | DevOps and Software Engineer",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    
    locale: "en-US",
    baseUrl: "greensr2.netlify.app",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },

  
      colors: {
        lightMode: {
          //  light: "#faf8f8",
          //  lightgray: "#e5e5e5",
          //  gray: "#b8b8b8",
          //  darkgray: "#ffffffff",
          //  dark: "#ffffffff",
          //  secondary: "#284b63",
          //  tertiary: "#81e7cdff",
          //  highlight: "rgba(48, 241, 83, 0.15)",
          textHighlight: "#fff23688",

          light: "#faf8f8",           // Will be overridden by CSS to #FFF7ED
  lightgray: "#F5F0E6",       // Slightly darker cream for panels
  gray: "#D4C9B1",            // Warm gray for borders
  darkgray: "#5C5343",        // Warm brown for body text (good readability)
  dark: "#3A3429",            // Dark brown for headings
  secondary: "#8B7355",       // Warm brown for links
  tertiary: "#81e7cdff",      // Keep your teal accent
  highlight: "rgba(139, 115, 85, 0.2)", // Warm brown highlight
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },  

    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      //Plugin.CustomOgImages(),
    ],
  },
}

export default config
