var synth = new Tone.PolySynth(8, Tone.Synth, {
			"oscillator" : {
				"partials" : [0, 2, 3, 4, 5, 6, 7, 8, 9],
			}
		}).toMaster();






		var part1 = new Tone.Part(function(time, note){
			synth.triggerAttackRelease(note.name, note.duration, time, note.velocity);
		}, [
          
      {
          "duration": 0.4739583333333333,
          "durationTicks": 455,
          "midi": 67,
          "name": "G4",
          "ticks": 0,
          "time": 0,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.47395833333333337,
          "durationTicks": 455,
          "midi": 65,
          "name": "F4",
          "ticks": 480,
          "time": 0.5,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.47395833333333326,
          "durationTicks": 455,
          "midi": 74,
          "name": "D5",
          "ticks": 960,
          "time": 1,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.05833333333333335,
          "durationTicks": 56,
          "midi": 71,
          "name": "B4",
          "ticks": 1440,
          "time": 1.5,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.05833333333333335,
          "durationTicks": 56,
          "midi": 67,
          "name": "G4",
          "ticks": 1560,
          "time": 1.625,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.05833333333333335,
          "durationTicks": 56,
          "midi": 67,
          "name": "G4",
          "ticks": 1620,
          "time": 1.6875,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.05833333333333335,
          "durationTicks": 56,
          "midi": 65,
          "name": "F4",
          "ticks": 1680,
          "time": 1.75,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.05833333333333335,
          "durationTicks": 56,
          "midi": 62,
          "name": "D4",
          "ticks": 1800,
          "time": 1.875,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.4739583333333335,
          "durationTicks": 455,
          "midi": 64,
          "name": "E4",
          "ticks": 1920,
          "time": 2,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.4739583333333335,
          "durationTicks": 455,
          "midi": 65,
          "name": "F4",
          "ticks": 2400,
          "time": 2.5,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.058333333333333126,
          "durationTicks": 56,
          "midi": 69,
          "name": "A4",
          "ticks": 2880,
          "time": 3,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.058333333333333126,
          "durationTicks": 56,
          "midi": 67,
          "name": "G4",
          "ticks": 2940,
          "time": 3.0625,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.1177083333333333,
          "durationTicks": 113,
          "midi": 67,
          "name": "G4",
          "ticks": 3000,
          "time": 3.125,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.058333333333333126,
          "durationTicks": 56,
          "midi": 74,
          "name": "D5",
          "ticks": 3120,
          "time": 3.25,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.058333333333333126,
          "durationTicks": 56,
          "midi": 67,
          "name": "G4",
          "ticks": 3180,
          "time": 3.3125,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.1177083333333333,
          "durationTicks": 113,
          "midi": 67,
          "name": "G4",
          "ticks": 3240,
          "time": 3.375,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.4739583333333335,
          "durationTicks": 455,
          "midi": 69,
          "name": "A4",
          "ticks": 3360,
          "time": 3.5,
          "velocity": 0.6299212598425197
        }
          
          
		]).start('0');
//////////////////////////////////////////

var part2 = new Tone.Part(function(time, note){
			synth.triggerAttackRelease(note.name, note.duration, time, note.velocity);
		}, [
          
      {
          "duration": 0.4739583333333333,
          "durationTicks": 455,
          "midi": 58,
          "name": "A4",
          "ticks": 0,
          "time": 0,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.47395833333333337,
          "durationTicks": 455,
          "midi": 67,
          "name": "F5",
          "ticks": 480,
          "time": 0.5,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.47395833333333326,
          "durationTicks": 455,
          "midi": 76,
          "name": "D6",
          "ticks": 960,
          "time": 1,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.05833333333333335,
          "durationTicks": 56,
          "midi": 72,
          "name": "B4",
          "ticks": 1440,
          "time": 1.5,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.05833333333333335,
          "durationTicks": 56,
          "midi": 67,
          "name": "G4",
          "ticks": 1560,
          "time": 1.625,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.05833333333333335,
          "durationTicks": 56,
          "midi": 67,
          "name": "G4",
          "ticks": 1620,
          "time": 1.6875,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.05833333333333335,
          "durationTicks": 56,
          "midi": 65,
          "name": "F4",
          "ticks": 1680,
          "time": 1.75,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.05833333333333335,
          "durationTicks": 56,
          "midi": 65,
          "name": "D4",
          "ticks": 1800,
          "time": 1.875,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.4739583333333335,
          "durationTicks": 455,
          "midi": 63,
          "name": "E4",
          "ticks": 1920,
          "time": 2,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.4739583333333335,
          "durationTicks": 455,
          "midi": 65,
          "name": "F4",
          "ticks": 2400,
          "time": 2.5,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.058333333333333126,
          "durationTicks": 56,
          "midi": 70,
          "name": "A4",
          "ticks": 2880,
          "time": 3,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.058333333333333126,
          "durationTicks": 56,
          "midi": 68,
          "name": "G4",
          "ticks": 2940,
          "time": 3.0625,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.1177083333333333,
          "durationTicks": 113,
          "midi": 66,
          "name": "G4",
          "ticks": 3000,
          "time": 3.125,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.058333333333333126,
          "durationTicks": 56,
          "midi": 74,
          "name": "D5",
          "ticks": 3120,
          "time": 3.25,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.058333333333333126,
          "durationTicks": 56,
          "midi": 52,
          "name": "G4",
          "ticks": 3180,
          "time": 3.3125,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.1177083333333333,
          "durationTicks": 113,
          "midi": 67,
          "name": "G4",
          "ticks": 3240,
          "time": 3.375,
          "velocity": 0.6299212598425197
        },
        {
          "duration": 0.4739583333333335,
          "durationTicks": 455,
          "midi": 80,
          "name": "A4",
          "ticks": 3360,
          "time": 3.5,
          "velocity": 0.6299212598425197
        }
          
          
		])/*.start('0')*/;


