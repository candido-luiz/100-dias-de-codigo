let algarismo = "CMXCIX";

let P1 = "(I{4}|X{4}|C{4}|M{4})"
let P2 = "((I{2}X)|(I(L|C|D|M)))"
let P3 = "((X{2}(L|C))|(X(D|M)))"
let P4 = "C{2}(D|M)"
let P5 = "V(X|L|C|D|M|V)"
let P6 = "L(C|D|M|L)"
let P7 = "D(M|D)"
let P8 = "I[^I]+I"
let P9 = "(C[^C]+CC|C[^C]+C[^C]+C)"
let P10 = "V[^V]+V"
let P11 = "D[^D]+D"
let P12 = "M[^M]+M"
let P13 = "(X[^X]+XX|X[^X]+X[^X]+X)"

let pattern = `(${P1}|${P2}|${P3}|${P4}|${P5}|${P6}|${P7}|${P8}|${P9}|${P10}|${P11}|${P12}|${P13})`;

let full_P = new RegExp(pattern, "i");
console.log(full_P.test(algarismo));

// let pteste = new RegExp(P10,"i");
// console.log(pteste.test(algarismo));
