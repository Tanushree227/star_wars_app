import classes from "./Layout.module.css";
import Navbar from "./Navbar";

function Layout(props) {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
      <footer>
        <div className={classes.container}>
          <p>
            &copy; Developed by Tanushree Das. All Rights Reserved.{" "}
            {currentYear}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
