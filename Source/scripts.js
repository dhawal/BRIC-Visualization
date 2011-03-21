var chart;
var optionsChart;
$(document).ready(function() 
{
	//Declare data
	var seriesData = new Array();
	var brazil = new Array();
	var russia = new Array();
	var india = new Array();
	var china = new Array();
	
	brazil["name"] = "Brazil";
	brazil["data"] = [2.09, 2.25, 2.37, 2.37, 2.26, 2.16, 2.03, 1.86, 1.69];
	
	russia["name"] = "Russia";
	russia["data"] = [2.59, 2.35, 2.11, 1.94, 1.89, 1.91, 1.84, 1.70, 1.52];
	
	india["name"] = "India";
	india["data"] = [1.80, 1.93, 2.03, 2.12, 2.21, 2.27, 2.28, 2.23, 2.13];
	
	china["name"] = "China";
	china["data"] = [2.56, 2.51, 2.29, 2.18, 2.05, 1.86, 1.70, 1.65, 1.59];
	
	seriesData.push(brazil);
	seriesData.push(russia);
	seriesData.push(india);
	seriesData.push(china);
	
	
	//By default charts of all BRIC countries are "on"
	$('#cb1').attr('checked', true);
	$('#cb2').attr('checked', true);
	$('#cb3').attr('checked', true);
	$('#cb4').attr('checked', true);
	
	//Define various parameters of the chart				
	optionsChart =	{
		chart: {
			renderTo: 'container',
			defaultSeriesType: 'line',
			marginRight: 130,
			marginBottom: 25
		},
		title: {
			text: 'Demographic Dividend of BRIC countries over next 40 years',
			x: -20 //center
		},
		subtitle: {
			text: 'Data: United Nations Data Repository',
			x: -20
		},
		xAxis: {
			categories: ['2010', '2015', '2020', '2025', '2030', '2035', 
				'2040', '2045', '2050']
		},
		yAxis: {
			title: {
				text: 'Inverse Dependency Ratio'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			formatter: function() {
					return '<b>'+ this.series.name +'</b><br/>'+
					this.x +': '+ this.y;
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -10,
			y: 100,
			borderWidth: 0
		},
		series: seriesData
	};	
	chart = new Highcharts.Chart(optionsChart);			
	
});

$(function()
{
	//When any country is selected/removed from visualization set then
	$('input').lightSwitch(
	{
		switchImg:'switch-1.png'					
	});
	$('#cb1 + span, #cb1').click(function() 
	{
		getCountries();
	});

	$('#cb2 + span, #cb2').click(function()
	{
		getCountries();
	});

	$('#cb3 + span, #cb3').click(function()													  
	{
		getCountries();
	});

	$('#cb4 + span, #cb4').click(function()
	{
		getCountries();
	});

});

function getCountries()
{
	optionsChart.series = [];
	
	//Declare data
	var brazil = new Array();
	var russia = new Array();
	var india = new Array();
	var china = new Array();
	
	brazil["name"] = "Brazil";
	brazil["data"] = [2.09, 2.25, 2.37, 2.37, 2.26, 2.16, 2.03, 1.86, 1.69];
	
	russia["name"] = "Russia";
	russia["data"] = [2.59, 2.35, 2.11, 1.94, 1.89, 1.91, 1.84, 1.70, 1.52];
	
	india["name"] = "India";
	india["data"] = [1.80, 1.93, 2.03, 2.12, 2.21, 2.27, 2.28, 2.23, 2.13];
	
	china["name"] = "China";
	china["data"] = [2.56, 2.51, 2.29, 2.18, 2.05, 1.86, 1.70, 1.65, 1.59];
	
	//Rebuilding chart and only showing the data for the countries chosen by user
	if(($('#cb1').attr('checked'))) {optionsChart.series.push(brazil);}
	if(($('#cb2').attr('checked'))) {optionsChart.series.push(russia);}
	if(($('#cb3').attr('checked'))) {optionsChart.series.push(india);}
	if(($('#cb4').attr('checked'))) {optionsChart.series.push(china);}
	
	chart = new Highcharts.Chart(optionsChart);	
	
	//In case no countries are chosen, alert user
	//TODO: I hate alert boxes. Need to display this message in <DIV> or <P> elements. Better UX too.
	if(optionsChart.series.length == 0)
	{
		alert('Please choose one of the countries to see demographic advantage over the next 4 decades');					
	}							
}