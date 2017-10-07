const triangleStars = function(string, num) {
  if(num === 0) {
    return ''
  }
  return string + triangleStars(string, num-1);
};
const stars = function(height) {
  const helper = function(height, height1) {
    if(height === 0) {
      return;
    }
    console.log(triangleStars(' ', height1-height) + triangleStars('*', 2*height-1));
    helper(height-1, height1);
  }
  helper(height, height);
};



const pow=function (base,n){
  if (n===0){
    return 1 ;
  }
  return base * pow(base,n-1);
};



const reverse = function (str){
  const runThisUp=function(string,index){
    if(index < 0 ) {
      return '';
    }
    return string[index] + runThisUp(string, index-1);
  }
  return runThisUp(str, str.length-1);
};




 const checkerboard = function(num) {
      const runThisUp = function(num,num1){
   if(num === 0){
     return;
   }
   if(num%2 === 0){
     console.log(' ' + space(num1));
   }else{
   console.log(space(num1));
 }
 runThisUp(num-1, num1);
};
runThisUp(num,num);
};
const space = function(num){
    if(num === 0){
     return' ';
    }
    return'* ' + space(num-1);
  };


















