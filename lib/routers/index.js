FlowRouter.route('/', {
  action: function(params, queryParams) {
    FlowRouter.go("/site");
  }
});
FlowRouter.route('/site', {
  action: function(params, queryParams) {
    FlowLayout.render("index");
  }
});
FlowRouter.route('/apply', {
  action: function(params, queryParams) {
    FlowLayout.render("applyForms");
  }
});

FlowRouter.route('/more', {
  action: function(params, queryParams) {
    FlowLayout.render("more");
  }
});
FlowRouter.route('/open', {
  action: function(params, queryParams) {
    FlowLayout.render("open");
  }
});

