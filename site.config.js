const CONFIG = {
  // profile setting (required)
  profile: {
    name: "mdenesfe",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Entrepreneur",
    bio: "I usually try to build something.",
    email: "mdenesfe@gmail.com",
    linkedin: "mdenesfe",
    github: "mdenesfe",
    instagram: "",
  },
  projects: [
    {
      name: `mdenesfe`,
      href: "https://github.com/mdenesfe/mdenesfe.vercel.app",
    },
  ],
  // blog setting (required)
  blog: {
    title: "mdenesfe",
    description: "welcome to my blog!",
  },

  // CONFIG configration (required)
  link: "https://mdenesfe.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-playground.vercel.app/?share=jVNLTsMwEL2KZakCpAABiqiiUgkVJLpuBZtunGSauDh25Di0oeoJWHECrsgRGDsNbalK2fjz3vjNjGdmQSMVAw1oN-avY0lIYSoBt4uFPROSAk9SE5CjC99vHXk1OOOxSX9hMS9ywSpEJwLmDWpgbu4ETyTiEUgDumGYRQcGsmKHmpaF4ZOqrxCU1vc2bfXvuYbIcOV0lSgzuck-a5YjIdUMDw0Rsugl0aqUcV8JpZGfpdzALj3IWAJIaxZzJk4Tu2MAxxHXkQDCDLm8zudu8QhmkRo0qchlyyNGM1nkTKM58VsnHtmvcWM17HJAYze-IX-z4eHno4Jba5vlcix79tBUsn64Xc99hfqzIAdLYl0T4pyPpQvhHGPYCub_gUzQSZ1j298GrYCrq86YWD_ABnD1DAX-0RrOmE64HClshau1kOASHldNfXHW-cFdMwxzFlkPuYbTzd7ZyA8zCntfnx_v3fOwTnCVarNTj6rctmZBgwV1o0KDju97tJ4lGrTtJYawTGgwYaIAj0KmpnxU5XYQzczdUMcm_ZCFENPA6BKWHjUsRIsn0BEIuvwG",  The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
