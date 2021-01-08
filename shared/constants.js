'use strict';

let Constants = {
    JOIN_GAME: "join_game",
    LEAVE_GAME: "leave_game",
		SEND_MESSAGE: "send_message"
};

module.exports =
        Object.freeze(Constants); // freeze prevents changes by users*
