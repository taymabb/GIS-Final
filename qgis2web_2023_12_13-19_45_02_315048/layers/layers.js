var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RaceMHIPopChange_1 = new ol.format.GeoJSON();
var features_RaceMHIPopChange_1 = format_RaceMHIPopChange_1.readFeatures(json_RaceMHIPopChange_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RaceMHIPopChange_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RaceMHIPopChange_1.addFeatures(features_RaceMHIPopChange_1);
var lyr_RaceMHIPopChange_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RaceMHIPopChange_1, 
                style: style_RaceMHIPopChange_1,
                interactive: true,
    title: 'Race/MHI/Pop Change<br />\
    <img src="styles/legend/RaceMHIPopChange_1_0.png" /> Least Change<br />\
    <img src="styles/legend/RaceMHIPopChange_1_1.png" /> Less Change<br />\
    <img src="styles/legend/RaceMHIPopChange_1_2.png" /> Moer Change<br />\
    <img src="styles/legend/RaceMHIPopChange_1_3.png" /> Most Change<br />'
        });
var format_ChangeinWhite_2 = new ol.format.GeoJSON();
var features_ChangeinWhite_2 = format_ChangeinWhite_2.readFeatures(json_ChangeinWhite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChangeinWhite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChangeinWhite_2.addFeatures(features_ChangeinWhite_2);
var lyr_ChangeinWhite_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChangeinWhite_2, 
                style: style_ChangeinWhite_2,
                interactive: true,
    title: 'Change in % White<br />\
    <img src="styles/legend/ChangeinWhite_2_0.png" /> Less White<br />\
    <img src="styles/legend/ChangeinWhite_2_1.png" /> No Change<br />\
    <img src="styles/legend/ChangeinWhite_2_2.png" /> More White<br />'
        });
var format_ChangeinMHIAdjusted_3 = new ol.format.GeoJSON();
var features_ChangeinMHIAdjusted_3 = format_ChangeinMHIAdjusted_3.readFeatures(json_ChangeinMHIAdjusted_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChangeinMHIAdjusted_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChangeinMHIAdjusted_3.addFeatures(features_ChangeinMHIAdjusted_3);
var lyr_ChangeinMHIAdjusted_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChangeinMHIAdjusted_3, 
                style: style_ChangeinMHIAdjusted_3,
                interactive: true,
    title: '% Change in MHI (Adjusted)<br />\
    <img src="styles/legend/ChangeinMHIAdjusted_3_0.png" /> No Increase<br />\
    <img src="styles/legend/ChangeinMHIAdjusted_3_1.png" /> < 25% Increase<br />\
    <img src="styles/legend/ChangeinMHIAdjusted_3_2.png" /> 25 - 50% Increase<br />\
    <img src="styles/legend/ChangeinMHIAdjusted_3_3.png" /> 50 - 75% Increase<br />\
    <img src="styles/legend/ChangeinMHIAdjusted_3_4.png" /> > 75% Increase<br />'
        });
var format_IncreaseinPopulation_4 = new ol.format.GeoJSON();
var features_IncreaseinPopulation_4 = format_IncreaseinPopulation_4.readFeatures(json_IncreaseinPopulation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncreaseinPopulation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncreaseinPopulation_4.addFeatures(features_IncreaseinPopulation_4);
var lyr_IncreaseinPopulation_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IncreaseinPopulation_4, 
                style: style_IncreaseinPopulation_4,
                interactive: true,
    title: '% Increase in Population<br />\
    <img src="styles/legend/IncreaseinPopulation_4_0.png" /> -100 - 0<br />\
    <img src="styles/legend/IncreaseinPopulation_4_1.png" /> < 25% <br />\
    <img src="styles/legend/IncreaseinPopulation_4_2.png" /> 25 - 50% <br />\
    <img src="styles/legend/IncreaseinPopulation_4_3.png" /> 50 - 75%<br />\
    <img src="styles/legend/IncreaseinPopulation_4_4.png" /> 75 - 131%<br />\
    <img src="styles/legend/IncreaseinPopulation_4_5.png" /> 131 - 319<br />'
        });
