# crawler

# Install
```bash
yarn install
```

# Development Run
```bash
yarn start
```

# start a new task
1. just write a task file, create a file screenshot.js to tasks dir. and write below...
```js
module.exports = async function(browser) {
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  browser.close();
}
```

2. send a command to http server.
```bash
curl -XPOST -d name=screenshot http://127.0.0.1:3000/task
```
