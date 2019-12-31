 import {student} from './Student.js'          //importing all js file here

 import {validateForm} from './VlidateForm.js'
 
let arr= new Array();

let handle=document.getElementById("handlebtn");
handle.addEventListener("click",()=>{         //event listner and arow function
    let promise = new Promise((resolve, reject) => { //use of promise
     
    if(validateForm())
    {
     let name=document.forms["myForm"]["stu"].value; //using ES6 formate
     let mmark=parseInt(document.getElementById("mark1").value);
     let smark=parseInt(document.getElementById('mark2').value);
     let total=mmark+smark;
    var obj=new student(name,mmark,smark,total);

     arr.push(obj);             

     document.forms["myForm"]["stu"].value = "";
     document.getElementById("mark1").value="";
     document.getElementById('mark2').value="";
         console.clear();
         console.table([...arr]); //this is spread perameter
     
       
            let{name:fname,mmark:mathmark,smark:scimark,total:sum}=obj; //object destructuring
            console.log("destructuring of student object name",fname);
            console.log("destructuring of student object mathmark",mathmark);
            
        event.preventDefault();
         resolve('DATA STORED');

     
    }
    else
    {
     reject('SOMETHING GETS WRONG');
    }
  
    })
 
promise.then(function(fromresolve){
    console.log(fromresolve);
}).catch(function(fromreject){
    console.log(fromreject);
})
});



let show=document.getElementById("showbtn");
show.addEventListener("click",()=>{
    if(validateForm())
    {
    
    let name=document.getElementById("stu").value;
    let mmark=parseInt(document.getElementById("mark1").value);
    let smark=parseInt(document.getElementById('mark2').value);
    let total=mmark+smark;

    arr.push(new student(name,mmark,smark,total));
    
    document.getElementById("stu").value="";
    document.getElementById("mark1").value="";
    document.getElementById('mark2').value="";
    }
    event.preventDefault();
});

