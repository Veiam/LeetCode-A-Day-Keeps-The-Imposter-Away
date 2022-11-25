// Create a user object which has three properties:

// - username
// - password
// - age

// Username and password must not be accessible when accessed with
// alert() or console.log(). Age can be publicly accessed.

const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "emmabostian",
  [password]: "1234566",
  age: 27,
}