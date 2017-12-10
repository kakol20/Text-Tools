/*
Notes: {
    Use parseInt("Text") to turn into number:
        var a = "18";
        var b = parseInt(a) + 2;

        result of b: 20
        
    Use var.split(',') to turn into list:
        var a = "a,b,c,d,e,f,g";
        var b = a.split(',');

        result of b: [a,b,c,d,e,f,g];
        
    Use "<br>" to split lines in div:
        var a = "a" + "<br>";
        var b = "b" + "<br>";
        var c = "c";
        document.getElementById('main').innerHTML = a + b + c;

        result Output:
            a
            b
            c

    Use number.toString(16) to convert decimal to hex:
        var a = 69;
        var b a.toString(16);

        result of b: 45;

    Use parseInt(hex, 16) to convert hex to decimal:
        var a = 45;
        var b = parseInt(a, 16);

        result of b: 69;

    Use array.reverse() to reverse list:
        var a = [2,3,1];
        a.reverse();

        result of a: [1,3,2];

    Use n.toPrecision(x) to round number in x significant figures:
        var a = 3.14159265;
        var b = a.toPrecision(4);

        result of b: 3.142;
    
    Standard Index Form:
        a * 10^b
        a - Coefficient
        b - Exponent
        var c = 0.0054;
        var exponent = key.round(Math.log(c) / Math.log(10), "down");
        var coefficient = c * Math.pow(10, -1 * exponent);

        result of exponent: -3
                  coefficient: 5.4 

    Use Number(string) to turn into a number
        var a = "3.14159265";
        var b = Number(a);

        result of b: 3.14159265

    http://stackoverflow.com/questions/34599303/javascript-sort-list-of-lists-by-sublist-second-entry

    Use array.splice(index, 1) to delete array[index]
        var a = [1, 2, 3];
        var b = a.splice(1, 1);

        result of b: [1, 3];

    Use a.split("\n") to split lines
}
*/

var key = (function() {
	return {
		random: function(a, b) {
			b = b || 0;
            var c = a - b;
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
            var b = key.countDupes(a);
            var c = [];
            for (var i = 0; i < b.length; i++) {
                c.push(b[i][0]);
            }
            return c;
        },
        // https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
        countDupes: function(a) {
            var b = [];
            a.forEach(function(i) {
                b[i] = (b[i] || 0) + 1;
            });

            var c = [];
            for (const d in b) {
                c.push([`${d}`, parseInt(`${b[d]}`)]);
            }

            return c;
        },
	};
})();

var removeDupelicates = function() {
	var a = document.getElementById('removeDuplicatesInput').value;
	var b = key.removeDupes(a.split("\n"));
	console.log(b);

	var output = "";
	for (var i = 0; i < b.length; i++) {
		if (i == b.length - 1) {
			output = output + b[i];
		} else {
			output = output + b[i] + "\n";
		}
	}

	document.getElementById('removeDuplicatesInput').value = output;
};

var randomise = function() {
	var a = document.getElementById('randomiseInput').value;
	var b = a.split("\n");
	console.log(b);

	var c = [];
	for (var i = 0; i < b.length; i++) {
		var d = [];
		for (var j = 0; j < b.length; j++) {
			if (c.indexOf(b[j]) < 0) {
				d.push(b[j]);
			}
		}

		c.push(d[key.round(key.random(d.length - 1))]);
	}

	var output = "";
	for (var i = 0; i < c.length; i++) {
		if (i == c.length - 1) {
			output = output + c[i];
		} else {
			output = output + c[i] + "\n";
		}
	}

	document.getElementById('randomiseInput').value = output;
}