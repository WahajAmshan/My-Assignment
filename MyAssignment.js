// 1. Largest Palindrome Product 

// let ans = 0;
// for (let i = 999; i >= 100; i --) {
//     for (let j = 999; j >= 100; j --){
//         let num = i * j;
//         let s = String(num);
//         let rs= s.split('').reverse().jo   
//         if ( s === rs ) {
//             ans = Math.max(ans, num);
//         }
//     }
// } 
 
// console.log(ans);


// 2. Married Numbers 

// var prime = function (){
//     var num=0;
//     for (num = 1; num < 101; num++){
//         if (num % 2 === 0){
//             break;
//         }
//         else if (num % 3 === 0){
//             break;
//         }
//         else if (num % 4=== 0){
//             break;
//         }
//         else if (num % 5 === 0){
//             break;
//         }
//         else if (num % 6 === 0){
//             break;
//         }
//         else if (num % 7 === 0){
//             break;
//         }
//         else if (num % 8 === 0){
//             break;
//         }
//         else if (num % 9 === 0){
//             break;
//         }
//         else if (num % 10 === 0){
//             break;
//         }
//         else if (num % 11 === 0){
//             break;
//         }
//         else if (num % 12 === 0){
//             break;
//         }
//         else {
//             return num;
//         }
//     }
//     };
//     console.log(prime());



    // 3. Factorial Digit Sum
    
    // We have f( x – 1) + f( x + 1) = √2f(x) ...(i) Replacing x by x + 1 and x by x – 1, we get,  f(x) + f(x + 2) = √2 f(x + 1) ...(ii)  and f(x – 2) + f(x) = √2f(x – 1) ...(iii)  Adding (ii) and (iii), we get,  f(x + 2) + f(x – 2) + 2f (x) =√2  (f(x – 1) + f(x + 1)) = √2(√2f(x))  = 2f(x) f(x + 2) + f(x – 2) = 0 ...(iv) Replacing x by x + 2, we get, f(x + 4) + f(x) = 0 ...(v) Again replacing x by x + 4, we get,   f(x + 8) + f(x + 4) = 0 ...(vi) Subtracting (v) from (vi), we get, f(x + 8) + f(x + 4) – f(x + 4) – f(x) = 0 ⇒ f(x + 8) – f(x) = 0 ⇒ f(x + 8) = f(x) = 0 Hence, the function f(x) is periodic with period 8

//     4. Magical Numbers
//   A number ABC is magical if ABC, BCA, CAB are primes. How many 3-digit magical numbers are there
//     below 1000?
//     abc=100a+10b+c
// Solution==>

// bca=100b+10c+a

// cab=100c+10a+b

// Adding these 3 equations, we get

// abc+bc+cab=100(a+b+c)+10(a+b+c)+(a+b+c)

// abc+bc+cab=(100+10+1)(a+b+c)

// abc+bc+cab=(111)(a+b+c)

// But given,

// abc+bca+cab=3×(a+b+c)×k

// ⇒ (111)(a+b+c)=3×(a+b+c)×k

// ⇒ 111=3k

// ⇒ 3k=111

// ⇒ k=111/3

// ⇒ k=37





// 5. Friendly numbers
// The friend of a number is the sum of its perfect divisors, E.g., Friend of 18 is 21 (1+2+3+6+9)
// 2 numbers are best friends of they are friends with each other E.g., Friend of 220 is 284 and friend of 
// 284 is 220.
// What is the sum of all best friends under 10000?
// Note: A number cannot be best friends with itself.

// Solution==>
// The sum of all natural ( positive integer ) number of dividers 220, except 220, is equal to

// 1+2+4+5+10+11+20+22+44+55+110 = 284

// and the sum of all natural number of dividers 284 , except himself

// is equal to

// 1+2+4+71+142 = 220 .

// The numbers 220 and 284 are called friends. Generally, we say that two positive integers are friends if each of their divisors' sum (Excluding the number itself) equal the other number.



// 6. Shopping Spree
// I have Rs. A
// The first toy I buy is for Rs. B
// Each subsequent toy is Rs. C cheaper than the last one
// The minimum price after discount is Rs. D
// How many toys can I buy?
// Example: a,b,c,d = 90,20,3,6
// I can 8 buy toys for 20+17+14+11+8+6+6+6
// How many can I buy for 30000, 2200, 123, 532?


// Solution==>
// 6. Shopping Spree
// I have Rs. A
// The first toy I buy is for Rs. B
// Each subsequent toy is Rs. C cheaper than the last one
// The minimum price after discount is Rs. D
// How many toys can I buy?
// Example: a,b,c,d = 90,20,3,6
// I can 8 buy toys for 20+17+14+11+8+6+6+6
// How many can I buy for 30000, 2200, 123, 532