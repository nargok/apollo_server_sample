const { ApolloServer, gql } = require('apollo-server-express');
const { find } = require('lodash');

const {typeDefs} = require('./type_defs.js');

let posts = [
  {id: 1, title: 'こんにちは', content: '今日はいい天気ですね', posted_at: '2018-12-01T00:00:00Z'},
  {id: 2, title: 'こんばんは', content: '今日は曇りですね', posted_at: '2018-12-01T00:00:00Z'},
];

let comments = [
  { id: 1, content: 'そうですね', post_id: 1, commented_at: '2018-12-01T00:00:00Z' },
  { id: 2, content: 'ちょっと寒いですね', post_id: 2, commented_at: '2018-12-01T00:00:00Z' },
  { id: 3, content: '雨が降りそうでんがな', post_id: 2, commented_at: '2018-12-01T00:00:00Z' },
];

const resolvers = {
  Query: {
    posts() {
      return posts;
    },
    post(parent, args, context, infor) {
      return find(posts, { id: args.id });
    }
  },
  Post: {
    comments(post) {
      return comments.filter(
        (comment) => { return comment.post_id === post.id}
      );
    },
    posted_at(post) {
      return post.posted_at;
    }
  },
  Comment: {
    commented_at(comment) {
      return comment.commented_at;
    }
  }
};

const {mocks} = require('./mock.js');

const server = new ApolloServer({typeDefs, resolvers});
const express = require('express');
const app = express();
server.applyMiddleware({app, path: '/graphql'});

app.listen({port: 4000}, () => 
  console.log(
    `Server started at http://localhost:4000${server.graphqlPath}`
  )
);