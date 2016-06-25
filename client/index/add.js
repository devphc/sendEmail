Template.applyForms.onCreated(function() {

  var that = this;
  Session.set('uid', facc.user()._id);

  Tracker.autorun(function() {
    that.subscribe("apply", Session.get('uid'));
  })
});
Template.applyForms.helpers({
  
  apply: function() {
    return Applys.findOne({ uid: Session.get('uid') });
  }

});
Template.applyForms.events({

  "click #save": function() {

    var email = $("#email").val();

    if (!facc.checkEmail(email)) {
      alert("请输入正确的邮箱");
    }

    if ($("#email").val() == "") {
      alert("请输入邮箱");
      return false;
    }
    Meteor.call('updateInfo', {
      "uid": facc.user()._id,
      "email": $("#email").val(),

    }, function(error, result) {
      alert("项目已经提交，正在审核中");
      FlowRouter.go("/");
    })
  }
});
Template.applyForms.onRendered(function() {
  $(window).scrollTop(0);
});
