import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Modal from "components/Modal/Modal.js";
// sections for this page
import LHeaderLinks from "components/Header/LHeaderLinks.js";
import RHeaderLinks from "components/Header/RHeaderLinks.js";
import SectionPills from "./Sections/SectionPills.js";
// form control
import { useForm, Controller } from "react-hook-form";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const {register, handleSubmit, control} = useForm();
  const [zipcode, setZip] = useState(111111);
  const [outposts, setPosts] = useState([]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const { ...rest } = props;
  return (
    <div>
      <Header
        image={require("assets/img/SpotLogo.png")}
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
      <div className={classes.section}>
        <Parallax image={require("assets/img/tossed-salad.jpeg")}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <div className={classes.title}>
                  <h1>Your Weekly Menu</h1>
                </div>
              </GridContainer>
              <form className={classes.form} onSubmit={handleSubmit((data) => console.log(data))}>
                <GridContainer justify="center">
                  <div className={classes.container}>
                    <GridItem xs={8}>
                      <Controller
                        render={(props) =>
                          <CustomInput
                            labelText="Address" id="float"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "456 Landfair Ave, Los Angeles",
                              inputRef: {register},
                              name: "address",
                              required: true
                            }}
                            {...rest}
                          />}
                        name="address"
                        control={control}
                      />
                    </GridItem>
                    <GridItem xs={4}>
                      <Modal

                      />
                    </GridItem>
                  </div>
                </GridContainer>
              </form>
            </div>
          </div>
        </Parallax>
      </div>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPills />
      </div>
      <Footer />
    </div>
  );
}
