let arrows = document.querySelector('.accordion').querySelectorAll('.accordion-header');
for (let index = 0; index < arrows.length; index++) {
    const element = arrows[index];
    element.querySelector('.arrow').addEventListener('click', function(e) {
        e.preventDefault();
        let item = element.parentNode;
        item.classList.toggle('active');
    })
}
let buttons = document.querySelectorAll('.butons__item2');
let checkboxs = document.querySelectorAll('.app-checkboxs');
let forms = document.querySelectorAll('.app-forms');
let btn = document.querySelector('.plus-btn');
let form = document.querySelector('.app__form');
let arrow = document.querySelector('.boom');
let apps = document.querySelectorAll('.app-done');
let itogbtn = document.querySelector('.app__form-itog-btn-btn');
let app = document.querySelectorAll('.app');
let zakaz = document.querySelector('.zakaz');
let disign = document.querySelector('.disign');
let pokypka = document.querySelector('.pokypka');
let arenda = document.querySelector('.arenda');
restore();

function restore() {
    if (apps.length > 0) {
        app[0].classList.remove('active');
    } else {
        app[0].classList.add('active');
    }
}
app[0].querySelector('.app__btn').addEventListener('click', function(e) {
    e.preventDefault();
    app[0].classList.remove('active');
    form.classList.add('active');
    for (let index = 0; index < apps.length; index++) {
        const element = apps[index];
        element.classList.remove('active');
        app.classList.remove('active');
    }
    for (let index = 0; index < checkboxs.length; index++) {
        const element = checkboxs[index];
        const el2 = forms[index];
        element.classList.remove('active');
        el2.classList.remove('active');
    }
    arrow.classList.add('active');
})
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    const el2 = checkboxs[index];
    const el3 = forms[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        if (element.innerHTML === 'редактировать') {
            element.innerHTML = 'сохранить';
            el2.classList.add('active');
            el3.classList.add('active');

        } else if (element.innerHTML = 'сохранить') {
            element.innerHTML = 'редактировать';
            el2.classList.remove('active');
            el3.classList.remove('active');
        };
    })
}
btn.addEventListener('click', function(e) {
    e.preventDefault();
    arrow.classList.add('active');
    app[0].classList.remove('active');
    app[1].classList.remove('active');
    form.classList.add('active');
    for (let index = 0; index < apps.length; index++) {
        const element = apps[index];
        element.classList.remove('active');
    }
    checkboxs
    for (let index = 0; index < checkboxs.length; index++) {
        const element = checkboxs[index];
        const el2 = forms[index];
        element.classList.remove('active');
        el2.classList.remove('active');
    }
    arrow.classList.add('active');
})
arrow.addEventListener('click', function(e) {
    e.preventDefault();
    restore();
    form.classList.remove('active');
    arrow.classList.remove('active');
    for (let index = 0; index < apps.length; index++) {
        const element = apps[index];
        element.classList.add('active');
    }
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.innerHTML = 'редактировать';
    }
})
itogbtn.addEventListener('click', function(e) {
    e.preventDefault();
    app[1].classList.add('active');
    app[0].classList.remove('active');
    form.classList.remove('active');
    arrow.classList.remove('active');
    for (let index = 0; index < apps.length; index++) {
        const element = apps[index];
        element.classList.add('active');
    }
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.innerHTML = 'редактировать';
    }
})
zakaz.addEventListener('click', function(e) {
    e.preventDefault();
    zakaz.classList.add('active');
    disign.classList.remove('active');
    document.querySelector('.zakaz-input').style = 'display : none';
    document.querySelector('.my-disign-input').style = 'display : none';
    cena();
})
disign.addEventListener('click', function(e) {
    e.preventDefault();
    disign.classList.add('active');
    zakaz.classList.remove('active');
    cena();
    document.querySelector('.zakaz-input').style = 'display : flex';
    document.querySelector('.my-disign-input').style = 'display : flex';
})
arenda.addEventListener('click', function(e) {
    e.preventDefault();
    pokypka.classList.remove('active');
    arenda.classList.add('active');
    document.querySelector('.zakaz-app').classList.add('visible');
    document.querySelector('.my__disign').classList.add('visible');
    cena();
})
pokypka.addEventListener('click', function(e) {
    e.preventDefault();
    arenda.classList.remove('active');
    pokypka.classList.add('active');
    document.querySelector('.zakaz-app').classList.remove('visible');
    document.querySelector('.my__disign').classList.remove('visible');
    document.querySelector('.zakaz-input').style = 'display : flex';
    document.querySelector('.my-disign-input').style = 'display : flex';
    cena();
})

