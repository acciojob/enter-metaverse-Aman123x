//your JS code here. If required.
const btn=document.getElementById("enterBtn");
const pa=document.getElementById("status");

btn.addEventListner("click",()=>{
	let h1=document.createElement("h1");
	h1.id="status";
	h1.innerText="Entered Metaverse";
	document.body.insertBefore(h1,pa);
	pa.remove();
})
