'use strict';


function first() {
    setTimeout(
        function(){
            console.log(1);
        }, 500);
}

function second() {
    console.log(2);
}

first();
second(); 

// callback func
function learnJS(lang, callback) {

    console.log(`я учу ${lang}`);
    callback();
}

learnJS('js', function(){
    console.log('done');
});
