/*eslint-disable*/
import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
//import Button from "@material-ui/core/Button"

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import SpotText from "components/Typography/SpotText.js";
import White from "components/Typography/White.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

function LoginButton(props) {
  const classes = useStyles();
  return (
    <Button
      color="white"
      variant="outlined"

      round
      className={classes.navLink}
      //target={"_blank"}
      href={"/login-page"}
      onClick={props.onClick}
    >
      <SpotText>
        Log In
      </SpotText>
    </Button>
  );
}

function LogoutButton(props) {
  const classes = useStyles();
  return (
    <Button
      color="white"
      variant="outlined"

      round
      className={classes.navLink}
      //target={"_blank"}
      href={"/login-page"}
      onClick={props.onClick}
    >
      <SpotText>
        Log Out
      </SpotText>
    </Button>
  );
}

function SignInButton(props) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="spotTheme"
      round
      className={classes.navLink}
      href={"/signup-page"}
      onClick={props.onClick}
    >
      <White>
        Sign Up
      </White>
    </Button>
  );
}

export default function RHeaderLinks(props) {
  const classes = useStyles();
  const [isLoggedIn, setLogin] = useState(false);

  function handleLoginClick() {
    setLogin(true);
  }

  function handleLogoutClick() {
    setLogin(false);
  }

  let logButton;
  let signButton;

  if (!isLoggedIn) {
    logButton = <LoginButton onClick={handleLoginClick} />;
    signButton = <SignInButton onClick={handleLogoutClick} />;
  } else {
    logButton = <LogoutButton onClick={handleLoginClick} />;
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/* <Link  className={classes.link}> */}
        {logButton}
        {/* </Link> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        {signButton}
      </ListItem>
    </List>
  );
}
