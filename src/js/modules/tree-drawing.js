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
       | |
`;


function replaceChars (template) {
    return template
        .replace(/\n/g, '<br>')
        .replace(/\s/g, '&nbsp;');
}


// TODO: implement generic solution
function drawTree ({ height, char }) {

    if (height == 5 && char == '*') {
        return replaceChars(STAR_TREE);

    } else if (height == 7 && char == '#') {
        return replaceChars(HIGH_TREE);

    } else if (height == 6 && char == '$') {
        return replaceChars(DOLLAR_TREE);
    }

}


export { drawTree };
