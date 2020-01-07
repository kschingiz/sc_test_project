import { CssBaseline } from "@material-ui/core";
import Header from "../components/header";
import Footer from "../components/footer";
import EventBar from "../components/eventBar";

export default function withLayout(Page) {
  return () => (
    <>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <EventBar title="Event Organizer Resources" />
      <Page></Page>
      <Footer />
    </>
  );
}
