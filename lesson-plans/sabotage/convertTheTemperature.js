/**
 * @param {number} celsius
 * @return {number[]}
 */

var convertTemperature = function(celsiusArray) {
   if(!celsiusArray || celsiusArray.length === 0) {
     return [];
   }

   let results = [];
   for ( let i = 0; i < celsiusArray.length; i++){

     let celsius = celsiusArray[i];
     let kelvin = celsius + 273.15;
     let fahrenheit = (celsius * 1.8) + 32;

     results.push([kelvin, fahrenheit]);
   }
   return results;
};

describe('convertTemperature: celsius converts into kelvin and fahrenheit', () => {
  it('if temperature is 0 degree celsius', () => {
    const returned = convertTemperature([0]);
    expect(returned).toEqual([[273.15, 32]]);
  });

  it('if temperature is 36.5 degree celsius', () => {
    const returned = convertTemperature([36.5]);
    expect(returned).toEqual([[309.65, 97.7]]);
  });

  it('if temperature is 122.11 degree celsius', () => {
    const returned = convertTemperature([122.11]);
    expect(returned).toEqual([[395.26, 251.798]]);
  });

  it('if temperature is not given', () => {
    const returned = convertTemperature([]);
    expect(returned).toEqual([]);
  });
});
