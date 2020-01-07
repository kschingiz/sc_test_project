import http from "http";
import fetch from "isomorphic-unfetch";
import listen from "test-listen";
import { apiResolver } from "next-server/dist/server/api-utils";
import getBlogPostHandler from "../../pages/api/getBlogPost";

test("should return blog post", async () => {
  const requestHandler = (req, res) => {
    return apiResolver(req, res, undefined, getBlogPostHandler);
  };

  const server = http.createServer(requestHandler);
  const url = await listen(server);
  const response = await fetch(url);

  expect(response.status).toBe(200);

  const { blogPost } = await response.json();

  expect(blogPost.title).toBe("How to Find Great Speakers That Drive More Attendance");

  return server.close();
});
