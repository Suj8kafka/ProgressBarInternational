const btnStart= document.querySelector('.btn-start'); 
const timeSpan= document.querySelector('.time'); 
const PresentYear= document.querySelectorAll('.PresentYear')
const progressBar= document.querySelector('.progress-inner'); 
const DayPerentage= document.querySelector('.percentageofDay'); 
const ProgressofDay= document.querySelector('.progressInn');
const Mosoftheyear= document.querySelector('.month1');
const CurrDay= document.querySelector('.day1'); 


//btnStart.addEventListener("click", ()=> { 
    
    //let interval =0 ; 
    // var countDown = setInterval(() => {
        //  interval++; 
        // let progressWidth =(interval/10)* 100; 
        //if (interval<=100){ 
            // }
            // else{ 
                //     clearInterval(countDown)
                //     progressBar.style.width="0%"; 
                //     timeSpan.innerHTML= "Game OVer!"
                // }
                                //   }, 1000);


                                // Get the element with the class "Present Year"
                

                // Update the text content to the current International  year
                 
                const year = new Date().getFullYear();
                document.querySelectorAll('.PresentYear').forEach(el => {
                el.textContent = year;
                });

                
                setInterval(() => {
                const current_Date = new Date();
                
                // Get the start of the day
                const startOf_Day = new Date(current_Date.getFullYear(), current_Date.getMonth(), current_Date.getDate());
                
                // Get the end of the day
                const endOf_Day = new Date(current_Date.getFullYear(), current_Date.getMonth(), current_Date.getDate() + 1);
                
                // Calculate the total number of milliseconds in the day
                const total_Time = endOf_Day.getTime() - startOf_Day.getTime();
                
                // Calculate the number of milliseconds elapsed from the start of the day to the current time
                const elapsed_Time = current_Date.getTime() - startOf_Day.getTime();
                    
                // Calculate the percentage of the day that has passed
                const percentage_1 = (elapsed_Time / total_Time) * 100;
                    
                    // Round the percentage to two decimal places
                    const rounded_Percentage = percentage_1.toFixed(5);
                    
                    // Output the result
                    //console.log(`Current day progress: ${roundedPercentage}%`);
                    ProgressofDay.style.width=rounded_Percentage + "%"
                    DayPerentage.innerHTML= rounded_Percentage+ "%"; 
                    CheckColours(rounded_Percentage); 
                    
                    

//                     // Get the current date
// const currentDate = new Date();

// // Get the first day of the current year
// const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);

// // Calculate the total number of days that have passed this year
// const daysPassed = Math.floor((currentDate - firstDayOfYear) / (1000 * 60 * 60 * 24));

// // Calculate the total number of days in the current year
// const isLeapYear = (currentDate.getFullYear() % 4 === 0 && (currentDate.getFullYear() % 100 !== 0 || currentDate.getFullYear() % 400 === 0));
// const totalDaysInYear = isLeapYear ? 366 : 365;

// // Calculate the percentage of the year that has passed
// const percentageCompleted = ((daysPassed / totalDaysInYear) * 100).toFixed(2);

// console.log(`Total days passed: ${daysPassed}`);
// console.log(`Percentage of the year completed: ${percentageCompleted}%`);

                    
                    
                    const currentDate = new Date();
                    
                    // Get the year of the current date
                    const currentYear = currentDate.getFullYear();
                    
                    // Create a new Date object for the start of the year
                    const startOfYear = new Date(currentYear, 0, 1);
                    
                    // Create a new Date object for the start of the next year
                    const nextYear = new Date(currentYear + 1, 0, 1);
                    
                    // Calculate the total number of milliseconds in the year
                    const totalTime = nextYear.getTime() - startOfYear.getTime();
                    
                    // Calculate the number of milliseconds elapsed from the start of the year to the current date
                    const elapsedTime = currentDate.getTime() - startOfYear.getTime();
                    
                    // Calculate the percentage of the year that has passed
                    const percentage = (elapsedTime / totalTime) * 100;
                const roundedPercentage = percentage.toFixed(8);
                    // //console.log(roundedPercentage);
                    // var DiffPercentage= 28.35559655409437; 
                    //  var RealTimePercentage= roundedPercentage- DiffPercentage;
                    //  RealTimePercentage= roundedPercentage.toFixed(6) 
                    //  console.log(RealTimePercentage); 
                     
                     
                     
                     progressBar.style.width= roundedPercentage +"%"; 
                     timeSpan.innerHTML= roundedPercentage+ '%'; 
                     checkColors(roundedPercentage); 
                     
                     //let ActualProgressYears= (ruunningSecs/totalSecsYears) *1;
                     //console.log(ActualProgressYears);  
                     
                   
                  const icon= document.getElementById("icons"); 
                
                  function enableDarkmode() { 
                    document.body.classList.add("dark-theme"); 
                    icon.src= "sun.png"; 
                    localStorage.setItem("darkmode", "enabled"); //Save preference 

                  }
                  //Function to disable dark mode 
                     function disableDarkmode (){ 
                    document.body.classList.remove("dark-theme");
                        icon.src= "moon.png"; 
                        localStorage.setItem("darkmode", "disabled"); 
                    
                  }
                  //Check LocalStorage for darkmode preference on page load 
                  if(localStorage.getItem("darkmode")==="enabled"){ 
                    enableDarkmode(); 
                  }

                  //Toggle Dark Mode 

                  icon.onclick=function(){ 
                    if (document.body.classList.contains("dark-theme")){
                        disableDarkmode(); 
                    }else {
                        enableDarkmode(); 
                    }
                  }; 
                     //Website total Visitor Counter 
                     //Nepali Date 
                                 const days= [ 31, 30, 30, 30, 29, 29, 30, 30]; 
                                const mos= [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
                                //  Synchronised day counter 
                                var startdate= new Date ("2023-08-18"); 
                                var currentdate= new Date(); 
                                const currentday= currentDate.getDate(); 
                                const currentMonth = currentDate.getMonth(); 
                              
                                Mosoftheyear.innerHTML= mos[currentMonth]; 
                                CurrDay.innerHTML= currentday; 
                                // console.log(Month, dayCount)
                     
                     
                    }, 500);          

                    // Retrieve the visitor count from local storage or initialize it to 0
                    let count = localStorage.getItem('visitorCount') || 0;

                        // Update the counter element on the page
                        const counterElement = document.getElementById('counter');
                        counterElement.textContent = count;

                        // Increment the visitor count and update the counter
                        count++;
                        localStorage.setItem('visitorCount', count);
                    
                    
                   
                        //Functions to change colors on time pass by
                    const checkColors = (width)=> { 
                        if (width> 50 && width<80){ 
                            progressBar.style.background= "yellow"; 
                            
                        }else if (width>80 )
                        {
                            progressBar.style.background= "red"; 
                        }
                        
                    }

            const CheckColours = (width1)=> { 
                if (width1> 50 && width1<80){ 
                    ProgressofDay.style.background= "yellow"; 
            
                }else if (width1>80 )
                {
                    ProgressofDay.style.background= "red"; 
                    
                }
        } 

        //Nav bar 
        window.addEventListener("scroll", function(){ 
            var header= document.querySelector("header"); 
            header.classList.toggle("sticky", window.scrollY>0);  
        })
        function RealTimeClock(){
            var rtClock= new Date();  
            var hours= rtClock.getHours(); 
            var minutes = rtClock.getMinutes(); 
            var seconds= rtClock.getSeconds(); 
        
        // Add AM and PM 
        var amPm= (hours< 12) ? "AM" : "PM"; 
        // Convert the hours component to 12-hour format
        hours= (hours>12 )? hours -12 : hours; 
        // Pad the hours, minutes and seconds with leading zeros
        hours= ("0"+ hours).slice(-2); 
        minutes= ("0" + minutes).slice (-2); 
        seconds = ("0"+ seconds).slice(-2); 
        //Display Clock
        document.getElementById('clock').innerHTML= hours +":"+ minutes+":"+ seconds+" "+ amPm; 
        var t= setTimeout(RealTimeClock, 1)
        }
        
        