function cena() {
    if (pokypka.classList.contains('active')) {
        document.querySelector('.app__form-itog-summa').innerHTML = "200 000₽";
    } else if (arenda.classList.contains('active')) {
        document.querySelector('.app__form-itog-summa').innerHTML = "7 000₽";
        if (zakaz.classList.contains('active')) {
            document.querySelector('.app__form-itog-summa').innerHTML = "22 000₽";
        }
    }
}
$(function() {
    let availableTags = [
        "Мерседес",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $(".avto").autocomplete({
        source: availableTags
    });
});
$(function() {
    let availableTags = [
        "Мерседес",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $(".model").autocomplete({
        source: availableTags
    });
});
$(function() {
    let availableTags = [
        "Мерседес",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $(".color").autocomplete({
        source: availableTags
    });
});
$(function() {
    let availableTags = [
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
        "2004",
        "2003",
        "2002",
        "2001",
        "2000",
        "1999",
        "1998",
        "1997",
        "1996",
        "1995"
    ];
    $(".year").autocomplete({
        source: availableTags
    });
});
$(function() {
    let availableTags = [
        "Мерседес",
        "AppleScript",
        "Asp",
        "BASIC",
        "C"
    ];
    $(".gorod").autocomplete({
        source: availableTags
    });
});
$(function() {
    let availableTags = [
        "Мерседес",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $(".group-pay").autocomplete({
        source: availableTags
    });
});
$(function() {
    let availableTags = [
        "Мерседес",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $(".search__avto").autocomplete({
        source: availableTags
    });
});
let blockbtn = document.querySelectorAll('.blocked');
for (let index = 0; index < blockbtn.length; index++) {
    const element = blockbtn[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        if (element.innerHTML === 'блокировать') {
            element.innerHTML = 'разблокировать';
            element.style = 'background:green;color:#fff';
        } else {
            element.innerHTML = 'блокировать';
            element.style = 'background:#F2994A;color:#333';
        }
    })
}
let new__avto = document.querySelector('.new__avto ');
let existing__car = document.querySelector('.existing__car');
let row8 = document.querySelector('.form__row8');
let row9 = document.querySelector('.form__row9');
let row10 = document.querySelector('.form__row10');
let row11 = document.querySelector('.form__row11');
let row12 = document.querySelector('.form__row12');
let row13 = document.querySelector('.form__row13');
new__avto.addEventListener('click', function(e) {
    e.preventDefault();
    new__avto.classList.add('active');
    existing__car.classList.remove('active');
    row8.classList.add('active');
    row9.classList.add('active');
    row10.classList.add('active');
    row11.classList.add('active');
    row12.classList.remove('active');
    row13.classList.remove('active');
})
existing__car.addEventListener('click', function(e) {
    e.preventDefault();
    new__avto.classList.remove('active');
    existing__car.classList.add('active');
    row8.classList.remove('active');
    row9.classList.remove('active');
    row10.classList.remove('active');
    row11.classList.remove('active');
    row12.classList.add('active');
    row13.classList.add('active');
})
let oferta = document.querySelector('.oferta');
let columnall = oferta.querySelectorAll('.row__column');
let column = oferta.querySelector('.row__column');
for (let index = 0; index < columnall.length - 1; index++) {
    const element = columnall[index];
    if (element.querySelector('input').checked) {
        let text = element.querySelector('.column__text');
        text.classList.add('purple');
    } else {
        let text = element.querySelector('.column__text');
        text.classList.remove('purple');
    };
}

function color(ea) {
    ea.parentNode.parentNode.querySelector('.column__text').classList.toggle('purple');
}
let block = document.querySelectorAll('.shtrafi__info-btn');
for (let index = 0; index < block.length; index++) {
    const element = block[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        text = element.parentNode.querySelector('.column__adress-start');
        text.style = 'white-space:normal';
        element.style = 'display:none';
    })
}
let block = document.querySelectorAll('.column__accordion21');
for (let index = 0; index < block.length; index++) {
    const element = block[index];
    element.querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
        text = element.querySelector('p');
        text.style = 'white-space:normal';
        element.querySelector('a').style = 'display:none';
    })
}
let block2 = document.querySelectorAll('.column__accordion22');
for (let index = 0; index < block2.length; index++) {
    const element = block2[index];
    element.querySelector('.column__adress-start').querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
        let li = element.parentNode.querySelectorAll('li');
        for (let index = 0; index < li.length; index++) {
            const el = li[index];
            el.style = 'display:list-item';
        }
        element.querySelector('.column__adress-start').querySelector('a').style = 'display:none';
    })
}
let visible = document.querySelectorAll('.hedden');
let give = document.querySelectorAll('.give');
for (let index = 0; index < visible.length; index++) {
    const element = visible[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        give[index].classList.toggle('active');
    })
}
let daytime = document.querySelectorAll('.daytime');
for (let index = 0; index < daytime.length; index++) {
    const element = daytime[index];
    element.addEventListener('keyup', function(e) {
        if (element.value > 24 || element.value < 0) {
            element.value = '';
        }
    })
}
let verify = document.querySelector('.verify');
verify.parentNode.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.check-driver').classList.add('none');
    document.querySelector('.windows8').classList.add('active');
    setTimeout(function() {
        document.querySelector('.windows8').classList.remove('active');
        document.querySelector('.accordion-no-open').classList.remove('show-hide');
    }, 5000);

})
$(".gosnomer").keydown(function(e) {
    this.value = this.value.replace(/[^0-9\А\В\Е\К\М\Н\О\Р\С\Т\У\Х]\Z/gi, '');
});
const dataSource = {
    chart: {
        caption: "",
        flatscrollbars: "2",
        scrollheight: "12",
        numvisibleplot: "7",
        plottooltext: "<b>$dataValue</b> ",
        paletteColors: " #45117B,#FFB801",
        baseChartMessageFont: "Montserrat",
        baseChartMessageColor: "#FFB801",
        showLegend: "1",
        legendItemFontColor: "#5A13A7",
        valueFontColor: "#5A13A7",
        valueBgColor: "#5A13A7",
        valueFontSize: "40",
        toolTipBgColor: "#5A13A7",
        toolTipColor: "#fff",
        toolTipBorderColor: "#5A13A7",
        plotSpacePercent: "58",
        theme: "fusion"
    },
    categories: [{
        category: [{
                label: "01.08"
            },
            {
                label: "04.08"
            },
            {
                label: "08.08"
            },
            {
                label: "08.08"
            },
            {
                label: "16.08"
            },
            {
                label: "16.08"
            },
            {
                label: "31.08"
            },
        ]
    }],
    dataset: [{
            data: [{
                    value: "4000"
                },
                {
                    value: "2000"
                },
                {
                    value: "6000"
                },
                {
                    value: "4000"
                },
                {
                    value: "3000"
                },
                {
                    value: "7000"
                },
                {
                    value: "4000"
                },
            ]
        },
        {
            data: [{
                    value: "2000"
                },
                {
                    value: "7000"
                },
                {
                    value: "5000"
                },
                {
                    value: "1000"
                },
                {
                    value: "6000"
                },
                {
                    value: "4000"
                },
                {
                    value: "4000"
                },
            ]
        }
    ],
    data: [{
            label: "01.08",
            value: "1800"
        },
        {
            label: "04.08",
            value: "1700"
        },
        {
            label: "08.08",
            value: "2900"
        },
        {
            label: "08.08",
            value: "1000"
        },
        {
            label: "16.08",
            value: "1800"
        },
        {
            label: "16.08",
            value: "2800"
        },
        {
            label: "31.08",
            value: "2500"
        }
    ]
};
FusionCharts.ready(function() {
    var myChart = new FusionCharts({
        type: "scrollstackedcolumn2d",
        renderAt: "chart-container",
        width: "100%",
        height: "260",
        labelStep: "60",
        dataFormat: "json",
        dataSource
    }).render();
});
FusionCharts.ready(function() {
    var myChart = new FusionCharts({
        type: "spline",
        renderAt: "chart2-container",
        width: "100%",
        height: "290",
        dataFormat: "json",
        dataSource
    }).render();
});
var chart = new Chartist.Pie('.ct-chart', {
    series: [10, 20],
    labels: [1, 2]
}, {
    donut: true,
    donutWidth: 20,
    showLabel: false
});
chart.on('draw', function(data) {
    if (data.type === 'slice') {
        var pathLength = data.element._node.getTotalLength();
        data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });
        var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to: '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                fill: 'freeze'
            }
        };
        if (data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }
        data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
        });
        data.element.animate(animationDefinition, false);
    }
});
var chart = new Chartist.Pie('.ct-chart2', {
    series: [10, 20],
    labels: [1, 2]
}, {
    donut: true,
    donutWidth: 20,
    showLabel: false
});
chart.on('draw', function(data) {
    if (data.type === 'slice') {
        var pathLength = data.element._node.getTotalLength();
        data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });
        var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to: '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                fill: 'freeze'
            }
        };
        if (data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }
        data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
        });
        data.element.animate(animationDefinition, false);
    }
});
chart.on('created', function() {});
$('#header').hover(function() {
    $('#main').addClass('active');
}, function() {
    $('#main').removeClass('active');
});
let input = document.querySelectorAll('.data');
let dateInputMask = function dateInputMask(elm) {
    elm.addEventListener('keydown', function(e) {
        if (e.keyCode === 8 || e.keyCode === 46) {
            this.value('');
        }
        if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
        let len = elm.value.length;
        if (len !== 1 || len !== 3) {
            if (e.keyCode == 47) {
                e.preventDefault();
            }
        }
        if (len === 2) {
            if (e.keyCode !== 8 && e.keyCode !== 46) {
                elm.value = elm.value + '.';
            }
        }
        if (len === 5) {
            if (e.keyCode !== 8 && e.keyCode !== 46) {
                elm.value = elm.value + '.';
            }
        }
    });
};
for (let index = 0; index < input.length; index++) {
    const element = input[index];
    dateInputMask(element);
}
$(".ss").keyup(function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
$(".sts").keyup(function(e) {
    this.value = this.value.replace(/[^0-9]/gi, '');
});
let file = document.querySelectorAll('.file-button');
let imgtag = document.querySelectorAll(".myimage");
for (let index = 0; index < file.length; index++) {
    const element = file[index];
    element.addEventListener('change', function() {
        let selectedFile = event.target.files[0];
        let reader = new FileReader();
        imgtag[index].title = selectedFile.name;
        reader.onload = function(event) {
            imgtag[index].src = event.target.result;
        };
        reader.readAsDataURL(selectedFile);
    })
}
$('.bh').click(function(e) {
    e.preventDefault();
    let $this = $(this),
        blockId = $this.parent('.accordion__item');
    if ($(blockId).children('.acz').css('display') === "none") {
        $(blockId).children('.acz').css('display', '');
        $(blockId).children('.acz').css('opacity', '');
        $(blockId).children('.acz').css('visibility', '');
        $(blockId).children('.bh').css('margin-bottom', '');
    } else {
        $(blockId).children('.acz').css('opacity', '0');
        $(blockId).children('.acz').css('visibility', 'hidden');
        $(blockId).children('.acz').css('display', 'none');
        $(blockId).children('.bh').css('margin-bottom', '0');
    }
});
map = document.querySelector('.map');
maps = document.querySelectorAll('.map');
for (let index = 0; index < maps.length; index++) {
    const element = maps[index];
    ymaps.ready(init);

    function init() {
        let myMap = new ymaps.Map(element, {
            center: [55.8, 37.8],
            zoom: 12
        });
        let myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [55.8, 37.8] // координаты точки
            }
        });
        myMap.geoObjects.add(myGeoObject);
    }
}
let incoming = document.querySelector('.incoming__notification');
let outgoing = document.querySelector('.outgoing__notification');
let create = document.querySelector('.create__notification');
let windows = document.querySelector('.window__chat');
let chatbar = document.querySelector('.chat-bar');
let search = document.querySelector('.search2');
let chartitem = document.querySelector('.create').querySelectorAll('.chats__item');
let out = document.querySelector('.outgoing');
let incom = document.querySelector('.incoming');
let creat = document.querySelector('.create');
incoming.addEventListener('click', function(e) {
    incoming.classList.add('active');
    outgoing.classList.remove('active');
    create.classList.remove('active');
    windows.classList.add('active');
    chatbar.classList.remove('active');
    search.classList.remove('active');
    out.classList.remove('active');
    creat.classList.remove('active');
    incom.classList.add('active');

});
outgoing.addEventListener('click', function(e) {
    incoming.classList.remove('active');
    outgoing.classList.add('active');
    create.classList.remove('active');
    windows.classList.remove('active');
    chatbar.classList.add('active');
    search.classList.remove('active');
    out.classList.add('active');
    creat.classList.remove('active');
    incom.classList.remove('active');

});
create.addEventListener('click', function(e) {
    incoming.classList.remove('active');
    outgoing.classList.remove('active');
    create.classList.add('active');
    windows.classList.remove('active');
    chatbar.classList.add('active');
    search.classList.add('active');
    out.classList.remove('active');
    creat.classList.add('active');
    incom.classList.remove('active');

});
document.querySelector('button.text').addEventListener('click', function(e) {
    e.preventDefault();
    for (let index = 0; index < chartitem.length; index++) {
        const element = chartitem[index];
        element.querySelector('input').toggleAttribute('checked');
    }
})
let redact = document.querySelectorAll('.redact');
for (let index = 0; index < redact.length; index++) {
    const element = redact[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        let text = element.parentNode.parentNode.querySelector('.message__text').innerHTML;
        document.querySelector('.message-text').value = text;
    })
}
$('.partner__item-header').click(function(e) {
    e.preventDefault();
    let $this = $(this),
        blockId = $this.parent('.partner__item ');
    $(blockId).toggleClass('active');
});
$('.partner__item-header').click(function(e) {
    e.preventDefault();
    let $this = $(this),
        blockId = $this.parent('.partner__item ');
    $(blockId).toggleClass('active');
});
let btn = document.querySelector('.body-random__add-driver').querySelector('a');
let rows = document.querySelector('.body-random__drivers').querySelectorAll('.drivers');
let agregators = document.querySelector('.body-random__drivers').querySelector('.agregators');
let pops = document.querySelectorAll('.popup-link');
let rowcheck = document.querySelector('.drivers__row').querySelectorAll('input');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.popup__form').classList.add('active');
    agregators.classList.add('active');
    btn.parentNode.parentNode.style = 'display:none';
    for (let index = 0; index < rows.length; index++) {
        const element = rows[index];
        element.style = 'display:none';
    }
})
for (let index = 0; index < rowcheck.length; index++) {
    const element = rowcheck[index];
    element.addEventListener('click', function(e) {
        element.removeAttribute('checked');
    })
}
items = document.querySelectorAll('.sort__item');
yandex = document.querySelector('.popup__body-yandex');
gett = document.querySelector('.popup__body-gett');
city = document.querySelector('.popup__body-city');
items[0].addEventListener('click', function(e) {
    e.preventDefault();
    yandex.classList.add('active');
    gett.classList.remove('active');
    city.classList.remove('active');
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.classList.remove('active');
    }
    items[0].classList.add('active');
})
items[1].addEventListener('click', function(e) {
    e.preventDefault();
    yandex.classList.remove('active');
    gett.classList.add('active');
    city.classList.remove('active');
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.classList.remove('active');
    }
    items[1].classList.add('active');
})
items[2].addEventListener('click', function(e) {
    e.preventDefault();
    yandex.classList.remove('active');
    gett.classList.remove('active');
    city.classList.add('active');
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.classList.remove('active');
    }
    items[2].classList.add('active');
})
let odobr = document.querySelector('.odobr');
let moment = document.querySelector('.moment');
let add = document.querySelector('.add-comision');
odobr.addEventListener('click', function(e) {
    e.preventDefault();
    moment.classList.remove('active');
    odobr.classList.add('active');
})
moment.addEventListener('click', function(e) {
    e.preventDefault();
    odobr.classList.remove('active');
    moment.classList.add('active');
})
add.addEventListener('click', function(e) {
    e.preventDefault();
    $(".comisii").append("<div class='row-row4'><div class='text'>За вывод суммы от</div><div class='row-row4-sub'><input type='text' class='ss'><div class='text'>₽</div></div><div class='text'>до</div> <div class='row-row4-sub'><input type='text' class='ss'><div class='text'>₽</div></div> &mdash;<div class='row-row4-sub'><input type='text' class='ss' maxlength='2'>    <div class='text'>%</div>    </div>    <a href=''><img src='/assets/img/trash-2.svg' alt=''></a>             </div>");
})
let btn = document.querySelector('.popup__add-btn');
let inputs = document.querySelector('.inputs');
let addysl = document.querySelector('.add-ysl');
let timework = document.querySelector('.time-work');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    inputs.classList.add('active');
    btn.classList.remove('active');
})
addysl.addEventListener('click', function(e) {
    e.preventDefault();
    timework.classList.add('active');
    addysl.classList.remove('active');
})
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 0;
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popuplink = popupLinks[index];
        popuplink.addEventListener('click', function(e) {
            const popupName = popuplink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            e.preventDefault();
            popupOpen(curentPopup);
        })
    }
}
(function() {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.MatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    };
})();
(function() {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function(css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            const doUnlock = false;
            popupClose(popupActive, doUnlock);
        } else {
            bodyLock();
        };
        curentPopup.classList.add('open');
        document.querySelector('.popup-overlay').classList.add('active');
        curentPopup.parentNode.parentNode.querySelector('.popup-overlay').addEventListener('click', function(e) {
            if (!e.target.closest('.popup')) {
                popupClose(e.target.parentNode);
            }
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e) {
            popupClose(el.parentNode.parentNode.parentNode.parentNode);
            e.preventDefault();
        })
    }
}

