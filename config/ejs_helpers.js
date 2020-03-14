var moment = require('moment');
var icons = 
{ 'credito'               : 'fa-gem'
, 'grupo'                 : 'icon-users'
, 'participantes'         : 'icon-users'
, 'ideia'                 : 'icon-lamp'
, 'ideia-aprovada'        : 'icon-fire'
, 'medalha'               : 'icon-medal'
, 'pesquisa'              : 'fa-flask'
, 'plataforma'            : 'icon-rocket'
, 'portfolio'             : 'fa-bullseye'
, 'sysop'                 : 'fa-traffic-light'
, 'ajuda'                 : 'fa-question'
, 'moderador'             : 'fa-gavel'
, 'sponsor'               : 'fa-suitcase'
, 'timer'                 : 'fa-stopwatch'
, 'editar'                : 'fa-pencil-alt'
, 'aprovar-agente'        : 'fa-user-check'
, 'agente'                : 'fa-user'
, 'localizacao'           : 'fa-globe-americas'
, 'funcao'                : 'fa-sitemap'
, 'conexoes'              : 'icon-shrink'
, 'avaliacoes'            : 'icon-clipboard'
, 'avaliacao-disrupcao'   : 'icon-atom'
, 'avaliacao-dificuldade' : 'icon-direction'
, 'avaliacao-impacto'     : 'icon-bomb'
, 'avaliacao-retorno'     : 'icon-dollar'
, 'avaliacao-tempo'       : 'icon-hourglass'
, 'organization'          : 'fa-building'

, 'ellipsis'              : 'icon-ellipsis'
, 'checkmark'             : "icon-checkmark"
, 'cancel'                : "icon-cancel"
, 'question'              : "icon-question"
, 'smile'                 : "icon-smile"
, 'neutral'               : "icon-neutral"
, 'sad'                   : "icon-sad"
, 'lock'                  : "icon-lock"
, 'suitcase'              : "icon-suitcase"
, 'pushpin'               : "icon-pushpin"
, 'pontos'                : "icon-diamond"
, 'fire'                  : "icon-fire"
, 'stats'                 : "icon-stats"
, 'stats2'                : "icon-stats2"
}

