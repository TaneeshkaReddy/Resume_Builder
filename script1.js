function infochange(){

  let name=document.getElementById("name").value;
  let name1=document.getElementById("name1");
  name1.innerHTML=name;

  let yourself=document.getElementById("yourself").value;
  let yourself1=document.getElementById("yourself1");
  yourself1.innerHTML=yourself;

  let email=document.getElementById("email").value;
  let email1=document.getElementById("email1");
  email1.innerHTML=email;

  let number=document.getElementById("number").value;
  let number1=document.getElementById("number1");
  number1.innerHTML=number;

  let qual=document.getElementById("qual").value;
  let qual1=document.getElementById("qual1");
  qual1.innerHTML=qual;

  let insti=document.getElementById("insti").value;
  let insti1=document.getElementById("insti1");
  insti1.innerHTML=insti;

  let year=document.getElementById("year").value;
  let year1=document.getElementById("year1");
  year1.innerHTML=year;

  let skill=document.getElementById("skill").value;
  let skill1=document.getElementById("skill1");
  skill1.innerHTML=skill;

  let project=document.getElementById("project").value;
  let project1=document.getElementById("project1");
  project1.innerHTML=project;

  let experience=document.getElementById("experience").value;
  let experience1=document.getElementById("experience1");
  experience1.innerHTML=experience;

  let linkedin=document.getElementById("linkedin").value;
  let linkedin1=document.getElementById("linkedin1");
  linkedin1.innerHTML=linkedin;

  let github=document.getElementById("github").value;
  let github1=document.getElementById("github1");
  github1.innerHTML=github;

  
document.getElementById("form").style.display='none';
document.getElementById("template").style.display='block';


  
}


function addNewSkill(){
let newNode=document.createElement("input");
newNode.classList.add("form-control");
newNode.classList.add("addskill");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",10);
newNode.setAttribute("height",90);


let sk1=document.getElementById("skaddbutton");
let skbutton=document.getElementById("skillbutton");

sk1.insertBefore(newNode,skbutton);




  
  
}
