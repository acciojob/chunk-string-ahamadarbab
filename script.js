function stringChop(str, size) {
	// return empty array if the string is null
	if(str == null) {
		return [];
	}

	let result = [];

	// loop through string in chunks
	for(let i = 0; i < str.length; i += size) {
		result.push(str.slice(i, i + size));
	}

	return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
