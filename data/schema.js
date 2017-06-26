import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = `
# 作者
type Author {
  id: Int! # the ! means that every author object _must_ have an id
  firstName: String
  lastName: String
  posts: [Post] # the list of Posts by this author
}

# 文章
type Post {
  id: Int!
  title: String
  author: Author
  agree: Int
}

# the schema allows the following query这里可以写中文
type Query {
  posts: [Post]
  author(id: Int!): Author
}

# this schema allows the following mutation这里可以写中文
type Mutation {
  upvotePost (
    postId: Int!
  ): Post
}
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
