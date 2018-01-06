import authorsList from '../mock/authorsList'
import postsList from '../mock/postsList'

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
                if(item.id === variables.postId){
                    return item;
                }
            });
            if (!post) {
                throw new Error(`Couldn't find post with id ${variables.postId}`);
            }
            post.agree += 1;
            return post;
        },
    },
    Author: {
        posts: (author) => { 
            const post = [];
            postsList.find(item => {
                if(item.authorId === author.id){
                    post.push(item);
                }
            });
            return post;
        },
    },
    Post: {
        author: (post) => { 
            return authorsList.find(item => {
                if(item.id === post.authorId){
                    return item;
                }
            });
        },
    },
};

export default resolveFunctions;