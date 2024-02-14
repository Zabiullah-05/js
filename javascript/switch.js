                                            // switch statement
                                            // structure
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }                                            

let color='black';
switch (true) {
    case (color==='red'):
        console.log('color is red')
        break;
    default:
        console.log('not a red color')
        break;
}
// falsy values
false,0,BigInt,-0,null,undefined,'',NaN
// truthy
"0","false"," ",[],{},function(){}