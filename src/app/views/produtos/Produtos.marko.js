// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode19377$1.0.0/src/app/views/produtos/Produtos.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\"><link href=\"https://fonts.googleapis.com/css?family=Exo&amp;display=swap\" rel=\"stylesheet\"><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><style>\r\n  span {\r\n    display: inline-block;\r\n    width: 210px;\r\n    height: 230px;\r\n    margin: 9px;\r\n    background-color: #313131;\r\n    position: relative;\r\n    font-family: 'Exo', sans-serif; \r\n    color: white;\r\n  }\r\n\r\n \r\n</style><html><body style=\"background-color: #525252; color: white;\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-sm bg-dark \"><ul class=\"navbar-nav mx-auto\"><li class=\"nav-item active  \"><a class=\"col\" href=\"/\" style=\"color: #f8f8f8; \"><img src=\"https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/games-512.png\" width=\"50px\" height=\"50px\"></a></li><li class=\"nav-item pl-5 \" style=\"width:600px\"><input type=\"text\" class=\"form-control form-control-lg border-0\" style=\"background-color: #525252\"></li><li class=\"nav-item pl-5\"><a class=\"nav-link\"" +
    marko_attr("href", "/" + data.logado) +
    " style=\"color: #f8f8f8; \"> <i class=\"fas fa-user fa-2x\"> </i> " +
    marko_escapeXml(data.logado) +
    "</a></li><li class=\"nav-item pl-5\"><form class=\"form-inline col\" action=\"/carrinho\" method=\"get\"><button class=\"btn btn-dark \" type=\"submit\"><i class=\"fas fa-shopping-cart fa-2x\"></i></button></form></li></ul></nav><div class=\"container m-5 pb-5 mx-auto \"><div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\"><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img class=\"d-block w-100\" src=\"https://renovamidia.com.br/wp-content/uploads/2019/11/Diablo-IV-game-e-anunciado-oficialmente-e-ganha-trailer.jpg\" alt=\"First slide\"></div><div class=\"carousel-caption d-none d-md-block\"><h5>DIABLO IV :: PRÉ-VENDA EM BREVE</h5></div><div class=\"carousel-item\"><img class=\"d-block w-100\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeCScFWx1T8S_Dfu_06VLYgYsUKWNHJb26jFTpZIbLMWE1thIA\" alt=\"Second slide\"></div><a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div></div><div class=\"row pt-2\">");

  var $for$0 = 0;

  marko_forEach(data.produtos, function(produto) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<a" +
      marko_attr("href", "/produtoinfo/" + produto.idProduto) +
      "><span class=\"rounded\"><img class=\"\"" +
      marko_attr("src", produto.Img) +
      " style=\"width:100%;\"><div class=\"m-1\">" +
      marko_escapeXml(produto.Descricao) +
      "</div><div class=\"m-1\"><img width=\"30%\" src=\"https://hiltonheadorthopedics.com/wp-content/uploads/2018/09/five-stars.png\"></div><div class=\"m-1\">R$" +
      marko_escapeXml(produto.Preco) +
      "</div> <div class=\"m-1 text-secondary\">cod#" +
      marko_escapeXml(produto.idProduto) +
      "</div> </span></a>");
  });

  out.w("</div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "46");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnode19377$1.0.0/src/app/views/produtos/Produtos.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
