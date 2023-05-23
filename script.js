// start webgazer
webgazer.setGazeListener((data, timestamp)=>{ 

}).begin();

let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');

let intervalCounter = 0;
let resultLeft = 0;
let resultRight = 0;

let interval = setInterval(()=>{
//    add images to image 1 and image 2

    intervalCounter++;

    if(intervalCounter >= 1 && intervalCounter <= 10){
        image1.src = 'images/Literatuur/Vraag 12.1.jpeg'; 
        image2.src = 'images/Handel-zaken/Vraag 59.0.jpeg';

    }
    
    // if(intervalCounter === 15){
    //     clearInterval(interval);
    // }
    if(intervalCounter === 13 && intervalCounter <= 23){
        image1.src = 'images/Literatuur/Vraag 14.1.jpeg'; 
        image2.src = 'images/Literatuur/Vraag 15.0.jpeg';
    }

    console.log(intervalCounter);

}
, 1000);
