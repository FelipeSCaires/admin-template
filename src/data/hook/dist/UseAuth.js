"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AuthContext_1 = require("../context/AuthContext");
var useUseAuth = function () { return react_1.useContext(AuthContext_1["default"]); };
exports["default"] = useUseAuth;
