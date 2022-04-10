"use strict";
exports.__esModule = true;
var Title_1 = require("./Title");
var material_1 = require("@mui/material");
var UseAppData_1 = require("../../data/hook/UseAppData");
function Header(props) {
    var _a = UseAppData_1["default"](), tema = _a.tema, alternarTema = _a.alternarTema;
    return (React.createElement("div", { className: "flex " },
        React.createElement(Title_1["default"], { titulo: props.titulo, subtitulo: props.subtitulo }),
        React.createElement("div", { className: "flex flex-grow justify-end" },
            React.createElement(material_1.Switch, { onChange: alternarTema }))));
}
exports["default"] = Header;
