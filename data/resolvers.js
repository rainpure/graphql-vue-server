import mysql from 'mysql';

// 无数据库环境直接用mock的数据
// import authorsList from '../mock/authorsList'
// import postsList from '../mock/postsList'

// 数据库环境
let postsList = [];
let authorsList = [];

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'graphql'
});
connection.connect();

// 查询author
const queryAuthor = () => {
    let querySql = 'SELECT * FROM `authors` LIMIT 0,1000';
    connection.query(querySql, function (error, results, fields) {
        if (error) {
            throw error;
        }
        authorsList = results;
    });
}

const addAuthorSQL = (data) => {
    let querySql = 'INSERT INTO authors (firstName) VALUES(?)';
    connection.query(querySql, data, function (error, result) {
        if (error) {
            return console.error(error.message);
        }
    });
}

// 查询post
const queryPost = () => {
    let querySql = 'SELECT * FROM `posts` LIMIT 0,1000';
    connection.query(querySql, function (error, results, fields) {
        if (error) {
            throw error;
        }
        postsList = results;
    });
}

const addPostSQL = (data) => {
    let querySql = 'INSERT INTO posts (title, digest, author) VALUES(?, ?, ?)';
    connection.query(querySql, data, function (error, result) {
        if (error) {
            return console.error(error.message);
        }
        init();
    });
}

// 修改post
const editPost = (data) => {
    let querySql = `UPDATE posts SET agree = ? WHERE id = ?`;
    connection.query(querySql, data, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
    });
}

const init = () => {
    queryPost();
    queryAuthor();
}
init();

// resolveFunctions「解析函数」说明这些数据类型中的每个字段，它们对应的数据都要怎么获取
const resolveFunctions = {
    Query: {
        posts: () => postsList,
        author: (query, variables) => {
            const author = authorsList.find(item => {
                if(item.id === variables.id){
                    return item;
                }
            });
            return author;
        },
    },
    Mutation: {
        upvotePost: (query, variables) => {
            const post = postsList.find(item => {
                if (item.id === variables.postId) {
                    return item;
                }
            });
            if (!post) {
                throw new Error(`Couldn't find post with id ${variables.postId}`);
            }
            post.agree += 1;
            let data = [post.agree, variables.postId];
            editPost(data);
            return post;
        },
        addPost: (query, variables) => {
            let data = [variables.title, variables.digest, variables.author];
            if(variables.author && authorsList.indexOf(variables.author) === -1) {
                let authorData = [variables.author];
                addAuthorSQL(authorData);
            }
            addPostSQL(data);
        }
    },
    Author: {
        posts: (author) => { 
            const post = [];
            postsList.find(item => {
                if(item.authorId === author.id || author.firstName === item.author){
                    post.push(item);
                }
            });
            return post;
        },
    },
    Post: {
        author: (post) => { 
            return authorsList.find(item => {
                if(item.id === post.authorId || item.firstName === post.author){
                    return item;
                }
            });
        },
    },
};

export default resolveFunctions;