var canvas=new fabric.Canvas("me");
var player_x=10;
var player_y=10;
var body_width=30;
var body_height=30;
var player_object=""; 
var body_object="";
function player_update(){
    fabric.Image.fromURL("player.jpg",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({

top:player_y,left:player_x        
        });
     canvas.add(player_object) ;  
    });
}
function body_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        body_object=Img;
        body_object.scaleToWidth(body_width);
        body_object.scaleToHeight(body_height);
        body_object.set({

top:player_y,left:player_x        
        });
     canvas.add(body_object) ;  
    });
}
window.addEventListener("keydown",key);
function key(e){
    var hg=e.keyCode;
    if (e.shiftKey==true&& hg=='80'){
        body_width=body_width+10;
        body_height=body_height+10;
        document.getElementById("current_width").innerHTML=body_width;
        document.getElementById("current_height").innerHTML=body_height;
    }
    if (e.shiftKey==true&& hg=='77'){
        body_width=body_width-10;
        body_height=body_height-10;
        document.getElementById("current_width").innerHTML=body_width;
        document.getElementById("current_height").innerHTML=body_height;
        
    
    }
    if (hg=='84'){
        body_update('ironman_body.png');
    }
    if (hg=='67'){
        body_update('captain_america_left_hand.png');
    }
    if (hg=='68'){
        body_update('hulk_face.png');
    }
    if (hg=='71'){
        body_update('hulk_left_hand.png');
    }
    if (hg=='76'){
        body_update('hulk_legs.png');
    }
    if (hg=='82'){
        body_update('hulk_right_hand.png');
    }
    if (hg=='85'){
        body_update('hulkd_body.png');
    }
    if (hg=='87'){
        body_update('ironman_face.png');
    }
    if (hg=='89'){
        body_update('ironman_left_hand.png');
    
    }
    if (hg=='65'){
        body_update('ironman_legs.png');
    
    }
    if (hg=='66'){
        body_update('ironman_right_hand.png');
    
    }
    if (hg=='90'){
        body_update('spiderman_body.png');
    
    }
    if (hg=='82'){
        body_update('spiderman_face.png');
    
    }
    if (hg=='79'){
        body_update('spiderman_left_hand.png');
    
    }
    if (hg=='75'){
        body_update('spiderman_face.png');
    
    }
    if (hg=='78'){
        body_update('spiderman_legs.png');
    
    }
    if (hg=='72'){
        body_update('spiderman_face.png');
    
    }
    if (hg=='69'){
        body_update('spiderman_right_hand.png');
    
    }
    if (hg=='83'){
        body_update('thor_face.png');
    
    }
    
    
    
    if (hg=='38'){
        up();
    }
    if (hg=='40'){
        down();
    }
    if (hg=='37'){
        left();
    }
    if (hg=='39'){
        right();
    }
}
function up(){
    if (player_y>0){
        player_y=player_y-10;
        canvas.remove(player_object);
        player_update();
    }
    }
    function down(){
        if (player_y<500){
            player_y=player_y+10;
            canvas.remove(player_object);
            player_update();
        }
        }
        function left(){
            if (player_x>0){
                player_x=player_x-10;
                canvas.remove(player_object);
                player_update();
            }
            }
            function right(){
                if (player_x<900){
                    player_x=player_x+10;
                    canvas.remove(player_object);
                    player_update();
                }
                }