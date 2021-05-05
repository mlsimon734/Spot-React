import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MenuPills from "components/NavPills/MenuPills.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
//import { Checkbox } from "@material-ui/core";
import {
  CalendarToday,
  CalendarTodayOutlined,
  CalendarTodayRounded,
  CalendarTodaySharp,
  CalendarTodayTwoTone,
  CalendarViewDayTwoTone,
  Check,
  CheckBox,
  EmojiFoodBeverageRounded,
  FastfoodOutlined,
  PermContactCalendarOutlined,
  Restaurant
} from "@material-ui/icons";

import Quote from "components/Typography/Quote.js";

const useStyles = makeStyles(styles);

var getWeek = () => {
    var arr = [];
    const dt = new Date();

    for (var i = 0; i < 6; i++) {
      dt.setDate(dt.getDate()+1);
      arr.push(new Date(dt));
    }
    return arr;
};

export default function SectionPills() {
  const [date, setDate] = React.useState(new Date());
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const futureDates = getWeek();

  const classes = useStyles();
  return (<div className={classes.section}>
    <div className={classes.container}>
      <div id="menu-pills">
        <div className={classes.title}>
          <h3 className={classes.title}>
            Choose your Delivery Day
          </h3>
        </div>
        <GridContainer justify="center">
          <GridItem xs={24} sm={24} md={16} lg={12}>
            <MenuPills color="spotTheme" tabs={[
              {
                tabButton: "Today" + " " + (date.getMonth()+1) + "/" + date.getDate(),
                tabIcon: CalendarTodayTwoTone,
                tabContent: (<span >
                  <div className={classes.typo + " " + classes.textCenter}>
                    <h3 className={classes.title}>Lunch</h3>
                    <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                  </div>
                  <GridContainer justify="center">
                    <GridItem xs={10} sm={10} md={10} lg={10} justify="center">
                      <MenuPills color="spotTheme" tabs={[
                        {
                          tabButton: "Chipotle",
                          tabLabel: "12:00 - 12:15",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://chipotle.com/order" target="_blank">
                                  Order Chipotle
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "VeggieGrill",
                          tabLabel: "12:15 - 12:30",
                          tabIcon: Restaurant,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://order.veggiegrill.com/" target="_blank">
                                  Order VeggieGrill
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Starbucks",
                          tabLabel: "12:30 - 12:45",
                          tabIcon: EmojiFoodBeverageRounded,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://www.starbucks.com/menu " target="_blank">
                                  Order Starbucks
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Mendocino Farms",
                          tabLabel: "12:45 - 01:00",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href=" https://order.mendocinofarms.com/ " target="_blank">
                                  Order Mendicino Farms
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }
                      ]}/>
                    </GridItem>
                  </GridContainer>
                </span>)
              }, {
                tabButton: weekday[(date.getDay() + 1) % 7] + " " + (futureDates[0].getMonth()+1) + "/" + (futureDates[0].getDate()),
                  tabIcon: CalendarTodayTwoTone,
                tabContent: (<span padding-left="20px">
                  <div className={classes.typo}>
                    <h3 className={classes.title}>Lunch</h3>
                    <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                  </div>

                  <GridContainer justify="center">
                    <GridItem xs={20} sm={20} md={15} lg={10}>
                      <MenuPills color="primary" tabs={[
                        {
                          tabButton: "Chipotle",
                          tabLabel: "12:00 - 12:15",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://chipotle.com/order" target="_blank">
                                  Order Chipotle
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "VeggieGrill",
                          tabLabel: "12:15 - 12:30",
                          tabIcon: Restaurant,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://order.veggiegrill.com/" target="_blank">
                                  Order VeggieGrill
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Starbucks",
                          tabLabel: "12:30 - 12:45",
                          tabIcon: EmojiFoodBeverageRounded,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://www.starbucks.com/menu " target="_blank">
                                  Order Starbucks
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Mendocino Farms",
                          tabLabel: "12:45 - 01:00",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href=" https://order.mendocinofarms.com/ " target="_blank">
                                  Order Mendicino Farms
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }
                      ]}/>
                    </GridItem>
                  </GridContainer>
                </span>)
              }, {
                tabButton: weekday[(date.getDay() + 2) % 7] + " " + (futureDates[1].getMonth()+1) + "/" + (futureDates[1].getDate()),
                  tabIcon: CalendarTodayTwoTone,
                tabContent: (<span padding-left="20px">
                  <div className={classes.typo}>
                    <h3 className={classes.title}>Lunch</h3>
                    <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                  </div>

                  <GridContainer justify="center">
                    <GridItem xs={20} sm={20} md={15} lg={10}>
                      <MenuPills color="rose" tabs={[
                        {
                          tabButton: "Chipotle",
                          tabLabel: "12:00 - 12:15",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://chipotle.com/order" target="_blank">
                                  Order Chipotle
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "VeggieGrill",
                          tabLabel: "12:15 - 12:30",
                          tabIcon: Restaurant,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://order.veggiegrill.com/" target="_blank">
                                  Order VeggieGrill
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Starbucks",
                          tabLabel: "12:30 - 12:45",
                          tabIcon: EmojiFoodBeverageRounded,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://www.starbucks.com/menu " target="_blank">
                                  Order Starbucks
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Mendocino Farms",
                          tabLabel: "12:45 - 01:00",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href=" https://order.mendocinofarms.com/ " target="_blank">
                                  Order Mendicino Farms
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }
                      ]}/>
                    </GridItem>
                  </GridContainer>
                </span>)
              }, {
                tabButton: weekday[(date.getDay() + 3) % 7] + " " + (futureDates[2].getMonth()+1) + "/" + (futureDates[2].getDate()),
                  tabIcon: CalendarTodayTwoTone,
                tabContent: (<span padding-left="20px">
                  <div className={classes.typo}>
                    <h3 className={classes.title}>Lunch</h3>
                    <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                  </div>

                  <GridContainer justify="center">
                    <GridItem xs={20} sm={20} md={15} lg={10}>
                      <MenuPills color="info" tabs={[
                        {
                          tabButton: "Chipotle",
                          tabLabel: "12:00 - 12:15",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://chipotle.com/order" target="_blank">
                                  Order Chipotle
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "VeggieGrill",
                          tabLabel: "12:15 - 12:30",
                          tabIcon: Restaurant,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://order.veggiegrill.com/" target="_blank">
                                  Order VeggieGrill
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Starbucks",
                          tabLabel: "12:30 - 12:45",
                          tabIcon: EmojiFoodBeverageRounded,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://www.starbucks.com/menu " target="_blank">
                                  Order Starbucks
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Mendocino Farms",
                          tabLabel: "12:45 - 01:00",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href=" https://order.mendocinofarms.com/ " target="_blank">
                                  Order Mendicino Farms
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }
                      ]}/>
                    </GridItem>
                  </GridContainer>
                </span>)
              }, {
                tabButton: weekday[(date.getDay() + 4) % 7] + " " + (futureDates[3].getMonth()+1) + "/" + (futureDates[3].getDate()),
                  tabIcon: CalendarTodayTwoTone,
                tabContent: (<span padding-left="20px">
                  <div className={classes.typo}>
                    <h3 className={classes.title}>Lunch</h3>
                    <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                  </div>

                  <GridContainer justify="center">
                    <GridItem xs={20} sm={20} md={15} lg={10}>
                      <MenuPills color="primary" tabs={[
                        {
                          tabButton: "Chipotle",
                          tabLabel: "12:00 - 12:15",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://chipotle.com/order" target="_blank">
                                  Order Chipotle
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "VeggieGrill",
                          tabLabel: "12:15 - 12:30",
                          tabIcon: Restaurant,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://order.veggiegrill.com/" target="_blank">
                                  Order VeggieGrill
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Starbucks",
                          tabLabel: "12:30 - 12:45",
                          tabIcon: EmojiFoodBeverageRounded,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://www.starbucks.com/menu " target="_blank">
                                  Order Starbucks
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Mendocino Farms",
                          tabLabel: "12:45 - 01:00",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href=" https://order.mendocinofarms.com/ " target="_blank">
                                  Order Mendicino Farms
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }
                      ]}/>
                    </GridItem>
                  </GridContainer>
                </span>)
              }, {
                tabButton: weekday[(date.getDay() + 5) % 7] + " " + (futureDates[4].getMonth()+1) + "/" + (futureDates[4].getDate()),
                  tabIcon: CalendarTodayTwoTone,
                tabContent: (<span padding-left="20px">
                  <div className={classes.typo}>
                    <h3 className={classes.title}>Lunch</h3>
                    <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                  </div>

                  <GridContainer justify="center">
                    <GridItem xs={20} sm={20} md={15} lg={10}>
                      <MenuPills color="rose" tabs={[
                        {
                          tabButton: "Chipotle",
                          tabLabel: "12:00 - 12:15",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://chipotle.com/order" target="_blank">
                                  Order Chipotle
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "VeggieGrill",
                          tabLabel: "12:15 - 12:30",
                          tabIcon: Restaurant,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://order.veggiegrill.com/" target="_blank">
                                  Order VeggieGrill
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Starbucks",
                          tabLabel: "12:30 - 12:45",
                          tabIcon: EmojiFoodBeverageRounded,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href="https://www.starbucks.com/menu " target="_blank">
                                  Order Starbucks
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }, {
                          tabButton: "Mendocino Farms",
                          tabLabel: "12:45 - 01:00",
                          tabIcon: FastfoodOutlined,
                          tabContent: (<div className={classes.textCenter}>
                            <GridContainer justify={"center"}>

                              <GridItem xs={11}>
                                <Button color="facebook" size="re" default="default" href=" https://order.mendocinofarms.com/ " target="_blank">
                                  Order Mendicino Farms
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>)
                        }
                      ]}/>
                    </GridItem>
                  </GridContainer>
                </span>)
              }, {
                tabButton: weekday[(date.getDay() + 6) % 7] + " " + (futureDates[5].getMonth()+1) + "/" + (futureDates[5].getDate()),
                  tabIcon: CalendarTodayTwoTone,
                tabContent: (<span padding-left="20px">
                  <div className={classes.typo}>
                    <h3 className={classes.title}>Lunch</h3>
                    <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                  </div>

                    <GridContainer justify="center">
                      <GridItem xs={20} sm={20} md={15} lg={10}>
                        <MenuPills color="info" tabs={[
                            {
                              tabButton: "Chipotle",
                              tabIcon: FastfoodOutlined,
                              tabContent: (<span>
                                <div className={classes.typo}>
                                  <Quote text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!" author=" chipotle.com "/>
                                </div>

                              </span>)
                            }, {
                              tabButton: "VeggieGrill",
                              tabIcon: Restaurant,
                              tabContent: (<span>
                                <div className={classes.typo}>
                                  <Quote text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!" author=" https://order.veggiegrill.com/ "/>
                                </div>

                              </span>)
                            }, {
                              tabButton: "Starbucks",
                              tabIcon: EmojiFoodBeverageRounded,
                              tabContent: (<span>
                                <div className={classes.typo}>
                                  <Quote text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!" author=" https://www.starbucks.com/menu "/>
                                </div>
                              </span>)
                            }, {
                              tabButton: "Mendocino Farms",
                              tabIcon: FastfoodOutlined,
                              tabContent: (<span>
                                <div className={classes.typo}>
                                  <Quote text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!" author=" https://order.mendocinofarms.com/ "/>
                                </div>
                              </span>)
                            }
                          ]}/>
                      </GridItem>
                    </GridContainer>
                  </span>)
                }
              ]}/>
          </GridItem>

        </GridContainer>
      </div>
    </div>
  </div>);
}
