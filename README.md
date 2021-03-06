# Simple rainfall animation

## Preview

You should use this package for react.js only. If you want to use it without react, you can find all source code in my GitHub profile

## Get Started

Firstly, you should write this code:
``` 
import  Rainfall  from  'react-rainfall-animation/src/Rain'

function  App() {
  return (
    <div className="App">
      <div id="Rain">
        <Rainfall  dropletsAmount={200}  />
      </div>
    </div>
  );
}
``` 
The dropletsAmount can be different. 
Then, you should make styles for droplet. For example: 
``` 
#Rain {
	position: fixed;
	top: 0;
	left: 0;
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	z-index: -1;
}

.drop {
	background: #000;
	width: 1px;
	height: 89px;
	position: absolute;
	bottom: 200px;
	animation: falling 1.5s  linear  infinite;
}

@media (max-width: 600px) {
	#Rain {
		height: 105vh;
	}
}

@keyframes  falling {
	0% {
		transform: translate(0, 0)
	}
	100% {
		transform: translate(0, 1000px)
	}
}
``` 
## Oblique rain
Sometimes we need to make oblique droplets. And you can do it very simple. Let's consider the solution.
``` 
import  ObliqueRain  from  'react-rainfall-animation/src/ObliqueRain'
  
function  App() {
  return (
    <div  className="App">
      <div  id="Rain">
        <ObliqueRain  dropletsAmount={200}  amplitude={400}  />
      </div>
    </div>
  );
}
``` 
Amplitude is the number of pixels each drop will rotate. But it's not enough.
``` 
#Rain {
	position: fixed;
	top: 0;
	left: 0;
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	z-index: -1;
}

.droplet {
	background: #000;
	width: 1px;
	height: 89px;
	position: absolute;
	bottom: 200px;
	animation: fall 1.5s  linear  infinite;
}

@media (max-width: 600px) {
	#Rain {
		height: 105vh;
	}
}

@keyframes  fall {
	0% {
		transform: translate(0, 0) rotate(15deg)
	}
	
	100% {
		transform: translate(-400px, 1000px) rotate(15deg)
	}
}
``` 
**Warning: in animation, result positionX must be the opposite number from amplitude**<br>
Happy hacking =)