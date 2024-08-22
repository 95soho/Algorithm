function getLCM (num1, num2) {
  let lcm = 1;
   
  while(true){
    if((lcm % num1 == 0) && (lcm % num2 == 0)) break;
    lcm++;
  }
  return lcm
}

function getGCD(a, b) {
  while(b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}


function solution(numer1, denom1, numer2, denom2) {
    const lcm = getLCM(denom1, denom2)
    const numer = numer1 * (lcm / denom1) + numer2 * (lcm / denom2)
    const gcd = getGCD(numer, lcm);
        
    return [numer / gcd, lcm / gcd];
}