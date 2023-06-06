function parseRequestURL(sourceConfig) {
  const { url, params, data } = sourceConfig;
  if (!params && !data) {
    return sourceConfig;
  }

  const urlParams = params || data || {};
  const parsedUrl = url.replace(/:([a-zA-Z0-9]*)/g, (match, p1) => {
    if (urlParams[p1]) {
      const param = urlParams[p1];
      delete urlParams[p1];
      return param;
    }
    return match;
  });

  // eslint-disable-next-line no-param-reassign
  sourceConfig.url = parsedUrl;
  return sourceConfig;
}

export default parseRequestURL;
