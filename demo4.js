var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth-10;
canvas.height=window.innerHeight-10;
var c=canvas.getContext("2d");
var m=innerHeight;
var img=new Image();
img.src='welcome.jpg';
img.onload=function()
{
	c.drawImage(img,0,0);
}
function Circle()
{
	this.radius=[410,380,350,320,290,260,230,200,170,140,110,80,50];
	this.color=["#ff9400","#ed9e0b","#b4ed09","#08e1ed","#3b01f9","#f9025d","#f9025d","#dff709"];
	this.dr=-1;
	this.incr=0;
	//this.radius=[10,20,30,40,50];
	this.txt=function()
	{
	c.font="48px serif";
	c.textAlign="center";
	c.textBaseline="hanging";
	var i=this.incr;
	var i1=-this.incr;
	c.strokeText("W",60+i,50+i);
	c.strokeText("E",60+i,120+i);
	c.strokeText("L",60+i,190+i);
	c.strokeText("C",60+i,260+i);
	c.strokeText("O",60+i,330+i);
	c.strokeText("M",60+i,400+i);
	c.strokeText("E",60+i,470+i);
	
	c.strokeText("T",200+i,200+i1);
	c.strokeText("O",200+i,270+i1);
	
	c.strokeText("R",340+i,120+i);
	c.strokeText("I",340+i,190+i);
	c.strokeText("N",340+i,260+i);
	c.strokeText("G",340+i,330+i);
	
	c.strokeText("A",480+i,30+i1);
	c.strokeText("N",480+i,100+i1);
	c.strokeText("I",480+i,170+i1);
	c.strokeText("M",480+i,240+i1);
	c.strokeText("A",480+i,310+i1);
	c.strokeText("T",480+i,380+i1);
	c.strokeText("I",480+i,450+i1);
	c.strokeText("O",480+i,520+i1);
	c.strokeText("N",480+i,590+i1);
	
	}
	this.txt1=function()
	{
		c.font="48px serif";
		c.textAlign="center";
		c.textBaseline="hanging";
		c.strokeText("B",1200,100);
		c.strokeText("A",1200,200);
		c.strokeText("S",1200,300);
		c.strokeText("I",1200,400);
		c.strokeText("C",1200,500);
		
	}
	this.draw=function()
	{
		var c1=0;
		var d1=this.incr-this.incr/this.radius.length;
		while(c1!=9)
		{
			
		for(var i=0;i<this.radius.length;++i)
		{
			this.txt();
			this.txt1();
			if(i!=this.radius.length)
			{
			c.beginPath();
			c.arc(innerWidth/2,innerHeight/2,this.radius[i]+d1,0,Math.PI*2,false);
			c.arc(innerWidth/2,innerHeight/2,this.radius[i]+d1,0,Math.PI*2,false);
			c.arc(innerWidth/2,innerHeight/2,this.radius[i]+d1,0,Math.PI*2,false);
			c.strokeStyle="white";
			c.stroke();
			d1=d1-this.incr/this.radius.length;
			}
			else
			{
			c.beginPath();
			c.arc(innerWidth/2,innerHeight/2,this.radius[i],0,Math.PI*2,false);
			c.strokeStyle="#022177";
			c.stroke();
			d1=d1-this.incr/this.radius.length;
				
			}
		}
		c1++;
		}
	}
	this.update=function()
	{
		if(this.incr==0 || this.incr>120)
			this.dr*=-1;
		this.incr+=this.dr
		this.draw();
	}
}
var circle=new Circle();
function animate()
{
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	circle.update();
}
animate();