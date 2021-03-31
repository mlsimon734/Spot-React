import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// @material-ui/container

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// sections for this page
import LHeaderLinks from "components/Header/LHeaderLinks.js";
import RHeaderLinks from "components/Header/RHeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        image={require("assets/img/logo.png")}
        leftLinks={<LHeaderLinks />}
        rightLinks={<RHeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/tacos.jpg")}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.title}>
              <h1>Your Weekly Menu</h1>
            </div>
            <div className={classes.container}>
              <GridItem xs={10} sm={8}>
                <CustomInput
                  labelText="Delivery Address"
                  id="float"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "UCLA Anderson School of Management"
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={4}>
                <Button color="spotTheme" round size="md">See Menu</Button>
              </GridItem>
            </div>
          </div>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/*<SectionBasics />*/}
        <SectionPills />
        {/*<SectionNavbars />
         <SectionBasics />
        <SectionTabs />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />*/}
        {/* <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem> */}
        {/* <SectionExamples />
        <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
