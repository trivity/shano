import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Shano's Skips";
const BASE_URL = "https://shanosskips.com.au";

export default function SEO({ title, description, path = "/", children }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Skip Bin Hire Port Augusta SA`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {children}
    </Helmet>
  );
}