function popupClose(popupActive, doUnlock) {
    doUnlock = doUnlock === undefined ? true : doUnlock;
    if (unlock) {
        popupActive.querySelector('.popup.open').classList.remove('open');
        popupActive.querySelector('.popup-overlay.active').classList.remove('active');
        if (doUnlock) {
            bodyUnlock();
        };
    };
    if (document.querySelector('.popup__form') !== null) {
        document.querySelector('.popup__form').classList.remove('active');
        agregators.classList.remove('active');
        btn.parentNode.parentNode.style = 'display:flex';
        for (let index = 0; index < rows.length; index++) {
            const element = rows[index];
            element.style = 'display:flex';
        }
    }
    if (document.querySelector('.popup__add-btn') !== null) {
        document.querySelector('.popup__add-btn').classList.add('active');
        document.querySelector('.inputs').classList.remove('active');
        document.querySelector('.add-ysl').classList.add('active');
        document.querySelector('.time-work').classList.remove('active');
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.classList.add('lock');
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}
document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
        const popupActive = document;
        popupClose(popupActive);
    }
});
let writeoff = document.querySelector('.write_off');
let replenish = document.querySelector('.replenish');
let popupcheckbox = document.querySelector('.popup__checkbox');
writeoff.addEventListener('click', function(e) {
    e.preventDefault();
    writeoff.classList.add('active');
    replenish.classList.remove('active');
    popupcheckbox.classList.add('active');
});
replenish.addEventListener('click', function(e) {
    e.preventDefault();
    writeoff.classList.remove('active');
    replenish.classList.add('active');
    popupcheckbox.classList.remove('active');
})
let btn = document.querySelector('.btn__recv');
let item = document.querySelector('.recv__item');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (btn.innerHTML === 'редактировать') {
        btn.innerHTML = 'сохранить';
        item.classList.add('active');
    } else {
        btn.innerHTML = 'редактировать';
        item.classList.remove('active');
    }
})
let drivers = document.querySelector('.drivers').querySelectorAll('.drivers__row');

