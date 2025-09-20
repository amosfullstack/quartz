Short answer: **I couldn’t find any public, confirmed examples of Quartz/Obsidian sites that openly run ad networks (Adsense/banners)**. I searched blogs, community posts, GitHub and public Quartz sites — most Quartz/Obsidian gardens are ad-free or use other monetization (Patreon, donations) and many authors value minimalism and performance. ([Hamatti Notes](https://notes.hamatti.org/technology/building-a-digital-garden-with-obsidian-and-quartz?utm_source=chatgpt.com "Building a digital garden with Obsidian and Quartz"))

Below is a clear summary of what I found + practical next steps if you want ads on a Quartz/Obsidian site.

# What I found (short)

- Lots of public Quartz + Obsidian example sites and write-ups (digital gardens, guides, walkthroughs). These show how Quartz converts Markdown → static HTML and how people deploy to Netlify/GitHub. Example sites: notes.hamatti.org, personal Quartz gardens. ([Hamatti Notes](https://notes.hamatti.org/technology/building-a-digital-garden-with-obsidian-and-quartz?utm_source=chatgpt.com "Building a digital garden with Obsidian and Quartz"))
    
- No obvious, public examples of Quartz/Obsidian sites showing Adsense or other third-party ad banners. Authors tend to avoid external ad scripts to keep speed and privacy. ([Coding Koi](https://codingkoi.com/garden/quartz-and-obsidian-for-static-sites.html?utm_source=chatgpt.com "Quartz and Obsidian for Static Sites - Idle Musings"))
    
- There is community discussion about adding Adsense support to Obsidian/Publish (verification, ads.txt and meta tags), and some constraints exist (Obsidian Publish historically blocks certain root files / meta methods). That can complicate putting Adsense on sites managed directly by Obsidian Publish. ([Obsidian Forum](https://forum.obsidian.md/t/add-google-adsense-support/98706?utm_source=chatgpt.com "Add Google Adsense Support - Feature requests"))
    

# Why ads are uncommon on Quartz/Obsidian sites

- Quartz generates static HTML from your vault; adding ad scripts is technically possible, but many owners avoid it because ads:
    
    - add third-party scripts (hurts privacy & performance),
        
    - require file/host control for ads.txt and verification,
        
    - sometimes conflict with the “digital garden” aesthetic.  
        Evidence: blog posts about speed tuning and theme customization. ([vxlabs](https://vxlabs.com/2024/11/23/speed-up-obsidian-quartz-page-loads/?utm_source=chatgpt.com "Speed up Obsidian Quartz page loads - vxlabs"))
        

# If you want ads on a Quartz/Obsidian site — options & steps

There are two realistic ways to run ads:

1. **Self-host the Quartz build on Netlify / Vercel / your host** (recommended)
    
    - Build with `npx quartz build` from your vault and deploy the generated static files to Netlify/Vercel/GitHub Pages. You control the site root, so you can add:
        
        - `ads.txt` at the site root,
            
        - Adsense verification meta tag or verification file,
            
        - ad script tags in the layout/template (header/footer).
            
    - This is the simplest path to add ads because you own the generated HTML and hosting. Many Quartz users use Netlify for deployment. ([Hamatti Notes](https://notes.hamatti.org/technology/building-a-digital-garden-with-obsidian-and-quartz?utm_source=chatgpt.com "Building a digital garden with Obsidian and Quartz"))
        
2. **Obsidian Publish (official) — harder / limited**
    
    - Obsidian Publish may limit some verification methods and file types (there are forum requests about Adsense support). If you use Obsidian Publish you might need to proxy or integrate the published content into a larger site (Netlify proxy) to host ads. Example migration/proxy writeups show this approach. ([Obsidian Forum](https://forum.obsidian.md/t/add-google-adsense-support/98706?utm_source=chatgpt.com "Add Google Adsense Support - Feature requests"))
        

# Practical snippet — how to inject Adsense into a Quartz template

If you self-host the Quartz output, edit the template/layout (e.g., the HTML layout file where `<head>` and footer live) and add the Adsense script and ad unit. Example (put into your site template, not raw Markdown):

```html
<!-- in head (for verification or script load) -->
<meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXX"> <!-- optional, some verifications require it -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<!-- in post template where you want an ad -->
<div class="my-ad">
  <!-- example responsive ad unit (replace data-ad-client and data-ad-slot) -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
       data-ad-slot="YYYYYYYYYY"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

Notes:

- Put these tags in Quartz’s layout templates (so your Markdown stays clean). Quartz templates compile to static HTML on build.
    
- Add `ads.txt` to your site root (Netlify / Vercel publish root) to satisfy ad network requirements.
    
- Test with your ad network’s verification tools.
    

# Caveats & things to check

- If using **Obsidian Publish** directly, check whether Publish allows placing `ads.txt` and the specific verification method you need — community reports show this can be a blocker. You may need to host the generated site yourself instead. ([Obsidian Forum](https://forum.obsidian.md/t/add-google-adsense-support/98706?utm_source=chatgpt.com "Add Google Adsense Support - Feature requests"))
    
- Ads hurt page speed; Quartz sites often aim to be lightweight. Consider performance and privacy tradeoffs (and use lazy loading or place ads carefully). ([vxlabs](https://vxlabs.com/2024/11/23/speed-up-obsidian-quartz-page-loads/?utm_source=chatgpt.com "Speed up Obsidian Quartz page loads - vxlabs"))
    

# Want me to do one of these for you?

I can:

- Try a deeper search for **specific** public Quartz sites that run ads (look through GitHub repos, Netlify sites, or web crawls), or
    
- Generate a tiny **Quartz template example** that includes Bootstrap + an ad slot and instructions to deploy on Netlify (so you can test locally and then enable Adsense).
    

Which would you prefer? (If you want the template, I’ll give the exact files and where to paste the ad snippet.)