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