import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

function Footer() {
  return (
    <footer id="footer">
      <Grid container alignItems="center" justify="space-evenly">
        <Grid container lg={7} alignItems="center" justify="space-evenly">
          <Grid className="footerLayout" item>
            <Link
              to="/aboutus"
              className="footerMenuLink"
              style={{ color: "white" }}
            >
              About Us
            </Link>
          </Grid>
          <Grid className="footerLayout" item>
            <Link
              to="/login"
              className="footerMenuLink"
              style={{ color: "white" }}
            >
              Admin Login
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;

// import React, { Component } from "react";
// import "./Footer.css";
// import { Link } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
// import Button from "@material-ui/core/Button";

// class Footer extends Component {
//   constructor() {
//     super();
//     this.state = {};
//     this.handleLogout = this.handleLogout.bind(this);
//   }

//   handleLogout() {
//     this.props.logoutUser();
//   }

//   render() {
//     return (
//       <footer id="footer">
//         <Grid container alignItems="center" justify="space-evenly">
//           <Grid container lg={7} alignItems="center" justify="space-evenly">
//             <Grid className="footerLayout" item>
//               <Link
//                 to="/aboutus"
//                 className="footerMenuLink"
//                 style={{ color: "white" }}
//               >
//                 About Us
//               </Link>
//             </Grid>
//             <Grid className="footerLayout" item>
//               {this.props.auth.isAuthenticated ? (
//                 <Button
//                   className="buttonSearch"
//                   primary
//                   onClick={this.handleLogout()}
//                 >
//                   Logout Admin
//                 </Button>
//               ) : (
//                 <Link
//                   to="/login"
//                   className="footerMenuLink"
//                   style={{ color: "white" }}
//                 >
//                   Admin Login
//                 </Link>
//               )}
//             </Grid>
//           </Grid>
//         </Grid>
//       </footer>
//     );
//   }
// }

// let mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { logoutUser })(Footer);
