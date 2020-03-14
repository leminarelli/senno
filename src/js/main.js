import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/react_home';
import { SVG } from './components/consts';
import { IconsMap } from './components/iconsmap';
import './i18n';

let styled = {};

$(document).ready(function () { $('body').bootstrapMaterialDesign(); });

export const h = {
    svg: function (svg_id) {
        return SVG[svg_id];
    },
    icon: function (icon, classes) {
        return `<i class="fa ${IconsMap[icon] || icon} ${classes || ''}"></i>`
    },
    getRandomInt: function (min, max) {
        return parseInt(Math.floor(Math.random() * (max - min + 1)) + min).toLocaleString('pt-BR').replace(/,/g, "#").replace(/\./g, ",").replace(/#/g, ".");
    },
    short_date: function (date) {
        return moment(date).format('DD/MM/YYYY');
    },
    getTimeRemainingString: function (endDate) {
        let timeRemaining = getTimeRemaining(endDate);
        return `${timeRemaining.dias} dias, ${timeRemaining.horas} horas e ${timeRemaining.minutos} minutos`;
    },
    getTimeRemainingStringFromDays: function (createDate, days) {
        let timeRemaining = getTimeRemaining(moment(createDate).add(days, 'days').toDate());
        if (timeRemaining.total <= 0) {
            return null;
        }
        return `${timeRemaining.dias} D, ${timeRemaining.horas}:${timeRemaining.minutos}:${timeRemaining.segundos}`;
    }
}




Object.byString = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

String.prototype.normalizeString = function () {
    return this.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.getInitials = function () {
    let nome = this;
    let result = '';
    if (nome) {
        let nomes = nome.split(' ');
        let nomeFirst = "";
        let nomeLast = "";
        nomeFirst = nomes[0];
        if (nomes.length > 1) {
            nomeLast = nomes[nomes.length - 1];
        }
        nomeFirst = nomeFirst.charAt(0).toUpperCase();
        nomeLast = nomeLast.charAt(0).toUpperCase();
        result = `${nomeFirst}${nomeLast}`;
    } else {
        result = "";
    }
    return result;
}
String.prototype.repeatStringNumTimes = function (times) {
    var repeatedString = "";
    while (times > 0) {
        repeatedString += this;
        times--;
    }
    return repeatedString;
}
String.prototype.padCustom = function (length) {
    let pad = '0'.repeatStringNumTimes(length)
    return (pad + this).slice(-pad.length)
}

Array.prototype.flatten = function () {
    return this.reduce((el, al) => [].concat.apply(al || [], el || []), []);
}

export function comparaPorNome(a, b) {
    let n1 = a.nome || "", n2 = b.nome || "";
    return n1.localeCompare(n2);
}

export function comparaUserPorNome(a, b) {
    let n1 = a.user ? a.user.nome || "" : "", n2 = b.user ? b.user.nome || "" : "";
    return n1.localeCompare(n2);
}

export function showSocketSuccessMessage(message) {
    new window.PNotify({
        title: 'Sucesso',
        text: Array.isArray(message) ? message.join(', ') : message,
        type: 'success'
    });
}
export function showSocketMessage(message) {
    new window.PNotify({
        title: 'Informação',
        text: Array.isArray(message) ? message.join(', ') : message,
        type: 'info'
    });
}
export function showSocketError(message) {
    new window.PNotify({
        title: 'Erro',
        text: Array.isArray(message) ? message.join(', ') : message,
        type: 'error'
    });
}
export function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
export function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.select-cover').css({ 'background-size': 'cover', 'background-position': 'center', 'background-image': `url(${e.target.result})` })
        }
        reader.readAsDataURL(input.files[0]);
    }
}

export const serializeDataContainer = function (selectorOrElement) {
    let obj = {};
    let $target = $(selectorOrElement);

    let a = [];

    if ($target.is('form')) {
        a = $target.serializeArray()
    } else {
        a = $target.find('input,textarea').toArray()
    }

    $.each(a, function () {
        let matches = this.name.match(/{[^}]*}/g);
        let name = this.name;
        let currObj = obj;
        if (matches) {
            name = this.name.replace(/{.*}/g, '');
            for (let i in matches) {
                if (typeof matches[i] === 'function') continue;
                let key = matches[i].replace(/{/, '').replace(/}/, '');
                if (i == matches.length - 1) {
                    currObj[key] = this.value || '';
                } else {
                    currObj[key] = {};
                    currObj = currObj[key];
                }
            }
        }
        else if (obj[name]) {
            if (typeof obj[name] === 'object' && !obj[name].push) {
                obj[name] = lodash.merge(obj[name], currObj)
            } else {
                if (!obj[name].push) {
                    obj[name] = [obj[name]];
                }
                obj[name].push(this.value || '');
            }
        } else {
            obj[name] = this.value || '';
        }
    });

    return obj;
}

