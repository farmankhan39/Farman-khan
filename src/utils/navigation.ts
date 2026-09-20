export const getCleanPath = (): string => {
  // Check if redirected via 404.html query parameter (?p=/about)
  const params = new URLSearchParams(window.location.search);
  const p = params.get("p");
  if (p) {
    const cleanP = p.replace(/\/$/, "") || "/";
    window.history.replaceState(null, "", cleanP);
    return cleanP;
  }
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  if (currentPath.toLowerCase().endsWith("/farman-khan")) {
    return "/";
  }
  // Remove repo name prefix if present
  const cleanPath = currentPath.replace(/^\/Farman-khan/i, "") || "/";
  return cleanPath;
};

export const navigateTo = (url: string) => {
  // If external link or protocol
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  ) {
    window.open(url, "_blank");
    return;
  }

  // If hash link on the homepage
  if (url.startsWith("#")) {
    const current = getCleanPath();
    if (current !== "/") {
      window.history.pushState(null, "", "/" + url);
      window.dispatchEvent(new Event("popstate"));
      setTimeout(() => {
        const id = url.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const id = url.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  window.history.pushState(null, "", url);
  window.dispatchEvent(new Event("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
};