function sbros() {
    for (let index = 0; index < drivers.length; index++) {
        const element = drivers[index];
        if (element.querySelector('input:checked') !== null) {
            element.querySelector('input').checked = false;
        };
    }
}
for (let index = 0; index < drivers.length; index++) {
    const element = drivers[index];
    element.querySelector('input').addEventListener('click', function(e) {
        sbros();
        element.querySelector('input').checked = true;
    })
}
let yandexinp = document.querySelector('.yandexinp');
let gettinp = document.querySelector('.gettinp');
let cityinp = document.querySelector('.citiinp');
yandexinp.addEventListener('click', function(e) {
    yandexinp.toggleAttribute('checked');
    if (!yandexinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.y').length; index++) {
            const element = document.querySelectorAll('.y')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.y').length; index++) {
            const element = document.querySelectorAll('.y')[index];
            element.style = 'display:';
        }
    }
    if (!yandexinp.checked && !cityinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.ys').length; index++) {
            const element = document.querySelectorAll('.ys')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.ys').length; index++) {
            const element = document.querySelectorAll('.ys')[index];
            element.style = 'display:';
        }
    }
    if (!yandexinp.checked && !gettinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.yg').length; index++) {
            const element = document.querySelectorAll('.yg')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.yg').length; index++) {
            const element = document.querySelectorAll('.yg')[index];
            element.style = 'display:';
        }
    }
})
gettinp.addEventListener('click', function(e) {
    gettinp.toggleAttribute('checked');
    if (!gettinp.checked) {
        document.querySelector('.g').style = 'display:none';
    } else {
        document.querySelector('.g').style = 'display:';
    }
    if (!yandexinp.checked && !gettinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.yg').length; index++) {
            const element = document.querySelectorAll('.yg')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.yg').length; index++) {
            const element = document.querySelectorAll('.yg')[index];
            element.style = 'display:';
        }
    }
    if (!cityinp.checked && !gettinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.sg').length; index++) {
            const element = document.querySelectorAll('.sg')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.sg').length; index++) {
            const element = document.querySelectorAll('.sg')[index];
            element.style = 'display:';
        }
    }
})
cityinp.addEventListener('click', function(e) {
    cityinp.toggleAttribute('checked');
    if (!cityinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.s').length; index++) {
            const element = document.querySelectorAll('.s')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.s').length; index++) {
            const element = document.querySelectorAll('.s')[index];
            element.style = 'display:';
        }
    }
    if (!yandexinp.checked && !cityinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.ys').length; index++) {
            const element = document.querySelectorAll('.ys')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.ys').length; index++) {
            const element = document.querySelectorAll('.ys')[index];
            element.style = 'display:';
        }
    }
    if (!cityinp.checked && !gettinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.sg').length; index++) {
            const element = document.querySelectorAll('.sg')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.sg').length; index++) {
            const element = document.querySelectorAll('.sg')[index];
            element.style = 'display:';
        }
    }
})

