function promptAndGreetUser(){
    var userInput = prompt( "What is your name?" );

    if( !userInput ){
        userInput = prompt( "Whats your name silly?" );
    }
    else{
        alert( "Hello " + userInput );
    }
}
promptAndGreetUser();
