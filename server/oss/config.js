oss = null;
Meteor.startup(function() {
    oss = new ALY.OSS({
        accessKeyId: "Lu5GIFhMLDERw2b6",
        secretAccessKey: "dO8TVUr2kV5mI0pDneo2vlA1zqA2ul",
		// endpoint: "http://oss-cn-beijing.aliyuncs.com", //测试环境
		endpoint: 'http://oss-cn-beijing-internal.aliyuncs.com', //线上环境
        apiVersion: '2013-10-15'
    });
});

