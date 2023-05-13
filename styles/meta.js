import Helmet from "react-helmet";

const title = "Title";
const description = "Description";
const image = "";

export const GlobalMeta = () => {
  return (
    <Helmet
      htmlAttributes={{ lang: "ru" }}
      defaultTitle={title}
      meta={[
        { name: "viewport", content: "width=device-width, user-scalable=no" },
        { name: "title", content: title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { name: "og:image", content: image },
        { name: "preconnect", content: image },
      ]}
      link={[
        { rel: "shortcut", href: "/favicon.ico" },
        { rel: "icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap",
        },
      ]}
    />
  );
};
