export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      enabled: true,
      multipart: true,
      formLimit: "2gb",
      jsonLimit: "2gb",
      textLimit: "2gb",
      timeout: 600000,
      formidable: {
        maxFileSize: 2 * 1024 * 1024 * 1024,
      },
    },
  },
  {
    name: "strapi::responseTime",
    config: {
      timeLimit: 600000,
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
