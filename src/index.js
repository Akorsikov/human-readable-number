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
  
  function getFromZeroTo999 (digits) {
      const tens = digits % 100
      const hundreds = (digits - tens) / 100;
      let outputString = getHundreds(hundreds);
      if (tens !== 0) outputString = (outputString + ' ' + getFromZeroToNinetyNine (tens));
      return outputString;
  }
  
  const lengthNumber = String(number).length;
  
  
  switch (true) {
    case (lengthNumber === 1) :
        return getFromZeroToNine(number);
    case (lengthNumber === 2) :
        return getFromZeroToNinetyNine(number);
    case (lengthNumber === 3) :
        return getFromZeroTo999(number);
    //case (lengthNumber === 4) :
        //return getFromZeroToNinetyNine(number) + ' thousand' + ;
    default : return ('Large number!');
    
  }
 
}