export function elapsedTimeSinceCreation(start, end) {
    if (typeof start == 'undefined' || start == null) {
        start = new Date();
    } else {
        if (start.constructor.name === "String") {
            start = new Date(start);
        }
    }
    if (typeof end == 'undefined' || end == null) {
        end = new Date();
    }
    var diff = end - start;
    // Finally how many seconds left after removing days, hours and minutes.
    var secs = diff / 1000;
    if (secs < 60) {
        return parseInt(secs) + " segundo" + (parseInt(secs) <= 1 ? "" : "s");
    }
    // After days and hours , how many minutes are left
    var minutes = secs / 60;
    if (minutes < 60) {
        return parseInt(minutes) + " minuto" + (parseInt(minutes) <= 1 ? "" : "s");
    }
    // After deducting the days calculate the number of hours left
    var hours = minutes / 60;
    if (hours < 24) {
        return parseInt(hours) + " hora" + (parseInt(hours) <= 1 ? "" : "s");
    }
    // Calculate the number of days left
    var days = hours / 24;
    if (days < 7) {
        return parseInt(days) + " dia" + (parseInt(days) <= 1 ? "" : "s");
    }
    var weeks = days / 7;
    if (weeks < 4) {
        return parseInt(weeks) + " semana" + (parseInt(weeks) <= 1 ? "" : "s");
    }
    var months = weeks / 4;
    if (months < 12) {
        return parseInt(months) + " " + (parseInt(months) <= 1 ? "meses" : "mês");
    }
    var years = months / 12;
    return parseInt(years) + " ano" + (parseInt(years) <= 1 ? "" : "s");
}

export function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'dias': days,
        'horas': (hours < 10 ? "0" + hours : hours),
        'minutos': (minutes < 10 ? "0" + minutes : minutes),
        'segundos': (seconds < 10 ? "0" + seconds : seconds)
    };
}


export const datetimePickerChangeHandler = function (e) {
    let $el = $(e.currentTarget);
    if ($el.val() !== $el.attr('value')) {
        $el.attr('value', $el.val()).trigger('change').trigger('keyup');
    }
}

export const arrayIntersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);


// 
const el = React.createElement;

// 






let _modalNovaMedalha = {};
let _medalhasBoxes = {};

let setPageHome = function () {
    let $page = $('.page-home');

    if ($page.length < 1) {
        return;
    }

    let $user_id = $('#user_id');
    let _doc = $page.get(0);
    let _home_page = (_doc ? ReactDOM.render(el(Home, { name: "SENNO", user_id: $user_id.val() }), _doc) : {});
}


var setTriggersMenu = function () {
    let sidebar = document.querySelector(".main__sidebar");
    let header = document.querySelector(".header");
    document.querySelector(".bt-retract-menu").addEventListener("click", (ev) => {
        ev.stopPropagation();
        sidebar.classList.add("retract");
        header.classList.add("retract");
        localStorage.setItem('sidebarRetracted', true)
    })

    document.querySelector(".bt-expand-menu").addEventListener("click", (ev) => {
        ev.stopPropagation();
        sidebar.classList.remove("retract");
        header.classList.remove("retract");
        localStorage.removeItem('sidebarRetracted')
    });

    var links = sidebar.querySelectorAll("a:not(.dropdown-toggle)");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", (ev) => {
            ev.stopPropagation();
            sidebar.classList.remove("retract");
            header.classList.remove("retract");
            sidebar.classList.add("retract");
            header.classList.add("retract");
            localStorage.removeItem('sidebarRetracted')
        })
    }
}

