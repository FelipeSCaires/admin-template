"use strict";
exports.__esModule = true;
function AuthInput(props) {
    var _a;
    return (React.createElement("div", { className: "flex flex-col mt-2" },
        React.createElement("label", null, props.label),
        React.createElement("input", { value: props.valor, type: (_a = props.tipo) !== null && _a !== void 0 ? _a : 'text', onChange: function (e) { var _a; return (_a = props.valorMudou) === null || _a === void 0 ? void 0 : _a.call(props, e.target.value); }, required: true, className: "\n                    px-4 py-3 rounded-lg bg-gray-200 mt-2\n                    border focus:border-blue-500\n                    focus:bg-white\n                    focus:outline-none\n                " })));
}
exports["default"] = AuthInput;
