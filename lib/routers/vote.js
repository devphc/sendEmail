var vote = FlowRouter.group({
  prefix: '/vote',
  name: 'vote'
});
vote.route('/index/:id', {
  action: function(params, queryParams) {
    FlowLayout.render("voteIndex");
  }
});
vote.route('/up/:id', {
  action: function(params, queryParams) {
    FlowLayout.render("vote");
  },
  triggersEnter: [function(context, redirect) {
    if (facc.isGuest()) {

      wechat.login('http://jiac.fami2u.com/vote/index/' + context.params.id);
    }
  }]
});
vote.route('/confirm/:id', {
  action: function(params, queryParams) {
    FlowLayout.render("voteConfirm");
  }
});
vote.route('/result/:id', {
  action: function(params, queryParams) {
    FlowLayout.render("voteResult");
  }
});

FlowRouter.route('/support/:id', {
  action: function(params, queryParams) {
    FlowLayout.render("support");
  },
  triggersEnter: [function(context, redirect) {
    if (facc.isGuest()) {
      wechat.login('http://jiac.fami2u.com/support/' + context.params.id);
    }
  }]
});
