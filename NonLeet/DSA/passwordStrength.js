// You're building a sign up component and need to validate whether a user's desired password is secure enough.

// Given a password (string) return true if the password meets the following criteria and false if it doesn't.

// Password criteria:

// - One lowercase letter
// - One uppercase letter
// - One special character (!@#\$%^&\*)
// - One number
// - At least 8 characters long

function passwordCheck(password) {
  let number = /(?=.+[0-9])/;
  let lower = /(?=.+[a-z])/;
  let upper = /(?=.+[A-Z])/;
  let special = /?=.+[!@#\$%^&\*]/;
  let length = /(?=.{8,})/;
  let isValid =
    number.test(password) && lower.test(password) && upper.test(password) && special.test(password) && length.test(password);
  return isValid ? "Your password is valid." : "Your password is invalid."
}

console.log(checkPassword("abc"));
console.log(checkPassword("9Ab!4567"));
