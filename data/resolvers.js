import { find, filter } from 'lodash';
import { pubsub } from './subscriptions';

const authors = [
  { id: 1, firstName: '枫', lastName: '叶' },
  { id: 2, firstName: '不', lastName: '二' },
  { id: 3, firstName: '菜', lastName: '瓜' },
  { id: 4, firstName: '城', lastName: '管' },
  { id: 5, firstName: '东', lastName: '邪' },
  { id: 6, firstName: '曼', lastName: '巴' },
  { id: 7, firstName: '绿', lastName: '箭' },
  { id: 8, firstName: '灿', lastName: '灿' },
  { id: 9, firstName: '糖', lastName: '饼' },
  { id: 10, firstName: '天', lastName: '吾' },
  { id: 11, firstName: '小', lastName: '米' },
  { id: 12, firstName: '熊', lastName: '猫' },
  { id: 13, firstName: '芝', lastName: '士' },
];

const posts = [
  { id: 1, authorId: 1, title: '枫叶是最帅的', agree: 1 },
  { id: 2, authorId: 2, title: '不二是最帅的', agree: 2 },
  { id: 3, authorId: 3, title: '菜瓜是最帅的', agree: 1 },
  { id: 4, authorId: 4, title: '城管是最帅的', agree: 1 },
  { id: 5, authorId: 5, title: '东邪是最帅的', agree: 1 },
  { id: 6, authorId: 6, title: '曼巴是最帅的', agree: 1 },
  { id: 8, authorId: 7, title: '绿箭是最帅的', agree: 1 },
  { id: 13, authorId: 8, title: '灿灿是最帅的', agree: 10 },
  { id: 7, authorId: 9, title: '糖饼是最帅的', agree: 1 },
  { id: 9, authorId: 10, title: '天吾是最帅的', agree: 1 },
  { id: 10, authorId: 11, title: '小米是最帅的', agree: 1 },
  { id: 11, authorId: 12, title: '熊猫是最帅的', agree: 1 },
  { id: 12, authorId: 13, title: '芝士是最帅的', agree: 1 },
];

const resolveFunctions = {
  Query: {
    posts() {
      return posts;
    },
    author(_, { id }) {
      return find(authors, { id: id });
    },
  },
  Mutation: {
    upvotePost(_, { postId }) {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.agree += 1;
      pubsub.publish('postUpvoted', post);
      return post;
    },
  },
  Subscription: {
    postUpvoted(post) {
      return post;
    },
  },
  Author: {
    posts(author) {
      return filter(posts, { authorId: author.id });
    },
  },
  Post: {
    author(post) {
      return find(authors, { id: post.authorId });
    },
  },
};

export default resolveFunctions;
