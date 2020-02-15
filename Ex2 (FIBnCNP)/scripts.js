const fib = document.querySelector("#n");
const buttonFibbonaci = document.querySelector("#buttonFib");


buttonFibbonaci.addEventListener("click", () =>{
    let list=``;
    let y=parseInt(fib.value);
    let min1=0;
    let min2=1;
    let sum=0;
    let n=0;

    if(isNaN(y))
        list=`<b>Not a number</b>`;
    else
        if(y<=0)
        list=`<b>Not a valid number</b>`;
        else{
            list=`<ol>`;
            if(y>=1)
                list+=`<li>0</li>`;
            if(y>=2)
                list+=`<li>1</li>`;
            for(n=3;n<=y;n++){
                sum=min1+min2;
                min1=min2;
                min2=sum;
                list+=`<li>${sum}</li>`;
            }
            list+=`</ol>`;
        }
        const resp= document.querySelector("#resp1");
        resp.innerHTML=list;
});



const Day =document.querySelector("#day");
const Month = document.querySelector("#month");
const Year = document.querySelector("#year");
const CNP = document.querySelector("#CNP");
const buttonVerify = document.querySelector("#buttonCNP");
const resp2 = document.querySelector("#resp2");


buttonVerify.addEventListener("click",() => {
    if(CNP.value === "")
        resp2.innerHTML=`<b>CNP is NOT valid</b>`;
    else
    {
        if(CNP.value.substring(1,3)==Year.value.substring(2,4) && CNP.value.substring(3,5) == Month.value && CNP.value.substring(5,7) == Day.value)
        {
            resp2.innerHTML=`<b>CNP is valid!</b>`;
            
        }
            else
        {
            resp2.innerHTML=`<b>CNP is NOT valid</b>`;
            
        }
}});

