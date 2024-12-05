import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  // media: {
  //   tina: {
  //     mediaRoot: "",
  //     publicFolder: "static",
  //   },
  // },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary")
      return pack.TinaCloudCloudinaryMediaStore
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blogs",
        path: "content/blog",
        match: {
          exclude: "{link,quote,image,video,status}/**/**"
        },
        defaultItem: () => {
          let now = new Date()
          now = now.toLocaleString('sv', {timeZoneName: 'short'}).replace("GMT","").split("−")
          now[1] = String(now[1] * 100).padStart(4, '0')
          now = now.join('-')
          return {
            title: "New Blog Post",
            date: now,
            draft: true,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date/Time",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "string",
            name: "images",
            label: "Images",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "string",
            name: "script",
            label: "Custom Javascript",
          }
        ],
      },
      {
        name: "link",
        label: "Links",
        path: "content/blog/link",
        defaultItem: () => {
          let now = new Date()
          now = now.toLocaleString('sv', {timeZoneName: 'short'}).replace("GMT","").split("−")
          now[1] = String(now[1] * 100).padStart(4, '0')
          now = now.join('-')
          return {
            title: "Link Post",
            date: now,
            type: "link",
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date/Time",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
          },
          {
            type: "string",
            name: "source",
            label: "Source",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "string",
            name: "images",
            label: "Images",
            list: true,
          },
        ],
      },
      {
        name: "quote",
        label: "Quotes",
        path: "content/blog/quote",
        defaultItem: () => {
          let now = new Date()
          now = now.toLocaleString('sv', {timeZoneName: 'short'}).replace("GMT","").split("−")
          now[1] = String(now[1] * 100).padStart(4, '0')
          now = now.join('-')
          return {
            date: now,
            type: "quote",
            cite: "Unknown",
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date/Time",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
          },
          {
            type: "string",
            name: "cite",
            label: "Citation",
          },
        ],
      },
      {
        name: "images",
        label: "Images",
        path: "content/blog/image",
        defaultItem: () => {
          let now = new Date()
          now = now.toLocaleString('sv', {timeZoneName: 'short'}).replace("GMT","").split("−")
          now[1] = String(now[1] * 100).padStart(4, '0')
          now = now.join('-')
          return {
            title: "New Image Post",
            date: now,
            type: "image",
            draft: true,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date/Time",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
          },
          {
            type: "string",
            name: "images",
            label: "Images",
            list: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
        ],
      },
      {
        name: "videos",
        label: "Videos",
        path: "content/blog/video",
        defaultItem: () => {
          let now = new Date()
          now = now.toLocaleString('sv', {timeZoneName: 'short'}).replace("GMT","").split("−")
          now[1] = String(now[1] * 100).padStart(4, '0')
          now = now.join('-')
          return {
            title: "New Video Post",
            date: now,
            type: "video",
            draft: true,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date/Time",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
          },
          {
            type: "string",
            name: "source",
            label: "Video Source",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
        ],
      },
      {
        name: "status",
        label: "Statuses",
        path: "content/blog/status",
        defaultItem: () => {
          let now = new Date()
          now = now.toLocaleString('sv', {timeZoneName: 'short'}).replace("GMT","").split("−")
          now[1] = String(now[1] * 100).padStart(4, '0')
          now = now.join('-')
          return {
            date: now,
            type: "status",
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date/Time",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
          },
          {
            type: "string",
            name: "emoji",
            label: "Emoji",
          },
        ],
      },
    ],
  },
});
