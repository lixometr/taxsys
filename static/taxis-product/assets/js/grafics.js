/*grafics*/

const dataSource = {
    chart: {
        caption: "",
        //yaxisname: "Number of deaths reported",
        //subcaption: "(As per government records)",
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
        //plottooltext: "<b>$dataValue</b> people died because of $seriesName in $label",
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
        // Get the total path length in order to use for dash array animation
        var pathLength = data.element._node.getTotalLength();

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });

        // Create animation definition while also assigning an ID to the animation for later sync usage
        var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to: '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                fill: 'freeze'
            }
        };

        // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
        if (data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }

        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
        });

        // We can't use guided mode as the animations need to rely on setting begin manually
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        data.element.animate(animationDefinition, false);
    }
});

// For the sake of the example we update the chart every time it's created with a delay of 8 seconds

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
        // Get the total path length in order to use for dash array animation
        var pathLength = data.element._node.getTotalLength();

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });

        // Create animation definition while also assigning an ID to the animation for later sync usage
        var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to: '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                fill: 'freeze'
            }
        };

        // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
        if (data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }

        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
        });

        // We can't use guided mode as the animations need to rely on setting begin manually
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        data.element.animate(animationDefinition, false);
    }
});

// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart.on('created', function() {

});