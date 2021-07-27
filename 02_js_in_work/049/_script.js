// *args
const log = function(a,b, ...rest) {
    console.log(a,b, rest);
};

function calcOrDouble(number, basis = 2){
    console.log(number* basis);
}