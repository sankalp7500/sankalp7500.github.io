var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");
/*c.fillStyle="#ffa342";
c.fillRect(900,100,100,100);
c.fillRect(600,200,100,100);
c.fillRect(400,200,100,100);
//Line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle="#fa34a3";
c.stroke();

//Arc/circle
c.beginPath();
c.arc(300,300,30,0,Math.PI*2,false);
c.strokeStyle="blue";
c.stroke();
 
for(var i=0;i<240;++i)
{
	var a=Math.random()*window.innerHeight;
	var b=Math.random()*window.innerWidth;
	c.beginPath();
	c.arc(b,a,30,0,Math.PI*2,false);
	c.strokeStyle="blue";
	c.stroke();
}*/
var mouse={
	x:undefined,
	y:undefined
};
var maxRadius=40;
var minRadius=7;
var colorArray=['olive','green','pink','blue'];
window.addEventListener('mousemove',
function(event)
{
	mouse.x=event.x;
	mouse.y=event.y;
})
//Object
function Circle(x,y,dx,dy,radius)
{
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.minRadius=radius;
	this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
	this.draw=function()
	{
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		//c.strokeStyle="blue";
		//c.stroke();
		c.fillStyle=this.color;
		c.fill();
	}
	this.update=function()
	{
		if(this.x+30>innerWidth || this.x-30<0)
		this.dx*=-1;
		if(this.y+30>innerHeight || this.y-30<0)
		this.dy*=-1;
		
		
		this.x+=this.dx
		this.y+=this.dy;
		
		if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50)
		{
			if(this.radius<maxRadius)
			this.radius+=1;
		}
		else if(this.radius>=this.minRadius)
			this.radius-=1;
		this.draw();
	}
}
var circleArray=[];
for(var i=0;i<800;++i)
{
	var x=Math.random()*innerWidth;
	var y=Math.random()*innerHeight;
	var dx=(Math.random()-0.5)*4;
	var dy=(Math.random()-0.5)*4;
	var radius=Math.random()*3+1;
	circleArray.push(new Circle(x,y,dx,dy,radius));
}
function animate()
{
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	for(var i=0;i<circleArray.length;++i)
	{
		circleArray[i].update();
	}
}
animate();