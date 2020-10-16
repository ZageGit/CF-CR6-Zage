var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locArray = [];
var Locations = /** @class */ (function () {
    function Locations(name, disc, zip, city, street, image) {
        this.name = name;
        this.disc = disc;
        this.zip = zip;
        this.city = city;
        this.street = street;
        this.image = image;
        locArray.push(this);
    }
    Locations.prototype.renderLoc = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-3 mb-4\">\n<img class=\"card-img-top\" src=\"" + this.image + "\"  alt=\"\">\n<div class=\"card-body center-block border\">\n  <h5 class=\"card-title\">" + this.name + "</h5>\n  <p class=\"card-text\">" + this.disc + "</p>\n  <p class=\"card-text\">" + this.zip + ", " + this.city + ", " + this.street + "</p>\n</div>\n<div class=\"card-footer d-flex justify-content-center border\">\n  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n</div>\n</div>\n";
    };
    return Locations;
}());
new Locations("Stephansdom", "Stephansdom halt", 1010, "Vienna", "Stephansplatz 3", "img/stephansdom.jpg");
new Locations("Schönbrunn", "Schönbrunn,schön wie immer", 1130, "Vienna", "Schönbrunner Schloßstraße 50 ", "img/hundertwasser.jpg");
new Locations("Schönbrunn", "Schönbrunn,schön wie immer", 1130, "Vienna", "Schönbrunner Schloßstraße 50 ", "img/riesenrad.jpg");
new Locations("Schönbrunn", "Schönbrunn,schön wie immer", 1130, "Vienna", "Schönbrunner Schloßstraße 50 ", "img/schonbrunn.jpg");
for (var i in locArray) {
    document.getElementById("locations").innerHTML += locArray[i].renderLoc();
}
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, disc, zip, city, street, image, link, tel) {
        var _this = _super.call(this, name, disc, zip, city, street, image) || this;
        _this.link = link;
        _this.tel = tel;
        return _this;
    }
    Restaurants.prototype.display1 = function () {
        return this.renderLoc() + "link: " + this.link + " Tel: " + this.tel;
    };
    return Restaurants;
}(Locations));
var newRest = new Restaurants("The Stuwer", "beste schnitzel", 1020, "Vienna", "Stuwerstrasse 50", "imglink", "restaurantwebsitelimk.com", "01-5239668");
console.log(newRest.display1());
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, disc, zip, city, street, image, link, date, entry) {
        var _this = _super.call(this, name, disc, zip, city, street, image) || this;
        _this.date = new Date(); //check again of displaying mb day/date etc//
        _this.link = link;
        _this.date = date;
        _this.entry = entry;
        return _this;
    }
    Events.prototype.display2 = function () {
        return this.renderLoc() + " link: " + this.link + " date: " + this.date + " entry: " + this.entry + " \u20AC";
    };
    return Events;
}(Locations));
var newEvent = new Events("zarrah live Rap", "Aus ohhr", 1030, "Budapest", "king streeet 98", "imamgeelink", "websitelinkevent.com", "25.11.2020", 54);
console.log(newEvent.display2());
console.table(locArray);
