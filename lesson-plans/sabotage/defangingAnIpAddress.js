/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let result = '';
     for(let i = 0; i < address.length; i++){
       let char = address[i];
       if (char === '.'){
         result += '[.]';
       }else {
         result += char
       }
     }
     if (result === '') {
        return address;
    }
    return result;
};

describe('A defanging IP address replaces every "." with "[.]".', () => {
  it('should return an empty string for an empty IP address', () => {
    const ip = "";
    const defangedIP = defangIPaddr(ip);
    expect(defangedIP).toBe("");
  });

  it('should handle IP addess with different lengths', () => {
    const ip = "1.1.1.1";
    const defangedIP = defangIPaddr(ip);
    expect(defangedIP).toBe("1[.]1[.]1[.]1");
  });
  
  it('should handle IP address correctly', () => {
    const ip = "255.100.50.0";
    const defangedIP = defangIPaddr(ip);
    expect(defangedIP).toBe("255[.]100[.]50[.]0");
  });


});