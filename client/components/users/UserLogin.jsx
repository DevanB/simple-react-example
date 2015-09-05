UserLogin = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    var email = e.target.email.value;
    var password = e.target.password.value;
    Meteor.loginWithPassword(email, password, function(err){
      if (err) return console.log(err.reason);
      FlowRouter.go("Home");
    });
  },
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-sm-offset-3">
            <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
              <input type="text" name="email" className="form-control" placeholder="Enter email..."/>
              <input type="password" name="password" className="form-control" placeholder="Enter password..."/>
              <input type="submit" value="Login" className="btn btn-default" />
            </form>
          </div>
        </div>
      </div>
    )
  }
})
