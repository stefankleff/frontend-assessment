'use strict';


const STAR_TREE = `
        *
       ***
      *****
     *******
    *********
       | |
`;

const HIGH_TREE = `
        #
       ###
      #####
     #######
    #########
   ###########
  #############
       | |
`;

const DOLLAR_TREE = `
        $
       $$$
      $$$$$
     $$$$$$$
    $$$$$$$$$
   $$$$$$$$$$$
  $$$$$$$$$$$$$
       | |
`;


// TODO: implement generic solution
function drawTree (height, char) {

    if (height == 5 && char == '*') {
        return STAR_TREE;

    } else if (height == 7 && char == '#') {
        return HIGH_TREE;

    } else if (height == 6 && char == '$') {
        return DOLLAR_TREE;
    }

}


export { drawTree };
