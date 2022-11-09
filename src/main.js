import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.mount('#app')


import { globe } from './globe/globe.js';
import { traceIP, getIPValue } from './trace.js';
import * as p5 from "p5";

window.onload = function(){
	globe("#globe");

	document.querySelector("#ip").addEventListener("submit", async function(e){
		e.preventDefault()
		var ip = getIPValue();
		traceIP(ip);
	});


	const P5 = new p5(p5Ready);

	function p5Ready(pS){
		/*let xspacing = 1; // Distance between each horizontal location
		let w; // Width of entire wave
		let theta = 0.0; // Start angle at 0
		let amplitude = 75.0; // Height of wave
		let period = 500.0; // How many pixels before the wave repeats
		let dx; // Value for incrementing x
		let yvalues; // Using an array to store height values for the wave
		let leangeWave=0;
		let waves = [];

		class Wave{
		   	constructor(x,y,t) {
		    	this.shiftX=x;
		    	this.shiftY=y;
		    	this.yvalues = new Array(pS.floor(w / xspacing));
		    	this.dx = (pS.TWO_PI / period) * xspacing;
		    	this.f=0;
		    	this.t=t;
		   	}
		   	calcAttitudeFact(){
			    return pS.sin(pS.frameCount/(this.t*10))
			}
		   	calcWave() {
			    // Increment theta (try different values for
			    // 'angular velocity' here)
			    //theta += 0.01;
			    // For every x value, calculate a y value with sine function
			    let x = theta;
			    this.f = this.calcAttitudeFact();
			    for (let i = 0; i < this.yvalues.length; i++) {
			     	this.yvalues[i] = pS.sin(x) * amplitude*this.f;
			      	x += this.dx;
			    }
		  	}
		  	renderWave() {
			    pS.noStroke();
			    pS.fill(255);
			    // A simple way to draw the wave with an ellipse at each location
			    pS.push();
			    pS.translate(this.shiftX,this.shiftY);
			    for (let x = 0; x < leangeWave; x++) {
			    	pS.ellipse(x * xspacing, pS.height / 2 + this.yvalues[x], 2, 2);
			    }
			}
		}

		pS.setup = () => {
		    var canvas = pS.createCanvas(window.innerWidth, window.innerHeight);
		    canvas.parent('p5Canvas');
		    w = pS.width + 16;
		    for(let i=0;i<8;i++){
		        waves[i] = new Wave(pS.random(0,-20),pS.random(20,-20),pS.random(10,20))
		    }
		}

		pS.draw = () => {
			console.log(leangeWave);
			console.log(waves);
		    pS.background(0,20);
		    if(leangeWave<waves[0].yvalues.length){
		        leangeWave++;
		    }
		    for(let i=0;i<8;i++){
		        waves[i].calcWave();
		        waves[i].renderWave();
		    }
		}

		/*window.addEventListener("scroll", function(){
			console.log("test");
			var scrollY = window.scrollY;
			console.log(scrollY);
			leangeWave = scrollY;
			pS.background(0,20);
			if(leangeWave<waves[0].yvalues.length){
				leangeWave++;
			}
			for(let j=scrollY; j>0; j--){
				for(let i=0;i<8;i++){
					waves[i].calcWave();
					waves[i].renderWave();
				}
			}
		});*/

		let points=[];
		pS.setup = () => {
			var canvas = pS.createCanvas(window.innerWidth, window.innerHeight);
		    canvas.parent('p5Canvas');
			for(var i=0;i<150;i++){
				points.push(new Point(pS.random(pS.width),pS.random(pS.height),pS.random(-0.2,0.2),pS.random(-0.2,0.2)));
			}
		}
		pS.draw = () => {
			pS.background(0);
			let maxDistance = 200;
			for(var i=0;i<points.length;i++){
				let a = points[i];
				for(var j=i+1;j<points.length;j++){
					let b = points[j];
					let d = a.distance(b);
					if (d < maxDistance){
						let alpha = pS.map(d,0,maxDistance,255,0);
						let weight = pS.map(d,0,maxDistance,2,0);
						pS.stroke(255,alpha);
						pS.strokeWeight(weight);
						a.move();
						b.move();
						a.bounce();
						b.bounce();
						pS.line(a.x,a.y,b.x,b.y);
					}
				}
			}
		}
		class Point {
			constructor(x,y,xSpd,ySpd) {
				this.x = x;
				this.y = y;
				this.xSpd = xSpd;
				this.ySpd = ySpd;
			}
			move() {
				this.x+=this.xSpd/10;
				this.y+=this.ySpd/10;
			}
			bounce(){
				if(this.x<0 || this.x>pS.width){
					this.xSpd*=-1;
				}
				if(this.y<0 || this.y>pS.height){
					this.ySpd*=-1;
				}
			}
			distance(p){
				let dx = this.x-p.x;
				let dy = this.y-p.y;
				return pS.sqrt(dx*dx+dy*dy);
			}
		}
	}




}
