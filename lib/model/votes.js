Votes = new Meteor.Collection("votes");
Supports = new Meteor.Collection("supports");
Votes.allow({
	insert:function(userid,doc){
		if (facc.isGuest()) {
			return false;
		}else{
			return true;
		}
	}
})
Supports.allow({
	insert:function(userid,doc){
		if (facc.isGuest()) {
			return false;
		}else{
			return true;
		}
	}
})