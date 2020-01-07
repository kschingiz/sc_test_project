import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "1em 1em .5em",
    backgroundColor: "#555",
    color: "#fff",
    width: "100%"
  }
});

export default function Footer() {
  const styles = useStyles();

  return (
    <div className={styles.footer}>
      <div>About Us Privacy & Cookies Terms</div>
      <div>Follow Us: Social network links</div>
      <div>Made with love in San Francisco</div>
    </div>
  );
}
