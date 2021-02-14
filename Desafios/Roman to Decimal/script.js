let algarismo = "XXXIICCMMIII";

let pattern_1 = /(I{4}|X{4}|C{4}|M{4})/i;
let pattern_2 = /((I{2}X)|(I(L|C|D|M)))/i;
let pattern_3 = /((X{2}(L|C))|(X(D|M)))/i;
let pattern_4 = /C{2}(D|M)/i;
let pattern_5 = /V(X|L|C|D|M)/i;
let pattern_6 = /L(C|D|M)/i;
let pattern_7 = /DM/i;

console.log(pattern.test(algarismo));
