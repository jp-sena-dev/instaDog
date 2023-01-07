export const changeUrl = (url) => (`${url.replace(/[/]/g, '[').replace(/:/g, ']')}`);

export const fixUrl = (url) => (`${url.replace(/[[]/g, '/').replace(/]/g, ':')}`);
