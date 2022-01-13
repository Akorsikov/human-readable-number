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
    const tens = digits - units;

    return (array[tens-2] + ' ' + getFromZeroToNine(units));
  }
}


//        0  -  9 [zero, one, two, three, four, five, six, seven, eight, nine]
//       10  - 19 [ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen]
//       20  - 90 [twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety]
//      100  -    [hundred] 
//     1000  -    [thousand]
//  1000000  -    [million], [trillion]