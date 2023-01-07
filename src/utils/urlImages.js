export const changeUrl = (url) => (`${url.replace(/[/]/g, 'ç').replace(/:/g, '~')}`);

export const fixUrl = (url) => (`${url.replace(/[ç]/g, '/').replace(/[~]/g, ':')}`);