var format_Arrestper1000_5 = new ol.format.GeoJSON();
var features_Arrestper1000_5 = format_Arrestper1000_5.readFeatures(json_Arrestper1000_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arrestper1000_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrestper1000_5.addFeatures(features_Arrestper1000_5);
var lyr_Arrestper1000_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arrestper1000_5, 
                style: style_Arrestper1000_5,
                interactive: true,
    title: 'Arrest per 1000<br />\
    <img src="styles/legend/Arrestper1000_5_0.png" /> 0 - 15<br />\
    <img src="styles/legend/Arrestper1000_5_1.png" /> 15 - 30<br />\
    <img src="styles/legend/Arrestper1000_5_2.png" /> 30 - 70<br />\
    <img src="styles/legend/Arrestper1000_5_3.png" /> 70 - 99<br />\
    <img src="styles/legend/Arrestper1000_5_4.png" /> HUB (Outlier)<br />'
        });
var format_NumberofStreetTrees_6 = new ol.format.GeoJSON();
var features_NumberofStreetTrees_6 = format_NumberofStreetTrees_6.readFeatures(json_NumberofStreetTrees_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NumberofStreetTrees_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumberofStreetTrees_6.addFeatures(features_NumberofStreetTrees_6);
var lyr_NumberofStreetTrees_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NumberofStreetTrees_6, 
                style: style_NumberofStreetTrees_6,
                interactive: true,
    title: 'Number of Street Trees<br />\
    <img src="styles/legend/NumberofStreetTrees_6_0.png" /> Least Trees<br />\
    <img src="styles/legend/NumberofStreetTrees_6_1.png" /> Less Tress<br />\
    <img src="styles/legend/NumberofStreetTrees_6_2.png" /> More Tress<br />\
    <img src="styles/legend/NumberofStreetTrees_6_3.png" /> Most Trees<br />'
        });
var format_CommunityDistricts_7 = new ol.format.GeoJSON();
var features_CommunityDistricts_7 = format_CommunityDistricts_7.readFeatures(json_CommunityDistricts_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityDistricts_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityDistricts_7.addFeatures(features_CommunityDistricts_7);
var lyr_CommunityDistricts_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommunityDistricts_7, 
                style: style_CommunityDistricts_7,
                interactive: true,
                title: '<img src="styles/legend/CommunityDistricts_7.png" /> Community Districts'
            });
var format_ChangeForeignBorn_8 = new ol.format.GeoJSON();
var features_ChangeForeignBorn_8 = format_ChangeForeignBorn_8.readFeatures(json_ChangeForeignBorn_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChangeForeignBorn_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChangeForeignBorn_8.addFeatures(features_ChangeForeignBorn_8);
var lyr_ChangeForeignBorn_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChangeForeignBorn_8, 
                style: style_ChangeForeignBorn_8,
                interactive: true,
    title: '%Change Foreign Born<br />\
    <img src="styles/legend/ChangeForeignBorn_8_0.png" /> Less Foreign Born<br />\
    <img src="styles/legend/ChangeForeignBorn_8_1.png" /> More Foreign Born<br />'
        });
var format_ChangeinAverageRent_9 = new ol.format.GeoJSON();
var features_ChangeinAverageRent_9 = format_ChangeinAverageRent_9.readFeatures(json_ChangeinAverageRent_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChangeinAverageRent_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChangeinAverageRent_9.addFeatures(features_ChangeinAverageRent_9);
var lyr_ChangeinAverageRent_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChangeinAverageRent_9, 
                style: style_ChangeinAverageRent_9,
                interactive: true,
    title: 'Change in Average Rent<br />\
    <img src="styles/legend/ChangeinAverageRent_9_0.png" /> </= 2011 rent<br />\
    <img src="styles/legend/ChangeinAverageRent_9_1.png" /> 0 - 20% increase<br />\
    <img src="styles/legend/ChangeinAverageRent_9_2.png" /> > 20% increase<br />'
        });
