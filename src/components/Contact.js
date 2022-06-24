import React, {Component} from "react";
import "react-vertical-timeline-component/style.min.css";

class Contact extends Component {
    render() {

        return (
            <section id="about">
                <div className="col gap-lg text-center">
                    <h1 style={{color: "black"}}>
                        <span>Contact Me</span>
                    </h1>
                    <div className="contact"
                         action="https://public.herotofu.com/v1/41262420-f2af-11ec-8ed8-456386acdd98" method="post">
                        <form className="col gap-lg text-center">
                            <h3 style={{"margin-bottom":"100px"}}>Want to say Hello or Have a cool idea? Shoot me a message.</h3>
                            <div className="contact__row">
                                <input className="contact__input col-12 col-md-6 mx-auto" name="Name" id="name"
                                       type="text" placeholder="Name" required/>
                            </div>
                            <div className="contact__row">
                                <input className="contact__input col-12 col-md-6 mx-auto" name="Email" id="email"
                                       type="email" placeholder="Email" required/>
                            </div>
                            <div>
                                <textarea cols="30" rows="5"
                                          className=" contact__message contact__input col-12 col-md-6 mx-auto"
                                          name="Message" id="message" type="text" placeholder="Message" required/>
                            </div>
                            <div>
                                <input className="contact__button interactable col-12 col-md-6 mx-auto" type="submit" value="Send"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        );
    }
}

export default Contact;

