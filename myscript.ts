let locArray:Array<any> = [];

class Locations{
    name:string;
    disc:string;
    zip:number;
    city:string;
    street:string;
    image:string;

constructor(name,disc,zip,city,street,image){
    this.name = name;
    this.disc = disc;
    this.zip = zip;
    this.city = city;
    this.street = street;
    this.image = image;
    locArray.push(this);
}

renderLoc(){
  return  `<div class="col-sm-12 col-md-6 col-lg-3 mb-4">
<img class="card-img-top" src="${this.image}"  alt="">
<div class="card-body center-block border">
  <h5 class="card-title">${this.name}</h5>
  <p class="card-text">${this.disc}</p>
  <p class="card-text">${this.zip}, ${this.city}, ${this.street}</p>
</div>
<div class="card-footer d-flex justify-content-center border">
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`
}

}

new Locations ("Stephansdom","Stephansdom halt",1010,"Vienna","Stephansplatz 3","img/stephansdom.jpg")
new Locations ("Schönbrunn","Schönbrunn,schön wie immer",1130,"Vienna","Schönbrunner Schloßstraße 50 ","img/hundertwasser.jpg")
new Locations ("Schönbrunn","Schönbrunn,schön wie immer",1130,"Vienna","Schönbrunner Schloßstraße 50 ","img/riesenrad.jpg")
new Locations ("Schönbrunn","Schönbrunn,schön wie immer",1130,"Vienna","Schönbrunner Schloßstraße 50 ","img/schonbrunn.jpg")

for (let i in locArray){
    document.getElementById("locations").innerHTML+=locArray[i].renderLoc();
}



class Restaurants extends Locations{
    link:string;
    tel:any;
constructor(name,disc,zip,city,street,image,link,tel){
    super(name,disc,zip,city,street,image);
    this.link = link;
    this.tel = tel;
}
display1(){
    return `${this.renderLoc()}link: ${this.link} Tel: ${this.tel}`

}
}

let newRest = new Restaurants("The Stuwer","beste schnitzel",1020,"Vienna","Stuwerstrasse 50","imglink","restaurantwebsitelimk.com","01-5239668")
 console.log(newRest.display1());

class Events extends Locations {
    link:string;
    date=new Date();       //check again of displaying mb day/date etc//
    entry:number;
constructor(name,disc,zip,city,street,image,link,date,entry){
    super(name,disc,zip,city,street,image);
    this.link=link;
    this.date=date;
    this.entry=entry;
}
display2(){
    return `${this.renderLoc()} link: ${this.link} date: ${this.date} entry: ${this.entry} €`
}

}

let newEvent = new Events ("zarrah live Rap","Aus ohhr",1030,"Budapest","king streeet 98","imamgeelink","websitelinkevent.com", "25.11.2020",54)
console.log(newEvent.display2());
console.table(locArray);