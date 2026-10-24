import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyPageSeo } from "./applyPageSeo";
import { resolvePageSeo } from "./routeSeo";
import { jsonLdForPath } from "./structuredData";
import { resolveClientOgImage } from "./clientImageResolver";

export default function RouteSeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const ogImage = resolveClientOgImage(pathname);
    const config = resolvePageSeo(pathname, ogImage);
    const jsonLd = config.noindex ? [jsonLdForPath("/")[0]] : jsonLdForPath(pathname, ogImage);
    applyPageSeo(config, jsonLd);
  }, [pathname]);

  return null;
}
