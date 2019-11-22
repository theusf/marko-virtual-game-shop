// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode19377$1.0.0/src/app/views/produtos/produtoinfo.marko",
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

  out.w("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\"><link href=\"https://fonts.googleapis.com/css?family=Exo&amp;display=swap\" rel=\"stylesheet\"><style>\r\n  span {\r\n    display: inline-block;\r\n    width: 30%;\r\n    height: 50%;\r\n    margin: 9px;\r\n    font-family: 'Exo', sans-serif; \r\n    color: white;\r\n  }\r\n\r\n  body{\r\n\r\n        font-family: 'Exo', sans-serif; \r\n    color: white;\r\n\r\n  }\r\n</style><html><body style=\"background-color: #525252;\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-sm bg-dark \"><ul class=\"navbar-nav mx-auto\"><li class=\"nav-item active  \"><a class=\"col\" href=\"/\" style=\"color: #f8f8f8; \"><img src=\"https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/games-512.png\" width=\"50px\" height=\"50px\"></a></li><li class=\"nav-item pl-5 \" style=\"width:600px\"><input type=\"text\" class=\"form-control form-control-lg border-0\" style=\"background-color: #525252\"></li><li class=\"nav-item pl-5\"><a class=\"nav-link\" href=\"/login\" style=\"color: #f8f8f8; \"> <i class=\"fas fa-user fa-2x\"> </i> Entrar</a></li><li class=\"nav-item pl-5\"><form class=\"form-inline col\" action=\"/carrinho\" method=\"get\"><button class=\"btn btn-dark \" type=\"submit\"><i class=\"fas fa-shopping-cart fa-2x\"></i></button></form></li></ul></nav><div class=\"container m-5 pb-5 mx-auto \">");

  var $for$0 = 0;

  marko_forEach(data.prod, function(produto) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=\"container-fluid\"><div class=\"row \"><div class=\"col-sm-8\"><img class=\"\"" +
      marko_attr("src", produto.Img) +
      " style=\"width:100%;\"></div><div class=\"col-sm-4\" style=\"background-color:#232931; text-align: right;\"> <form action=\"/addcarrinho\" method=\"post\"><p> <h1>" +
      marko_escapeXml(produto.Descricao) +
      "</h1> </p><h3> R$ " +
      marko_escapeXml(produto.Preco) +
      "</h3> <button class=\"btn btn-outline-dark my-2 my-sm-0 text-light\" style=\"\" type=\"submit\">Adicionar ao carrim</button><br><input class=\"\" type=\"hidden\" name=\"id_produto\"" +
      marko_attr("value", "" + produto.idProduto) +
      "> <input class=\"\" type=\"hidden\" name=\"valor_produto\"" +
      marko_attr("value", "" + produto.Preco) +
      "> </form> </div> </div></div>");
  });

  out.w("</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "35");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnode19377$1.0.0/src/app/views/produtos/produtoinfo.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
