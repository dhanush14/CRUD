function sortByid(emp){
    //var obj=JSON.parse(emp);
    emp.sort(function(a,b){return a.id-b.id});
    var obj=JSON.stringify(emp);
    document.getElementById("demo2").innerHTML=obj;
}