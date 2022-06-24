import React, {Component} from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
    titles = [];

    constructor() {
        super();
        this.state = {checked: false};
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    }

    onThemeSwitchChange(checked) {
        this.setState({checked});
        this.setTheme();
    }

    setTheme() {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme =
            body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    render() {
        if (this.props.sharedData) {
            var name = this.props.sharedData.name;
            this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
        }

        const HeaderTitleTypeAnimation = React.memo(() => {
            return <Typical className="title-styles" steps={this.titles} loop={50}/>
        }, (props, prevProp) => true);

        return (
            <header id="home" style={{height: window.innerHeight - 140, display: 'block'}}>
                <Switch
                    checked={this.state.checked}
                    onChange={this.onThemeSwitchChange}
                    offColor="rgba(255, 0, 0, 0.4)"
                    onColor="rgba(255, 0, 0, 0.4)"
                    onHandleColor="rgba(255, 0, 0, 0.4)"
                    offHandleColor="rgba(255, 0, 0, 0.4)"
                    boxShadow="rgba(255, 0, 0, 0.4)"
                    activeBoxShadow="rgba(255, 0, 0, 0.4)"
                    className="react-switch theme-switch"
                    width={70}
                    height={30}
                    uncheckedIcon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"

                            viewBox="0 0 24 24"
                            fill="white"
                            stroke="white"
                        >
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" y1="1" x2="12" y2="3"/>
                            <line x1="12" y1="21" x2="12" y2="23"/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1="1" y1="12" x2="3" y2="12"/>
                            <line x1="21" y1="12" x2="23" y2="12"/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                        </svg>
                    }
                    checkedIcon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"

                            style={{transform: "rotate(40deg)"}}
                        >
                            <mask id="mask">
                                <rect x="0" y="0" width="100%" height="100%" fill="white"/>
                                <circle cx="12" cy="4" r="9" fill="black"/>
                            </mask>
                            <circle fill="white" cx="12" cy="12" r="9" mask="url(#mask)"/>

                        </svg>

                    }
                />
                <div className="row" style={{height: '100%'}}>
                    <div className="col-md-12 aligner">
                        <div>
                            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"/>
                            <br/>
                            <h1 className="mb-0">
                                <Typical steps={[name]} wrapper="p"/>
                            </h1>
                            <div className="title-container">
                                <HeaderTitleTypeAnimation/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
