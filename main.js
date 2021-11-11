/*
Notes: {
    Use parseInt("Text") to turn into number:
        let a = "18";
        let b = parseInt(a) + 2;

        result of b: 20
        
    Use let.split(',') to turn into list:
        let a = "a,b,c,d,e,f,g";
        let b = a.split(',');

        result of b: [a,b,c,d,e,f,g];
        
    Use "<br>" to split lines in div:
        let a = "a" + "<br>";
        let b = "b" + "<br>";
        let c = "c";
        document.getElementById('main').innerHTML = a + b + c;

        result Output:
            a
            b
            c

    Use number.toString(16) to convert decimal to hex:
        let a = 69;
        let b a.toString(16);

        result of b: 45;

    Use parseInt(hex, 16) to convert hex to decimal:
        let a = 45;
        let b = parseInt(a, 16);

        result of b: 69;

    Use array.reverse() to reverse list:
        let a = [2,3,1];
        a.reverse();

        result of a: [1,3,2];

    Use n.toPrecision(x) to round number in x significant figures:
        let a = 3.14159265;
        let b = a.toPrecision(4);

        result of b: 3.142;
    
    Standard Index Form:
        a * 10^b
        a - Coefficient
        b - Exponent
        let c = 0.0054;
        let exponent = key.round(Math.log(c) / Math.log(10), "down");
        let coefficient = c * Math.pow(10, -1 * exponent);

        result of exponent: -3
                  coefficient: 5.4 

    Use Number(string) to turn into a number
        let a = "3.14159265";
        let b = Number(a);

        result of b: 3.14159265

    http://stackoverflow.com/questions/34599303/javascript-sort-list-of-lists-by-sublist-second-entry

    Use array.splice(index, 1) to delete array[index]
        let a = [1, 2, 3];
        let b = a.splice(1, 1);

        result of b: [1, 3];

    Use a.split("\n") to split lines
}
*/
let key = (function() {
    return {
        random: function(a, b) {
            b = b || 0;
            let c = a - b;
            return (Math.random() * c) + b;
        },

        round: function(a, b, c) {
            b = b || "nearest";
            c = c || 0;
            if (b == "down") {
                return Math.floor(a * Math.pow(10, c)) / Math.pow(10, c);
            } else if (b == "up") {
                return Math.ceil(a * Math.pow(10, c)) / Math.pow(10, c);
            } else {
                return Math.round(a * Math.pow(10, c)) / Math.pow(10, c);
            }
        },

        sortAscending: function(a, b) {
            return a - b;
            //array.sort(key.sortAscending);
        },
        sortDescending: function(a, b) {
            return b - a;
        },

        // jQuery Needed       
        removeDupes: function(a) {
            let b = key.countDupes(a);
            let c = [];
            for (let i = 0; i < b.length; i++) {
                c.push(b[i][0]);
            }
            return c;
        },
        // https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
        countDupes: function(a) {
            let b = [];
            a.forEach(function(i) {
                b[i] = (b[i] || 0) + 1;
            });

            let c = [];
            for (const d in b) {
                c.push([`${d}`, parseInt(`${b[d]}`)]);
            }

            return c;
        },
    };
})();

let removeDupelicates = function() {
    let a = document.getElementById('removeDuplicatesInput').value;

    let b = a.split("\n");
    
    let c = {};
    b.forEach(function(x) {
        c[x] = (c[x] || 0) + 1;
    });
    console.log(c);
    
    b = key.removeDupes(a.split("\n"));
    
    let output = "";
    for (let i = 0; i < b.length; i++) {
        if (i == b.length - 1) {
            output = output + b[i];
        } else {
            output = output + b[i] + "\n";
        }
    }

    document.getElementById('removeDuplicatesInput').value = output;
};

let randomise = function() {
    let a = document.getElementById('randomiseInput').value;
    //let a = 'a\na\nb\nc'; // sample
    
    let b = a.split("\n");
    console.log(b);
    
    let c = [];
    for (let i = 0; i < b.length; i++) {
        let d = [];
        for (let j = 0; j < b.length; j++) {
            if (c.indexOf(b[j]) < 0) {
                d.push(b[j]);
            }
        }

        c.push(d[key.round(key.random(d.length - 1))]);
    }

    let output = "";
    for (let i = 0; i < c.length; i++) {
        if (i == c.length - 1) {
            output = output + c[i];
        } else {
            output = output + c[i] + "\n";
        }
    }

    document.getElementById('randomiseInput').value = output;
}
