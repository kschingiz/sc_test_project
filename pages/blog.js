import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import useSWR from "swr";
import fetcher from "../src/fetcher";

import withLayout from "../layouts/layout";

const useStyles = makeStyles({
  blogTitle: {
    fontFamily: "Poppins,sans-serif",
    fontSize: "2.5em",
    fontWeight: "700"
  },
  blogText: {
    fontSize: "1em",
    color: "#555",
    lineHeight: "1.5em",
    fontFamily: "Poppins,sans-serif",
    fontWeight: "lighter"
  }
});

const Blog = props => {
  const { data, error } = useSWR("/api/getBlogPost", fetcher);

  const styles = useStyles();

  if (error) {
    return <h3>Failed to fetch blog post, try again later</h3>;
  }
  if (!data) {
    return <h3>Loading...</h3>;
  }

  const { blogPost } = data;
  return (
    <>
      <Typography className={styles.blogTitle} variant="h1">
        {blogPost.title}
      </Typography>
      <Typography className={styles.blogText}>{blogPost.htmlContent}</Typography>
    </>
  );
};

export default withLayout(Blog);
