import ScaleLoader from "react-spinners/ScaleLoader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loadingScreen: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "white"
  }
});

export default function LoadingScreen() {
  const styles = useStyles();

  return (
    <div className={styles.loadingScreen}>
      <ScaleLoader color="blue"></ScaleLoader>
    </div>
  );
}
