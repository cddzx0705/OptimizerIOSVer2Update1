function showToast(text){

let toast=document.createElement("div");

toast.className="toast";
toast.innerText=text;

document.body.appendChild(toast);

setTimeout(()=>{
toast.remove();
},2000);

}


setInterval(async()=>{

 let res=await fetch(SERVER_URL+"/checkKey",{
   method:"POST",
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({
     key:key,
     deviceId:getDeviceID()
   })
 });

 let data=await res.json();

 if(!data.success){

   localStorage.removeItem("SYSTEMIOS_KEY");

   showToast("⛔ Key expired");

   setTimeout(()=>{
     location.reload();
   },1500);
 }

},60000);function showToast(msg){

 const t=document.createElement("div");

 t.innerText=msg;
 t.style.cssText=`
 position:fixed;
 bottom:40px;
 left:50%;
 transform:translateX(-50%);
 background:rgba(30,30,30,.9);
 padding:12px 20px;
 border-radius:20px;
 color:white;
 z-index:99999;
 backdrop-filter:blur(10px);
 `;

 document.body.appendChild(t);

 setTimeout(()=>t.remove(),2000);
}
/* ===== FAKE OPTIMIZER CODE ===== */
function runCode(title){

const box = document.getElementById("codeBox");
const text = document.getElementById("codeText");

box.style.display="block";

let lines = [
"[SYSTEM] Detect device...",
"[SYSTEM] Applying device profile...",
"[SYSTEM] CPU Optimization...",
"[SYSTEM] GPU Optimization...",
"[SYSTEM] RAM Clean...",
"[SYSTEM] Sensitivity Patch...",
"[SYSTEM] Regedit Applied...",
"[SYSTEM] FPS Boost Enabled...",
"[SUCCESS] Device optimized successfully"
];

let i=0;

text.innerHTML="";

let interval = setInterval(()=>{

text.innerHTML += lines[i]+"\n";

text.scrollTop = text.scrollHeight;

i++;

if(i>=lines.length){

clearInterval(interval);

setTimeout(()=>{
box.style.display="none";
},2000);

}

},400);

}
function runCode(type){

const box = document.getElementById("codeBox");
const text = document.getElementById("codeText");

box.style.display="block";
text.innerHTML="";

let lines = [];

if(type.includes("BOOST")){
lines = [
"> Initializing FPS Engine...",
"> Unlocking GPU threads...",
"> Clearing background apps...",
"> Boosting render pipeline...",
"> FPS Stable ✅"
];
}

if(type.includes("Free Fire")){
lines = [
"> Initializing FPS Engine...",
"> Unlocking GPU threads...",
"> Clearing background apps...",
"> Boosting render pipeline...",
"> Scanning CPU usage...",
"> Cleaning RAM cache...",
"> Optimizing GPU load...",
"> Applying performance profile...",
"> ON SYSTEM IOS VER2 ✅"
];
}

if(type.includes("OPTIMIZER")){
lines = [
"> Scanning CPU usage...",
"> Cleaning RAM cache...",
"> Optimizing GPU load...",
"> Applying performance profile...",
"> System Optimized ✅"
];
}

let i=0;

function typeLine(){
if(i>=lines.length){
setTimeout(()=>box.style.display="none",500);
return;
}

text.innerHTML += lines[i]+"\n";
text.scrollTop = text.scrollHeight;
i++;

setTimeout(typeLine,400);
}

typeLine();
}

