$(document).ready(function(){
  var raceStarted = false;
  var counter = 3;
  var playerOneProgress = 0;
  var playerTwoProgress = 0;
  var spacesLeft = 11

  var endRace = function(){
    clearInterval(monitorRace);
    location.reload(true);
  }
  var engageNpc = function(){
    var npcMovement = setInterval(function(){
      if(spacesLeft != 0){
        spacesLeft --;
        $('#computer_active').next().attr('id','computer_active');
        $('#computer_active').first().attr('id','');
      }
      else {
        clearInterval(npcMovement);
      }
    }, 500)
  }
  var displayCountdown = function(){
    var countdown = setInterval(function(){
      if(counter != 0){
        $('#countdown-box').html('<p>' + counter + '</p>')
        counter --;
      }
      else {
        $('#countdown-box').html('<p>GO!!!</p>')
        raceStarted = true;
        engageNpc();
        clearInterval(countdown);
      }
    }, 1000);
  }
  var monitorRace = setInterval(function(){
    if(playerOneProgress == 11){
      alert('BLUE WINS!!')
      endRace();
    }
    else if(playerTwoProgress == 11){
      alert('ORANGE WINS!!!')
      endRace();
    }
    else if(spacesLeft == 0){
      alert('PURPLE WINS!!!');
      endRace();
    }
  }, 10)

  var startRace = function(){
    displayCountdown();
  }
  var advancePlayerone = function(){
    if($('#player_1_active').next().length == 1){
      playerOneProgress++;
      $('#player_1_active').next().attr('id','player_1_active');
      $('#player_1_active').first().attr('id','');
    }
  }
  var advancePlayertwo = function(){
    if($('#player_2_active').next().length == 1){
      playerTwoProgress++;
      $('#player_2_active').next().attr('id','player_2_active');
      $('#player_2_active').first().attr('id','');
    }
  }
  $(document).keyup(function(e){
    if(raceStarted == false){
      startRace();
    }
    else if(e.keyCode == 65){
      advancePlayerone();
    }
    else if(e.keyCode == 76){
      advancePlayertwo();
    }
  })
})
