module.exports = function(let){
  this.charac = let,
  this.appear = true,

  this.letterRender = function(){
    if(this.appear === false){
      return '_';
    }else{
      return this.charac;
    }
  }
}