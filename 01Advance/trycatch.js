const convertToRs = (dollar)=> {
 if(typeof dollar === 'number'){
    return dollar * 70
 }else
 {
    throw Error('Amount needs to be in number')
}}


// const myValue = convertToRs('five')
// console.log(myValue);


try{
    const myValue = convertToRs('five')
    console.log(myValue);
}catch(error){
    console.log(error.message);
    
}

console.log('i will not run if prog crashes');
