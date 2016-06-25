Meteor.publish("project:one", function(pid) {
    return Projects.find({
        _id: pid
    });
});

Meteor.publish("vote:one", function(args) {
    return Votes.find({
        projectId: args.pid,
        votedById: args.uid,
        votedDate: args.votedDate
    });
});
Meteor.publish("support:one", function(args) {
    return Supports.find({
        pid: args.pid,
        uid: args.uid,
        votedDate: args.votedDate
    });
});


Meteor.publish("vcs:one", function(id) {
    return Vcs.find({
        _id: id
    });
});

Meteor.publish("welcome", function() {
    return Welcome.find();
});
Meteor.publish("ready", function() {
    return Ready.find();
});
Meteor.startup(function() {

   if(!Ready.findOne()){
        Ready.insert({})
   }
   if(!Welcome.findOne()){
        Welcome.insert({})
   }
});
