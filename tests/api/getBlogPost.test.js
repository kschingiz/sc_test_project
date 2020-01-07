import http from "http";
import fetch from "isomorphic-unfetch";
import listen from "test-listen";
import { apiResolver } from "next-server/dist/server/api-utils";
import getBlogPostHandler from "../../pages/api/getBlogPost";

import demoBlogPost from "../../src/demoData";

function getServerWithHandler(handler) {
  const requestHandler = (req, res) => {
    return apiResolver(req, res, undefined, getBlogPostHandler);
  };

  const server = http.createServer(requestHandler);
  return server;
}

test("should return blog post", async () => {
  const server = getServerWithHandler(getBlogPostHandler);

  const url = await listen(server);
  const response = await fetch(url);

  expect(response.status).toBe(200);

  const { blogPost } = await response.json();

  expect(blogPost.title).toBe(demoBlogPost.title);

  return server.close();
});
