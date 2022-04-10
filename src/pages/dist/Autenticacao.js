"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AuthInput_1 = require("../components/auth/AuthInput");
var icons_1 = require("../components/icons");
function Autenticacao() {
    var _a = react_1.useState('Login'), modo = _a[0], setModo = _a[1];
    var _b = react_1.useState(null), erro = _b[0], setErro = _b[1];
    var _c = react_1.useState(''), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState(''), senha = _d[0], setSenha = _d[1];
    function exibirErro(msg, tempo) {
        if (tempo === void 0) { tempo = 3; }
        setErro(msg);
        setTimeout(function () { return setErro(null); }, tempo * 1000);
    }
    function submeter() {
        if (modo === 'Login') {
            console.log('login');
        }
        else {
            console.log('cadastro');
        }
    }
    return (React.createElement("div", { className: "flex h-screen items-center justify-center" },
        React.createElement("div", { className: "w-1/2 hidden md:block md:w-1/2" },
            React.createElement("img", { className: "w-full h-screen object-cover", src: "https://source.unsplash.com/random", alt: "imagem da tela de autentica\u00E7\u00E3o" })),
        React.createElement("div", { className: "md:w-1/2 w-full m-10" },
            React.createElement("h1", { className: "\n                 text-xl font-bold mb-5\n             " }, modo === 'Login' ? 'Entre com a sua conta' : 'Cadastre-se na Pataforma'),
            erro ? (React.createElement("div", { className: "\n            flex py-3 px-5 my-2 items-center \n            border border-red-700 rounded-lg\n            bg-red-400 text-white\n        " },
                icons_1.IconWarn,
                React.createElement("span", { className: "ml-3" }, erro))) : false,
            React.createElement(AuthInput_1["default"], { tipo: "email", label: "Email", valor: email, valorMudou: setEmail, obrigatorio: true }),
            React.createElement(AuthInput_1["default"], { tipo: "password", label: "Senha", valor: senha, valorMudou: setSenha, obrigatorio: true }),
            React.createElement("button", { onClick: submeter, className: "\n                 w-full bg-indigo-500 hover:bg-indigo-400\n                 text-white rounded-lg px-4 py-3 mt-6\n             " }, modo === 'Login' ? 'Entrar' : 'Cadastrar'),
            React.createElement("hr", { className: "my-6 border-gray-300 w-full" }),
            React.createElement("button", { onClick: submeter, className: "\n                 w-full bg-red-500 hover:bg-red-400\n                 text-white rounded-lg px-4 py-3 \n             " },
                modo === 'Login' ? 'Entrar' : 'Cadastrar',
                " Com Google"),
            modo === 'Login' ? (React.createElement("p", { className: "mt-8" },
                " Novo por aqui?",
                React.createElement("a", { onClick: function () { return setModo('Cadastro'); }, className: "\n                     text-blue-500 hover:text-blue-700 font-semibold cursor-pointer\n                     " }, " Crie uma conta gratuitamente"))) : (React.createElement("p", { className: "mt-8" },
                " J\u00E1 faz parte da nossa comunidade?",
                React.createElement("a", { onClick: function () { return setModo('Login'); }, className: "\n                     text-blue-500 hover:text-blue-700 font-semibold cursor-pointer\n                     " }, " Entre com as suas credenciais"))))));
}
exports["default"] = Autenticacao;
