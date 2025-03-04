import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// url object
const urlObject = new URL(urlString);

console.log(urlObject);

// format()
console.log(url.format(urlObject));

// import.meta.url
console.log(import.meta.url);

// fileURLtoPath()
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObject.search);

const params = new URLSearchParams(urlObject.search);
console.log(params.get('q'));
params.append('limit', '5');
params.delete('limit');
console.log(params);
