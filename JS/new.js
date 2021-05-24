  function menutoggle(){
      	const menuu = document.querySelector(".nav2");
          const fix = document.getElementById("fixximage");
	      const manu = document.querySelector(".menuicon2");
         const spot = document.querySelector(".menuiconn2");

   	if (menuu.style.visibility === "visible")
   		{
   		menuu.style.visibility = "hidden";
      manu.src = "images/menu.png"; 
     
   		}
   		else 
   		{
   			menuu.style.visibility = "visible";
      manu.src = "images/x.png"; 
        
   		}

    }


  function menutogglee(){
        const menuu = document.querySelector(".nav2");
          const fix = document.getElementById("fixximage");
        const manu = document.querySelector(".menuicon2");
         const spot = document.querySelector(".menuiconn2");

    if (menuu.style.visibility === "visible")
      {
      menuu.style.visibility = "hidden";
      manu.src = "images/menublack.png"; 
     
      }
      else 
      {
        menuu.style.visibility = "visible";
      manu.src = "images/xblack.png"; 
        
      }

    }