const accountId = 534346
let accountEmail = "harshjagtap153@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"

// accountId = 2 // not allowed

accountEmail = "bseu@gmail.com"

accountPassword ="21212"

accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var because of issues in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity,])