import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resolveLegacyRedirect } from "@/seo/legacyRedirects";

export default function LegacyUrlRedirector() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = resolveLegacyRedirect(location.pathname, location.search);
    if (target && target !== location.pathname) {
      navigate(target, { replace: true });
    }
  }, [location.pathname, location.search, navigate]);

  return null;
}
