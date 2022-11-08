function infochange(){
var dname=document.getElementById("name");
var dyourself=document.getElementById("yourself");
var demail=document.getElementById("email");
var dnumber=document.getElementById("number");
var dqual=document.getElementById("qual");
var dinsti=document.getElementById("insti");
var dyear=document.getElementById("year");
var dskill=document.getElementById("skill");
var dproject=document.getElementById("project");
var dexperience=document.getElementById("experience");
var dlinkedin=document.getElementById("linkedin");
var dgithub=document.getElementById("github");
  
// var check
if(dname.value.length == 0)
  {
    alert("Please Enter name");
    return false;
    // check
    }
  else{
   var name1=document.getElementById("name1");
  name1.innerHTML=dname.value;
  }
  


  if(dyourself.value.length == 0)
  {
    alert("Please Enter Objective");
    return false;
    // check
    }
    else{
  var yourself1=document.getElementById("yourself1");
  yourself1.innerHTML=dyourself.value;
    }

    if(demail.value.length == 0)
    {
      alert("Please Enter Email*");
      return false;
      // check
      }
      else{
  var email1=document.getElementById("email1");
  email1.innerHTML=demail.value;
      }


      if(dnumber.value.length == 0)
      {
        alert("Please Enter your Phone number*");
        return false;
        // check
        }
        else{
  var number1=document.getElementById("number1");
  number1.innerHTML=dnumber.value;
        }


        if(dqual.value.length == 0)
        {
          alert("Please Enter your qualifications*");
          return false;
          // check
          }
          else{
  var qual1=document.getElementById("qual1");
  qual1.innerHTML=dqual.value;
          }

          if(dinsti.value.length == 0)
          {
            alert("Please Enter the name of your institution");
            return false;
            // check
            }
            else{
  var insti1=document.getElementById("insti1");
  insti1.innerHTML=dinsti.value;
            }


            if(dyear.value.length == 0)
            {
              alert("Please Enter Year Of Graduation");
              return false;
              // check
              }
              else{
  var year1=document.getElementById("year1");
  year1.innerHTML=dyear.value;
              }

              var skill1=document.getElementById("skill1");
              skill1.innerHTML=dskill.value;
              var project1=document.getElementById("project1");
               project1.innerHTML=dproject.value;
               var experience1=document.getElementById("experience1");
                experience1.innerHTML=dexperience.value;
                var linkedin1=document.getElementById("linkedin1");
               linkedin1.innerHTML=dlinkedin.value;
               var github1=document.getElementById("github1");
              github1.innerHTML=dgithub.value;

  
// if(check>)
document.getElementById("form").style.display='none';
document.getElementById("template").style.display='block';

  
  
}


function addNewSkill(){
let newNode=document.createElement("input");
newNode.classList.add("form-control");
newNode.classList.add("addskill");
newNode.classList.add("mb-3");
newNode.setAttribute("rows",10);
newNode.setAttribute("placeholder","Enter Here");


let sk1=document.getElementById("skaddbutton");
let skbutton=document.getElementById("skillbutton");

sk1.insertBefore(newNode,skbutton);
}

function add(type) {

    var element = document.createElement("input");
    
    element.type = type;
    element.value = type;
    element.name = type; 

  
    var input = document.getElementById("skills");
     
    input.appendChild(element);
  }
  document.getElementById("btnAdd").onclick = function() {
    add("");
  };
