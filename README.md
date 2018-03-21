# GraphQL VueJS 2.0 Server

The server that is used for the examples on https://github.com/rainpure/graphql-vue.git.

It uses a very simple in-memory database, so if you restart the server or change the code, the data will reset.

## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/rainpure/graphql-vue-server.git
cd graphql-vue-server
npm install
```

## Starting the server

```
npm start (本地)
nohup npm run start & (服务器)
```

The server will run on port 8080. You can change this by editing `server.js`.


## Datebase

```
mysql -u root mysql
CREATE DATABASE graphql;
```

然后导入或执行graphql_2018-03-21.sql里的内容
