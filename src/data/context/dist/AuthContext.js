"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AuthProvider = void 0;
var router_1 = require("next/router");
var react_1 = require("react");
var config_1 = require("../../firebase/config");
var js_cookie_1 = require("js-cookie");
var AuthContext = react_1.createContext({});
function usuarioNormalizado(usuarioFirebase) {
    return __awaiter(this, void 0, Promise, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, usuarioFirebase.getIdToken()];
                case 1:
                    token = _a.sent();
                    return [2 /*return*/, {
                            uid: usuarioFirebase.uid,
                            nome: usuarioFirebase.displayName,
                            email: usuarioFirebase.email,
                            token: token,
                            provedor: usuarioFirebase.providerData[0].providerId,
                            imagemUrl: usuarioFirebase.photoURL
                        }];
            }
        });
    });
}
function gerenciarCookie(logado) {
    if (logado) {
        js_cookie_1["default"].set('admin-template-auth', logado, {
            expires: 7
        });
    }
    else {
        js_cookie_1["default"].remove('admin-template-auth');
    }
}
function AuthProvider(props) {
    var _a = react_1.useState(true), carregando = _a[0], setCarregando = _a[1];
    var _b = react_1.useState(null), usuario = _b[0], setUsuario = _b[1];
    function configurarSessao(usuarioFirebase) {
        return __awaiter(this, void 0, void 0, function () {
            var usuario_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(usuarioFirebase === null || usuarioFirebase === void 0 ? void 0 : usuarioFirebase.email)) return [3 /*break*/, 2];
                        return [4 /*yield*/, usuarioNormalizado(usuarioFirebase)];
                    case 1:
                        usuario_1 = _a.sent();
                        setUsuario(usuario_1);
                        gerenciarCookie(true);
                        setCarregando(false);
                        return [2 /*return*/, usuario_1.email];
                    case 2:
                        setUsuario(null);
                        gerenciarCookie(false);
                        setCarregando(false);
                        return [2 /*return*/, false];
                }
            });
        });
    }
    function loginGoogle() {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, config_1["default"].auth().signInWithPopup(new config_1["default"].auth.GoogleAuthProvider())];
                    case 1:
                        resp = _b.sent();
                        if ((_a = resp.user) === null || _a === void 0 ? void 0 : _a.email) {
                            configurarSessao(resp.user);
                            router_1["default"].push('/');
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        var cancelar = config_1["default"].auth().onIdTokenChanged(configurarSessao);
        return function () { return cancelar(); };
    }, []);
    return (React.createElement(AuthContext.Provider, { value: {
            usuario: usuario,
            loginGoogle: loginGoogle
        } }, props.children));
}
exports.AuthProvider = AuthProvider;
exports["default"] = AuthContext;
