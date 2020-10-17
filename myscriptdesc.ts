let locArray:Array<any> = [];
let restArray:Array<any> = [];
let eventsArray:Array<any> = [];

class Locations{
    name:string;
    disc:string;
    zip:number;
    city:string;
    street:string;
    image:string;
    date:string;
    dateCreated:string;
    timeCreated:string;
    

constructor(name,disc,zip,city,street,image,dateCreated,timeCreated){
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

renderLoc(){
  return  `<div class="col-sm-12 col-md-6 col-lg-3 mb-4">
<img class="card-img-top border border-bottom-0 border-primary" src="${this.image}"  alt="">
<div class="card-body center-block border border-top-0 border-bottom-0 border-primary bg-info">
  <h5 class="card-title">${this.name}</h5>
  <p class="card-text">${this.disc}</p>
  <p class="card-text">${this.zip}, ${this.city}, ${this.street}</p>
</div>
<div class="card-footer d-flex justify-content-center border border-top-0  border-primary bg-info">
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`
}
locCarousel(){
    return `<div class="carousel-item">
    <img src="${this.image}" class="d-block w-100" alt="${this.name}">
    <div class="carousel-caption d-none d-md-block text-dark border bg-light">
      <h5>${this.name}</h5>
      <p>${this.disc}</p>
    </div>
  </div>`
}

}

new Locations ("Stephansdom","Stephansdom halt",1010,"Vienna","Stephansplatz 3","img/stephansdom.jpg","10.01.2010","12:45")
new Locations ("Schönbrunn","Schönbrunn wie immer",1130,"Vienna","Schönbrunner Schloßstraße 50 ","img/schonbrunn.jpg","25.06.2020","10:55")
new Locations ("Riesenrad","Prater bam Oida",1020,"Vienna","Prater 1","img/riesenrad.jpg","27.08.2020","08:35")
new Locations ("Hundertwasserhaus","Echt oag",1030,"Vienna","Kegelgasse 36-38","img/hundertwasser.jpg","22.12.2020","18:25")

for (let i in locArray){
    document.getElementById("locations").innerHTML+=locArray[i].renderLoc();
}



class Restaurants extends Locations{
    link:string;
    tel:any;
    cousine:string;
constructor(name,disc,zip,city,street,image,dateCreated,timeCreated,link,tel,cousine){
    super(name,disc,zip,city,street,image,dateCreated,timeCreated,link);
    this.link = link;
    this.tel = tel;
    this.cousine=cousine;
    restArray.push(this);

}
renderRest(){
    return `<div class="col-sm-12 col-md-6 col-lg-3 mb-4">
    <div>
    <img class="card-img-top border border-bottom-0 border-secondary" src="${this.image}"  alt="">
    <div class="card-body center-block border border-top-0 border-bottom-0 border-secondary bg-warning">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">${this.disc}</p>
      <p class="card-text">${this.zip}, ${this.city}, ${this.street}</p>
      <p><a class="card-text text-decoration-none" href="${this.link}">Link</a></p>
      <p class="card-text">${this.tel}</p>
      <p class="card-text">${this.cousine}</p>
    </div>
    <div class="card-footer d-flex justify-content-center border border-top-0 border-secondary bg-warning">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `

}
}
new Restaurants ("Des Stuweer","urig beisln",1010,"Vienna","Stephansplatz 3","img/rest1.jpg","10.01.2010","12:45","www.dasstuweer.at","01/52689","Wienerisch")
new Restaurants ("Hansy","schlechte Küche dafür unfreundliche Bedienung",1020,"Vienna","Heinestraße 42","img/rest2.jpg","10.01.2010","12:45","www.hansy.at","01/backhendl","Alt-Wienerisch")
new Restaurants ("BBQ-XXL","Große Schnitzel Große Bier",1110,"Vienna","Orge Street 12","img/rest3.jpg","10.01.2010","12:45","www.bbqxxl.at","01/55XXL","Nix spezielles nur groß")
new Restaurants ("Da Heirige","Das beste von deen vier",1220,"Vienna","Heirignhigl 12","img/rest4.jpg","10.01.2010","12:45","www.wasistinternet.at","01/ichhabnochfax","Breddljausn")

for (let i in restArray){
    document.getElementById("restaurants").innerHTML+=restArray[i].renderRest();
}
class Events extends Locations {
    link:string;
    evdate=new Date();       //check again of displaying mb day/date etc//
    entry:number;
constructor(name,disc,zip,city,street,image,dateCreated,timeCreated,link,date,entry){
    super(name,disc,zip,city,street,image,dateCreated,timeCreated,);
    this.link=link;
    this.date=date;
    this.entry=entry;
    eventsArray.push(this);
}
renderEvents(){
    return `<div class="col-sm-12 col-md-6 col-lg-3 mb-4">
    <img class="card-img-top border border-success border-bottom-0" src="${this.image}"alt="${this.name}">
    <div class="card-body center-block border border-top-0 border-bottom-0 border-success bg-secondary">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">${this.disc}</p>
      <p class="card-text">Adress: ${this.zip}, ${this.city}, ${this.street}</p>
      <p><a class="card-text text-decoration-none" href="${this.link}">Link</a></p>
      <p class="card-text">Date: ${this.date}</p>
      <p class="card-text">Entry: ${this.entry} €</p>
    </div>
    <div class="card-footer d-flex justify-content-center border border-top-0 border-success bg-secondary">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
}


}


new Events ("Annoying Trumpet Sound","how long will you hold?",1030,"Wien","Bauhausgasse 10","img/event1.jpg","10.01.2010","12:45","websitelinkevent.com", "25.11.2020",54)
new Events ("Sentimental Emo Guitar Boy","Will cry live on stage and maybe call his ex",1020,"Wien","Klingengasse 12","img/event2.jpg","10.01.2010","12:45","websitelinkevent.com", "01.10.2020",12)
new Events ("How to use a facemask","because you know you dont",1050,"Wieen","Virusgasse 58","img/event3.jpg","websitelinkevent.com","10.01.2010","12:45", "01.02.2021",30)
new Events ("Live Beten mit Moses","Immer wieder erfrischend",1010,"Jerusalem","Im Schreinerhaus","img/event4.jpg","websitelinkevent.com","10.01.2010","12:45", "25.11.2020",25)


for (let i in eventsArray){
    document.getElementById("events").innerHTML+=eventsArray[i].renderEvents();
}
for  (let i in locArray){
    document.getElementById("loccar").innerHTML+=locArray[i].locCarousel();
}
console.table(locArray);