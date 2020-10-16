let locArray:Array<any> = [];

class Locations{
    desc:string;
    zip:number;
    city:string;
    street:string;
    image:string;

constructor(desc,zip,city,street,image){
    this.desc = desc;
    this.zip = zip;
    this.city = city;
    this.street = street;
    this.image = image;
    locArray.push(this);
}

display(){
    return`${this.desc} ZIP: ${this.zip} City: ${this.city}  Street: ${this.street} ${this.image}`
}

}

let newLoc = new Locations ("Daham",1020,"Vienna","Stuwerstrasse 47","imglink")
console.log(newLoc.display());


class Restaurants extends Locations{
    link:string;
    tel:any;
constructor(desc,zip,city,streeet,image,link,tel){
    super(desc,zip,city,streeet,image);
    this.link = link;
    this.tel = tel;
    locArray.push(this);
}
display1(){
    return `${this.display()}link: ${this.link} Tel: ${this.tel}`

}
}

let newRest = new Restaurants("The Stuwer",1020,"Vienna","Stuwerstrasse 50","imglink","restaurantwebsitelimk.com","01-5239668")
 console.log(newRest.display1());

class Events extends Locations {
    link:string;
    date:any;       //check again of displaying mb day/date etc//
    entry:number;
constructor(desc,zip,city,streeet,image,link,date,entry){
    super(desc,zip,city,streeet,image);
    this.link=link;
    this.date=date;
    this.entry=entry;
    locArray.push(this);
}
display2(){
    return `${this.display()} link: ${this.link} date: ${this.date} entry: ${this.entry} €`
}

}

let newEvent = new Events ("zarrah live Rap",1030,"Budapest","king streeet 98","imamgeelink","websitelinkevent.com", "25.11.2020",54)
console.log(newEvent.display2());