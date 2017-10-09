var story = {
    "start": {
        "prompt": "Sitting on the toilet crying because you just realize Michael Jackson is dead and you will never get a chance to see him live in concert. Jump out the window? Stay there on the toilet?(Jump/Toliet) ",
        "choices": [ "Jump", "choices" ]
    },
    "Jump": {
        "prompt": "You jump out the window.",
        "Choices": [ "Run fromm the zombies, or sing Kumbaya with the zombies" ]
    },
    "Toilet": {
        "prompt": "Forever sitting on the toilet?"
    }
};
/* eslint-disable complexity*/
var userInput = prompt( story.start );

function runStory( node ){
    var userInput = prompt( story[node].prompt );

    if( !userInput  ){
        runStory();
    }
    else if( userInput === "Jump" ){
        userInput = prompt( story.Jump );
    }
    else if( userInput == "Toilet" ){
        alert( story.Toilet );
    }
    else{
        runStory();
    }
}
runStory();
