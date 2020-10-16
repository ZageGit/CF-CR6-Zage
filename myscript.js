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
new Locations("Schönbrunn", "Schönbrunn wie immer", 1130, "Vienna", "Schönbrunner Schloßstraße 50 ", "img/schonbrunn.jpg");
new Locations("Riesenrad", "Prater bam Oida", 1020, "Vienna", "Prater 1", "img/riesenrad.jpg");
new Locations("Hundertwasserhaus", "Echt oag", 1030, "Vienna", "Kegelgasse 36-38", "img/hundertwasser.jpg");
for (var i in locArray) {
    document.getElementById("locations").innerHTML += locArray[i].renderLoc();
}
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, disc, zip, city, street, image, link, tel, cousine) {
        var _this = _super.call(this, name, disc, zip, city, street, image) || this;
        _this.link = link;
        _this.tel = tel;
        _this.cousine = cousine;
        restArray.push(_this);
        return _this;
    }
    Restaurants.prototype.renderRest = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-3 mb-4\">\n    <img class=\"card-img-top\" src=\"" + this.image + "\"  alt=\"\">\n    <div class=\"card-body center-block border\">\n      <h5 class=\"card-title\">" + this.name + "</h5>\n      <p class=\"card-text\">" + this.disc + "</p>\n      <p class=\"card-text\">" + this.zip + ", " + this.city + ", " + this.street + "</p>\n      <p class=\"card-text\"><a href=\"" + this.link + "\"></a></p>\n      <p class=\"card-text\">" + this.tel + "</p>\n      <p class=\"card-text\">" + this.cousine + "</p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center border\">\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n    </div>\n    ";
    };
    return Restaurants;
}(Locations));
new Restaurants("Des Stuweer", "urig beisln", 1010, "Vienna", "Stephansplatz 3", "img/rest1.jpg", "www.dasstuweer.at", "01/52689", "Wienerisch");
new Restaurants("Hansy", "schlechte Küche dafür unfreundliche Bedienung", 1020, "Vienna", "Heinestraße 42", "img/rest2.jpg", "www.hansy.at", "01/backhendl", "Alt-Wienerisch");
new Restaurants("BBQ-XXL", "Große Schnitzel Große Bier", 1110, "Vienna", "Orge Street 12", "img/rest3.jpg", "www.bbqxxl.at", "01/55XXL", "Nix spezielles nur groß");
new Restaurants("Da Heirige", "Das beste von deen vier", 1220, "Vienna", "Heirignhigl 12", "img/rest4.jpg", "www.wasistinternet.at", "01/ichhabnochfax", "Breddljausn");
for (var i in locArray) {
    document.getElementById("restaurants").innerHTML += restArray[i].renderRest();
}
// class Events extends Locations {
//     link:string;
//     date=new Date();       //check again of displaying mb day/date etc//
//     entry:number;
// constructor(name,disc,zip,city,street,image,link,date,entry){
//     super(name,disc,zip,city,street,image);
//     this.link=link;
//     this.date=date;
//     this.entry=entry;
// }
// display2(){
//     return `${this.renderLoc()} link: ${this.link} date: ${this.date} entry: ${this.entry} €`
// }
// }
// let newEvent = new Events ("zarrah live Rap","Aus ohhr",1030,"Budapest","king streeet 98","imamgeelink","websitelinkevent.com", "25.11.2020",54)
console.table(locArray);
