function addEmpn(emp){
    var x={"id":4,"name":"xcr","salary":3345};
    emp.push(x);
    var obj=JSON.stringify(emp);
    document.getElementById("dem").innerHTML=obj;
}