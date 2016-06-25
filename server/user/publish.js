Meteor.publish("users", function(uid) {

    return Meteor.users.find({
        _id: uid
    });
});