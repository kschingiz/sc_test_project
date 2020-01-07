import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  signUpWrapper: {
    backgroundColor: "#fbfcfd",
    border: "1px solid #f2f2f2",
    padding: "2em",
    width: "100%",
    textAlign: "center"
  },
  captureTitle: {
    fontSize: "2em",
    paddingTop: ".5em",
    position: "relative",
    "&::after": {
      background: "#1e5799",
      bottom: 0,
      content: "''",
      display: "block",
      height: "2px",
      left: "50%",
      marginLeft: "-20px",
      position: "absolute",
      top: "0",
      width: "40px"
    }
  },
  captureSubtitle: {
    fontSize: "1em",
    fontFamily: "Poppins,sans-serif"
  },
  emailInput: {
    marginTop: "10px",
    marginBottom: "10px"
  }
});

export default function SignUp() {
  const styles = useStyles();

  return (
    <div className={styles.signUpWrapper}>
      <div className={styles.captureTitle}>
        Do you want
        <br />
        <b>more attendees?</b>
      </div>
      <div className={styles.captureSubtitle}>
        Join our mailing list for weekly tips on how to drive the right audience of professionals to your events.
      </div>
      <TextField className={styles.emailInput} label="Email address" variant="outlined"></TextField>
      <br />
      <Button variant="contained" color="primary">
        Sign up
      </Button>
    </div>
  );
}
