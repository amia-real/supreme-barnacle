


// if (recipe == 'SPANISH') {
//     fudge = SPANISH_FUDGE;
//     amt = base * SPANISH_FUDGE;
//     sugar = 2 * bottom(amt) + top(amt) * 1.17;
//  } else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
//     fudge = (recipe == 'FRENCH') ? FRENCH_FUDGE : ENGLISH_FUDGE;
//     amt = base * fudge;
//     sugar = 2 * bottom(amt) + top(amt) * 1.17;
//     if (recipe == 'FRENCH') {
//         chocolate = 7;
//     }
//  } else {
//     fudge = 1;
//     amt = base;
//     sugar = 2 * bottom(amt) + top(amt) * 1.17;
//  }
 

 //REFACTORED


if (recipe == 'SPANISH') {
    fudge = SPANISH_FUDGE
} else if (recipe == 'ENGLISH') {
    fudge = ENGLISH_FUDGE
} else if (recipe == 'FRENCH') {
    fudge = FRENCH_FUDGE
    chocolate = 7
} else {
    fudge = 1;
}
amt = base * fudge
sugar = 2 * bottom(amt) + top(amt) * 1.17
