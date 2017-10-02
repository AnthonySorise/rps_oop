$(document).ready(initialize);

function initialize(){
    $('.user_move').click(view.getUserChoice);
    $('.reset_game').click(view.askControllerToReset);
}