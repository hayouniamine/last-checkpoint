const val=document.getElementById("test");
const val1=document.getElementById("test1");



val.addEventListener('click',function(){
    const paragraphElement = document.getElementById("numbers");
    var value=document.getElementById("numbers").textContent;
    value=parseInt(value);
    value++;
    value=value.toString();
    paragraphElement.textContent=value;
});

val1.addEventListener('click',function(){
    const paragraphElement = document.getElementById("numbers");
    var value1=document.getElementById("numbers").textContent;
    value1=parseInt(value1);
    value1--;
    value1=value1.toString();
    paragraphElement.textContent=value1;
    });