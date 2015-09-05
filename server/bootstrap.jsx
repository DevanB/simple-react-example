Meteor.startup(()=> {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      email: "devan@devanb.us",
      password: "testpassword"
    });
  }
});
