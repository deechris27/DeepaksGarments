/*sum*/

const sum = array => array.reduce((accum,num)=>{
    return accum + num;
},0);

/*sum product*/

const sumProduct = array => array.reduce((accum, trio)=>{
       const [first, second, third] = trio;
       return accum + first * second + third;
},0);

/*max number*/

const maxNumber = array => array.reduce((accum, num)=>{
    if(!accum) return num;
    if(accum < num) return num;
    return accum;
},null);

/*Map*/

const mappy = (array, func) => array.reduce((accum, num)=>{
   return [...accum, func(num)];
},[]);

/*filter*/

const filterr = (array, func) => array.reduce((accum, num)=>{
   if(!func(num)) return accum;
   return [...accum, num];
},[]);

/*filter map*/

const filterMap = (array, filterFn, filterMap) => array.reduce((accum, num)=>{
     if(!filterFn(num)) return accum;
     return [...accum, filterMap(num)];
},[]);

//console.log(filterMap([3,7,10], x=>x>=4, x=>x*2));

//console.log(...[6,5]);

function inc(x){
   return x+1;
}

function doub(x){
    return x*2;
}

function composeRight(inc, doub){
    return function(args){
        return inc(doub(args));
    }
}

var f = composeRight(inc, doub);

console.log(f(3));