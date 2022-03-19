
    var numberForFirstImage = Math.floor(Math.random()*6)+1;
    var numberForSecondImage = Math.floor(Math.random()*6)+1;
    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");
    image1.setAttribute("src" , "images/dice"+numberForFirstImage+".png"); 
    image2.setAttribute("src" , "images/dice"+numberForSecondImage+".png");
    var heading = document.querySelector("h1");

    if (numberForFirstImage===numberForSecondImage){
        heading.textContent = "Match draw"
    }
    if (numberForFirstImage>numberForSecondImage){
        
        heading.textContent = "Player 1 wins";
    } 
    else if(numberForSecondImage>numberForFirstImage){
        heading.textContent = "player 2 wins";
    }

    
