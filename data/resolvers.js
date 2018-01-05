import {
    find,
    filter,
} from 'lodash';
import authorsList from '../mock/authorsList'
import postsList from '../mock/postsList'

const resolveFunctions = {
    Query: {
        posts() {
            return postsList;
        },
        author(_, {
            id,
        }) {
            return find(authorsList, {
                id,
            });
        },
    },
    Mutation: {
        upvotePost(_, {
            postId,
        }) {
            const post = find(postsList, {
                id: postId,
            });
            if (!post) {
                throw new Error(`Couldn't find post with id ${postId}`);
            }
            post.agree += 1;
            return post;
        },
    },
    Author: {
        posts(author) {
            return filter(postsList, {
                authorId: author.id,
            });
        },
    },
    Post: {
        author(post) {
            return find(authorsList, {
                id: post.authorId,
            });
        },
    },
};

export default resolveFunctions;