 let today = new Date();

 let dayName = today.toLocaleDateString("en-US", { weekday: "long" });

 
 let formattedDate = today.toLocaleDateString("en-US", {
     year: "numeric",
     month: "long",
     day: "numeric"
 });

 document.getElementById("current-day").textContent = dayName;   
 document.getElementById("current-date").textContent = formattedDate; 
