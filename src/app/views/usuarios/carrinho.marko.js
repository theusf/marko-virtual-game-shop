// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode19377$1.0.0/src/app/views/usuarios/carrinho.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\"><style>\r\n  span {\r\n    display: inline-block;\r\n    width: 30%;\r\n    height: 50%;\r\n    margin: 9px;\r\n  }\r\n</style><html><body class=\"bg-secondary\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-dark bg-dark\"><div class=\"row\"><form class=\"form-inline\"><input class=\"form-control col\" type=\"search\" placeholder=\"Buscar produtos\" aria-label=\"Search\"><button class=\"form-control btn btn-success col\" type=\"submit\">Buscar</button></form><form class=\"form-inline\" action=\"/login\"><button class=\"btn btn-warning my-2 my-sm-0\" type=\"submit\"><i class=\"fas fa-shopping-cart\"></i></button></form></div></nav><div class=\"container-fluid\">");

  var $for$0 = 0;

  marko_forEach(data.prod, function(produto) {
    out.w(" ");

    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=\"row bg-danger\"><div class=\"col-sm-4\" style=\"background-color:lavender;\"><img class=\"m-5\"" +
      marko_attr("src", produto.Img) +
      " style=\"width:20%;\"></div><div class=\"col-sm-8\" style=\"background-color:lavenderblush; text-align: right;\"><form action=\"/addcarrinho\" method=\"post\"><p> <h1>" +
      marko_escapeXml(produto.Descricao) +
      "</h1> </p><h3>R$ " +
      marko_escapeXml(produto.Valor_Total) +
      "</h3> <br><input type=\"hidden\" name=\"id_produto\"" +
      marko_attr("value", "" + produto.idProduto) +
      "> <input type=\"hidden\" name=\"valor_produto\"" +
      marko_attr("value", "" + produto.Valor_Total) +
      "> </form> </div></div> ");
  });

  out.w("<div class=\"row\"> <div class=\"col-sm-4\" style=\"background-color:lavender;\"></div> <div class=\"col-sm-8\" style=\"background-color:lavenderblush; text-align: right;\"><h3>Valor total: R$ " +
    marko_escapeXml(data.vtotal) +
    "</h3></div> </div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnode19377$1.0.0/src/app/views/usuarios/carrinho.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
