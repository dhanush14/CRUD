function sortBySalary(emp){
    emp.sort(function(a,b){return a.salaty-b.salary});
    var obj=JSON.stringify(emp);
    document.getElementById("demo3").innerHTML=obj;
}