import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerWrapper: {
    top: 0,
    left: 0,
    height: "64px",
    position: "fixed",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "2em",
    paddingRight: "1em",
    alignItems: "center"
  },
  logoTitle: {
    fontSize: "1.7em",
    fontFamily: "Lobster,cursive",
    color: "#1e90ff"
  },
  link: {
    fontWeight: "400",
    color: "#007aff",
    cursor: "pointer"
  },
  headerBufferZone: {
    height: "64px",
    width: "100%"
  }
});

export default function Header() {
  const styles = useStyles();

  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.logoTitle}>Skipcard</div>
        <div className={styles.link}>Create an event</div>
      </div>
      <div className={styles.headerBufferZone}></div>
    </>
  );
}
