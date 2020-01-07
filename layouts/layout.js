import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/header";
import Footer from "../components/footer";
import EventBar from "../components/eventBar";
import EmailCapture from "../components/emailCapture";

const useStyles = makeStyles({
  gridContainer: {
    padding: "2em"
  }
});

export default function withLayout(BlogPage) {
  return () => {
    const styles = useStyles();
    return (
      <>
        <CssBaseline></CssBaseline>
        <Header></Header>
        <EventBar title="Event Organizer Resources" />

        <Container>
          <Grid container spacing={2} className={styles.gridContainer}>
            <Grid item xs={8}>
              <BlogPage></BlogPage>
            </Grid>
            <Grid item xs={4}>
              <EmailCapture></EmailCapture>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </>
    );
  };
}
