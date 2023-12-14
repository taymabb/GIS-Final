var size = 0;
var placement = 'point';

var style_SubBoroughs_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Open Sans SemiCondensed Medium\', sans-serif";
    var labelFill = "#fdfdfd";
    var bufferColor = "#020202";
    var bufferWidth = 0.6;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Sub-Boroug") !== null) {
        labelText = String(feature.get("Sub-Boroug"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
