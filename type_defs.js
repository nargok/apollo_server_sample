const {gql} = require('apollo-server-express');

exports.typeDefs = gql`
  type Query {
    posts: [Post]!
    post(id: ID!): Post
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    posted_at: String!
    comments: [Comment]!
  }

  type Comment {
    id: ID!
    content: String!
    commented_at: String!
    post: Post!
  }

  input PostInput {
    title: String,
    content: String
  }

  type Mutation {
    createPost(input: PostInput): Post
  }
`;
