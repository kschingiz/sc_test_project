import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
  const styles = useStyles();

  return (
    <>
      <Typography className={styles.blogTitle} variant="h1">
        How to Find Great Speakers That Drive More Attendance
      </Typography>
      <Typography className={styles.blogText}>
        <p>
          One of the most important factors in maximizing registration and attendance for a professional event is the
          speaker lineup.
        </p>
        <p>
          One of the most important factors in maximizing registration and attendance for a professional event is the
          speaker lineup. But who are the best speakers to invite? You might think that the best option is to find
          speakers who are known for their engaging and well-delivered presentations. A speaker’s ability to deliver an
          engaging talk can be a major factor in attendee satisfaction and retention (i.e. coming back for subsequent
          events).
        </p>
      </Typography>
    </>
  );
};

export default withLayout(Blog);
