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
		let points=[];
		pS.setup = () => {
			var canvas = pS.createCanvas(window.innerWidth, window.innerHeight*2.5);
		    canvas.parent('p5Canvas');
			for(var i=0;i<400;i++){
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
