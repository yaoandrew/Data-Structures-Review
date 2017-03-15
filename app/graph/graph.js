
var Graph = function(){

};

Graph.prototype.addNode = function(node){
  this[node] = [];
};

Graph.prototype.contains = function(node){
  for(var key in this){
    if(key === node){
      return true;
    } else{
      return false;
    }
  }
};

Graph.prototype.removeNode = function(node){
  for(var key in this){
    if(key === node){
      delete this[key];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this[fromNode].length; i++){
    if(this[fromNode][i] === toNode){
      return true;
    }
  }
    return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i = 0; i < this[fromNode].length; i++){
    if(this[fromNode][i] === toNode){
      this[fromNode].splice(i, 1);
    }
  }
  for(var i = 0; i < this[toNode].length; i++){
    if(this[toNode][i] === fromNode){
      this[toNode].splice(i, 1);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this){
    if(typeof this[key] !== 'function'){
    cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
