
var AceLoadImages = AceLoadImages || function(a, d, z) {
	a instanceof Array || (a = [a]);
	for (var e = a.length, f = 0, g = e; g--;) {
		var b = document.createElement("img");
		b.onload = function() {
			f++; 
			f >= e && isFunction(d) && d(z)
		};
		b.src = a[g]; 
	}
}

var isFunction = isFunction || function(functionToCheck) {
	var getType = {};
	return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
}



// HOW TO USE
/*

loadImages(["filename1.gif", "filename1.gif", "filename1.gif", "filename1.gif"], imagesAreLoaded);

function imagesAreLoaded() {
	// called when all images are loaded	
}

*/