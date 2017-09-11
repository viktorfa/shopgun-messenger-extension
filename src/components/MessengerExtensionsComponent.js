import React from "react";
class MessengerExtensionsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: '', supportedFeatures: []};

        this.handleError = this.handleError.bind(this);
        this.handleUserId = this.handleUserId.bind(this);
        this.handleSupportedFeatures = this.handleSupportedFeatures.bind(this);
        this.setMessengerExtensions = this.setMessengerExtensions.bind(this);
        this.clickCloseWebView = this.clickCloseWebView.bind(this);
        this.handleCloseWebView = this.handleCloseWebView.bind(this);
    }

    componentDidMount() {
        // Load the MessengerExtensions JS SDK
        (function (d, s, id) {
            let js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.com/en_US/messenger.Extensions.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'Messenger'));

        window.extAsyncInit = () => {
            // the Messenger Extensions JS SDK is done loading
            console.log("the Messenger Extensions JS SDK is done loading");
            this.setMessengerExtensions(window.MessengerExtensions);
            this.messengerExtensions.getUserID(this.handleUserId, this.handleError);
            this.messengerExtensions.getSupportedFeatures(this.handleSupportedFeatures, this.handleError);
        };
    }

    setMessengerExtensions(messengerExtensions) {
        this.messengerExtensions = messengerExtensions;
    }

    handleError(error) {
        console.log("ERROR");
        console.log(error);
        this.setState({message: `error: ${JSON.stringify(error, null, 2)}`});
    }

    handleUserId(uids) {
        console.log("UIDS:");
        console.log(uids);
        const psid = uids.psid;
        this.setState({message: `psid: ${psid}`});
    }

    handleSupportedFeatures(supportedFeatures) {
        console.log("Supported features:");
        console.log(supportedFeatures);
        this.setState({supportedFeatures: supportedFeatures.supported_features});
    }

    clickCloseWebView(event) {
        event.preventDefault();
        this.messengerExtensions.requestCloseBrowser(this.handleCloseWebView, this.handleError);
    }

    handleCloseWebView() {
        console.log("Bye bye.");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickCloseWebView}>
                    Exit
                </button>
                <p>This is the MessengerExtensionsComponent</p>
                <p><code>Message: {this.state.message}</code></p>
                <div>
                    <ul>
                        {
                            this.state.supportedFeatures.map((feature, index) => {
                                return (
                                    <li key={index}>{feature}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default MessengerExtensionsComponent;