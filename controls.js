var prevDiv = document.getElementById("preview"),
	mdiv = document.getElementById("display"),
    bgcolor = document.getElementById("bgcolor"),
    b1 = document.getElementById("button1"),
    b2 = document.getElementById("button2"),
    b3 = document.getElementById("button3"),
    b4 = document.getElementById("button4"),
    b5 = document.getElementById("button5"),
    b6 = document.getElementById("button6"),
    r1 = document.getElementById("range1"),
    r2 = document.getElementById("range2"),
    r3 = document.getElementById("range3"), 
    r4 = document.getElementById("range4"), 
    hair1 = document.getElementById("hair"),
    eyes1 = document.getElementById("eyes"),
    nose1 = document.getElementById("nose"),
    mouth1 = document.getElementById("mouth"),
	
    h1 = 0,
    e1 = 0,
    ImgSrc = null;
function changeType(){
	r1.type = "number";
    r2.type = "number";
    r3.type = "number";
    r4.type = "number";
}

function changeType(){
    r1.type = "range";
    r2.type = "range";
    r3.type = "range";
    r4.type = "range";
}
function createFace(){
	var nprev = document.createElement("div"),
		
		ndisp = document.createElement("div"),
	    nhair = document.createElement("img"),
	    neyes = document.createElement("img"),
	    nnose = document.createElement("img"),
	    nmouth = document.createElement("img");
		
		nprev.className = "newPrev";
		ndisp.className = "newdisp";
		nhair.className = "newimg";
		neyes.className = "newimg";
		nnose.className = "newimg";
		nmouth.className = "newimg";
		
		
		nprev.appendChild(nhair);
		nprev.appendChild(neyes);
		nprev.appendChild(nnose);
		nprev.appendChild(nmouth);
		mdiv.appendChild(nprev);
		
		nprev.style.backgroundColor = prevDiv.style.backgroundColor;
		nprev.style.width = "100px";
		nprev.style.height = "100px";
		nprev.style.position = "relative";
		nprev.style.display = "inline-block";
		nprev.style.top = "0px";
		
		nhair.src = hair1.src;
		neyes.src = eyes1.src;
		nnose.src = nose1.src;
		nmouth.src = mouth1.src;
		
		nhair.style.width = b1.value +"%";
		nhair.style.width = r1.value+"%";
		nhair.style.height = "auto";
		nhair.style.left ="0px";
		nhair.style.right ="0px";
		nhair.style.top ="0px";
		nhair.style.position = "absolute";
		nhair.style.margin = "auto";
		nhair.style.display = "block";

		neyes.style.width = b2.value +"%";
		neyes.style.width = r2.value+"%";
		neyes.style.position = "absolute";
		neyes.style.left ="0px";
		neyes.style.right ="0px";
		neyes.style.top ="40px";
		neyes.style.margin = "auto";
		neyes.style.display = "block";
		

		nnose.style.width = b3.value +"%";
		nnose.style.width = r3.value+"%";
		nnose.style.position = "absolute";
		nnose.style.left ="0px";
		nnose.style.right ="0px";
		nnose.style.bottom ="30px";
		nnose.style.margin = "auto";
		nnose.style.display = "block";
		
		nmouth.style.width = b4.value +"%";
		nmouth.style.width = r4.value+"%";
		nmouth.style.position = "absolute";
		nmouth.style.left ="0px";
		nmouth.style.right ="0px";
		nmouth.style.bottom ="10px";
		nmouth.style.margin = "auto";
		nmouth.style.display = "block";
}
bgcolor.addEventListener("change", function(){
    prevDiv.style.backgroundColor = this.value;
});

b1.addEventListener("click", function(){
	changeType("number");
    b1.style.width = b1.value +"%";
});

b2.addEventListener("click", function(){
    r1.type = "range";
    r2.type = "range";
    r3.type = "range";
    r4.type = "range";
    b2.style.width = b2.value +"%";
    
});

r1.addEventListener("change", function(){
    
    hair1.style.width = r1.value+"%";
    
});

r2.addEventListener("change", function(){
    
    eyes1.style.width = r2.value +"%";
});

r3.addEventListener("change", function(){
    nose1.style.width = r3.value + "%";
});

r4.addEventListener("change", function(){
    mouth1.style.width = r4.value + "%";
});


var hhair1 = 1;
hair1.addEventListener("click", function(){
    hair1.src = "img/hair"+hhair1+".png";
        if(hhair1 >=3){
            hhair1 =0;
        }
        hhair1++;               
});

var eeyes = 1;
eyes1.addEventListener("click", function(){
	eyes1.src = "img/eyes"+eeyes+".png";
		if(eeyes >=3){
			eeyes =0;
		}
		eeyes ++;
});

var mnose = 1;
nose1.addEventListener("click", function(){
	nose1.src = "img/nose"+mnose+".png";
		if(mnose >= 3){
			mnose = 0;
		}
		mnose += 1;
});

var mmouth = 1;
mouth1.addEventListener("click", function(){
	mouth1.src = "img/mouth"+mmouth+".png";
		if(mmouth >= 3){
			mmouth = 0;
		}
		mmouth +=1;
});

function randomFace(){
    
	hair1.src = "img/hair"+(Math.round(Math.random()*2)+1)+".png";
	eyes1.src = "img/eyes"+(Math.round(Math.random()*2)+1)+".png";
	nose1.src = "img/nose"+(Math.round(Math.random()*2)+1)+".png";
	mouth1.src = "img/mouth"+(Math.round(Math.random()*2)+1)+".png";
    prevDiv.style.backgroundColor = "rgb("+Math.round(Math.random())+","+ Math.round(Math.random())+","+Math.round(Math.random())+")";
}
b3.addEventListener("click", function(){
    randomFace();
});

b4.addEventListener("click", function(){
	createFace();
});
b5.addEventListener("click", function(){
    mtimer = setInterval(function(){
        randomFace();
        createFace();
    }, 500);
});

b6.addEventListener("click", function(){
    clearInterval(mtimer);
});