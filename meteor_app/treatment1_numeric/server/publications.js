Meteor.publish('getMainText', function(groupId, resortN) {
    console.log('----------------------------------publish mainText:');
    if (groupId != null) {
        if (typeof(groupId) === "boolean" && groupId == true) {
            console.log('Admin publications:');
            return mainText.find({groupId: {$ne : ""}});
        }
        else {
            console.log(groupId);
            var exp = UHexperiments.findOne({groupId: groupId});
            console.log(exp);
            if (exp.experimentType == "1") {
                console.log("experimentType = 1");
                console.log(mainText.find({groupId: "", experimentType: "1"}).count());
                return mainText.find({groupId: "", experimentType: "1", name: exp.resort});
            }
            else if (exp.experimentType == "3B") {
                console.log("experimentType = 3B");
                console.log(mainText.find({groupId: exp.goAfter}).count());
                return mainText.find({groupId: exp.goAfter});
            }
            else {
                console.log("experimentType <> 1 and 3B");
                console.log(mainText.find({groupId: groupId, name: exp.resort}).count());
                return mainText.find({groupId: groupId, name: exp.resort});
                //groupId: "LG6TNJP6q5sdoNYhe"
            }
        }
    }
    else console.log('groupId is null');
});

Meteor.publish('getMarked', function(groupId, resortN) {
    console.log('----------------------------------publish marked');
    if (groupId != null) {
        if (typeof(groupId) === "boolean" && groupId == true) {
            console.log('Admin publications:');
            return marked.find();
        }
        else {
            var exp = UHexperiments.findOne({groupId: groupId});
            console.log(exp);
            if (exp.experimentType == "3B") {
                console.log("experimentType = 3B");
                console.log(marked.find({groupId: exp.goAfter}).count());
                return marked.find({groupId: exp.goAfter});
            }
            else {
                console.log(marked.find({groupId: groupId, name: exp.resort}).count());
                return marked.find({groupId: groupId, name: exp.resort});
            }
        }
    }
    else console.log('groupId is null');
});

Meteor.publish('getUHexperiments', function(groupId) {
    if (typeof(groupId) === "boolean" && groupId == true) {
        console.log('Admin publications:');
        return UHexperiments.find();
    }
    else
        return UHexperiments.find({groupId: groupId});
});

Meteor.publish('getTestText', function(groupId, testN) {
    console.log('----------------------------------publish testText');
    if (groupId != null) {
        if (typeof(groupId) === "boolean" && groupId == true) {
            console.log('Admin publications:');
            return testText.find();
        }
        else {
            //groupId = 3;
            var exp = UHexperiments.findOne({groupId: groupId});
            console.log(exp);
            return testText.find({groupId: groupId, testN: exp.testN});
        }
    }
    else console.log('groupId is null');
});

Meteor.publish('getTestMarked', function(groupId, testN) {
    console.log('----------------------------------publish testMarked');
    if (groupId != null) {
        if (typeof(groupId) === "boolean" && groupId == true) {
            console.log('Admin publications:');
            return testMarked.find();
        }
        else {
            var exp = UHexperiments.findOne({groupId: groupId});
            console.log(exp);
            return testMarked.find({groupId: groupId, testN: exp.testN});
        }
    }
    else console.log('groupId is null');
});

Meteor.publish('bigLog', function(groupId) {
    console.log('----------------------------------publish bigLog');
    if (typeof(groupId) === "boolean" && groupId == true)
        return bigLog.find();
});

Meteor.publish('getExp3AB', function(groupId) {
    console.log('----------------------------------publish exp3AB');
    return exp3AB.find();
});

Meteor.publish('getExp3Bhistory', function(groupId) {
    console.log('----------------------------------publish exp3Bhistory');
    return exp3Bhistory.find();
});