function dn() {
    for (let index = 0; index < document.querySelectorAll('.s').length; index++) {
        const element = document.querySelectorAll('.s')[index];
        element.style = 'display:none';
    }
    for (let index = 0; index < document.querySelectorAll('.y').length; index++) {
        const element = document.querySelectorAll('.y')[index];
        element.style = 'display:none';
    }
    for (let index = 0; index < document.querySelectorAll('.g').length; index++) {
        const element = document.querySelectorAll('.g')[index];
        element.style = 'display:none';
    }
    for (let index = 0; index < document.querySelectorAll('.ys').length; index++) {
        const element = document.querySelectorAll('.ys')[index];
        element.style = 'display:none';
    }
    for (let index = 0; index < document.querySelectorAll('.yg').length; index++) {
        const element = document.querySelectorAll('.yg')[index];
        element.style = 'display:none';
    }
    for (let index = 0; index < document.querySelectorAll('.sg').length; index++) {
        const element = document.querySelectorAll('.sg')[index];
        element.style = 'display:none';
    }
}
dn();
let header = document.querySelectorAll('.accordion .accordion-header .strelka'); //active
let subbody = document.querySelectorAll('.accordion-sub-body'); //active
let telo = document.querySelectorAll('.accordion-sub-body__telo'); //visible
let item = document.querySelectorAll('.accordion__item'); //active
let title = document.querySelectorAll('.accordion-sub-body__title ');
for (let index = 0; index < header.length; index++) {
    const element = header[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        item[index].classList.toggle('active');
        subbody[index].classList.toggle('active');
        telo[index].classList.remove('visible');
    })
}
for (let index = 0; index < title.length; index++) {
    const element = title[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        telo[index].classList.toggle('visible');
    })
}
for (let index = 0; index < telo.length; index++) {
    const element = telo[index];
    let rows = element.querySelectorAll('.telo__row');
    let itogs = 0;
    for (let index = 0; index < rows.length; index++) {
        const element = rows[index];
        let row_sum = element.querySelector('.row__sum');
        let text_sum = element.querySelectorAll('.text');
        if (text_sum[0].innerHTML === text_sum[1].innerHTML) {
            row_sum.parentNode.querySelector('.row__oplata').style = 'display:none';
            row_sum.parentNode.querySelector('.row__spisat').style = 'display:none';
        }
        if (text_sum[0].innerHTML < text_sum[1].innerHTML) {
            itogs++;
        }
    }
    if (itogs > 0) {
        document.querySelectorAll('.first')[index].innerHTML = 'Не оплачен';
    }
}
$(".VIN").keyup(function(e) {
    this.value = this.value.replace(/[^0-9,a-h,j-n,p,r-z]/i, '');
});