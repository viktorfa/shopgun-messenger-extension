const MessengerExtensionsComponent = require("./MessengerExtensionsComponent")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new MessengerExtensionsComponent.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleError", () => {
    let inst

    beforeEach(() => {
        inst = new MessengerExtensionsComponent.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleError("ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleError("Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleError("invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleError("error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleError("too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleError(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleUserId", () => {
    let inst

    beforeEach(() => {
        inst = new MessengerExtensionsComponent.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleUserId({ psid: "fake_user" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleUserId({ psid: "fake_user_id" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleUserId({ psid: "test_user" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleUserId({ psid: "someUser" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleUserId({ psid: "b'nXQpVsglEGFJgfK'" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleUserId(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleSupportedFeatures", () => {
    let inst

    beforeEach(() => {
        inst = new MessengerExtensionsComponent.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleSupportedFeatures({ supported_features: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleSupportedFeatures({ supported_features: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleSupportedFeatures({ supported_features: 1000 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleSupportedFeatures(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("clickCloseWebView", () => {
    let inst

    beforeEach(() => {
        inst = new MessengerExtensionsComponent.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.clickCloseWebView("invoice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.clickCloseWebView("withdrawal")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.clickCloseWebView("payment")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.clickCloseWebView("deposit")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.clickCloseWebView(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleCloseWebView", () => {
    let inst

    beforeEach(() => {
        inst = new MessengerExtensionsComponent.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleCloseWebView()
        }
    
        expect(callFunction).not.toThrow()
    })
})
