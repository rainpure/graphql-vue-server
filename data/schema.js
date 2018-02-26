import {
    makeExecutableSchema
} from 'graphql-tools';

import resolvers from './resolvers';

const schema = `
    # 作者
    type Author {
        # 作者的id
        id: Int! 
        # 作者firstName
        firstName: String
        # 作者名下的文章
        posts: [Post]
    }

    # 文章
    type Post {
        # 文章的id
        id: Int!
        # 文章的标题
        title: String
        # 文章的作者
        author: Author
        # 文章所得投票数
        agree: Int
        # 摘要
        digest: String
        # 背景图
        img: String
    }

    # 查询 Query
    type Query {
        # 所有文章
        posts: [Post]
        # 根据id查询作者
        author(id: Int!): Author
    }

    # 修改 Mutation
    type Mutation {
        # 传入postId给对应文章投票
        upvotePost (
            postId: Int!
        ): Post

        # 插入一篇文章
        addPost(
            title: String!
            digest: String
            author: String
        ):[Post]
    }
`;

export default makeExecutableSchema({
    typeDefs: schema,
    resolvers,
});