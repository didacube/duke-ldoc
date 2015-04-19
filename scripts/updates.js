var updates = [];
var Update = Parse.Object.extend("Update");

var getUpdates = function() {
  var query = new Parse.Query(Update);
  query.limit(5);
  var updateCollection = query.collection();
  return updateCollection.fetch({
    success: function(collection) {
      return collection;
    },
    error: function(collection, error) {

    }
  });
};

var renderUpdates = function(selector) {
  getUpdates().then(function(res) {
    res.each(function(object) {
      renderUpdate(selector, object);
    });
  });
}

var addUpdate = function(post) {
  var update = new Update();
  update.set("post", post);
  return update.save(null, {
    success: function(update) {
      return update;
    }
  });
}

var renderUpdate = function(selector, object) {
  $(selector).prepend("<div class='col-xs-12'><div class='view'>" + object.attributes.post + "</div></div>");
}
