
export let validateForm=function () {   //function declaration of ES6 type
    event.preventDefault();
    let x = document.forms["myForm"]["stu"].value.trim();
    let y = document.forms["myForm"]["mark1"].value.trim();
    let z = document.forms["myForm"]["mark2"].value.trim();
    let demo = document.getElementById("demo");
    demo.innerHTML = "";
    document.getElementById("demo").style.color="red";      //using style.color
    demo.innerHTML += (x === "" || !isNaN(x)) ? "Name must be filled out or it should not number <br>" : "";
    demo.innerHTML += (y == "") ? "maths mark must be filled out or it should be number <br>" : "";
    demo.innerHTML += (y > 50 || y < 0) ? "maths mark should be >0 and <50 <br>" : "";
    demo.innerHTML += (z == "") ? "science mark must be filled out or it should be number <br>" : "";
    demo.innerHTML += (z > 50 || z < 0) ? "science mark should be >0 and <50 <br>" : "";
    return (demo.innerHTML == "") ? true : false;
   
}