function getEmpById(emp,Id){
     emp.forEach((element,index)=> {
         if(element.id==Id){
             var obj=JSON.stringify(emp[index]);
             document.getElementById("demo4").innerHTML=obj;
             
         }
     });
}