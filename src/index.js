module.exports = function toReadable (number) {

  function getFromZeroToNine (digit) {
    const array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return array[digit];
  }

  function getFromTenToNineteen (digits) {
    const array = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    return array[digits % 10];
  }
  
  function getFromTwentyToNinetyNine (digits) {
    const array = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const units = digits % 10; 
    const tens = (digits - units) / 10;
    const outputString = (units === 0) ? array[tens-2] : (array[tens-2] + ' ' + getFromZeroToNine(units));
    return outputString;
  }

  function getFromZeroToNinetyNine (digits) {
    let outputString;
    switch (true) {
      case digits < 10  : outputString = getFromZeroToNine (digits);
        break;
      case digits < 20  : outputString = getFromTenToNineteen (digits);
        break;
      default           : outputString = getFromTwentyToNinetyNine (digits);
    }    
    return outputString;
  }

  function getHundreds (digit) {
    let hundreds = (digit !== 0) ? getFromZeroToNine(digit) + ' hundred' : '';
    return hundreds;
    ;
  }

}


//        0  -  9 [zero, one, two, three, four, five, six, seven, eight, nine]
//       10  - 19 [ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen]
//       20  - 90 [twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety]
//      100  -    [hundred] 
//     1000  -    [thousand]
//  1000000  -    [million], [trillion]