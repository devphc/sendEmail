Meteor.publish("apply", function(userid) {
    return Applys.find({ uid: userid });
});