var word = "bottles";
var count = 99;
while (count > 0) {
	console.log(count + ' ' + word + ' of beer on the wall,');
	console.log(count + ' ' + word + ' of beer!');
	console.log('You take one down, you pass it around,');
	count = count - 1;
	if (count == 1) {
		word = "bottle";
	}
	if (count > 0) {
		console.log(count + ' ' + word + ' of beer on the wall!');
		console.log(' ');
	} else {
	console.log('No more bottles of beer on the wall!');
	}
}