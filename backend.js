var mainarray=[];
var arraycontainer=document.getElementById("arraycontainer");
function createArray() {
  mainarray=[];
  
  while (arraycontainer.lastElementChild) {
    arraycontainer.removeChild(arraycontainer.lastElementChild);
  }
  var arraystring=document.getElementById("arrayinput").value;
  var array=arraystring.split(",");
  array.forEach(makearray);
  alert(mainarray);
}
function makearray(item, index) {
  var tag=document.createElement("button");
  tag.id="i"+index;
  var text = document.createTextNode(item);
  tag.appendChild(text);
  tag.style.cssText = "border-style:solid;height:40px;width:40px;background-color:#F1F1F1;border-color:#F1F1F1;border-width:1.5px;position:absolute;top:20px;left:"+(40*index)+"px;transition: 0.7s all ease;";
  arraycontainer.appendChild(tag);
  mainarray.push(parseInt(item));
  
}
async function selectionsort(){
  let min;
  let n=mainarray.length;
  
  var minind=document.createElement("button");
  minind.id="mins";
  minind.style.cssText = "border-style:solid;height:40px;width:40px;color:red;background-color:#FFFFFF;border-color:#FFFFFF;border-width:1.5px;position:absolute;top:62px;left:40px;transition: 0s all ease;";
  var text = document.createTextNode('\u2191'+'\nmin');
  minind.appendChild(text);
  arraycontainer.appendChild(minind);
  
  let indicator=document.getElementById("mins");
  
  for(let i=0;i<n;i++)
  {
	
	min=i+1;
	indicator.style.left=document.getElementById("i"+min).style.left;
	let a=document.getElementById("i"+i);
	a.style.borderColor="Red";
	a.style.backgroundColor="Red"
	
	for(let j=min;j<n;j++)
	{
		let b=document.getElementById("i"+j);
		b.style.borderColor="#4285F4";
		b.style.backgroundColor="#4285F4"
		await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 1000)
        );
		if(mainarray[j]<mainarray[min])
		{
			min=j;
			indicator.style.left=document.getElementById("i"+min).style.left;
			await new Promise(resolve =>
			setTimeout(() => {
			  resolve();
			}, 1000)
			);
		}
		b.style.borderColor="#F1F1F1";
		b.style.backgroundColor="#F1F1F1";
	}
	if(mainarray[i]>mainarray[min])
	{
		await swap(i,min)
	}
	else
	{
		a.style.borderColor="#1aa260";
		a.style.backgroundColor="#1aa260"
	}
  }
  alert(mainarray);
}
function swap(i,min){
	return new Promise(resolve => {
		let t;
		t=mainarray[i];
		mainarray[i]=mainarray[min];
		mainarray[min]=t;
					
		let x=document.getElementById("i"+i);
		let y=document.getElementById("i"+min);
			
		t=x.style.left;
		x.style.left=y.style.left;
		y.style.left=t;
		
		y.style.borderColor="#1aa260";
		y.style.backgroundColor="#1aa260";
		x.style.borderColor="#F1F1F1";
		x.style.backgroundColor="#F1F1F1";
		
		
		
			
		window.requestAnimationFrame(function() {
        setTimeout(() => {
        resolve();
        }, 3050);
		
		t=x.id;
		x.id=y.id;
		y.id=t;
    });
	});
}

