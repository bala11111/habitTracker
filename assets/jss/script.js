 var backid = document.getElementById("none");

 //function to change the status
 function change(m)
 {
    console.log(m);
    let statusString = m.children[0].value;
    if(statusString == "empty")
    {
       m.children[0].value = "done";
       m.className = "fa fa-check";
       m.style.backgroundColor = "green";
    }
    else if(statusString == "done")
    {
      m.children[0].value = "notDone";
      m.className = "fa fa-times";
      m.style.backgroundColor = "red";
    }
    else if(statusString == "notDone")
    {
      m.children[0].value = "empty";
      m.className = "fa fa-exclamation";
      m.style.backgroundColor = "orange";
    }
 }

