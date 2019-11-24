// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode19377$1.0.0/src/app/views/usuarios/login.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\"><link href=\"https://fonts.googleapis.com/css?family=Exo&amp;display=swap\" rel=\"stylesheet\"><html><body style=\"background-color: #525252; font-family: 'Exo', sans-serif; \">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-sm bg-dark \"><ul class=\"navbar-nav mx-auto\"><li class=\"nav-item active  \"><a class=\"col\" href=\"/\" style=\"color: #f8f8f8; \"><img src=\"https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/games-512.png\" width=\"50px\" height=\"50px\"></a></li><li class=\"nav-item pl-5 \" style=\"width:600px\"><input type=\"text\" class=\"form-control form-control-lg border-0\" style=\"background-color: #525252\"></li><li class=\"nav-item pl-5\"><a class=\"nav-link\" href=\"/login\" style=\"color: #f8f8f8; font-family: 'Exo', sans-serif; \"> <i class=\"fas fa-user fa-2x\"> </i> </a></li><li class=\"nav-item pl-5\"><form class=\"form-inline col\" action=\"/carrinho\" method=\"get\"><button class=\"btn btn-dark \" type=\"submit\"><i class=\"fas fa-shopping-cart fa-2x\"></i></button></form></li></ul></nav><div class=\"container mx-auto \"><div class=\"container m-5 pb-5 w-100 mx-auto rounded\" style=\"background-image: url('https://relvion.com/wp-content/uploads/2019/04/thumb-1920-655418-696x392.jpg')\"><br><br><br></div><div class=\"container m-5 pb-5 w-100 mx-auto rounded\" style=\"background-color: #313131;\"><form action=\"/validaracesso\" method=\"post\" class=\"m-1 pb-1 pt-4\"><div class=\"input-group mb-3\"><div class=\"input-group-prepend\"><button class=\"btn btn-dark\" type=\"button\" id=\"button-addon1\">E-mail</button></div><input type=\"text\" name=\"login\" class=\" border-0 bg-secondary form-control\"></div><div class=\"input-group mb-3\"><div class=\"input-group-prepend\"><button class=\"btn btn-dark\" type=\"button\" id=\"button-addon1\">Senha</button></div><input type=\"password\" name=\"senha\" class=\"border-0 bg-secondary form-control\"></div><button class=\"btn btn-outline-dark text-light\" type=\"submit\">Login</button></form><form action=\"/cadastro\" method=\"get\"><button class=\"btn btn-outline-dark text-light ml-1 \" type=\"submit\">Cadastrar-se</button></form></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "38");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnode19377$1.0.0/src/app/views/usuarios/login.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
