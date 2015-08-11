/**
 * Created by Shawn on 8/11/15.
 */
// step 1
var value = 42;

// step 2
if(value >= 53)
{
	value += 42;
}else
{
	value -= 13;
}// value = 29

// step 3
var string = "11";
value = value + string;
// value = "2911"

// step 4
var array = [];

for(var i = 0; i < value.length; i++)
{
	array[i] = value.charAt(i);
}// array = ["2", "9", "1", "1"]

// step 5
array.shift();
array.pop();
// array = ["9". "1"]

// step 6
var backwards;
var backwardsArray = [];

for(i = array.length - 1; i >= 0; i--)
{
	backwardsArray.push(array[i]);
	if(backwards === undefined)
	{
		backwards = array[i];
	}else
	{
		backwards += array[i];
	}
	// backwards = array[i];
}// backardsArray = ["1", "9"]
// backwards = "19"

// step 7
value = parseInt(value);
backwards = parseInt(backwards);

// step 8
value += backwards;

//step 9
if (value < 60) {
	value = 14;
} else if (value == 2930) {
	value = 27;
}	else {
	value = 2;
}

//step 10
var counter = 10;
while (counter > 0) {
	value++;
	counter--;
}

//step11
function stringConvert(val) {
	val = val.toString();
	if (val.length > 1)
	{
		val = val.slice(1);
	}
	value = val;
	return val;
}

//step 12
stringConvert(value);

//step 13
console.log(value);