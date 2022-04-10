"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (!_app["default"].apps.length) {
  _app["default"].initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  });
}

var _default = _app["default"];
exports["default"] = _default;