Tone.Transport.bpm.value = 120;


var son, analyzer;
var volume = 0;
var clicks = 0;
var y = 50;
var X1 = 0;
var z1, z2;
var count = 0;
var cursor = 1;







function setup() {
  Tone.Transport.start();

  createCanvas(windowWidth, windowHeight);

  



  
  sel = createSelect();
  sel.position(windowWidth/22, windowHeight/31);
  sel.style('width', '200px');
  sel.style('height', '80px');
  sel.style('font-size', '30px');
  sel.option('AUDIO OFF');
  sel.option('SYNTH');
sel.changed(mySelectEvent);



  
  
  


 var options = {
    preventDefault: true
  };
var hammer = new Hammer(document.body, options);
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  });

  hammer.on("swipe", swiped);
  
 

  
  
}







  

////////////////////////////////////////////////////////////////


function mySelectEvent() {
  var item = sel.value();
   
   if (item == 'AUDIO OFF') {

 Tone.Transport.stop();
  
  }

  if (item == 'SYNTH') {

    
       
    part1.loop = true;
part1.loopStart = '0';
part1.loopEnd = '4';
    part1.start('0');
  
  }
  
   
 
}

  		function swiped(event) {
  console.log(event);
  if (event.direction == 4 || event.direction == 2 ) {
   // msg = "you swiped right";
    clicks ++;
     if (clicks > 10)

  {clicks = 0;}


  var count = clicks + X1;
  var countlast = count + 10; 
  var countvoisin2 = count - 1; 
  
 
sounds[count].amp(0);
sounds[count].loop();
     
    part1.loop = true;
  


    
    

  if (clicks >= 1) {

  sounds[countvoisin2].stop();
  }
  if (clicks == 0) {

  sounds[countlast].stop();
  }

  
  }      

}




 





/////////////////////////////////////////////////////////////////// DRAW


function draw() {
  
  
  background(255);
  


  
    stroke(255, 0, 97, 170);
  strokeWeight(7);
  
  line(width-140,  height/2, width-100,  height/2+50);
  line(width-100,  height/2+50, width-140,  height/2+100);
  
  line(width-120,  height/2, width-80,  height/2+50);
  line(width-80,  height/2+50, width-120,  height/2+100);

line(width-100,  height/2, width-60,  height/2+50);
  line(width-60,  height/2+50, width-100,  height/2+100);

  ////




noStroke();

  textSize(42);
  textAlign(CENTER, CENTER);
  //displaying number of clicks
  fill(20);
  text("inC PHONE", windowWidth/2, windowHeight/15);

rect(width-100, 40, width, 30);
fill(255);
  textSize(8);
  text("Composition de Terry Riley", width-50, 50);
  text("Dévellopé par Martin Maire", width-50, 60);
  
 



textSize(10);
 fill(0, 255, 255);

 //ellipse(width/2, height/2+50, 100+vol*1500, 100+vol*1500);

 fill(255, 255, 255);
// ellipse(width/2, height/2+50, 10+vol*1500, 10+vol*1500);
  //text formatting
  noStroke();
  fill(40);
  text("choisissez votre instrument", 20, 20);

text("Touchez-glissez (droite ou gauche) pour changer de phrase", width/2, height/2+120);
  textSize(80);
  textAlign(CENTER, CENTER);
  //displaying number of clicks
  fill(20);


  imageMode(CENTER);
 // image(imgs[clicks], width/2, height/3.2, imgs[clicks].width*1.5, imgs[clicks].height*1.5);

stroke(255, 255, 0, 160);
  strokeWeight(40);

 soundVolume = map(abs(rotationY), 0, 80, 0, 1);
 line(30, windowHeight -70, constrain(abs(rotationY*2.5), 30, windowWidth -30), windowHeight -70);
  
    noStroke();

 textSize(20);
//  text("Filtre: " + nf(rotationX, 0, 2), 100, constrain(abs(rotationX*10+windowHeight -100));
  text("Volume: " + nf(soundVolume, 0, 2), constrain(abs(rotationY*2.5) + 100, 100, windowHeight -70), windowHeight -70);


   count = clicks + X1;
 volume =  map(abs(rotationY), 0, 200, 0, 2);
    volume = constrain(volume, 0, 1);
  


}