async function insertionsort()
{
	let n=mainarray.length;
	
	
	var iind=document.createElement("button");
	iind.id="is";
	iind.style.cssText = "border-style:solid;height:40px;width:40px;font-size:20px;color:red;background-color:#FFFFFF;border-color:#FFFFFF;border-width:1.5px;position:absolute;top:62px;left:40px;transition: 0s all ease;";
	var itext = document.createTextNode('i');
	iind.appendChild(itext);
	arraycontainer.appendChild(iind);
	
	var jind=document.createElement("button");
	jind.id="js";
	jind.style.cssText = "border-style:solid;height:40px;width:40px;font-size:19px;color:#4285F4;background-color:#FFFFFF;border-color:#FFFFFF;border-width:1.5px;position:absolute;top:62px;left:0px;transition: 0s all ease;";
	var jtext = document.createTextNode('j');
	jind.appendChild(jtext);
	arraycontainer.appendChild(jind);
	
	let iindi=document.getElementById("is");
	let jindi=document.getElementById("js");
	for(let i=1;i<n;i++)
	{
		x=document.getElementById("i"+i);
		x.style.borderColor="Red";
		await new Promise(resolve =>
			setTimeout(() => {
			  resolve();
			}, 1500)
		);
		temp=mainarray[i]
		iindi.style.left=x.style.left;
		for(let j=i-1;j>=0;j--)
		{
			y=document.getElementById("i"+j);
			y.style.borderColor="#4285F4";
			jindi.style.left=y.style.left;
			await new Promise(resolve =>
				setTimeout(() => {
				  resolve();
				}, 1500)
			);
			if(mainarray[j]>temp)
			{
				let jchild=document.createTextNode(mainarray[j]+"");
				mainarray[j+1]=mainarray[j]
				let tempchild=document.createTextNode(temp+"");
				mainarray[j]=temp
				y1=document.getElementById("i"+(j+1));
				y1.style.borderColor="#1aa260";
				y1.style.backgroundColor="#1aa260"
				y.style.backgroundColor="#4285F4";
				await new Promise(resolve =>
				setTimeout(() => {
				  resolve();
				}, 3000)
				);
				y1.replaceChild(jchild,y1.childNodes[0]);
				y.replaceChild(tempchild,y.childNodes[0]);
				await new Promise(resolve =>
				setTimeout(() => {
				  resolve();
				}, 3000)
			);
			y1.style.borderColor="#F1F1F1";	
			y1.style.backgroundColor="#F1F1F1"
			y.style.backgroundColor="#F1F1F1"
			}
			y.style.borderColor="#F1F1F1";
		}
		x.style.borderColor="#F1F1F1";
	}

}
async function bubblesort()
{
	let n=mainarray.length;
	let t=0;
	var iind=document.createElement("button");
	iind.id="is";
	iind.style.cssText = "border-style:solid;height:40px;width:40px;font-size:20px;color:red;background-color:#FFFFFF;border-color:#FFFFFF;border-width:1.5px;position:absolute;top:62px;left:40px;transition: 0s all ease;";
	var itext = document.createTextNode('i');
	iind.appendChild(itext);
	arraycontainer.appendChild(iind);
	
	var jind=document.createElement("button");
	jind.id="js";
	jind.style.cssText = "border-style:solid;height:40px;width:40px;font-size:19px;color:#4285F4;background-color:#FFFFFF;border-color:#FFFFFF;border-width:1.5px;position:absolute;top:62px;left:0px;transition: 0s all ease;";
	var jtext = document.createTextNode('j');
	jind.appendChild(jtext);
	arraycontainer.appendChild(jind);
	
	let iindi=document.getElementById("is");
	let jindi=document.getElementById("js");
	
	for(let i=n-1;i>=0;i--)
	{
		let a=document.getElementById("i"+i);
		a.style.borderColor="Red";
		a.style.backgroundColor="Red"
		iindi.style.left=a.style.left;
		await new Promise(resolve =>
			setTimeout(() => {
			  resolve();
			}, 1500)
		);
		for(let j=0;j<i;j++)
		{
			let b=document.getElementById("i"+j);
			b.style.borderColor="#4285F4";
			b.style.backgroundColor="#4285F4"
			jindi.style.left=b.style.left;
			await new Promise(resolve =>
			setTimeout(() => {
			  resolve();
			}, 1500)
			);
			if(mainarray[j]>mainarray[j+1])
			{
				t=mainarray[j+1];
				mainarray[j+1]=mainarray[j];
				mainarray[j]=t;
				
				let x=document.getElementById("i"+j);
				let y=document.getElementById("i"+(j+1));
					
				t=x.style.left;
				x.style.left=y.style.left;
				y.style.left=t;
				
				await new Promise(resolve =>
					setTimeout(() => {
					  resolve();
					  
					}, 800)
				);
				t=x.id;
				x.id=y.id;
				y.id=t;
				
				
			}
			b.style.borderColor="#F1F1F1";
			b.style.backgroundColor="#F1F1F1";
			
		}
		let x1=document.getElementById("i"+i);
		x1.style.borderColor="#1aa260";
		x1.style.backgroundColor="#1aa260";
	}
}
