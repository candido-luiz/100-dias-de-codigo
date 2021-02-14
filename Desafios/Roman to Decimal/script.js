let algarismo = "IIIC";

// let pattern_1 = /(I{4}|X{4}|C{4}|M{4})/i;
// let pattern_2 = /((I{2}X)|(I(L|C|D|M)))/i;
// let pattern_3 = /((X{2}(L|C))|(X(D|M)))/i;
// let pattern_4 = /C{2}(D|M)/i;
// let pattern_5 = /V(X|L|C|D|M|V)/i;
// let pattern_6 = /L(C|D|M|L)/i;
// let pattern_7 = /D(M|D)/i;
let pattern_I = /I[^I]+I/i;
let pattern_C = /C[^C]+C/i;
let fullPattern = /((I{4}|X{4}|C{4}|M{4})|((I{2}X)|(I(L|C|D|M)))|((X{2}(L|C))|(X(D|M)))|C{2}(D|M)|V(X|L|C|D|M|V)|L(C|D|M|L)|D(M|D))/i;
console.log(pattern_C.test(algarismo));
