

var coord ;
var lat ;
var lng ;


var mymap = L.map('mapid', {zoomControl:false} ).setView([9.934739, -84.087502], 12);
L.control.zoom({
    position:'topright'
}).addTo(mymap);



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidmFyZGllOTUiLCJhIjoiY2syODltdHZ1MG5hcjNobzF4aWswcGR2bCJ9.-b-fXBLHqS5U7hW0TjdGCg'
    
}).addTo(mymap);

async function getCoordinates(){

	return coord; 
}



mymap.on('click', function(e){
	var marker;
	coord = e.latlng;
	lat = coord.lat;
	lng = coord.lng;
	marker = new L.marker(e.latlng).addTo(mymap);
	


});