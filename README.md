# ratethis
A rating application built with [React](https://reactjs.org) library on [NextJs](https://nextjs.org) framework [antd](https://ant.design/).
The states are managed with [Redux](https://redux.js.org)

## How to start the server

```bash
# Run this line if it's the first time you try to build
npm i

npm run dev
```

## How to deploy?

1. Include the following scripts to the package.json file:
    ```js
      "scripts": {
        "build": "next build",
        "now-build": "next build"
      }
    ```

1. Include now.json to root folder
    ```js
      {
        "version": 2,
        "builds": [{ "src": "package.json", "use": "@now/next" }]
      }
    ```

2. Include next.config.js to root folder
    ```js
      module.exports = {
        target: 'serverless'
      }
    ```

3. 
    ```bash
    now
    ```
 or build from
 [▲ZEIT Now](https://zeit.co/now)


