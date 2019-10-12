function add(x,y){
    return x+y;
}
if(typeof window == "undefined"){
    module.exports = {
        add
    }
}