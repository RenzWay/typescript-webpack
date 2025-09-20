interface PathSegment {
  resource: string | null;
  id: string | null;
  verb?: string | null;
}

function getPathname(): string {
  return location.hash.replace("#", "") || "/";
}

function extractPathname(pathname: string): PathSegment {
  const splitPath = pathname.split("/");

  return {
    resource: splitPath[1] || null,
    id: splitPath[2] || null,
    verb: splitPath[3] || null,
  };
}

function constructSegmentPathname(segment: PathSegment): string {
  let pathname = "";
  if (segment.resource) {
    pathname = pathname.concat(`/${segment.resource}`);
  }

  if (segment.id) {
    pathname = pathname.concat(`/:id`);
  }

  if (segment.verb) {
    pathname = pathname.concat(`/${segment.verb}`);
  }

  return pathname || "/";
}

export function getActivePathname(): string {
  const path = getPathname();
  const segment = extractPathname(path);
  return constructSegmentPathname(segment);
}
