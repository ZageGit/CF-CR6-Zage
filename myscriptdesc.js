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
var restArray = [];
var eventsArray = [];
var Locations = /** @class */ (function () {
    function Locations(name, disc, zip, city, street, image, dateCreated, timeCreated) {
        this.name = name;
        this.disc = disc;
        this.zip = zip;
        this.city = city;
        this.street = street;
        this.image = image;
        this.dateCreated = dateCreated;
        this.timeCreated = timeCreated;
        locArray.push(this);
    }
    Locations.prototype.renderLoc = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-3 mb-4\">\n<img class=\"card-img-top border border-bottom-0 border-primary\" src=\"" + this.image + "\"  alt=\"\">\n<div class=\"card-body center-block border border-top-0 border-bottom-0 border-primary bg-info\">\n  <h5 class=\"card-title\">" + this.name + "</h5>\n  <p class=\"card-text\">" + this.disc + "</p>\n  <p class=\"card-text\">" + this.zip + ", " + this.city + ", " + this.street + "</p>\n</div>\n<div class=\"card-footer d-flex justify-content-center border border-top-0  border-primary bg-info\">\n<a href=\"#\" class=\"btn btn-primary\">Maps</a>\n</div>\n</div>\n";
    };
    Locations.prototype.locCarousel = function () {
        return "<div class=\"carousel-item\">\n    <img src=\"" + this.image + "\" class=\"d-block w-100\" alt=\"" + this.name + "\">\n    <div class=\"carousel-caption d-none d-md-block text-dark border bg-light\">\n      <h5>" + this.name + "</h5>\n      <p>" + this.disc + "</p>\n    </div>\n  </div>";
    };
    return Locations;
}());
new Locations("Stephansdom", "Stephansdom halt", 1010, "Vienna", "Stephansplatz 3", "img/stephansdom.jpg", "10.01.2010", "12:45");
new Locations("Schönbrunn", "Schönbrunn wie immer", 1130, "Vienna", "Schönbrunner Schloßstraße 50 ", "img/schonbrunn.jpg", "25.06.2020", "10:55");
new Locations("Riesenrad", "Prater bam Oida", 1020, "Vienna", "Prater 1", "img/riesenrad.jpg", "27.08.2020", "08:35");
new Locations("Hundertwasserhaus", "Echt oag", 1030, "Vienna", "Kegelgasse 36-38", "img/hundertwasser.jpg", "22.12.2020", "18:25");
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, disc, zip, city, street, image, dateCreated, timeCreated, link, tel, cousine) {
        var _this = _super.call(this, name, disc, zip, city, street, image, dateCreated, timeCreated) || this;
        _this.link = link;
        _this.tel = tel;
        _this.cousine = cousine;
        restArray.push(_this);
        return _this;
    }
    Restaurants.prototype.renderRest = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-3 mb-4\">\n    <div>\n    <img class=\"card-img-top border border-bottom-0 border-secondary\" src=\"" + this.image + "\"  alt=\"\">\n    <div class=\"card-body center-block border border-top-0 border-bottom-0 border-secondary bg-warning\">\n      <h5 class=\"card-title\">" + this.name + "</h5>\n      <p class=\"card-text\">" + this.disc + "</p>\n      <p class=\"card-text\">" + this.zip + ", " + this.city + ", " + this.street + "</p>\n      <p><a class=\"card-text text-decoration-none\" href=\"" + this.link + "\">Link</a></p>\n      <p class=\"card-text\">" + this.tel + "</p>\n      <p class=\"card-text\">" + this.cousine + "</p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center border border-top-0 border-secondary bg-warning\">\n    <a href=\"#\" class=\"btn btn-primary\">Reserve Table</a>\n    </div>\n    </div>\n    ";
    };
    return Restaurants;
}(Locations));
new Restaurants("Des Stuweer", "urig beisln", 1010, "Vienna", "Stephansplatz 3", "img/rest1.jpg", "02.12.2020", "10:00", "www.dasstuweer.at", "01/52689", "Wienerisch");
new Restaurants("Hansy", "schlechte Küche dafür unfreundliche Bedienung", 1020, "Vienna", "Heinestraße 42", "img/rest2.jpg", "15.09.2020", "11:45", "www.hansy.at", "01/backhendl", "Alt-Wienerisch");
new Restaurants("BBQ-XXL", "Große Schnitzel Große Bier", 1110, "Vienna", "Orge Street 12", "img/rest3.jpg", "17.12.2020", "15:30", "www.bbqxxl.at", "01/55XXL", "Nix spezielles nur groß");
new Restaurants("Da Heirige", "Das beste von deen vier", 1220, "Vienna", "Heirignhigl 12", "img/rest4.jpg", "15.10.2020", "20:15", "www.wasistinternet.at", "01/ichhabnochfax", "Breddljausn");
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, disc, zip, city, street, image, dateCreated, timeCreated, link, date, entry) {
        var _this = _super.call(this, name, disc, zip, city, street, image, dateCreated, timeCreated) || this;
        _this.evdate = new Date(); //check again of displaying mb day/date etc//
        _this.link = link;
        _this.date = date;
        _this.entry = entry;
        eventsArray.push(_this);
        return _this;
    }
    Events.prototype.renderEvents = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-3 mb-4\">\n    <img class=\"card-img-top border border-success border-bottom-0\" src=\"" + this.image + "\"alt=\"" + this.name + "\">\n    <div class=\"card-body center-block border border-top-0 border-bottom-0 border-success bg-secondary\">\n      <h5 class=\"card-title\">" + this.name + "</h5>\n      <p class=\"card-text\">" + this.disc + "</p>\n      <p class=\"card-text\">Adress: " + this.zip + ", " + this.city + ", " + this.street + "</p>\n      <p><a class=\"card-text text-decoration-none\" href=\"" + this.link + "\">Link</a></p>\n      <p class=\"card-text\">Date: " + this.date + "</p>\n      <p class=\"card-text\">Entry: " + this.entry + " \u20AC</p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center border border-top-0 border-success bg-secondary\">\n    <a href=\"#\" class=\"btn btn-primary\">Book Event</a>\n    </div>\n    </div>";
    };
    return Events;
}(Locations));
new Events("Annoying Trumpet Sound", "how long will you hold?", 1030, "Wien", "Bauhausgasse 10", "img/event1.jpg", "09.03.2020", "16:20", "websitelinkevent.com", "25.11.2020", 54);
new Events("Sentimental Emo Guitar Boy", "Will cry live on stage and maybe call his ex", 1020, "Wien", "Klingengasse 12", "img/event2.jpg", "10.06.2020", "09:30", "websitelinkevent.com", "01.10.2020", 12);
new Events("How to use a facemask", "because you know you dont", 1050, "Wieen", "Virusgasse 58", "img/event3.jpg", "20.11.2020", "14:15", "websitelinkevent.com", "01.02.2021", 30);
new Events("Live Beten mit Moses", "Immer wieder erfrischend", 1010, "Jerusalem", "Im Schreinerhaus", "img/event4.jpg", "12.12.2020", "13:00", "websitelinkevent.com", "25.11.2020", 25);
console.table(locArray);
for (var i in locArray) {
    document.getElementById("locations").innerHTML += locArray[i].renderLoc();
}
// locArray.sort((a, b) => b.dateCreated.localeCompare(a.dateCreated) === 0 ? b.timeCreated.localeCompare(a.timeCreated) : b.dateCreated.localeCompare(a.dateCreated));
