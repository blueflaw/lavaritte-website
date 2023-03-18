import React from 'react';
import {Helmet} from "react-helmet";

export const SEO = ({title, description, ogUrl, image, meta}) => {
  return (
    <Helmet title = {title}
          htmlAttributes={{ lang: "en" }}
          meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: "og:url",
          content: ogUrl
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "twitter:title",
          content: title
        },
        {
          property: "twitter:image",
          content: image
        },
        {
          property: "og:image",
          content: image
        },
      ]}
   />
  )
}
