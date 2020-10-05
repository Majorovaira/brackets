module.exports = function check(str, bracketsConfig) {
    
    for(let i = 0; i < bracketsConfig.length; i ++) {
        if(str !== ''){
        str = str.split(bracketsConfig[i].join('')).join('');
    }
}
    for(i = 0; i < bracketsConfig.length; i ++){
        if(str.includes(bracketsConfig[i].join(''))){
            return check(str, bracketsConfig);
        }
    }
  return str === '';

}
