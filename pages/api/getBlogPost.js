import { MongoClient } from "mongodb";
import demoBlogPost from "../../src/demoData";

export default function(req, res) {
  if (!process.env.MONGO_URL) {
    console.error("MongoDB Url is not setup, please provide MONGO_URL env variable to connect with database");
    return res.status(200).json({
      blogPost: demoBlogPost
    });
  }

  // how to init db before request?
  MongoClient.connect(process.env.MONGO_URL)
    .then(client => {
      const database = client.db("skipcard-test");
      database
        .collection("blogposts")
        .findOne({})
        .then(dbBlogPost => {
          if (!dbBlogPost) {
            database.collection("blogposts").insertOne(demoBlogPost);
            res.status(200).json({
              blogPost: demoBlogPost
            });
          } else {
            res.status(200).json({
              blogPost: dbBlogPost
            });
          }
        });
    })
    .catch(err => {
      console.error(err);
      res.status(200).json({
        demoBlogPost
      });
    });
}
