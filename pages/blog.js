import withLayout from "../layouts/layout";

import EmailCapture from "../components/emailCapture";

const Blog = props => {
  return (
    <>
      <h1>First blog page</h1>
      <EmailCapture></EmailCapture>
    </>
  );
};

export default withLayout(Blog);
