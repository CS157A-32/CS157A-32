###### Usage
- 'npm install' after each pull
- 'npm run dev' to concurrently start server and client environments

###### Config
- Code was refactored to conceal mysql login.
- To test code with your own local mysql server:
1. In /src/server/ => create a folder named "config"
2. In the newly created config folder, create "index.js"
3. copy following into index.js:
```javascript
module.exports = {
  mysql: {
    host: "localhost",
    user: "root",
    password: "rootadmin",
    database: "collegebball"
  }
};
```
