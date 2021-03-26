import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
//import { Checkbox } from "@material-ui/core";
import { CalendarToday, CalendarTodayOutlined, CalendarTodayRounded, CalendarTodaySharp, CalendarTodayTwoTone, CalendarViewDayTwoTone, Check, CheckBox, EmojiFoodBeverageRounded, FastfoodOutlined, PermContactCalendarOutlined, Restaurant } from "@material-ui/icons";

import Quote from "components/Typography/Quote.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3> Choose your Delivery Day</h3>
          </div>
          {/* <div className={classes.title}>
            <h3>
              <small>With Icons</small>
            </h3>
          </div> */}
          <GridContainer>
            <GridItem xs={24} sm={24} md={16} lg={12}>
              <NavPills
                color="success"
                tabs={[
                  {
                    tabButton: "Monday",
                    tabIcon: CalendarTodayTwoTone,
                    tabContent: (
                      <span padding-left = "20px">
                        <div className={classes.typo}>
                          <h4 className={classes.title}>Lunch</h4>
                          <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                        </div>
                      
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="info"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      <div className={classes.typo}>
                          <h4 className={classes.title}>Dinner</h4>
                          <h6 className={classes.note}>6:00 to 7:00 PM</h6>
                        </div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="primary"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      </span>
                    )
                  },
                  {
                    tabButton: "Tuesday",
                    tabIcon: CalendarTodayTwoTone,
                    tabContent: (
                      <span padding-left = "20px">
                        <div className={classes.typo}>
                          <h4 className={classes.title}>Lunch</h4>
                          <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                        </div>
                      
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="primary"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      <div className={classes.typo}>
                          <h4 className={classes.title}>Dinner</h4>
                          <h6 className={classes.note}>6:00 to 7:00 PM</h6>
                        </div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="rose"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      </span>
                    )
                  },
                  {
                    tabButton: "Wednesday",
                    tabIcon: CalendarTodayTwoTone,
                    tabContent: (
                      <span padding-left = "20px">
                        <div className={classes.typo}>
                          <h4 className={classes.title}>Lunch</h4>
                          <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                        </div>
                      
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="rose"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      <div className={classes.typo}>
                          <h4 className={classes.title}>Dinner</h4>
                          <h6 className={classes.note}>6:00 to 7:00 PM</h6>
                        </div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="info"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      </span>
                    )
                  },
                  {
                    tabButton: "Thursday",
                    tabIcon: CalendarTodayTwoTone,
                    tabContent: (
                      <span padding-left = "20px">
                        <div className={classes.typo}>
                          <h4 className={classes.title}>Lunch</h4>
                          <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                        </div>
                      
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="info"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      <div className={classes.typo}>
                          <h4 className={classes.title}>Dinner</h4>
                          <h6 className={classes.note}>6:00 to 7:00 PM</h6>
                        </div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="primary"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      </span>
                    )
                  },
                  {
                    tabButton: "Friday",
                    tabIcon: CalendarTodayTwoTone,
                    tabContent: (
                      <span padding-left = "20px">
                        <div className={classes.typo}>
                          <h4 className={classes.title}>Lunch</h4>
                          <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                        </div>
                      
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="primary"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      <div className={classes.typo}>
                          <h4 className={classes.title}>Dinner</h4>
                          <h6 className={classes.note}>6:00 to 7:00 PM</h6>
                        </div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="rose"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      </span>
                    )
                  },
                  {
                    tabButton: "Saturday",
                    tabIcon: CalendarTodayTwoTone,
                    tabContent: (
                      <span padding-left = "20px">
                        <div className={classes.typo}>
                          <h4 className={classes.title}>Lunch</h4>
                          <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                        </div>
                      
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="rose"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      <div className={classes.typo}>
                          <h4 className={classes.title}>Dinner</h4>
                          <h6 className={classes.note}>6:00 to 7:00 PM</h6>
                        </div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="info"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      </span>
                    )
                  },
                  {
                    tabButton: "Sunday",
                    tabIcon: CalendarTodayTwoTone,
                    tabContent: (
                      <span padding-left = "20px">
                        <div className={classes.typo}>
                          <h4 className={classes.title}>Lunch</h4>
                          <h6 className={classes.note}>12:00 to 1:00 PM</h6>
                        </div>
                      
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="info"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      <div className={classes.typo}>
                          <h4 className={classes.title}>Dinner</h4>
                          <h6 className={classes.note}>6:00 to 7:00 PM</h6>
                        </div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={6}>
                          <NavPills
                            color="primary"
                            tabs={[
                              {
                                tabButton: "Chipotle",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the chipotle website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" chipotle.com "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "VeggieGrill",
                                tabIcon: Restaurant,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                      <Quote
                                        text="Please order from the veggiegrill website. Make sure to choose to deliver with SPOT at checkout!"
                                        author=" https://order.veggiegrill.com/ "
                                      />
                                    </div>
                                    
                                  </span>
                                )
                              },
                              {
                                tabButton: "Starbucks",
                                tabIcon: EmojiFoodBeverageRounded,
                                tabContent: (
                                  <span>
                                    <div className={classes.typo}>
                                    <Quote
                                      text="Please order from the starbucks website. Make sure to choose to deliver with SPOT at checkout!"
                                      author=" https://www.starbucks.com/menu "
                                    />
                                  </div>
                                  </span>
                                )
                              },
                              {
                                tabButton: "Mendocino Farms",
                                tabIcon: FastfoodOutlined,
                                tabContent: (
                                  <span>
                                      <div className={classes.typo}>
                                        <Quote
                                          text="Please order from their website. Make sure to choose to deliver with SPOT at checkout!"
                                          author=" https://order.mendocinofarms.com/ "
                                        />
                                      </div>
                                  </span>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Dashboard",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Schedule",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem> */}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
