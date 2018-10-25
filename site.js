function fplcalc_func(income, persons, period_array) {

    // This figure will need to be updated each year
    // that the FPL for each additional person changes.
    var fpl_addperson = 4320;

    // This array will need to be updated each year
    // that the FPL changes for the various family sizes.
    var fpl_array = [
        12140,  // family of 1
        16460,	// family of 2
        20780,  // family of 3
        25100,  // family of 4
        29420,  // etc.
        33740,
        38060,
        42380,
        46700,
        51020
    ];

    var fpl_val = fpl_array[persons - 1];
    if (persons > 10) {
        fpl_val = fpl_array[9] + (persons - 10) * fpl_addperson;
    }  
    
    if (period_array[0].checked) { // monthly
        income *= 1;
        } else if (period_array[1].checked) { // biweekly
        income *= 2.167;
        } else if (period_array[2].checked) { // weekly
        income *= 4.3;
        } else { 
        alert("Please indicate whether the income you entered is weekly, biweekly, or monthly.");
    }

    return (((income*12)/fpl_val*100).toFixed(2)); 
}