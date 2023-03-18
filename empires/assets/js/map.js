// JavaScript Document

// ----------------------------------------------------------------------------------------
// MAP
// ----------------------------------------------------------------------------------------	
var mZoom = 5;
var extraZoom = false;
extraZoom = true;
//alert(extraZoom);
extraZoom ? mZoom = 6 : mZoom = 5;
// MAP CONSTRUCTOR
var southWest = new L.LatLng(-90, -256);
var northEast = new L.LatLng(90, 256);
var restrictBounds = new L.LatLngBounds(southWest, northEast);
var mapOptions = {
    maxBounds: restrictBounds
};
var map = L.map('map', mapOptions).setView([-60, 50], 5);
// TILE LAYER
var terrainTiles = L.tileLayer('assets/tiles/{z}/{x}/jpg/{y}.jpg', {
    minZoom: 2,
    maxZoom: mZoom,
    maxNativeZoom: 5,
    continuousWorld: false,
    noWrap: false
}).addTo(map);