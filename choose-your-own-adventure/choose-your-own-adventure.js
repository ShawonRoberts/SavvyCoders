var story = {
    "start": "Sitting on the toilet crying because you just realize Michael Jackson is dead and you will never get a chance to see him live in concert.",
    "node2": "You jump out the window."
};

var userInput = prompt( story.start );

function runStory(){
    if( !userInput ){
        runStory();
    }
}
runStory();
