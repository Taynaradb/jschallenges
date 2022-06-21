const marksWeight = 78; 
const marksHeight = 1.69; 

const johnsWeight = 92;
const johnsHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / (johnsHeight * johnsHeight);

console.log(marksBMI, johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;


console.log(markHigherBMI);