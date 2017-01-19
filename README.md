![alt text][logo]

[logo]: logo.png "Vue SSR"
# Vue 2 Starter Kit Server Side Rendering

First of all

Please Install:
- Node JS `v6.9.x`
- NPM `v2.10.x`
- Webpack Global `v1.13.x`

## change config.js.env to config.js

and setup your API

``` javascript

const config = {
  isDev: true,
  username: '', // your username API
  password: '', // your password API
  APIDev: '', // your base URL API development
  APIProd: '' //your base URL API production
}

```

## Run this app

``` bash
clone this project
$ npm i

dev
$ npm run dev

build
$ npm run build

test server renderer
$ npm start

to production
$ npm run start:production
```
