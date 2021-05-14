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
// Places form
import PlacesAutoComplete from "react-places-autocomplete";
// Styling
import styles from "assets/jss/material-kit-react/views/components.js";
// images
import logo from "assets/img/SpotLogo.png";
import parallaxBackground from "assets/img/tossed-salad.jpeg";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { register, errors, handleSubmit, control } = useForm();
  const [addressData, setAddressData] = useState("");
  const [outpostData, setOutpostData] = useState([]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const handleSelect = async value => {};

  const { ...rest } = props;
  return (
    <div>
      <Header
        image={logo}
        leftLinks={<LHeaderLinks />}
        rightLinks={<RHeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <div className={classes.section}>
        <Parallax image={parallaxBackground}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container} justify="center">
              <GridContainer justify="center">
                <div className={classes.title}>
                  <h1>Your Weekly Menu</h1>
                </div>
              </GridContainer>
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <GridContainer justify="center">
                  <div className={classes.container}>
                    <GridItem xs={8}>
                      <Controller
                        render={({ field: { ref } }) => (
                          <PlacesAutoComplete
                            value={addressData}
                            onChange={setAddressData}
                            onSelect={handleSelect}
                          >
                            {({
                              getInputProps,
                              suggestions,
                              getSuggestionItemProps,
                              loading,
                            }) => (
                              <div>
                                <CustomInput
                                  placeholder="456 Landfair Ave, Los Angeles"
                                  labelText="Address"
                                  id="float"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                  inputProps={{
                                    ...getInputProps({
                                      placeholder:
                                        "456 Landfair Ave, Los Angeles",
                                      name: "address",
                                      required: true,
                                      ref: {
                                        ...register("address", {
                                          required:
                                            "You must submit your location",
                                        }),
                                      },
                                    }),
                                  }}
                                />
                                <div>
                                  {loading ? <div>...loading</div> : null}
                                  {suggestions.map((suggestion) => {
                                    const style = {
                                      backgroundColor: suggestion.active
                                        ? "#d3d3d3"
                                        : "#ffffff",
                                    };
                                    return (
                                      <div
                                        {...getSuggestionItemProps(suggestion, {
                                          style,
                                        })}
                                      >
                                        {suggestion.description}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutoComplete>
                        )}
                        name="address"
                        control={control}
                        defaultValue=""
                      />
                    </GridItem>
                    <GridItem xs={4}>
                      <Modal type="submit" />
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
