var name="global";
function outer(){
    var out= 10;
    var name="oueter";
    function iner()
    {
        var name="inner";
        console.log(name);
       }
       iner();
       console.log(name);
}
outer();
console.log(name);