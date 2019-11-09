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

  out.w("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script><body class=\"bg-dark\">");

  component_globals_tag({}, out);

  out.w("<div class=\"container m-5 pb-5\"><div class=\"container m-5 pb-5 w-25 mx-auto rounded\" style=\"background-color: #313131;\"><form action=\"/validaracesso\" method=\"post\" class=\"m-1 pb-1 pt-4\"><div class=\"input-group mb-3\"><div class=\"input-group-prepend\"><button class=\"btn btn-success\" type=\"button\" id=\"button-addon1\">E-mail</button></div><input type=\"text\" name=\"login\" class=\"form-control\"></div><div class=\"input-group mb-3\"><div class=\"input-group-prepend\"><button class=\"btn btn-success\" type=\"button\" id=\"button-addon1\">Senha</button></div><input type=\"text\" name=\"senha\" class=\"form-control\"></div><button class=\"btn btn-outline-success\" type=\"submit\">Login</button></form></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "15");

  out.w("</body>");
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