$(document).ready(function () {
    log('Loading Senno components');

    // Pages
    // - Home
    setPageHome();


    //Menu
    setTriggersMenu();

    // initModules();

    log('Finished loading Senno components')

    var colorPalette = [
        '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
        '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
        '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
        '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
    ];


    var theme = {
        color: colorPalette,

        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#008acd'
            }
        },

        visualMap: {
            itemWidth: 15,
            color: ['#5ab1ef', '#e0ffff']
        },

        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: colorPalette[0]
                }
            }
        },

        tooltip: {
            backgroundColor: 'rgba(50,50,50,0.5)',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#008acd'
                },
                crossStyle: {
                    color: '#008acd'
                },
                shadowStyle: {
                    color: 'rgba(200,200,200,0.2)'
                }
            }
        },

        dataZoom: {
            dataBackgroundColor: '#efefff',
            fillerColor: 'rgba(182,162,222,0.2)',
            handleColor: '#008acd'
        },

        grid: {
            borderColor: '#eee'
        },

        categoryAxis: {
            axisLine: {
                lineStyle: {
                    color: '#008acd'
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#eee']
                }
            }
        },

        valueAxis: {
            axisLine: {
                lineStyle: {
                    color: '#008acd'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#eee']
                }
            }
        },

        timeline: {
            lineStyle: {
                color: '#008acd'
            },
            controlStyle: {
                normal: { color: '#008acd' },
                emphasis: { color: '#008acd' }
            },
            symbol: 'emptyCircle',
            symbolSize: 3
        },

        line: {
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 3
        },

        candlestick: {
            itemStyle: {
                normal: {
                    color: '#d87a80',
                    color0: '#2ec7c9',
                    lineStyle: {
                        color: '#d87a80',
                        color0: '#2ec7c9'
                    }
                }
            }
        },

        scatter: {
            symbol: 'circle',
            symbolSize: 4
        },

        map: {
            label: {
                normal: {
                    textStyle: {
                        color: '#d87a80'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#eee',
                    areaColor: '#ddd'
                },
                emphasis: {
                    areaColor: '#fe994e'
                }
            }
        },

        graph: {
            color: colorPalette
        },

        gauge: {
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#2ec7c9'], [0.8, '#5ab1ef'], [1, '#d87a80']],
                    width: 10
                }
            },
            axisTick: {
                splitNumber: 10,
                length: 15,
                lineStyle: {
                    color: 'auto'
                }
            },
            splitLine: {
                length: 22,
                lineStyle: {
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            }
        }
    };

    echarts.registerTheme('light123', theme);
});
export const charts = [];

export const normalizaValorParaClass = function (valor) {
    return "_" + valor.normalizeString().toLowerCase().replace(' ', '_');
}

/*
**
** SCROLLTOP
**
*/

var scrollTopBtn = $('.scrollTop');

//Click event to scroll to top
scrollTopBtn.click(function () {
    $('html, body').animate({
        scrollTop: 0,
        scrollLeft: 0
    }, 800);
    return false;

}); // click() scroll top EMD

$(window).scroll(function () {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
        scrollTopBtn.css("opacity", "1");
    } else {
        scrollTopBtn.css("opacity", "0");
    }
}); // scroll END

export function scrollToSenno(selector) {
    var $el = $(selector);
    if (!$el.offset()) return
    $([document.documentElement, document.body]).animate({
        scrollTop: $el.offset().top - 90
    }, 1000);
}

export function showTab(selector, tab) {
    let _selector = '.nav-tabs' + (selector || '') + ' a#' + tab + '.nav-link';
    $(_selector).get(0).click();
    scrollToSenno(_selector);
}

export function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}

export function showComponentByQueryString(queryString) {
    let params = parse_query_string(document.location.search.substring(1));

    if (params.showComponent && params.target) {
        window.setTimeout(() => {
            if (params.showComponent === SHOWCOMPONENTS.modal)
                window.$(params.target).modal('show');
            if (params.showComponent === SHOWCOMPONENTS.tab && params.tabTarget)
                showTab(params.tabTarget, params.target)
        }, 250);
    }
}

const SHOWCOMPONENTS =
{
    modal: 'modal'
    , tab: 'tab'
}
const showComponentQueryString = (href, component, target, tabTarget) => `${href}?showComponent=${component}&target=${encodeURIComponent(target)}${tabTarget ? `&tabTarget=${encodeURIComponent(tabTarget)}` : ``}`

export const buildShowModalQueryString = (href, target) => showComponentQueryString(href, SHOWCOMPONENTS.modal, target);
export const buildShowTabQueryString = (href, target, tabTarget) => showComponentQueryString(href, SHOWCOMPONENTS.tab, target, tabTarget);

/*
** LOCALSTORAGE POLYFILL
*/
if (!('localStorage' in window)) {
    window.localStorage = {
        _data: {},
        setItem: function (id, val) { return this._data[id] = String(val); },
        getItem: function (id) { return this._data.hasOwnProperty(id) ? this._data[id] : undefined; },
        removeItem: function (id) { return delete this._data[id]; },
        clear: function () { return this._data = {}; }
    };
}

export const unsetLoading = (that, callback) => {
    let keys = Object.keys(that.state).filter(k => k.startsWith('loading'))
    if(typeof that.setState === 'function') {
        that.setState(prevState => {
            keys.forEach(k => {
                prevState[k] = false;
            });
            return prevState
        }, () => {
            if(typeof callback === 'function') {
                callback();
            }
        })
    }
}