var svg = {
'wizard-step'          : '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="50px" height="50px" viewBox="0 0 14.287499 14.2875" version="1.1" id="svg8" inkscape:version="0.92.1 r15371" sodipodi:docname="wizard-step.svg"> <defs id="defs2" /> <g inkscape:label="Camada 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-282.71248)"> <circle class="wizard-step-outer-circle" style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.2644963;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="path4485" cx="7.1437497" cy="289.85623" r="6.4823351" /> <circle class="wizard-step-inner-circle" style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.26451352;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="path4485-8" cx="7.2565742" cy="289.74341" r="1.8521183" /> </g> </svg>'
, 'parent-directory'   : '<svg width="19px" height="14px" viewbox="0 0 19 14" version="1.1" role="presentation"> <g id="Source-Folder-View" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-401.000000, -408.000000)" id="up-folder" fill-rule="nonzero" fill="#42526E"> <g transform="translate(401.000000, 408.000000)"> <path d="M-1.523,6.5 C-2.063,6.5 -2.5,6.948 -2.5,7.5 C-2.5,8.051 -2.063,8.5 -1.523,8.5 L9.523,8.5 C10.062,8.5 10.5,8.051 10.5,7.5 C10.5,6.948 10.062,6.5 9.523,6.5 L-1.523,6.5 Z" id="Clip-5-Copy" transform="translate(4.000000, 7.500000) rotate(90.000000) translate(-4.000000, -7.500000) "></path> <path d="M4.20246154,12 C3.53784615,12 3,12.448 3,13 C3,13.551 3.53784615,14 4.20246154,14 L17.7975385,14 C18.4609231,14 19,13.551 19,13 C19,12.448 18.4609231,12 17.7975385,12 L4.20246154,12 Z" id="Clip-5-Copy" transform="translate(11.000000, 13.000000) rotate(-180.000000) translate(-11.000000, -13.000000) "></path> <path d="M4.731375,-1.193875 L1.801375,1.762125 C1.399375,2.170125 1.399375,2.830125 1.801375,3.238125 L4.731375,6.195125 C4.934375,6.398125 5.199375,6.500125 5.464375,6.500125 C5.729375,6.500125 5.994375,6.398125 6.196375,6.195125 C6.601375,5.786125 6.601375,5.125125 6.196375,4.717125 L3.999375,2.501125 L6.196375,0.283125 C6.601375,-0.123875 6.601375,-0.785875 6.196375,-1.193875 C5.993375,-1.396875 5.729375,-1.499875 5.464375,-1.499875 C5.198375,-1.499875 4.934375,-1.396875 4.731375,-1.193875 Z" id="Clip-2-Copy" transform="translate(4.000000, 2.500125) rotate(90.000000) translate(-4.000000, -2.500125) "></path> </g> </g> </g> </svg>'
, 'directory'          : '<svg width="24" height="24" viewbox="0 0 24 24" focusable="false" role="presentation"> <path d="M12.2 6h7.81C21.108 6 22 6.893 22 7.992v11.016c0 1.1-.898 1.992-1.99 1.992H3.99A1.992 1.992 0 0 1 2 19.008V5.006C2 3.898 2.896 3 3.997 3h5.006c1.103 0 2.327.826 2.742 1.862L12.2 6z" fill="currentColor" fill-rule="evenodd"></path> </svg>'
, 'file'               : '<svg width="24" height="24" viewbox="0 0 24 24" focusable="false" role="presentation"> <g fill="currentColor" fill-rule="evenodd"> <path d="M17 10.005V19H7V5h5.99v2.49a1.5 1.5 0 0 0 1.5 1.5h4.5v-.522c0-.297-.132-.578-.359-.768l-5.074-4.236c-.36-.3-.813-.464-1.282-.464H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8.995h-2z"></path> <rect x="8" y="12" width="8" height="2" rx="1"></rect> <rect x="8" y="15" width="4" height="2" rx="1"></rect> </g> </svg>'
, 'investimento'       : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 23.72" height="21" width="23.72" class="icon-"><path id="diamond" d="M -2.8263219,7.7452866 10.020174,23.687404 4.8700713,7.7452866 Z m 9.0893752,0 L 10.812055,23.72 14.726401,7.7452866 H 6.2659293 Z M 11.504232,23.687404 23.871381,7.7452866 h -7.63312 L 11.507108,23.687404 Z M 23.9011,6.7022278 20.193832,0.3633449 16.484646,6.7022278 Z M 19.031895,0 h -7.420289 l 3.707268,6.5565063 z M 14.182822,6.7022278 10.471719,0.3633449 6.7606153,6.7022278 Z M 9.3893535,0 H 1.9671467 L 5.675374,6.5565063 9.3826426,0 Z M 0.80904469,0.3633449 -2.9011,6.7022278 H 4.5143959 L 0.80616861,0.3633449 Z" fill="currentColor"></path></svg>'
, 'notificacao'        : '<svg width="18.375" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=""><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>'
, 'busca'              : '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 0.1 0.1" height="100%" width="100%" class="icon-"> <path id="magnifier" d="m 0.09669639,0.09797996 0.0024232,-0.002425 c 0.0012322,-0.001241 0.0020126,-0.002957 0.0020126,-0.004852 0,-0.001895 -8.2145e-4,-0.003611 -0.0020126,-0.004852 v 0 L 0.0797308,0.06644234 c -0.0012322,-0.0012 -0.0029025,-0.001939 -0.004737,-0.001939 -0.0012322,0 -0.0025053,3.6416e-4 -0.0035322,9.9499e-4 l 2.875e-5,-1.686e-5 -0.01059664,-0.0106001 C 0.06512411,0.04923297 0.06765701,0.04210959 0.06765701,0.03439254 0.06765701,0.01539807 0.05225765,0 0.03326172,0 0.01426717,0 -0.00113219,0.01539807 -0.00113219,0.03439254 c 0,0.01899448 0.01539936,0.03439254 0.03439391,0.03439254 0.0088579,0 0.01693547,-0.003349 0.02303333,-0.008849 l -3.148e-5,2.702e-5 0.0103776,0.010378 c -5.4765e-4,9.9828e-4 -9.5837e-4,0.002206 -9.5837e-4,0.003498 0,0.001848 6.8454e-4,0.003523 0.001944,0.004744 L 0.08702935,0.097991 C 0.08826155,0.099233 0.08998655,0.1 0.09188965,0.1 c 0.0018893,0 0.0036143,-7.6828e-4 0.0048466,-0.002009 v 0 z M 0.03318772,0.06013376 c -1.37e-6,0 -2.74e-6,0 -2.74e-6,0 -0.014211,0 -0.0257304,-0.01151875 -0.0257304,-0.02572776 0,-0.014209 0.01151393,-0.0257277 0.0257304,-0.0257277 0.01420828,0 0.0257263,0.01151673 0.02572904,0.02572414 v 2.1e-7 c 0,1e-6 0,2.19e-6 0,3.38e-6 0,0.01420785 -0.01151392,0.02572574 -0.0257263,0.02572773 z" style="fill:currentColor;stroke-width:0.0000997"></path> </svg>'
, 'novo'               : '<svg width="100%" height="100%" viewBox="0 0 1024 1024" style="margin-left: calc(50% - 0.5em)"><path d="M992 384h-352v-352c0-17.672-14.328-32-32-32h-192c-17.672 0-32 14.328-32 32v352h-352c-17.672 0-32 14.328-32 32v192c0 17.672 14.328 32 32 32h352v352c0 17.672 14.328 32 32 32h192c17.672 0 32-14.328 32-32v-352h352c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32z" style="fill:currentColor;"></path></svg>'
, 'plataforma'         : '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M 960,320 640,640 v 192 l -256,192 c 0,0 56.64,-203.424 30.08,-322.08 L 0,1024 328.16,602.112 C 193.504,543.264 0,640 0,640 L 192,384 H 384 L 704,64 1024,0 Z"/></svg>'
, 'ideia'              : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0, 0, 564.284, 1024"><path d="M 277.59794,0.1 C 279.82373,0.036 282.44146,0 285.06921,0 439.27518,0 564.284,125.00891 564.284,279.215 c 0,1.4729 -0.011,2.9427 -0.034,4.4096 l 0.003,-0.222 c 0,151.3614 -140.85527,246.5332 -140.85527,494.0642 h -142.6141 l -138.02654,0.642 C 138.69248,528.7709 0,430.6764 0,282.2147 0,155.526 89.585268,0.21799 277.59894,0.21799 Z M 160.53535,813.9773 h 245.01112 c 9.66806,0 17.50629,7.8373 17.50629,17.5063 0,9.6691 -7.83723,17.5063 -17.50629,17.5063 v 0 H 160.51135 c -9.66805,0 -17.50629,-7.8372 -17.50629,-17.5063 0,-9.669 7.83724,-17.5063 17.50629,-17.5063 v 0 z m 0,70.0002 h 245.01112 c 9.66806,0 17.50629,7.8373 17.50629,17.5063 0,9.6691 -7.83723,17.5064 -17.50629,17.5064 v 0 H 160.51135 c -9.66805,0 -17.50629,-7.8373 -17.50629,-17.5064 0,-9.669 7.83724,-17.5063 17.50629,-17.5063 v 0 z m 227.54082,69.9993 v 35.0116 c 0,0.01 0,0.015 0,0.024 0,19.3231 -15.66447,34.9876 -34.98759,34.9876 -0.008,0 -0.017,0 -0.025,0 h -140.5213 c -0.007,0 -0.015,0 -0.024,0 -19.32311,0 -34.98758,-15.6645 -34.98758,-34.9876 0,-0.01 0,-0.017 0,-0.025 v 0 -34.9876 h 210.49848 z"/></svg>'
, 'grupo'              : '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 1152.078, 1024"><path d="m 768.0838,770.581 v -52.7668 c 77.484,-51.8527 127.8596,-138.9586 128.0286,-237.8416 v -0.026 c 0,-159.0875 0,-288.0422 -191.9975,-288.0422 -191.9974,0 -191.9974,128.9547 -191.9974,288.0422 0.139,98.954 50.5416,186.1059 127.0406,237.3075 l 1.035,0.6521 V 770.58 C 423.0624,788.3536 256.0133,894.9983 256.0133,1024 h 896.0643 c 0,-128.8617 -166.9101,-235.5994 -383.9948,-253.42 z M 327.2487,795.3902 C 384.5789,758.8069 451.476,730.9294 523.0415,715.656 l 3.9804,-0.7121 c -14.6714,-17.3085 -28.0856,-36.6273 -39.5576,-57.1762 l -0.9431,-1.8391 C 457.7896,605.246 440.682,544.6885 440.235,480.1716 l -0.001,-0.132 c -1.1231,-13.3962 -1.7632,-28.9926 -1.7632,-44.7401 0,-67.7611 11.8561,-132.753 33.6071,-193.0145 l -1.2481,3.9604 c 29.4486,-63.3448 88.046,-108.7909 158.0753,-119.3699 l 1.1501,-0.143 C 612.9757,50.2666 567.9386,0 448.0557,0 256.0123,0 256.0123,128.9547 256.0123,288.0422 c 0.21,98.9169 50.6356,186.0108 127.1305,237.1685 l 1.0371,0.6531 v 52.7207 C 166.91016,596.4052 0,703.0959 0,832.0506 h 279.0163 c 14.3493,-12.7432 30.0748,-24.8063 46.6363,-35.7023 l 1.5481,-0.9561 z"/></svg>'
, 'acao'               : '<svg class="{className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path id="notification" d="M16,3A13,13,0,0,0,6.808,25.192,13,13,0,1,0,25.192,6.808,12.918,12.918,0,0,0,16,3Zm0-3h0A16,16,0,1,1,0,16,16,16,0,0,1,16,0ZM14,22h4v4H14ZM14,6h4V18H14Z" fill="#444"/></svg>'
, 'facebook'           : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18" style="{style}"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Landing-page_final-idaas" data-name="Landing-page final-idaas"><g id="facebook"><path id="Shape" class="cls-1" d="M8.75,6H5.5V4a1,1,0,0,1,1-1h2V0H6A4,4,0,0,0,2,4V6H0V9H2v9H5.5V9H8Z"/></g></g></g></g></svg>'
, 'twitter'            : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.84 15.84" style="{style}"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Landing-page_final-idaas" data-name="Landing-page final-idaas"><g id="twitter"><g id="_1485505916_038_003_twitter_social_network_android_material" data-name="1485505916_038_003_twitter_social_network_android_material"><g id="Layer_21" data-name="Layer 21"><circle id="Oval" class="cls-1" cx="13.78" cy="4" r="4"/><path id="Shape" class="cls-1" d="M10.37,4.83c-.21,0-.58.43-.58.67A8.5,8.5,0,0,1,1.28,14,8.65,8.65,0,0,1,0,13.89,11.42,11.42,0,0,0,17.78,4.42C17.78,3.68,13.1,4.83,10.37,4.83Z"/><path id="Shape-2" data-name="Shape" class="cls-1" d="M10.37,4.83a11.38,11.38,0,0,1-8.69-4,3.94,3.94,0,0,0-.54,2,4,4,0,0,0,4,4c2.12,0,5.9,0,6.15-2Q10.82,4.83,10.37,4.83Z"/><path id="Shape-3" data-name="Shape" class="cls-1" d="M3,6a3.93,3.93,0,0,1-1.89-.5s0,0,0,.06a4,4,0,0,0,4,4c2.2,0,5.27-1.6,5.27-3.79C10.39,4.28,5.21,6,3,6Z"/><path id="Shape-4" data-name="Shape" class="cls-1" d="M5.51,9a3.91,3.91,0,0,1-3,.52,4,4,0,0,0,3.8,2.86A5.26,5.26,0,0,0,11,7.71C11,5.82,6.61,8.29,5.51,9Zm9.88-7.62c-1.32,0-1.64,1.66.07,1.66A4,4,0,0,0,19.23.33,7.5,7.5,0,0,1,15.39,1.38Z"/><path id="Shape-5" data-name="Shape" class="cls-1" d="M16.61,2.54a7.52,7.52,0,0,1-2.94-.59C11,.8,9.32,5.28,13.49,5.28A7.53,7.53,0,0,0,19.84,1.8a7.5,7.5,0,0,1-3.23.73Z"/></g></g></g></g></g></g></svg>'
, 'youtube'            : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" style="{style}"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Landing-page_final-idaas" data-name="Landing-page final-idaas"><g id="youtube"><g id="_1485505919_038_008_youtube_video_social_network_android_material" data-name="1485505919_038_008_youtube_video_social_network_android_material"><g id="Layer_21" data-name="Layer 21"><path id="Shape" class="cls-1" d="M19.81,2.81A2.8,2.8,0,0,0,17.26.27Q13.89,0,10.5,0C7,0,4.44.14,2.76.27A2.8,2.8,0,0,0,.19,2.82Q0,4.92,0,7c0,1.67.09,3.07.19,4.15a2.8,2.8,0,0,0,2.56,2.54C4.44,13.86,7,14,10.5,14c2.87,0,5.19-.14,6.76-.27a2.8,2.8,0,0,0,2.55-2.54c.1-1.08.19-2.5.19-4.19S19.91,3.89,19.81,2.81Zm-12,7.13V4.06L13.57,7Z"/></g></g></g></g></g></g></svg></a>'
}
// EJS helpers
let ejs_helpers = {
    getRandomInt: global.getRandomInt,
    moment: moment,
    getTimeRemainingString(endDate) {
        let timeRemaining = global.getTimeRemaining(endDate);
        return `${timeRemaining.dias} dias, ${timeRemaining.horas} horas e ${timeRemaining.minutos} minutos`;
    },
    i: function(name, obj) {
        return include(name, obj);
    },
    svg: function(svg_id, className, style) {
        return (svg[svg_id] || '').replace('{className}', className || '').replace('{style}', style || '');
    },
    short_date: function(date){
        return moment(date).format('DD/MM/YYYY');
    },
    link_to: function(url = '/', text = '', id = "", classes = [], callback) {
        return `<a id="${id}" href="${url}" class="${classes.join(' ')}">${text}${typeof callback === 'function' ? callback() : ''}</a>`
    },
    icon: function(type, classes = "") {
        // var icon = "fa-";
        // switch(type) {
        //     case 'credito':
        //         icon = 'fa-gem';
        //         break;
        //     case 'ideia':
        //         icon = 'fa-lightbulb';
        //         break;
        //     case 'inovacao':
        //         icon = 'fa-fire';
        //         break;
        //     case 'medalha':
        //         icon ="fa-medal";
        //         break;
        //     case 'pesquisa':
        //         icon = 'fa-flask';
        //         break;
        //     case 'plataforma':
        //         icon = 'fa-rocket';
        //         break;
        //     case 'portfolio':
        //         icon = 'fa-bullseye';
        //         break;
        //     default:
        //         icon = type;
        //         break;
        // }
        var icon = icons[type];
        return `<i class="fa ${icon ? icon : type} ${classes}"></i>`;
    },
    text:function(text) {
        return text;
    },
    tag:function(tagname, attributes = {}, content = "") {
        var _attr = [];
        for(let a in attributes) {
            if(Array.isArray(attributes[a])){
                _attr.push(`${a}="${attributes[a].join(' ')}"`);
            } else {
                _attr.push(`${a}="${attributes[a]}"`);
            }
        }
        var _content = [];

        if(typeof content === "function") {
            _content.push(content());
        } else if (Array.isArray(content)) {
            content.forEach(element => {
                _content.push(element)
            });
        } else {
            _content.push(content);
        }
        
        return `<${tagname} ${_attr.join(' ')}>${_content.join('')}</${tagname}>`;
    }
}

module.exports = ejs_helpers;