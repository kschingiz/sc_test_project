const blogPost = {
  title: "How to Find Great Speakers That Drive More Attendance",
  htmlContent: `asdasdaslkdjaslkdjasdas
  d
  asdasdaslkdjaslkdjasdasas
  d
  asdasdaslkdjaslkdjasdasda
  sd
  asdasdaslkdjaslkdjasdasdaas
  das
  d
  as
  defaultas
  defaultasd
  asd`
};

export default function(req, res) {
  res.status(200).json({
    blogPost
  });
}
