// start webgazer
webgazer.setGazeListener((data, timestamp)=>{ 

}).begin();

let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');

let interval = setInterval(()=>{
//    add images to image 1 and image 2
   
    image1.src = 'images/Literatuur/Vraag 12.1.jpeg'; 
    image2.src = 'images/Handel-zaken/Vraag 59.0.jpeg';
}
, 5000);
