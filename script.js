$(function(){

  intro();
  the_game = function() {

    egg_no=generate_egg();
    egg=$("#egg"+egg_no);
    
    if(check_if_egg_hits_ground(egg1) ||check_if_egg_hits_basket(egg1))
    {
      return_to_default(egg1);
    }
    else
    {
      egg_down(egg1);
    }

    if(check_if_egg_hits_ground(egg2) ||check_if_egg_hits_basket(egg2))
    {
      return_to_default(egg2);
    }
    else
    {
      egg_down(egg2);
    }

    if(check_if_egg_hits_ground(egg3) ||check_if_egg_hits_basket(egg3))
    {
      return_to_default(egg3);
    }
    else
    {
      egg_down(egg3);
      
    }


    if(life>0)
    {
      annim_id=requestAnimationFrame(the_game);
    }
    else
    {
     
      stop_the_game();
    }
    
    
  };
  annim_id = requestAnimationFrame(the_game);

});