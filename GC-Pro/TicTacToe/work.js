function check(p){
    for(var i=0;i<3;i++){
    if(p[i][0] == 5 && p[i][1] == 5 && p[i][2] == 5)
      return true;
    if(p[0][i] == 5 && p[1][i] == 5 && p[2][i] == 5)
      return true;
    }
    if(p[0][0] == 5 && p[1][1] == 5 && p[2][2] == 5)
      return true;
    if(p[0][2] == 5 && p[1][1] == 5 && p[2][0] == 5)
      return true;
    return false;
}

var p1 = new Array(3);
for(var i=0;i<p1.length;i++){
    p1[i] = new Array(3);
}

var p2 = new Array(3);
for(var i=0;i<p1.length;i++){
    p2[i] = new Array(3);
}

for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        p1[i][j]=-1;
        p2[i][j]=-1;
    }
}

var turn = 0;
var gameOver=false;
var p1win=false;
var p2win=false;
if(!gameOver){
$("td").on("click",function(){
    $("input").keypress(function(e){
        if(e.which === 88){
             $(this).parent().text("X");
             var i=0;
             var j=0;
             if($(this).parent().is("#11")){
                 i=0;j=0;
             }
             if($(this).parent().is("#12")){
                i=0;j=1;
            }
            if($(this).parent().is("#13")){
                i=0;j=2;
            }
            if($(this).parent().is("#21")){
                 i=1;j=0;
             }
             if($(this).parent().is("#22")){
                i=1;j=1;
             }
             if($(this).parent().is("#22")){
                i=1;j=1;
             }
             if($(this).parent().is("#23")){
                i=1;j=2;
             }
             if($(this).parent().is("#31")){
                i=2;j=0;
             }
             if($(this).parent().is("#32")){
                i=2;j=1;
             }
             if($(this).parent().is("#33")){
                i=2;j=2;
             }
             if(turn==0){
                 //Update p1
                 p1[i][j]=5;
             }
             else{
                 //Update p2
                 p2[i][j]=5;
             }
         }
        else{
             $(this).parent().text("0");
             var i=0;
             var j=0;
             if($(this).parent().is("#11")){
                 i=0;j=0;
             }
             if($(this).parent().is("#12")){
                i=0;j=1;
            }
            if($(this).parent().is("#13")){
                i=0;j=2;
            }
            if($(this).parent().is("#21")){
                 i=1;j=0;
             }
             if($(this).parent().is("#22")){
                i=1;j=1;
             }
             if($(this).parent().is("#22")){
                i=1;j=1;
             }
             if($(this).parent().is("#23")){
                i=1;j=2;
             }
             if($(this).parent().is("#31")){
                i=2;j=0;
             }
             if($(this).parent().is("#32")){
                i=2;j=1;
             }
             if($(this).parent().is("#33")){
                i=2;j=2;
             }
             if(turn==0){
                //Update p1
                p1[i][j]=5;
             }
             else{
                //Update p2
                p2[i][j]=5;
             }
         }
        if(turn===0 && check(p1) == true){
            gameOver=true;
            p1win=true;
        }
        if(turn===1 && check(p2) == true){
            gameOver=true;
            p2win=true;
        }
        turn = 1 - turn;
    });
});
}

if(p1win == true){
    $("h3").text("P1 won");
}
  


