let cnt = 0;
document.getElementById("fix-buttion").addEventListener("click",function(event){
    event.preventDefault();
    cnt++;
    if(cnt === 6)
    {
        alert("Completed all task succesfully!!");
    }
    var button = document.getElementById("fix-buttion");
    button.style.backgroundColor = "lightblue";
    button.disabled = true;

    alert("Board updated succesfully!");
    // document.getElementById("fix-btn").style.display = "block";
    let task = document.getElementById("task-num");
   let number = parseInt(task.innerText);
    task.innerText = number-1;

    let done = document.getElementById("done-task");
    let num = parseInt(done.innerText);
    done.innerText = num+1;
    // number--;

//    current time 
    const now = new Date();
    const options = {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const currentTime = new Intl.DateTimeFormat("en-BD", options).format(now);
    const title1 = document.getElementById("1cardTitle");
    const title1Text = title1.innerText;
    const historyList = document.createElement("p");
    historyList.innerText = `You have Completed the task "${title1Text}" at ${currentTime}`;
    historyList.classList.add("bg-[#f4f7ff]","rounded-lg","p-4", "mt-4", "w-11/12");
    activityLog.appendChild(historyList);
    
})

document.getElementById("mode-button").addEventListener("click",function(event){
   event.preventDefault();
   cnt++;
    if(cnt === 6)
    {
        alert("Completed all task succesfully!!");
    }
    var button = document.getElementById("mode-button");
    button.style.backgroundColor = "lightblue";
    button.disabled = true;

    alert("Board updated succesfully!");
    // document.getElementById("mode-btn").style.display = "block";

    let task = document.getElementById("task-num");
    let number = parseInt(task.innerText);
     task.innerText = number-1;

     let done = document.getElementById("done-task");
    let num = parseInt(done.innerText);
    done.innerText = num+1;
    //    current time 
    const now = new Date();
    const options = {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const currentTime = new Intl.DateTimeFormat("en-BD", options).format(now);
    const title2 = document.getElementById("2cardTitle");
    const title2Text = title2.innerText;
    const historyList = document.createElement("p");
    historyList.innerText = `You have Completed the task "${title2Text}" at ${currentTime}`;
    historyList.classList.add("bg-[#f4f7ff]","rounded-lg","p-4", "mt-4", "w-11/12");
    activityLog.appendChild(historyList);
    
})
document.getElementById("optimize-btn").addEventListener("click",function(event){
   event.preventDefault();
   cnt++;
    if(cnt === 6)
    {
        alert("Completed all task succesfully!!");
    }
    var button = document.getElementById("optimize-btn");
    button.style.backgroundColor = "lightblue";
    button.disabled = true;

    alert("Board updated succesfully!");
    let task = document.getElementById("task-num");
    let number = parseInt(task.innerText);
     task.innerText = number-1;

     let done = document.getElementById("done-task");
    let num = parseInt(done.innerText);
    done.innerText = num+1;
     //    current time 
     const now = new Date();
     const options = {
       timeZone: "Asia/Dhaka",
       hour: "numeric",
       minute: "numeric",
       second: "numeric",
       hour12: true,
     };
     const currentTime = new Intl.DateTimeFormat("en-BD", options).format(now);
     const title3 = document.getElementById("3cardTitle");
     const title3Text = title3.innerText;
     const historyList = document.createElement("p");
     historyList.innerText = `You have Completed the task "${title3Text}" at ${currentTime}`;
     historyList.classList.add("bg-[#f4f7ff]","rounded-lg","p-4", "mt-4", "w-11/12");
     activityLog.appendChild(historyList);
    
})
document.getElementById("emoji-btn").addEventListener("click",function(event){
   event.preventDefault();
   cnt++;
    if(cnt === 6)
    {
        alert("Completed all task succesfully!!");
    }
    var button = document.getElementById("emoji-btn");
    button.style.backgroundColor = "lightblue";
    button.disabled = true;

    alert("Board updated succesfully!");
    let task = document.getElementById("task-num");
    let number = parseInt(task.innerText);
     task.innerText = number-1;

     let done = document.getElementById("done-task");
     let num = parseInt(done.innerText);
     done.innerText = num+1;
    // document.getElementById("emoji").style.display = "block";
    //    current time 
    const now = new Date();
    const options = {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const currentTime = new Intl.DateTimeFormat("en-BD", options).format(now);
    const title4 = document.getElementById("4cardTitle");
    const title4Text = title4.innerText;
    const historyList = document.createElement("p");
    historyList.innerText = `You have Completed the task "${title4Text}" at ${currentTime}`;
    historyList.classList.add("bg-[#f4f7ff]","rounded-lg","p-4", "mt-4", "w-11/12");
    activityLog.appendChild(historyList);
    
})
document.getElementById("ai-btn").addEventListener("click",function(event){
   event.preventDefault();
   cnt++;
    if(cnt === 6)
    {
        alert("Completed all task succesfully!!");
    }
    var button = document.getElementById("ai-btn");
    button.style.backgroundColor = "lightblue";
    button.disabled = true;

    alert("Board updated succesfully!");
    let task = document.getElementById("task-num");
    let number = parseInt(task.innerText);
     task.innerText = number-1;

     let done = document.getElementById("done-task");
     let num = parseInt(done.innerText);
     done.innerText = num+1;
    // document.getElementById("ai").style.display = "block";
     //    current time 
     const now = new Date();
     const options = {
       timeZone: "Asia/Dhaka",
       hour: "numeric",
       minute: "numeric",
       second: "numeric",
       hour12: true,
     };
     const currentTime = new Intl.DateTimeFormat("en-BD", options).format(now);
     const title5 = document.getElementById("5cardTitle");
     const title5Text = title5.innerText;
     const historyList = document.createElement("p");
     historyList.innerText = `You have Completed the task "${title5Text}" at ${currentTime}`;
     historyList.classList.add("bg-[#f4f7ff]","rounded-lg","p-4", "mt-4","w-11/12");
     activityLog.appendChild(historyList);
     
})
document.getElementById("job-btn").addEventListener("click",function(event){
   event.preventDefault();
   cnt++;
    if(cnt === 6)
    {
        alert("Completed all task succesfully!!");
    }
    var button = document.getElementById("job-btn");
    button.style.backgroundColor = "lightblue";
    button.disabled = true;

    alert("Board updated succesfully!");
    let task = document.getElementById("task-num");
    let number = parseInt(task.innerText);
     task.innerText = number-1;

     let done = document.getElementById("done-task");
     let num = parseInt(done.innerText);
     done.innerText = num+1;
   //    current time 
   const now = new Date();
   const options = {
     timeZone: "Asia/Dhaka",
     hour: "numeric",
     minute: "numeric",
     second: "numeric",
     hour12: true,
   };
   const currentTime = new Intl.DateTimeFormat("en-BD", options).format(now);
   const title6 = document.getElementById("6cardTitle");
   const title6Text = title6.innerText;
   const historyList = document.createElement("p");
   historyList.innerText = `You have Completed the task "${title6Text}" at ${currentTime}`;
   historyList.classList.add("bg-[#f4f7ff]","rounded-lg","p-4", "mt-4", "w-11/12");
   activityLog.appendChild(historyList);
    
})



document.getElementById("clear-btn").addEventListener("click", function(){
    const activitySection = document.getElementById("activityLog");
    const entry = activitySection.querySelectorAll("p");
    for(const pera of entry){
        pera.remove();
    }
})