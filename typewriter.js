    let i = 0;
    let txt = "In the Giraffes universe the reality is different as humans have not reached the point of being the ultimate instrument.Society is built on Long - Neck culture but the similarities are the core of our surprises. As our Giraffes have reached peak evolution they have started to develop countries, formed alliances and boundaries.Life is as you would expect: Grinding, socializing and binding.Life also is hard, as fromlittle to big the Giraffes have set up a world society and system where all could work and dreadifferent.The Giraffe world is led by 25 Giraffe ministers who collect `taxes` so they will collect 35 % of theICGiraffes resale commissions between them for lifetime.There are many stories we will develop acrostheway ahead so let's get started." /* The text */
    let speed = 20; 

    function scrollStarted() {
        if (window.scrollY >Math.round(window.innerHeight / 100)) {
            typewriter()
        }
    }
     

    function typewriter()
    {
       
          
              if(i  < txt.length){
                document.getElementById("typedtext").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typewriter, speed);
                window.removeEventListener("scroll",scrollStarted)
              }
          
        
    }

    
    window.addEventListener('scroll', scrollStarted)