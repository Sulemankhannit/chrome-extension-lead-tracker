let myleads=[]
const inputel=document.querySelector("#input-el")
const inputbtn=document.querySelector("#input-btn")
const leadlist=document.querySelector("#leads")
const delbtn=document.querySelector("#del-btn")
const leads=localStorage.getItem("myleads")
const tabbtn=document.getElementById("tab-btn")

if(leads)
{
    myleads=JSON.parse(leads)
    render(myleads)
}
inputbtn.addEventListener("click",
    function()
    {
        myleads.push(inputel.value)
        // let listitem="<li>"+inputel.value+"</li>"
        // leadlist.innerHTML+=listitem
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
        inputel.value=""
         
    }
)

function render(leads)
{  
   let listitems=""
   for(let i=0;i<leads.length;i++)
   {
    listitems+=`<li><a href=${leads[i]} target=_blank>${leads[i]}</a></li>`
   }
   leadlist.innerHTML=listitems
        
} 
delbtn.addEventListener("dblclick",
    function(){
        localStorage.clear()
        myleads=[]
        render(myleads)
    }
)

tabbtn.addEventListener("click",function()
{
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        let activetab=tabs[0];
        let activetabUrl=activetab.url
        myleads.push(activetabUrl)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
    })
})