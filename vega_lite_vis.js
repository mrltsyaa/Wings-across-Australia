
var vg_1 = "charts/chart1.vg.json";

vegaEmbed("#chart1", vg_1, {
    loader: vega.loader({
        baseURL: new URL("charts/", window.location.href).href
    })
})
.then(function(result) {
    console.log("Chart 1 loaded");
})
.catch(console.error);

var vg_2 = "charts/chart2.vg.json";

vegaEmbed("#chart2", vg_2)
    .catch(console.error);

var vg_3 = "charts/chart3.vg.json";

vegaEmbed("#chart3", vg_3).catch(console.error);

var vg_4 = "charts/chart4.vg.json";

vegaEmbed("#chart4", vg_4).catch(console.error);


var vg_5 = "charts/chart5.vg.json";

vegaEmbed("#chart5", vg_5)
    .catch(console.error);

var vg_6 = "charts/chart6.vg.json";

vegaEmbed("#chart6", vg_6)
    .catch(console.error);


var vg_7 = "charts/chart7.vg.json";

vegaEmbed("#chart7", vg_7)
    .catch(console.error);

var vg_8 = "charts/chart8.vg.json";
    vegaEmbed("#chart8", vg_8).catch(console.error);
    