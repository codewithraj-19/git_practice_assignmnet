function isPalindrome(str) { 
	let name ='';
	let name1 = '';
	for(var i=0; i<str.length; i++){ 
			
			name +=str[i];
	} 
	for(i=str.length-1;i>=0;i--)
	{
		name1 +=str[i];
	}
	console.log(name=name1? "yes":"no");
} 

var str1 = "racecar"; 
var str2 = "nitin"; 
var str3 = "Rama"; 
