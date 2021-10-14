canvas= new fabric.Canvas("myCanvas");
playerx=10;
playery=10;
blockimgwidth=30;
blockimgheight=30;

playerobject="";
blockobject="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    playerobject=Img;
    playerobject.scaleToWidth(150);
playerobject.scaleToHeight(140);
playerobject.set({
    top:playery,left:playerx
});
canvas.add(playerobject);

});
}


function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockimgwidth);
    blockobject.scaleToHeight(blockimgheight);
    blockobject.set({
        top:playery,left:playerx
    });
    canvas.add(blockobject);
    
    });
    }
    window.addEventListener("keydown",mykeydown);

    function mykeydown(e){
         keypress= e.keyCode;
         if(e.shiftKey == true && keypress == "80"){
         blockimgheight = blockimgheight+10;
         blockimgwidth = blockimgwidth+10;
         document.getElementById("current_width").innerHTML=blockimgwidth;
         document.getElementById("current_height").innerHTML=blockimgheight;
         }


         if(e.shiftKey == true && keypress == "77"){
            blockimgheight = blockimgheight-10;
            blockimgwidth = blockimgwidth-10;
            document.getElementById("current_width").innerHTML=blockimgwidth;
            document.getElementById("current_height").innerHTML=blockimgheight;
            }

            if(keypress == "38"){
                up();
            
            }


            if(keypress == "40"){
                down();
            }


            if(keypress == "37"){
                left();
            
            }

            if(keypress == "39"){
                right();
            
            }

            
            if(keypress == "87"){
                new_image("wall.jpg");
            
            }
            if(keypress == "71"){
                new_image("ground.png");
            
            }

            if(keypress == "76"){
                new_image("light_green.png");
            
            }

            if(keypress == "84"){
                new_image("trunk.jpg");
            
            }if(keypress == "82"){
                new_image("roof.jpg");
            
            }

            if(keypress == "89"){
                new_image("yellow_wall.png");
            
            }


            if(keypress == "68"){
                new_image("dark_green.png");
            
            }

            if(keypress == "85"){
                new_image("unique.png");
            
            }

            if(keypress == "67"){
                new_image("cloud.jpg");
            
            }



    }

   function up(){
 if(playery>=0){
  playery = playery - blockimgheight;
  canvas.remove(playerobject);
  player_update();
 }

   }

   function down(){
    if(playery<500){
     playery = playery + blockimgheight;
     canvas.remove(playerobject);
     player_update();
    }
   
      }


      function left(){
        if(playerx>0){
         playerx = playerx - blockimgwidth;
         canvas.remove(playerobject);
         player_update();
        }
       
          }

          function right(){
            if(playerx<850){
             playerx = playerx + blockimgwidth;
             canvas.remove(playerobject);
             player_update();
            }
           
              }