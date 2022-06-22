import React, {Component} from "react";
import {Icon} from "@iconify/react";
import mysqlIcon from "@iconify/icons-logos/mysql";
import reactIcon from "@iconify/icons-logos/react";
import nodejsIcon from "@iconify/icons-logos/nodejs";

class About extends Component {
    render() {
        if (this.props.sharedBasicInfo) {
            var profilepic = "images/" + this.props.sharedBasicInfo.image;
        }
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.about;
            var hello = this.props.resumeBasicInfo.description_header;
            /* var about = this.props.resumeBasicInfo.description; */
        }

        return (
            <section id="about">
                <div className="col-md-12">
                    <h1 style={{color: "black"}}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="row center mx-auto mb-5">
                        <div className="col-md-4 mb-5 center">
                            <div className="polaroid">
                <span style={{cursor: "auto"}}>
                  <img
                      height="250px"
                      src={profilepic}
                      alt="Avatar placeholder"
                  />
                  <Icon
                      icon={mysqlIcon}
                      style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                  />
                  <Icon
                      icon={reactIcon}
                      style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                  />
                  <Icon
                      icon={nodejsIcon}
                      style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                  />
                </span>
                            </div>
                        </div>

                        <div className="col-md-8 center">
                            <div className="col-md-10">

                                <div className="card">
                                    <div className="buttons">
                                        <div className="closedown">
                                            <button className="closebutton" ref="/#"/>
                                        </div>
                                        <div className="minimizedown">
                                            <button className="minimizebutton" ref="/#"/>
                                        </div>
                                        <div className="zoomout">
                                            <button className="zoombutton" ref="/#"/>
                                        </div>
                                    </div>
                                    <div
                                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                                        style={{
                                            height: "auto",
                                            fontSize: "132%",
                                            lineHeight: "200%",
                                        }}
                                    >
                                        <br/>
                                        <span className="wave">{hello} :) </span>
                                        <br/>
                                        <br/>
                                        I have worked in Java, Javascript and Python aswell as Node.js and Django
                                        Framework and other Frameworks like React.js, PHP.
                                        <br/>
                                        <br/>
                                        My field of Interest's are building new Web Technologies and Products and also
                                        in areas related to Fullstack Development.
                                        My field of Interest's are building new Web Technologies and Products and also
                                        in areas related to Fullstack Development.
                                        My field of Interest's are building new Web Technologies and Products and also
                                        in areas related to Fullstack Development.
                                        My field of Interest's are building new Web Technologies and Products and also
                                        in areas related to Fullstack Development.
                                        My field of Interest's are building new Web Technologies and Products and also
                                        in areas related to Fullstack Development.
                                        My field of Interest's are building new Web Technologies and Products and also
                                        in areas related to Fullstack Development.
                                        My field of Interest's are building new Web Technologies and Products and also
                                        in areas related to Fullstack Development.
                                        My field of Interest's are building new Web Technologies and Products and also
                                        in areas related to Fullstack Development.

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
