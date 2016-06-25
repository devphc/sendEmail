Meteor.startup(function() {

    smtp = {
        username: 'kf@fami2u.com', // eg: server@gentlenode.com
        password: 'Fami2014', // eg: 3eeP1gtizk5eziohfervU
        server: 'smtp.exmail.qq.com', // eg: mail.gandi.net
        port: 465
    }

    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
