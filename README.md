# VAMTIGER Get Remote Stylesheet Paths
[VAMTIGER VAMTIGER Get Remote Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-remote-stylesheet-paths) will return a list of remote stylesheet paths for defined HTML document text.

## Installation
[VAMTIGER VAMTIGER Get Remote Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-remote-stylesheet-paths) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-get-remote-stylesheet-paths
```
or
```bash
yarn add vamtiger-get-remote-stylesheet-paths
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER VAMTIGER Get Remote Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-remote-stylesheet-paths):
```javascript
import getRemoteStylesheetPaths from 'vamtiger-get-remote-stylesheet-paths';
```
or
```javascript
const getRemoteStylesheetPaths = require('vamtiger-get-remote-stylesheet-paths').default;
```

[VAMTIGER VAMTIGER Get Remote Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-remote-stylesheet-paths) will return a list of remote stylesheet paths for defined HTML document text.
```javascript
const getRemoteStylesheetPaths = require('vamtiger-get-remote-stylesheet-paths').default

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
    <link href="https://remote/stylesheet/link/index.css" rel="stylesheet">
    <link href="local/stylesheet/link/index.css" rel="stylesheet">
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>
`;
const remoteStylesheetLinks = getRemoteStylesheetPaths({ html })
    // .then(handleResult)
    // .catch(handleError); 
/* [
'https://remote/stylesheet/link/index.css'
] */
```

[VAMTIGER VAMTIGER Get Remote Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-remote-stylesheet-paths) can also be more conveniently referenced inside an async function.
```javascript
const getRemoteStylesheetPaths = require('vamtiger-get-remote-stylesheet-paths').default

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
    <link href="https://remote/stylesheet/link/index.css" rel="stylesheet">
    <link href="local/stylesheet/link/index.css" rel="stylesheet">
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>
`;

async function someAsyncFunction() {
    const remoteStylesheetLinks = await getRemoteStylesheetPaths({ html });
/* [
'https://remote/stylesheet/link/index.css'
] */
}
```