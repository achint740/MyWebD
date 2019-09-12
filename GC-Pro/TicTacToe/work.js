var m=1;
var gameOver=false;
$("table tr td").click(function(){
      if($(this).text() === "" && !gameOver){
          if(m%2){
              $(this).append("X");
              $("#msg").text("P2 turn");
          }
          else{
              $(this).append("O");
              $("#msg").text("P1 turn");
          }
          m++;
          var ans = winner();
          if(ans!=-1 && ans!=""){
              if(ans==="X"){
                $("#WIN").text("Player 1 Won");
              }
              else{
                $("#WIN").text("Player 2 Won");
              }
              gameOver=true;
              $("#msg").text("GAME OVER!");
              $("#msg").css('background-color',"blue");
          }
      }
});

function winner(){
    var sp1 = $("#11").text();
    var sp2 = $("#12").text();
    var sp3 = $("#13").text();
    var sp4 = $("#21").text();
    var sp5 = $("#22").text();
    var sp6 = $("#23").text();
    var sp7 = $("#31").text();
    var sp8 = $("#32").text();
    var sp9 = $("#33").text();
    //Rows
    if((sp1==sp2) && (sp2==sp3))
      return sp3;
    else if((sp4==sp5) && (sp5==sp6))
      return sp6;
    else if((sp7==sp8) && (sp8==sp9))
      return sp9;
    //Columns
    else if((sp1==sp4) && (sp4==sp7))
      return sp7;
    else if((sp2==sp5) && (sp5==sp8))
      return sp8;
    else if((sp3==sp6) && (sp6==sp9))
      return sp9;
    //Diagonals
    else if((sp1==sp5) && (sp5==sp9))
      return sp9;
    else if((sp3==sp5) && (sp5==sp7))
      return sp7;
    else
      return -1;
}

