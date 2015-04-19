var renderDashboard = function() {
  // This has the potential to display other editable
  // portions of the LDOC website
  renderUpdates(".posts .row");
};

$(function() {
  var currentUser = Parse.User.current();
  if (currentUser) {
    $("#log-in").hide();
    $("#dashboard").show();
    renderDashboard();
  } else {
    $("#dashboard").hide();
    $("#log-in").show();
  }

  $("#log-in-button").on("click", function() {
    var username = $("#log-in-username");
    var password = $("#log-in-password");
    if (username.val() !== "" && password.val() !== "") {
      Parse.User.logIn(username.val(), password.val(), {
        success: function(user) {
          $("#dashboard").show();
          $("#log-in").hide();
          renderDashboard();
        },
        error: function(user, error) {
          username.val("");
          password.val("");
          $("#log-in h2").after("<div class='alert alert-danger'> <button type='button' class = 'close' data-dismiss = 'alert' aria-hidden='true'> &times; </button>" + error.message + "</div>");
        }
      });
    }
  });

  $("#updates-post-button").on("click", function() {
    var facebookPost = $("#updates-post");
    addUpdate(facebookPost.val()).then(function(res) {
      facebookPost.val("");
      renderUpdate(".posts .row", res);
    });
  });
});
