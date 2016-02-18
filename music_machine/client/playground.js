//playground.js

acontext = new webkitAudioContext() || new AudioContext;  

//Now we can create an instance of our waveform generator and play it.

waveform = new Synth(acontext);
maxim1 = new Maxim();
maxim2 = new Maxim();
maxim3 = new Maxim();
maxim4 = new Maxim();
maxim5 = new Maxim();
maxim6 = new Maxim();
maxim7 = new Maxim();
maxim8 = new Maxim();
player1 = maxim1.loadFile("drums1.wav");
player1.loop
player2 = maxim2.loadFile("bassline.wav");
player2.loop
player3 = maxim3.loadFile("arp.wav");
player3.loop
player4 = maxim4.loadFile("bassdrum1.wav");
player4.loop
player5 = maxim5.loadFile("cymbal1.wav");
player5.loop
player6 = maxim6.loadFile("hihat2.wav");
player6.loop
player7 = maxim7.loadFile("snaredrum1.wav");
player7.loop
player8 = maxim8.loadFile("shake.wav");
player8.loop

playDrums = function(){
	player1.volume(1);
}

stopDrums = function(){
	player1.volume(0);
}

playBass = function(){
	player2.volume(1);
}

stopBass = function(){
	player2.volume(0);
}

playArp = function(){
	player3.volume(1);
}

stopArp = function(){
	player3.volume(0);
}

playbassdrum1 = function(){
	player4.volume(1);
}

stopbassdrum1 = function(){
	player4.volume(0);
}

playcymbal1 = function(){
	player5.volume(1);
}

stopcymbal1 = function(){
	player5.volume(0);
}

playhihat2 = function(){
	player6.volume(1);
}

stophihat2 = function(){
	player6.volume(0);
}

playsnaredrum1 = function(){
	player7.volume(1);
}

stopsnaredrum1 = function(){
	player7.volume(0);
}

playshake = function(){
	player8.volume(1);
}

stopshake = function(){
	player8.volume(0);
}


playAll = function() {

	player1.play();
	player2.play();
	player3.play();
	player4.play();
	player5.play();
	player6.play();
	player7.play();
	player8.play();
}

stopAll = function() {

	player1.stop();
	player2.stop();
	player3.stop();
	player4.stop();
	player5.stop();
	player6.stop();
	player7.stop();
	player8.stop();
}

setSpeed1 = function(speed) {
	player1.speed(speed);
}
setSpeed2 = function(speed) {
	player2.speed(speed);
}
setSpeed3 = function(speed) {
	player3.speed(speed);
}
setSpeed4 = function(speed) {
	player4.speed(speed);
}
setSpeed5 = function(speed) {
	player5.speed(speed);
}
setSpeed6 = function(speed) {
	player6.speed(speed);
}
setSpeed7 = function(speed) {
	player7.speed(speed);
}
setSpeed8 = function(speed) {
	player8.speed(speed);
}


setVolume1 = function(volume) {
	player1.volume(volume);
}
setVolume2 = function(volume) {
	player2.volume(volume);
}
setVolume3 = function(volume) {
	player3.volume(volume);
}
setVolume4 = function(volume) {
	player4.volume(volume);
}
setVolume5 = function(volume) {
	player5.volume(volume);
}
setVolume6 = function(volume) {
	player6.volume(volume);
}
setVolume7 = function(volume) {
	player7.volume(volume);
}
setVolume8 = function(volume) {
	player8.volume(volume);
}


