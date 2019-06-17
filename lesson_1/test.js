function button(){
    return "button";
}
class Slider{
    constructor(width,hieght,count){
        this.width=width;
        this.hieght=hieght;
        this.count=count;
    }
    nextSlide(){
        console.log("Nes");
    }
    prevSlide(){
        console.log("fhfj");
    }
    whoAmi(){
        console.log(this.width,this.hieght,this.count);
    }
}
class Autoplay extends Slider{
    constructor(width,hieght,count,autoplay){
        super(width, hieght, count);
        this.autoplay=autoplay;
    }
    play(){
        console.log(this.autoplay);
    }
}
const slider=new Slider(500,600,5);
const slider2=new Autoplay(300,56,5,"true");
slider2.whoAmi();
slider2.play();
slider.whoAmi();