// Meteor.methods({
//     loadPic: function(args) {
//         upload(args.pic, function(data) {
//             var obj = Meteor.users.findOne({ _id: args.uid });
//             if (obj) {
//                 Meteor.users.update({
//                     _id: obj._id
//                 }, {
//                     $set: {
//                         "pic": data,
//                         _id: args.uid
//                     }
//                 });
//             } else {
//                 Meteor.users.insert({
//                     "pic": data,
//                     _id: args.uid
//                 });
//             }



//         }, function(e) {
//             throw e;
//         });
//     },
//     updateInfo: function(args) {
//         var obj = Meteor.users.findOne({ _id: args.uid });
//         if (obj) {
//             Meteor.users.update({
//                 _id: obj._id
//             }, {
//                 $set: {
//                     _id: args.uid,
//                     "xname": args.xname,
//                     "financing": args.financing,
//                     "qname": args.qname,
//                     "area": args.area,
//                     "cname": args.cname,
//                     "ctel": args.ctel,
//                     "email": args.email,
//                     "summray": args.summray,
//                     "gname": args.gname,

//                 }
//             });
//         } else {
//             Meteor.users.insert({
//                 _id: args.uid,
//                 "xname": args.xname,
//                 "financing": args.financing,
//                 "qname": args.qname,
//                 "area": args.area,
//                 "cname": args.cname,
//                 "ctel": args.ctel,
//                 "email": args.email,
//                 "summray": args.summray,
//                 "gname": args.gname
//             });
//         }

//     }

// });