var format_BikeLanes_10 = new ol.format.GeoJSON();
var features_BikeLanes_10 = format_BikeLanes_10.readFeatures(json_BikeLanes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeLanes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeLanes_10.addFeatures(features_BikeLanes_10);
var lyr_BikeLanes_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BikeLanes_10, 
                style: style_BikeLanes_10,
                interactive: true,
                title: '<img src="styles/legend/BikeLanes_10.png" /> Bike Lanes '
            });
var format_OpenStreets_11 = new ol.format.GeoJSON();
var features_OpenStreets_11 = format_OpenStreets_11.readFeatures(json_OpenStreets_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenStreets_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenStreets_11.addFeatures(features_OpenStreets_11);
var lyr_OpenStreets_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OpenStreets_11, 
                style: style_OpenStreets_11,
                interactive: true,
                title: '<img src="styles/legend/OpenStreets_11.png" /> Open Streets '
            });
var format_subwayline_12 = new ol.format.GeoJSON();
var features_subwayline_12 = format_subwayline_12.readFeatures(json_subwayline_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subwayline_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_subwayline_12.addFeatures(features_subwayline_12);
var lyr_subwayline_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_subwayline_12, 
                style: style_subwayline_12,
                interactive: true,
                title: '<img src="styles/legend/subwayline_12.png" /> subway line '
            });
var format_SubBoroughs_13 = new ol.format.GeoJSON();
var features_SubBoroughs_13 = format_SubBoroughs_13.readFeatures(json_SubBoroughs_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubBoroughs_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubBoroughs_13.addFeatures(features_SubBoroughs_13);
var lyr_SubBoroughs_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SubBoroughs_13, 
                style: style_SubBoroughs_13,
                interactive: true,
                title: '<img src="styles/legend/SubBoroughs_13.png" /> SubBoroughs'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RaceMHIPopChange_1.setVisible(true);lyr_ChangeinWhite_2.setVisible(true);lyr_ChangeinMHIAdjusted_3.setVisible(true);lyr_IncreaseinPopulation_4.setVisible(true);lyr_Arrestper1000_5.setVisible(true);lyr_NumberofStreetTrees_6.setVisible(true);lyr_CommunityDistricts_7.setVisible(true);lyr_ChangeForeignBorn_8.setVisible(true);lyr_ChangeinAverageRent_9.setVisible(true);lyr_BikeLanes_10.setVisible(true);lyr_OpenStreets_11.setVisible(true);lyr_subwayline_12.setVisible(true);lyr_SubBoroughs_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RaceMHIPopChange_1,lyr_ChangeinWhite_2,lyr_ChangeinMHIAdjusted_3,lyr_IncreaseinPopulation_4,lyr_Arrestper1000_5,lyr_NumberofStreetTrees_6,lyr_CommunityDistricts_7,lyr_ChangeForeignBorn_8,lyr_ChangeinAverageRent_9,lyr_BikeLanes_10,lyr_OpenStreets_11,lyr_subwayline_12,lyr_SubBoroughs_13];
