Template.index.events({
    "click .applyBtn": function() {
        if (facc.isGuest()) {
            wechat.login('http://jiac.fami2u.com/apply');
        } else {
            FlowRouter.go("/apply");
        }
    }
});

Template.index.onRendered(function() {
    Session.set("SHAREOBJ", {
        title: "北京市文化创意创新创业大赛",
        desc: "首个聚集文化创意创新创业要素资源的开放式可持续生态平台，将打造一个以“三创”为主题，以开放、协力、共荣、分享为特色的文创盛会",
        message: "首个聚集文化创意创新创业要素资源的开放式可持续生态平台，将打造一个以“三创”为主题，以开放、协力、共荣、分享为特色的文创盛会",
        thumb: "http://jiac.fami2u.com/top.png",
        image: "http://jiac.fami2u.com/top.png",
        url: "http://jiac.fami2u.com/site",
    });
    // wechat.showShare();
    $(window).scrollTop(0);
});

