    var x = windowWidth;
    var y = windowHeight;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {

        background(255);
        noStroke();
        
        drawNorwayFlag();
        drawGuyanaFlag();
        
        
}


function drawNorwayFlag(){
    
    var scale = 10;
    
    fill(255,0,0);
    stroke(0);
    
    rect(5,5, 220, 160) //red 
    
    noStroke();
    
    fill (255); // white 
    rect(60 +5, 5, 40, 160); // white vertical
    rect(5, 60 +5, 220, 40); // white horizontal
    
    fill (0,0,255); // blue 
    rect(70 +5, 5, 20, 160); // blue vertical
    rect(5, 70+5, 220, 20); // blue horizontal
    
    textSize(50);
    text( "Norway", 250,50);
    
    
}

function drawGuyanaFlag(){
        fill (85,170,47); //green background
        rect (100,200, 800,400);
    
        textSize(50);
        text("Guyana" , 300 , 180);
        
        fill (255); //white stripe
        triangle(100,200, 900, 400, 100, 600);
        
        fill (255,255,0); //yellow triangle
        triangle(100,220, 840, 400, 100, 580);
        
        fill(0); // black stripe
        triangle(100,200,100,600, 380, 400 );
        
        fill(255,0,0); // red triangle
        triangle(100,220,100,580, 350, 400);

        
        
}