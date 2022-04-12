"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../styles/globals.css");
require("tailwindcss/tailwind.css");
var AppContext_1 = require("../data/context/AppContext");
var AuthContext_1 = require("../data/context/AuthContext");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(AuthContext_1.AuthProvider, null,
        React.createElement(AppContext_1.AppProvider, null,
            React.createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = MyApp;
