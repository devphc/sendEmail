Template.login.events({

    "click .loginBtn": function() {

        var tel = $("#tel").val();
        var password = $("#password").val();

        Meteor.call('accountLoginWithTel', {
            "tel": tel,
            "password": password
        }, function(error, result) {
            if (typeof result == "object") {
                facc.set(result);
                alert('欢迎回来');
                FlowRouter.go("/apply");
            } else if (result == "ERROR_RIGHT") {
                alert('权限不足');
            } else {
                alert('用户名/密码不匹配');
            }
        });
    }
});
