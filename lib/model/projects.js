Projects = new Meteor.Collection("projects");
Projects.allow({
	update:function(userid,doc){
		if (facc.isGuest()) {
			return false;
		}else{
			return true;
		}
	}
})