lyr_RaceMHIPopChange_1.set('fieldAliases', {'Zip': 'Zip', 'Total': 'Total', 'White': 'White', 'Black': 'Black', 'POC': 'POC', '%ChangeTot': '%ChangeTot', '%ChangeYt': '%ChangeYt', 'CumChange': 'CumChange', '% Increase in Population_%ChangeMHI': '% Increase in Population_%ChangeMHI', });
lyr_ChangeinWhite_2.set('fieldAliases', {'Zip': 'Zip', 'Total': 'Total', 'White': 'White', 'Black': 'Black', 'POC': 'POC', '%ChangeTot': '%ChangeTot', '%ChangeYt': '%ChangeYt', 'CumChange': 'CumChange', });
lyr_ChangeinMHIAdjusted_3.set('fieldAliases', {'geoid': 'geoid', 'name': 'name', 'B19013001': 'B19013001', 'B19013001e': 'B19013001e', 'zip': 'zip', '2021MHI': '2021MHI', '2011MHIAdj': '2011MHIAdj', '%ChangeMHI': '%ChangeMHI', });
lyr_IncreaseinPopulation_4.set('fieldAliases', {'geoid': 'geoid', 'name': 'name', 'B19013001': 'B19013001', 'B19013001e': 'B19013001e', 'zip': 'zip', '2021MHI': '2021MHI', '2011MHIAdj': '2011MHIAdj', '%ChangeMHI': '%ChangeMHI', 'Change in % White_%ChangeTot': 'Change in % White_%ChangeTot', });
lyr_Arrestper1000_5.set('fieldAliases', {'geoid': 'geoid', 'name': 'name', 'B19013001': 'B19013001', 'B19013001e': 'B19013001e', 'Arrests': 'Arrests', 'Total': 'Total', 'Per1000': 'Per1000', });
lyr_NumberofStreetTrees_6.set('fieldAliases', {'geoid': 'geoid', 'name': 'name', 'B19013001': 'B19013001', 'B19013001e': 'B19013001e', 'Trees': 'Trees', });
lyr_CommunityDistricts_7.set('fieldAliases', {'BoroCD': 'BoroCD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NAME': 'NAME', });
lyr_ChangeForeignBorn_8.set('fieldAliases', {'BoroCD': 'BoroCD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NAME': 'NAME', 'short_name': 'short_name', 'long_name': 'long_name', 'Sub-Boroug': 'Sub-Boroug', '2005': '2005', '2006': '2006', '2007': '2007', '2008': '2008', '2009': '2009', '2010': '2010', '2011': '2011', '2012': '2012', '2013': '2013', '2014': '2014', '2015': '2015', '2016': '2016', '2017': '2017', '2018': '2018', '2019': '2019', '2021': '2021', '2011USnotN': '2011USnotN', '2011notNYU': '2011notNYU', '2021notNYU': '2021notNYU', '%ChangeTra': '%ChangeTra', '%ChangeFB': '%ChangeFB', 'FB_short_n': 'FB_short_n', 'FB_long_na': 'FB_long_na', 'FB_2000': 'FB_2000', 'FB_2005': 'FB_2005', 'FB_2006': 'FB_2006', 'FB_2007': 'FB_2007', 'FB_2008': 'FB_2008', 'FB_2009': 'FB_2009', 'FB_2010': 'FB_2010', 'FB_2011': 'FB_2011', 'FB_2012': 'FB_2012', 'FB_2013': 'FB_2013', 'FB_2014': 'FB_2014', 'FB_2015': 'FB_2015', 'FB_2016': 'FB_2016', 'FB_2017': 'FB_2017', 'FB_2018': 'FB_2018', 'FB_2019': 'FB_2019', 'FB_2021': 'FB_2021', '2011USno_1': '2011USno_1', '2011notN_1': '2011notN_1', '2021notN_1': '2021notN_1', '%ChangeT_1': '%ChangeT_1', '%ChangeF_1': '%ChangeF_1', 'FB20212011': 'FB20212011', });
lyr_ChangeinAverageRent_9.set('fieldAliases', {'BoroCD': 'BoroCD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NAME': 'NAME', 'short_name': 'short_name', 'long_name': 'long_name', 'Sub-Boroug': 'Sub-Boroug', '2000': '2000', '2005': '2005', '2006': '2006', '2007': '2007', '2008': '2008', '2009': '2009', '2010': '2010', '2011': '2011', '2012': '2012', '2013': '2013', '2014': '2014', '2015': '2015', '2016': '2016', '2017': '2017', '2018': '2018', '2019': '2019', '2020': '2020', '2021': '2021', '%ChangeRnt': '%ChangeRnt', });
lyr_BikeLanes_10.set('fieldAliases', {'allclasses': 'allclasses', 'bikedir': 'bikedir', 'boro': 'boro', 'comments': 'comments', 'facilitycl': 'facilitycl', 'fromstreet': 'fromstreet', 'ft2facilit': 'ft2facilit', 'ft_facilit': 'ft_facilit', 'lanecount': 'lanecount', 'onoffst': 'onoffst', 'segmentid': 'segmentid', 'shape_leng': 'shape_leng', 'street': 'street', 'tf2facilit': 'tf2facilit', 'tf_facilit': 'tf_facilit', 'tostreet': 'tostreet', });
lyr_OpenStreets_11.set('fieldAliases', {'object_id': 'object_id', 'orgname': 'orgname', 'appronstre': 'appronstre', 'boroughnam': 'boroughnam', 'apprfromst': 'apprfromst', 'apprtostre': 'apprtostre', 'apprdayswe': 'apprdayswe', 'reviewstat': 'reviewstat', 'apprmonope': 'apprmonope', 'apprmonclo': 'apprmonclo', 'apprtueope': 'apprtueope', 'apprtueclo': 'apprtueclo', 'apprwedope': 'apprwedope', 'apprwedclo': 'apprwedclo', 'apprthuope': 'apprthuope', 'apprthuclo': 'apprthuclo', 'apprfriope': 'apprfriope', 'apprfriclo': 'apprfriclo', 'apprsatope': 'apprsatope', 'apprsatclo': 'apprsatclo', 'apprsunope': 'apprsunope', 'apprsunclo': 'apprsunclo', 'date_apprs': 'date_apprs', 'time_apprs': 'time_apprs', 'date_appre': 'date_appre', 'time_appre': 'time_appre', 'shape_stle': 'shape_stle', 'segmentidt': 'segmentidt', 'segmentidf': 'segmentidf', 'lionversio': 'lionversio', });
lyr_subwayline_12.set('fieldAliases', {'id': 'id', 'name': 'name', 'objectid': 'objectid', 'rt_symbol': 'rt_symbol', 'shape_len': 'shape_len', 'url': 'url', });
lyr_SubBoroughs_13.set('fieldAliases', {'annoangle': 'annoangle', 'annoline1': 'annoline1', 'annoline2': 'annoline2', 'annoline3': 'annoline3', 'borough': 'borough', 'name': 'name', 'objectid': 'objectid', 'stacked': 'stacked', 'BoroCD': 'BoroCD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'short_name': 'short_name', 'long_name': 'long_name', 'Sub-Boroug': 'Sub-Boroug', '2005': '2005', '2006': '2006', '2007': '2007', '2008': '2008', '2009': '2009', '2010': '2010', '2011': '2011', '2012': '2012', '2013': '2013', '2014': '2014', '2015': '2015', '2016': '2016', '2017': '2017', '2018': '2018', '2019': '2019', '2021': '2021', });
lyr_RaceMHIPopChange_1.set('fieldImages', {'Zip': 'TextEdit', 'Total': 'TextEdit', 'White': 'TextEdit', 'Black': 'TextEdit', 'POC': 'Range', '%ChangeTot': 'TextEdit', '%ChangeYt': 'TextEdit', 'CumChange': '', '% Increase in Population_%ChangeMHI': '', });
lyr_ChangeinWhite_2.set('fieldImages', {'Zip': 'TextEdit', 'Total': 'TextEdit', 'White': 'TextEdit', 'Black': 'TextEdit', 'POC': 'Range', '%ChangeTot': '', '%ChangeYt': '', 'CumChange': '', });
lyr_ChangeinMHIAdjusted_3.set('fieldImages', {'geoid': 'TextEdit', 'name': 'TextEdit', 'B19013001': 'TextEdit', 'B19013001e': 'TextEdit', 'zip': 'Range', '2021MHI': 'Range', '2011MHIAdj': '', '%ChangeMHI': 'Range', });
lyr_IncreaseinPopulation_4.set('fieldImages', {'geoid': 'TextEdit', 'name': 'TextEdit', 'B19013001': '', 'B19013001e': 'TextEdit', 'zip': 'Range', '2021MHI': 'Range', '2011MHIAdj': '', '%ChangeMHI': 'Range', 'Change in % White_%ChangeTot': 'TextEdit', });
lyr_Arrestper1000_5.set('fieldImages', {'geoid': '', 'name': '', 'B19013001': '', 'B19013001e': '', 'Arrests': '', 'Total': '', 'Per1000': '', });
lyr_NumberofStreetTrees_6.set('fieldImages', {'geoid': '', 'name': '', 'B19013001': '', 'B19013001e': '', 'Trees': '', });
lyr_CommunityDistricts_7.set('fieldImages', {'BoroCD': '', 'Shape_Leng': '', 'Shape_Area': '', 'NAME': '', });
lyr_ChangeForeignBorn_8.set('fieldImages', {'BoroCD': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NAME': 'TextEdit', 'short_name': 'TextEdit', 'long_name': 'TextEdit', 'Sub-Boroug': '', '2005': 'TextEdit', '2006': 'TextEdit', '2007': 'TextEdit', '2008': 'TextEdit', '2009': 'TextEdit', '2010': 'TextEdit', '2011': 'TextEdit', '2012': 'TextEdit', '2013': 'TextEdit', '2014': 'TextEdit', '2015': 'TextEdit', '2016': 'TextEdit', '2017': 'TextEdit', '2018': 'TextEdit', '2019': 'TextEdit', '2021': 'TextEdit', '2011USnotN': '', '2011notNYU': '', '2021notNYU': '', '%ChangeTra': '', '%ChangeFB': '', 'FB_short_n': '', 'FB_long_na': '', 'FB_2000': 'TextEdit', 'FB_2005': 'TextEdit', 'FB_2006': 'TextEdit', 'FB_2007': 'TextEdit', 'FB_2008': 'TextEdit', 'FB_2009': 'TextEdit', 'FB_2010': 'TextEdit', 'FB_2011': 'TextEdit', 'FB_2012': 'TextEdit', 'FB_2013': 'TextEdit', 'FB_2014': 'TextEdit', 'FB_2015': 'TextEdit', 'FB_2016': 'TextEdit', 'FB_2017': 'TextEdit', 'FB_2018': 'TextEdit', 'FB_2019': 'TextEdit', 'FB_2021': 'TextEdit', '2011USno_1': '', '2011notN_1': '', '2021notN_1': '', '%ChangeT_1': '', '%ChangeF_1': '', 'FB20212011': '', });
lyr_ChangeinAverageRent_9.set('fieldImages', {'BoroCD': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NAME': 'TextEdit', 'short_name': 'TextEdit', 'long_name': 'TextEdit', 'Sub-Boroug': '', '2000': 'TextEdit', '2005': 'TextEdit', '2006': 'TextEdit', '2007': 'TextEdit', '2008': 'TextEdit', '2009': 'TextEdit', '2010': 'TextEdit', '2011': 'TextEdit', '2012': 'TextEdit', '2013': 'TextEdit', '2014': 'TextEdit', '2015': 'TextEdit', '2016': 'TextEdit', '2017': 'TextEdit', '2018': 'TextEdit', '2019': 'TextEdit', '2020': 'TextEdit', '2021': 'TextEdit', '%ChangeRnt': '', });
lyr_BikeLanes_10.set('fieldImages', {'allclasses': '', 'bikedir': '', 'boro': '', 'comments': '', 'facilitycl': '', 'fromstreet': '', 'ft2facilit': '', 'ft_facilit': '', 'lanecount': '', 'onoffst': '', 'segmentid': '', 'shape_leng': '', 'street': '', 'tf2facilit': '', 'tf_facilit': '', 'tostreet': '', });
lyr_OpenStreets_11.set('fieldImages', {'object_id': '', 'orgname': '', 'appronstre': '', 'boroughnam': '', 'apprfromst': '', 'apprtostre': '', 'apprdayswe': '', 'reviewstat': '', 'apprmonope': '', 'apprmonclo': '', 'apprtueope': '', 'apprtueclo': '', 'apprwedope': '', 'apprwedclo': '', 'apprthuope': '', 'apprthuclo': '', 'apprfriope': '', 'apprfriclo': '', 'apprsatope': '', 'apprsatclo': '', 'apprsunope': '', 'apprsunclo': '', 'date_apprs': '', 'time_apprs': '', 'date_appre': '', 'time_appre': '', 'shape_stle': '', 'segmentidt': '', 'segmentidf': '', 'lionversio': '', });
lyr_subwayline_12.set('fieldImages', {'id': '', 'name': '', 'objectid': '', 'rt_symbol': '', 'shape_len': '', 'url': '', });
lyr_SubBoroughs_13.set('fieldImages', {'annoangle': '', 'annoline1': '', 'annoline2': '', 'annoline3': '', 'borough': '', 'name': '', 'objectid': '', 'stacked': '', 'BoroCD': '', 'Shape_Leng': '', 'Shape_Area': '', 'short_name': '', 'long_name': '', 'Sub-Boroug': '', '2005': '', '2006': '', '2007': '', '2008': '', '2009': '', '2010': '', '2011': '', '2012': '', '2013': '', '2014': '', '2015': '', '2016': '', '2017': '', '2018': '', '2019': '', '2021': '', });
lyr_RaceMHIPopChange_1.set('fieldLabels', {'Zip': 'no label', 'Total': 'no label', 'White': 'no label', 'Black': 'no label', 'POC': 'no label', '%ChangeTot': 'no label', '%ChangeYt': 'no label', 'CumChange': 'no label', '% Increase in Population_%ChangeMHI': 'no label', });
lyr_ChangeinWhite_2.set('fieldLabels', {'Zip': 'no label', 'Total': 'no label', 'White': 'no label', 'Black': 'no label', 'POC': 'no label', '%ChangeTot': 'no label', '%ChangeYt': 'no label', 'CumChange': 'no label', });
lyr_ChangeinMHIAdjusted_3.set('fieldLabels', {'geoid': 'no label', 'name': 'no label', 'B19013001': 'no label', 'B19013001e': 'no label', 'zip': 'no label', '2021MHI': 'no label', '2011MHIAdj': 'no label', '%ChangeMHI': 'no label', });
lyr_IncreaseinPopulation_4.set('fieldLabels', {'geoid': 'no label', 'name': 'no label', 'B19013001': 'no label', 'B19013001e': 'no label', 'zip': 'no label', '2021MHI': 'no label', '2011MHIAdj': 'no label', '%ChangeMHI': 'no label', 'Change in % White_%ChangeTot': 'no label', });
lyr_Arrestper1000_5.set('fieldLabels', {'geoid': 'no label', 'name': 'no label', 'B19013001': 'no label', 'B19013001e': 'no label', 'Arrests': 'no label', 'Total': 'no label', 'Per1000': 'no label', });
lyr_NumberofStreetTrees_6.set('fieldLabels', {'geoid': 'no label', 'name': 'no label', 'B19013001': 'no label', 'B19013001e': 'no label', 'Trees': 'no label', });
lyr_CommunityDistricts_7.set('fieldLabels', {'BoroCD': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NAME': 'no label', });
lyr_ChangeForeignBorn_8.set('fieldLabels', {'BoroCD': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NAME': 'no label', 'short_name': 'no label', 'long_name': 'no label', 'Sub-Boroug': 'no label', '2005': 'no label', '2006': 'no label', '2007': 'no label', '2008': 'no label', '2009': 'no label', '2010': 'no label', '2011': 'no label', '2012': 'no label', '2013': 'no label', '2014': 'no label', '2015': 'no label', '2016': 'no label', '2017': 'no label', '2018': 'no label', '2019': 'no label', '2021': 'no label', '2011USnotN': 'no label', '2011notNYU': 'no label', '2021notNYU': 'no label', '%ChangeTra': 'no label', '%ChangeFB': 'no label', 'FB_short_n': 'no label', 'FB_long_na': 'no label', 'FB_2000': 'no label', 'FB_2005': 'no label', 'FB_2006': 'no label', 'FB_2007': 'no label', 'FB_2008': 'no label', 'FB_2009': 'no label', 'FB_2010': 'no label', 'FB_2011': 'no label', 'FB_2012': 'no label', 'FB_2013': 'no label', 'FB_2014': 'no label', 'FB_2015': 'no label', 'FB_2016': 'no label', 'FB_2017': 'no label', 'FB_2018': 'no label', 'FB_2019': 'no label', 'FB_2021': 'no label', '2011USno_1': 'no label', '2011notN_1': 'no label', '2021notN_1': 'no label', '%ChangeT_1': 'no label', '%ChangeF_1': 'no label', 'FB20212011': 'no label', });
lyr_ChangeinAverageRent_9.set('fieldLabels', {'BoroCD': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NAME': 'no label', 'short_name': 'no label', 'long_name': 'no label', 'Sub-Boroug': 'no label', '2000': 'no label', '2005': 'no label', '2006': 'no label', '2007': 'no label', '2008': 'no label', '2009': 'no label', '2010': 'no label', '2011': 'no label', '2012': 'no label', '2013': 'no label', '2014': 'no label', '2015': 'no label', '2016': 'no label', '2017': 'no label', '2018': 'no label', '2019': 'no label', '2020': 'no label', '2021': 'no label', '%ChangeRnt': 'no label', });
lyr_BikeLanes_10.set('fieldLabels', {'allclasses': 'no label', 'bikedir': 'no label', 'boro': 'no label', 'comments': 'no label', 'facilitycl': 'no label', 'fromstreet': 'no label', 'ft2facilit': 'no label', 'ft_facilit': 'no label', 'lanecount': 'no label', 'onoffst': 'no label', 'segmentid': 'no label', 'shape_leng': 'no label', 'street': 'no label', 'tf2facilit': 'no label', 'tf_facilit': 'no label', 'tostreet': 'no label', });
lyr_OpenStreets_11.set('fieldLabels', {'object_id': 'no label', 'orgname': 'no label', 'appronstre': 'no label', 'boroughnam': 'no label', 'apprfromst': 'no label', 'apprtostre': 'no label', 'apprdayswe': 'no label', 'reviewstat': 'no label', 'apprmonope': 'no label', 'apprmonclo': 'no label', 'apprtueope': 'no label', 'apprtueclo': 'no label', 'apprwedope': 'no label', 'apprwedclo': 'no label', 'apprthuope': 'no label', 'apprthuclo': 'no label', 'apprfriope': 'no label', 'apprfriclo': 'no label', 'apprsatope': 'no label', 'apprsatclo': 'no label', 'apprsunope': 'no label', 'apprsunclo': 'no label', 'date_apprs': 'no label', 'time_apprs': 'no label', 'date_appre': 'no label', 'time_appre': 'no label', 'shape_stle': 'no label', 'segmentidt': 'no label', 'segmentidf': 'no label', 'lionversio': 'no label', });
lyr_subwayline_12.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'objectid': 'no label', 'rt_symbol': 'no label', 'shape_len': 'no label', 'url': 'no label', });
lyr_SubBoroughs_13.set('fieldLabels', {'annoangle': 'no label', 'annoline1': 'no label', 'annoline2': 'no label', 'annoline3': 'no label', 'borough': 'no label', 'name': 'no label', 'objectid': 'no label', 'stacked': 'no label', 'BoroCD': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'short_name': 'no label', 'long_name': 'no label', 'Sub-Boroug': 'no label', '2005': 'no label', '2006': 'no label', '2007': 'no label', '2008': 'no label', '2009': 'no label', '2010': 'no label', '2011': 'no label', '2012': 'no label', '2013': 'no label', '2014': 'no label', '2015': 'no label', '2016': 'no label', '2017': 'no label', '2018': 'no label', '2019': 'no label', '2021': 'no label', });
lyr_SubBoroughs_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});