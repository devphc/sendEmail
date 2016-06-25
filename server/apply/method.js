Meteor.methods({

    updateInfo: function(args) {
        var obj = Applys.findOne({ uid: args.uid });
        if (obj) {
            Applys.update({
                _id: obj._id
            }, {
                $set: {
                    "email": args.email
                }
            });
        } else {
            Applys.insert({
                uid: args.uid,
                "email": args.email
            });
        }
        // ssr 渲染html模版 模版目录 /private/email.html 
        SSR.compileTemplate('email',Assets.getText('email.html'));
        var html = SSR.render('email');
        // Meteor.email 发送邮件 配置smtp.js 
        Email.send({
            to: args.email,
            from: smtp.username,
            subject : "邮箱测试！！！",
            html: html
        });
    }

});

