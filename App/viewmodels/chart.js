define(['durandal/http', 'durandal/app'], function() {
    return {
        displayText: 'FusionCharts in a SPA app!',
        activate: function () {
            
        },
        viewAttached: function(view) {
            
            if (typeof FusionCharts('myChartId') === 'undefined') {
                $('#binder').append('<div id="chartContainer"></div>');
                var myChart = new FusionCharts("Column3D", "myChartId", "400", "300", "0");
                myChart.setXMLData("<chart animation='0' caption='Aging' numberPrefix='$'      showBorder='1'>" +
                        "<set label='Current' value='24000' color='00FF00' />" +
                        "<set label='30+' value='19600' color='0000FF' />" +
                        "<set label='60+' value='15700' color='FFFF00'/>" +
                        "<set label='90+' value='14400' color='FF0000' />" +
                        "</chart>");
                myChart.render("chartContainer");

            }
        }
    };
});