import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyPageSeo } from "./applyPageSeo";
import { resolvePageSeo } from "./routeSeo";
import { jsonLdForPath } from "./structuredData";

export default function RouteSeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = resolvePageSeo(pathname);
    const jsonLd = config.noindex ? [jsonLdForPath("/")[0]] : jsonLdForPath(pathname);
    applyPageSeo(config, jsonLd);
  }, [pathname]);

  return null;
}
