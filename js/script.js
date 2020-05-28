$(document).ready(function () {  
        //var top = $('#menu_principal').offset().top - parseFloat($('#menu_principal').css('marginTop').replace(/auto/, 100));
        setCardsOnCarousel();        
        $(window).scroll(function (event) {
          solidifyMenu()
        });
      });

      $(function() {
        $('.link[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top-20 //esse vinte é apenas para ajustar o margin
              }, 1000);
              return false;
            }
          }
        });
      });

      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText:["<i class=\"font-grey fa fa-angle-left\"></i>", "<i class=\"font-grey  fa fa-angle-right\"></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });

  var servicos = [{
    title : "Obras Civis",
    img : "img/card_obrascivis.png",
    sub: "A fim de oferecer total comodidade e tranquilidade aos nossos clientes, atuamos em todas as etapas do empreendimento desde a concepção até a manutenção pós obras, gerenciando todas as etapas e frentes de trabalhos relacionados ao empreendimento.",
    text: "Atuamos em todas as etapas do empreendimento desde a concepção até a manutenção pós obra, gerenciando todas as etapas e frentes de trabalhos relacionados ao empreendimento: \n<br>- Assessoria para concepção e desenvolvimento do produto Assessoramos nossos clientes de forma que suas pretensões e necessidades sejam atendidas com sucesso;\n<br>- Desenvolvimento e aprovação de projetos A partir do produto definido, executamos os projetos e aprovamos junto aos órgãos competentes;\n<br>- Execução e gerenciamento de obras novas e reformas; Com os projetos executivos definidos e liberados, a administração de obras consiste basicamente nos seguintes passos:\n<br>- Apresentação do orçamento para a realização completa da obra materiais, mão de obra, maquinas e equipamentos. (através do processo de Maximo valor definido, reajustado pelo INCC publicado pela FGV);\n<br>- Apresentação do cronograma de execução da obra e fluxo de trabalhos a serem executados;\n<br>- Contratação de empreiteiros e compra de materiai;\n<br>- Execução da obra, gerenciada por equipe de engenheiros, com treinamentos e orientações aos empreiteiros sobre o a correta execução dos serviços;\n<br>- Relatório mensal para prestação de contas do andamento físico e medições relacionadas aos serviços realizados;\n<br>- Execução da obra, gerenciada por equipe de engenheiros;\n<br>- Treinamentos e desenvolvimento da equipe de trabalho."
  },
  {
    title : "Elétrica",
    img : "img/card_eletrica.png",
    sub: "Trabalhamos com qualquer serviço de elétrica, desde instalação de chuveiros, até a renovação completa da fiação da sua casa ou empresa.",
    text: "A rede elétrica de um imóvel é um dos pontos mais importantes, pois trata da segurança de sua família, funcionários, clientes e demais pessoas. Um problema elétrico pode inclusive trazer enormes prejuízos e acabar com seu negócio.Por termos uma sólida estrutura planejada e um processo de expansão cadenciado, possuímos franquias em outros estados, onde nossos eletricistas são rigorosamente selecionados através de duas entrevistas presenciais e provas técnicas de elétrica.Conte com profissionais uniformizados, com crachá, horário marcado e nosso “Código de Entrada” para acesso à sua residência, prezando pela sua segurança. A Home Serviços persegue o objetivo de se manter oferecendo o melhor serviço de eletricista do mundo, desde troca de resistências de chuveiros à execução de grandes projetos elétricos.Temos profissionais altamente qualificados para atuar tanto em pequenos consertos elétricos quanto em grandes projetos, como alguns exemplos: \n<br>- Reforma elétrica em geral;\n<br>- Padrão de entrada da Eletropaulo;\n<br>- Quadros de comando geral do prédio (bomba d´água);\n<br>- Quadros de ligação geral;\n<br>- Quadros de entrada;\n<br>- Divisão dos circuitos e escolha correta dos disjuntores;\n<br>- Troca geral da fiação elétrica;\n<br>- Troca de fusíveis por disjuntores;\n<br>- Ligações paralelas, inversão de tomadas para 220/110 volts;\n<br>- Verificação de curto circuito nos quadros de força;\n<br>- Iluminação de garagens de prédio, apartamentos, escritórios etc;\n<br>- Manutenção geral em quadros de força de condomínios e empresas."
  },
  {
    title : "Hidráulica",
    img : "img/card_hidraulica.png",
    sub: "Além de solucionar problemas como vazamentos, também instalamos torneiras, caixas d’água, tubulações novas, etc. Tudo feito no maior capricho e rapidez.",
    text: "Um problema hidráulico gera muitos problemas, tanto na parte estrutural de seu imóvel ou estabelecimento, quanto na questão de aumento de sua conta de água, sem mencionar ainda o desperdício de água jogado fora. Pois, uma torneira pingando uma gota a cada 5 segundos, gasta em média 20 litros de água por dia, isso pode gerar grandes gastos e desperdícios.Atuamos nos mais variados tipos de serviço de encanador do mercado. Por termos uma sólida estrutura planejada e um processo de expansão cadenciado, nossos encanadores são rigorosamente selecionados através de duas entrevistas presenciais e provas técnicas de elétrica.Conte com profissionais uniformizados e capacitados, equipamentos de ponta, horário marcado e nosso “Código de Entrada” para acesso à sua residência, prezando pela sua segurança e diagnósticos precisos.\n<br>- Instalações hidráulicas em geral;\n<br>- Manutenções em geral;\n<br>- Vazamentos;\n<br>- Substituição de louças e metais;\n<br>- Limpeza de Caixa d’água;\n<br>- Sistema de combate a incêndio (extintores, mangueiras, sprinklers). "
  },
  {
    title : "Serralheria",
    img : "img/card_serralheria.png",
    sub: "Contamos com uma oficina própria e profissionais especializados para a confecção de todo tipo de serviço de serralheria, desde a confecção de portas, janelas e portões até coberturas, grades e estruturas metálicas.",
    text: "Nossos profissionais, serrralheiros experientes, com grande conhecimento técnico e altamente qualificados, realizam os seguintes serviços de serralheria:\n<br>- Instalação de janelas, grades, escadas, portas, portas de aço, portões, portões automáticos, portões basculantes em ferro, alumínio e aço em geral;\n<br>- Reforma de janelas, grades, escadas, portas, portas de aço, portões, portões automáticos, portões basculantes em ferro, alumínio e aço em geral;\n<br>- Manutenção de janelas, grades, escadas, portas, portas de aço, portões, portões automáticos, portões basculantes em ferro, alumínio e aço em geral;\n<br>- Conserto de janelas, grades, escadas, portas, portas de aço, portões, portões automáticos, portões basculantes em ferro, alumínio e aço em geral;\n<br>- Substituição de janelas, grades, escadas, portas, portas de aço, portões, portões automáticos, portões basculantes em ferro, alumínio e aço em geral;\n<br>- Restauração com reposição de peças e partes, solda em ferro, alumínio e aço;\n<br>- Automação de portões;\n<br>- Serviços de solda mig, solda elétrica, solda oxigênio, acetileno e ferro fundido."
  },
  {
    title : "Pintura",
    img : "img/card_pintura.png",
    sub: "Conte com profissionais especializados em reparos com massa corrida, grafiato, texturas, gel de todos os tipos, dentre muitos outros estilos.",
    text: "A pintura faz parte da vida do ser humano desde os tempos antigos e foi uma das principais formas de representação daquela época e está cada vez mais forte em nossos lares e nossas vidas, mudando ambientes, embelezando todo e qualquer tipo de estrutura.Por termos uma sólida estrutura planejada e um processo de expansão cadenciado, possuímos franquias de qualidade por todo Brasil, onde nossos pintores são rigorosamente selecionados através de duas entrevistas presenciais e provas técnicas.Conte com profissionais uniformizados, com crachá e horário marcado. A Home Serviços persegue o objetivo de se manter oferecendo o melhor serviço de pintura do mundo, desde pequenos retoques de pintura à renovação completa de sua fachada.Conte com a Home Serviços para reformar sua casa com tranquilidade.\n<br>- Fachadas;\n<br>- Portões;\n<br>- Impermeabilização;\n<br>- Residencial/Comercial;\n<br>- Texturas/Grafiatos"
  },
  {
    title : "Desentupimento",
    img : "img/card_desentupimento.png",
    sub: "Dispomos de qualquer tipo de desentupimento, desde desentupimento do ralo do chuveiro, do tanque ou da pia, até hidrojateamento.",
    text: "Temos a solução para você que procura um bom desentupidor. Atuamos nos mais variados tipos de serviço de desentupidor do mercado. Está precisando trocar sua torneira, registro ou aquela válvula chata que fica vazando? Ou o vizinho do apartamento de baixo está reclamando de infiltração? Conte com a Home Serviço para resolver seu problema.Conte com profissionais uniformizados, com crachá, horário marcado e nosso “Código de Entrada” para acesso à sua residência, prezando pela sua segurança. A Home Serviços persegue o objetivo de se manter oferecendo o melhor serviço de encanador do mundo, desde troca de reparos de torneiras e vazamentos à completa instalação de projetos hidráulicos.Conte com a Home Serviços para reformar sua casa com tranquilidade.\n<br>- Caça vazamentos;\n<br>- Troca de canos;\n<br>- Desentupimento de pia."
  },
  {
    title : "Limpeza",
    img : "img/card_limpeza.png",
    sub: "Garantimos profissionais de limpeza que conservam a higiene e proporcionam bem estar para sua empresa e seus colaboradores. Dispomos de limpeza de fachadas, de totens, caixa d’água, calha entre outros, de acordo com as necessidades do cliente",
    text: "A sua casa será limpa e cuidada por uma equipe de duas profissionais com metodologia, treino, produtos e equipamentos próprios da Home Serviço. Este conceito diferenciado de duas profissionais, treinadas e uniformizadas, foi desenvolvido para que a limpeza ocorra com o máximo de conforto, controle, eficiência e rigor possível.O nosso sistema se baseia em um método inovador, eficaz e ágil, com técnicas de neutralização de químicos, que, através de equipamentos, metodologias e supervisão rigorosa, asseguram um resultado e qualidade superior à média.Conte com a Home Serviços para reformar sua casa com tranquilidade.\n<br>- Limpezas residencias;\n<br>- Limpeza de caixa d'água;\n<br>- Limpeza de ralos e sifões;\n<br>- Limpeza de calha;\n<br>- Limpeza profunda;\n<br>- Limpeza de condomínios;\n<br>- Tratamento e limpeza de pisos"
  },
  {
    title : "Marcenaria",
    img : "img/card_marcenaria.png",
    sub: "Executamos projetos de decoradores, arquitetos e até dos próprios clientes, tentando atender à suas necessidades e garantindo qualidade e prazo de entrega, bem como projetos próprios baseados no perfil do cliente.",
    text: "A Home Serviços oferece a seus clientes, profissionais permanentemente capacitados e aptos a executar projetos de decoradores, arquitetos e até dos próprios clientes, tentando atender à suas necessidades e garantindo qualidade e prazo de entrega, bem como projetos próprios baseados no perfil do cliente.Atendemos os projetos desde a obra até a execução, elaborando propostas baseadas nos projetos hidráulicos e elétricos, sugerindo inclusive melhores posicionamentos, sempre visando o conforto futuro do cliente.São fabricados todos os tipos de móveis sob medida, tais como:\n<br>- Cozinhas;\n<br>- Armários embutidos;\n<br>- Gabinetes p/ banheiro;\n<br>- Móveis comerciais;\n<br>- Closet e qualquer outra peça solicitada.\n<br>Oferecemos outros serviços de marcenaria como:\n<br>- Substituição de dobradiças, alinhamento de portas e gavetas;\n<br>- Substituição de trilhos de gavetas;\n<br>- Lustração de moveis;\n<br>- Instalação ou troca de fechadura;\n<br>- Instalação de portas e batentes;\n<br>- Montagem e desmontagem de moveis: comprou um móvel pela internet, e quer montar;\n<br>- Manutenção de porta-camarão e porta de correr;\n<br>- Instalação de rodapé."
  },
  {
    title : "Vidraçaria",
    img : "img/card_vidracaria.png",
    sub: "A Home Serviços oferece vidros temperados, laminados, serigrafados, bisotados e lapidados utilizando tecnologia de ponta que lhe confere excelência.",
    text: "Nos preocupamos em contratar e conservar profissionais de qualidade para atender o melhor possível aos nossos clientes. E, para melhor atende-lo, oferecemos a visita de um técnico para tirar as medidas e apresentar algumas sugestões de produtos e serviços mais adequados para atender às suas necessidades.Conte com profissionais uniformizados, com crachá, horário marcado e nosso “Código de Entrada” para acesso à sua residência, prezando pela sua segurança. A Home Serviços persegue o objetivo de se manter oferecendo o melhor serviço de eletricista do mundo, desde troca de resistências de chuveiros à execução de grandes projetos elétricos.\n<br>- Trabalhamos com cortina de vidro;\n<br>- Fechamento de área, varanda, sacada em blindex;\n<br>- Muro de vidro;\n<br>- Guarda corpo em alumínio, vidro e inox;\n<br>- Box blindex;\n<br>- Kit em alumínio e inox;\n<br>- Esquadrias de alumínio;\n<br>- Espelhos lapidados e bisotados;\n<br>- Vidros comuns, temperado, laminado e impresso;\n<br>- Tampo e prateleiras de 4 a 19mm;\n<br>- Jato de areia;\n<br>- Fechamento de pias, portas de sauna e vitrines. "
  },
  {
    title : "Portaria e Recepção",
    img : "img/card_portaria.png",
    sub: "Terceirizamos serviços de controle de acesso com profissionais de zeladoria e de recepção devidamente trajados e capacitados para assegurar o acesso de pessoas em empresas com qualidade e profissionalismo.",
    text: "A Home Serviços é especializada em oferecer a seus clientes, profissionais permanentemente capacitados e aptos a executar todas as tarefas relacionadas à portaria e recepção.São colaboradores que fazem tudo com disposição e que se tornam o “cartão de visitas” das empresas, atuando com simpatia mas dentro dos padrões estabelecidos que otimizam o fluxo de acesso de visitantes e colaboradores às diversas áreas das empresas.O valor das marcas é construído todos os dias, e profissionais terceirizados devem colaborar na consolidação destes valores para as empresas clientes.Através de treinamento contínuo e estreita supervisão, a Home Serviços está pronta para integrar e melhorar os esforços das instituições no atendimento nas relações com seus diversos públicos.Entre em contato, nossa equipe está pronta para apresentar todo o escopo de serviços de portaria e recepção.\n<br>- Efetivo controle sobre o acesso de pessoas e veículos;\n<br>- Resguarda dos ambientes corporativos de intrusões indesejadas;\n<br>- Controle e organização do fluxo de funcionários, clientes e visitantes em geral."
  },
  {
    title : "Manutenção",
    img : "img/card_manutencao.png",
    sub: "A empresa possui setor específico de manutenção predial, com pessoal qualificado, máquinas, ferramentas e equipamentos apropriados para realizar várias tarefas fundamentais para as empresas.",
    text: "Muito se tem falado sobre esse tipo de manutenção, mas pouco ainda se sabe sobre ela. Natural, uma vez que se trata de um ramo relativamente novo no país.Trata-se da prática de cuidar de toda a infraestrutura de um edifício, o que significa cuidados com sistemas elétrico, hidráulico, incêndio e de segurança, além de comunicação e climatização. Não é difícil perceber, portanto, que se trata de uma tarefa que exige planejamento e recursos. E na proporção que se investe no primeiro item, menos se investirá no segundo.É que a manutenção predial está ligada, inevitavelmente, à sua estrutura de construção. Um processo de manutenção predial adequado pode não só corrigir erros estruturais de um edifício, como conservá-lo do ponto de vista patrimonial. A falta de manutenção predial representa prejuízo no bolso e, pior ainda, um risco para a saúde e segurança de moradores, no caso de um prédio residencial e seus frequentadores e usuários, no caso dos prédios comerciais. Isso para não falarmos de toda a população, quando pensamos em prédios localizados em regiões centrais.Um plano de manutenção é sinônimo de economia e investimento e é fundamental conscientizar os administradores de prédios, inclusive públicos, de que é uma questão acima de tudo de segurança e saúde.Temos profissionais altamente qualificados para atuar tanto em pequenos consertos quanto em grandes projetos.\n<br>- Sistema elétrico;\n<br>- Sistema hidráulico;\n<br>- Sistema de incêndio;\n<br>- Sistema de segurança;\n<br>- Sistema de comunicação;\n<br>- Sistema de climatização."
  },
]

function setCardsOnCarousel(){
   iterateOnCardList()
}

function iterateOnCardList(){
  var arrayHtml = ""
  for(s in servicos){
    arrayHtml+= createCard(s);
    //$('#gridServicos').owlCarousel('add', createCard(s)).owlCarousel('refresh')
    $('#gridServicos').html(arrayHtml)
  }
  return arrayHtml;
}

function createCard(position){
 var html = "<div class=\"col-lg-4 pull-left\">"+
              "<div class=\"card\">"+
                "<img class=\"img-fluid\" src=\""+servicos[position].img+"\" alt=\"Card image cap\"/>"+
                "<div class=\"card-block\">"+
                  "<h4 class=\"card-title\">"+servicos[position].title+"</h4>"+
                  "<p class=\"card-text text-card-serv\">"+servicos[position].sub+"</p>"+
                  "<a onclick=\"setValueOnModal("+position+")\" class=\"font-green\" data-toggle=\"modal\" data-target=\"#myModal\">"+
                    "Ver detalhes <i class=\"fa fa-angle-right\"></i>"+
                  "</a>"+
                "</div>"+
              "</div>"+
            "</div>"
  return html;
}

function setValueOnModal(position){
  $(".modal-title").html(servicos[position].title);
  $(".modal-body").html(servicos[position].text);
}

function initModalEmail(){
  var retorno = $.post('enviar.php', $('#custom_form').serialize())
  //if(retorno.statusText == "OK"){
      alert("Enviado com sucesso!");
      $('#custom_form').trigger("reset");
  //}
}