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
    function Locations(desc, zip, city, street, image) {
        this.desc = desc;
        this.zip = zip;
        this.city = city;
        this.street = street;
        this.image = image;
        locArray.push(this);
    }
    Locations.prototype.display = function () {
        return this.desc + " ZIP: " + this.zip + " City: " + this.city + "  Street: " + this.street + " " + this.image;
    };
    return Locations;
}());
var newLoc = new Locations("Daham", 1020, "Vienna", "Stuwerstrasse 47", "imglink");
console.log(newLoc.display());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(desc, zip, city, streeet, image, link, tel) {
        var _this = _super.call(this, desc, zip, city, streeet, image) || this;
        _this.link = link;
        _this.tel = tel;
        locArray.push(_this);
        return _this;
    }
    Restaurants.prototype.display1 = function () {
        return this.display() + "link: " + this.link + " Tel: " + this.tel;
    };
    return Restaurants;
}(Locations));
var newRest = new Restaurants("The Stuwer", 1020, "Vienna", "Stuwerstrasse 50", "imglink", "restaurantwebsitelimk.com", "01-5239668");
console.log(newRest.display1());
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(desc, zip, city, streeet, image, link, date, entry) {
        var _this = _super.call(this, desc, zip, city, streeet, image) || this;
        _this.link = link;
        _this.date = date;
        _this.entry = entry;
        locArray.push(_this);
        return _this;
    }
    Events.prototype.display2 = function () {
        return this.display() + " link: " + this.link + " date: " + this.date + " entry: " + this.entry + " \u20AC";
    };
    return Events;
}(Locations));
var newEvent = new Events("zarrah live Rap", 1030, "Budapest", "king streeet 98", "imamgeelink", "websitelinkevent.com", "25.11.2020", 54);
console.log(newEvent.display2());
