/*eslint-disable*/
import React from "react";
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

export default function RHeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="white"
          variant="outlined"
          target="_blank"
          round
          className={classes.navLink}
        >
          <SpotText>
            Log In
          </SpotText>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          variant="contained"
          color="spotTheme"
          target="_blank"
          round
          className={classes.navLink}
        >
          <White>
            Sign Up
          </White>
        </Button>
      </ListItem>
    </List>
  );
}
