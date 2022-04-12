"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var UseAuth_1 = require("../../data/hook/UseAuth");
function AvatarUsuario(props) {
    var _a;
    var usuario = UseAuth_1["default"]().usuario;
    return (React.createElement(link_1["default"], { href: "/perfil" },
        React.createElement("img", { src: (_a = usuario === null || usuario === void 0 ? void 0 : usuario.imagemUrl) !== null && _a !== void 0 ? _a : '/image/avatar.svg', alt: "Avatar do usu\u00E1rio", className: "\n                h-10 w-10 rounded-full cursor-pointer\n                " + props.className + "\n           " })));
}
exports["default"] = AvatarUsuario;
