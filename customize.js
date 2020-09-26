/* Customization Guide available on:
  https://gatsby-blog-mdx.now.sh/2020/05/4-customize/
  ======================================== */
const config = {
  /* Site
  ========================================= */
  title: `デフテックの語学旅`,          // Displayed in header
  description: `90dbの感音性難聴を持つ25歳の社会人の雑記ブログ　語学、旅行、聴覚障害について、エンジニア関係のことについて書きなぐってます`,     // Site description
  maxWidth: "768px",                  // Max width of website
  enableAbout: true,                  // Enables about page
  siteUrl: `https://aki25.com`,       // For sitemap & RSS feed
  useScrollIndicator: true,           // Use scroll indicator on top of screen in posts

  /* Profile
  ========================================= */
  author: `Aki`,                             // Name shows on profile
  profileDescription: "語学学習、旅行、ピアノが趣味",    // Shows under author name
  profileImageName: `180121_akio.jpg`,               // Place profile.jpg/.jpeg/.png in _assets folder
  location: "Tokyo, Shibuya",                        // Location under profileDescription. "" --> disabled
  footerLink: "",                                    // Link to page when you click footer name

  /* Social Media Links
      accountName & emailAddress: leave blank ("") to disable
      showHeaderIcon: shows social media icon in header. When true, must have account name set
  ========================================= */
  socialMediaLinks: {
    email: { emailAddress: "akio9095@yahoo.co.jp", showHeaderIcon: false },
    github: { accountName: "", showHeaderIcon: false },
    facebook: { accountName: "inoueakio", showHeaderIcon: false },
    instagram: { accountName: "", showHeaderIcon: false },
    twitter: { accountName: "@Akii0205", showHeaderIcon: false },
    linkedIn: { accountName: "", showHeaderIcon: false },   // Use URL after "linkedin.com/"
    medium: { accountName: "", showHeaderIcon: false },   // Use URL after "medium.com/@"
  },

  /* Social Media Share Buttons--available below every post
  ========================================= */
  shareButtons: { email: true, facebook: true, twitter: true, reddit: false, linkedIn: false },

  /* Comments
  ========================================= */
  comments: {
    facebook: { enabled: true, appId: "" },      // appId: optional, but used to moderate fb comments
    disqus: { enabled: false, shortName: "" },   // Check your shortName on https://disqus.com
    utterances: { enabled: false, repoUrl: "" }, // i.e. 'ellismin/gatsby-blog-mdx'
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: "light",                      // Options: dark / light -- applied to first visitors
  showTimeToRead: false,                      // Shows time to read for each post in main page
  breakCodeLines: false,                      // Breaks long code lines instead of having horizontal scroll
  faviconSrc: `_assets/logo.gif`,        // Favicon
  gaTrackingId: ``,                           // Your google analytics tracking id--i.e. UA-*****
  googleAdSenseId: ``,                        // Your google AdSense client id--i.e. ca-pub-****
}

module.exports = config
