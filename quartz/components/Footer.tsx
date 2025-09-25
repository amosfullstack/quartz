import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
//import { version } from "../../package.json"
//import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({  }: QuartzComponentProps) => {
    //const year = new Date().getFullYear()
    //const links = opts?.links ?? []
    return (
      //I added this footer
<footer style="background:#222; color:#ddd; text-align:center; padding:20px; font-size:14px;">
  <p>© 2025 Amos Samwel | All Rights Reserved</p>
  <p>
    <span>Contacts : </span>
    <a href="https://wa.me/255710038756" target="_blank" style="color:#25D366; font-weight:bold; text-decoration:none;">
      WhatsApp
    </a> | 
    <a href="mailto:amossamwel253@gmail.com" style="color:#4da6ff; font-weight:bold; text-decoration:none;">
      Email
    </a>
  </p>
  </footer>


    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
