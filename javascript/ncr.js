var factorial= function fact(n)
{
    var a=1;
    for(var i=1;i<=n;i++)
    a=a*i;
return a;
}
function ncr(n,r){
    var b=factorial(n)/factorial(r)*factorial(n-r);
    console.log(b);
}
ncr(6,4)
