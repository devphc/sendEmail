Meteor.methods({
  voteup: function(doc) {
    Projects.update({ _id: doc.projectId }, { $inc: { votesNum: 1 } })
    return Votes.insert(doc);
  },
  support: function(doc) {
    doc.createdAt = new Date();
    Projects.update({ _id: doc.pid }, { $inc: { votesSupport: 1 } });
    return Supports.insert(doc);
  }
});
