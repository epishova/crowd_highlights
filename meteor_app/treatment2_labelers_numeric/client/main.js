import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//import './main.html';
//Session.set('markColor', "white");
//Meteor.subscribe('getMainText', TurkServer.group));
//Meteor.subscribe('getMarked', TurkServer.group());

//Session.set('triesLeft', 2);
Session.set('resortN', 1);
//Session.set('testN', 1);
Session.set('testChanged', 1);
Session.set('beginExp', 1);

Tracker.autorun(function() {
    var group = TurkServer.group();
    //console.log('-------------Tracker.autorun');
    //console.log(group);
    if (group != null) {
        Meteor.subscribe('getUHexperiments', group);
        Meteor.subscribe('getTestText', group, Session.get('testChanged'));
        Meteor.subscribe('getTestMarked', group, Session.get('testChanged'));
        Meteor.subscribe('getMainText', group, Session.get('resortN'));
        Meteor.subscribe('getMarked', group, Session.get('resortN'));
        //Meteor.subscribe('bigLog', group);
        Meteor.subscribe('getExp3AB', true);

        var exp = UHexperiments.findOne();
        //if (exp && exp.quizN)
        //    Session.set('triesLeft', exp.quizN);
        if (exp) {
            Session.set('testChanged', exp.testN);
            if (exp.resort == exp.resort1)
                Session.set('resortN', 1);
            else if (exp.resort == exp.resort2)
                Session.set('resortN', 2);
            else
                Session.set('resortN', 3);
            if (exp.quizDone)
                $("#taskTabLi").removeClass('disabled');
        }
    }
    else if (TurkServer.isAdmin()) {
        //Meteor.subscribe('getMainText', Session.get('groupId'), Session.get('groupId'));
        //Meteor.subscribe('getMarked', Session.get('groupId'), Session.get('groupId'));
        Meteor.subscribe('getUHexperiments', Session.get('groupId'), Session.get('workerId'), true, false);
        //Meteor.subscribe('getTestText', Session.get('groupId'), Session.get('groupId'));
        //Meteor.subscribe('getTestMarked', Session.get('groupId'), Session.get('groupId'));
        Meteor.subscribe('bigLog', Session.get('groupId'));
        Meteor.subscribe('getExp3AB', true);
        //Meteor.subscribe('getExp3Bhistory', true);
        //console.log('-------------Admin subscriptions done');
    }

    //console.log('---------------------', TurkServer.inExperiment());
    if (TurkServer.inExperiment()) {
        //var path = Router.current().route.path();
        //console.log('-------path = ', path);
        //if (!(path in ['quiz', 'itemUI', 'thankyou', 'failed']))
        //if (Session.get('resortN') == 1 && Session.get('testN') == 1)
        //if (path == '/')
        if (Session.get('beginExp') == 1) {
            Router.go('/description');
            Session.set('beginExp', 2)
        }
        //else
        //    Router.go('/itemUI');
    } else if (TurkServer.inExitSurvey()) {
        //console.log('---------inExitSurvey');
        Router.go('/thankyou');
    }
});

function isDisabledFunc(btn) {
    if (Session.get('timeoutSet'))
        return 'enabled';
    else {
        setTimeout(function () {
            if (document.getElementById('submitMarkedTest'))
                $("#submitMarkedTest").removeClass('disabled');
            else {
                $("#yesAnswer").removeClass('disabled');
                $("#noAnswer").removeClass('disabled');
            }
            Session.set('timeoutSet', true);
            logIt(null, 'setTimeout', 'yesNo');
        }, 0); //160000
        return 'disabled';
    }
};

function markText(keyCode) {
    //add selection:
    //console.log('---markText');
    var sStr = "";
    if (window.getSelection) {
        sStr = window.getSelection().toString();
    }
    else if (document.selection && document.selection.type != "Control") {
        sStr = document.selection.createRange().text;
    }
    sStr = sStr.replace(/(\r\n|\n|\r)/gm,"");
    var allText = document.getElementById("allText").innerHTML;
    allText = allText.replace(/(\r\n|\n|\r|\s{2,})/gm,"");
    allText = allText.replace(/(<p id="pid\d{1,2}">|<p>|<\/p>|<mark>|<\/mark>)/g, "");

    var posStr = allText.indexOf(sStr);
    //console.log('posStr = ', posStr);
    if (posStr > -1) {
        var exp = UHexperiments.findOne();
        //console.log('exp found');
        //var minPid = 1;
        if (exp) {
            var minPid = Math.min(exp.downPid, exp.upPid);
            var minText = mainText.findOne({pid: minPid});
            var minPos = allText.indexOf(minText.text);
            minPos = allText.indexOf(sStr, minPos);
            //console.log('minPos', minPos);
            if (minPos > -1)
                posStr = minPos;
            //while ((posStr < minPos) && (posStr > -1)) {
            //    posStr = allText.indexOf(sStr, posStr + sStr.length);
            //    console.log('posStr = ', posStr);
            //}
        }
    }

    //console.log('minPid', minPid);
    var pids = mainText.find({}, {sort: {pid: 1}}).fetch();
    var lenText = 0;
    for (var i = 0; i < pids.length && posStr > -1 && sStr.length > 0; i++) {
        var plen = parseInt(pids[i].plen, 10);
        //console.log(lenText + " + " + plen + " >= " + posStr);
        if (lenText + plen > posStr) {
            var startPos, endPos;
            if ((lenText + plen) < (posStr + sStr.length)) {
                endPos = plen;
            }
            else {
                var pPos = posStr + sStr.length - lenText;
                endPos = pPos;
                sStr = "";
                //document.getSelection().removeAllRanges();
                if (window.getSelection) {
                    if (window.getSelection().empty) {  // Chrome
                        window.getSelection().empty();
                    } else if (window.getSelection().removeAllRanges) {  // Firefox
                        window.getSelection().removeAllRanges();
                    }
                } else if (document.selection) {  // IE?
                    document.selection.empty();
                }
            }
            if ((lenText < posStr) && (lenText + plen > posStr)) {
                var pPos = posStr - lenText;
                startPos = pPos;
            }
            else {
                startPos = 0;
            }
            var marks = marked.find({pId: pids[i].pid}).fetch();
            for (var j = 0; j < marks.length; j++) {
                if (keyCode === 83 && parseInt(marks[j].endPos, 10) >= startPos && endPos >= parseInt(marks[j].startPos, 10)) {
                    startPos = Math.min(startPos, parseInt(marks[j].startPos));
                    endPos = Math.max(endPos, parseInt(marks[j].endPos));
                    marked.remove({_id: marks[j]._id});
                }
                else if (keyCode === 68 && parseInt(marks[j].endPos, 10) <= endPos && parseInt(marks[j].startPos, 10) >= startPos) {
                    marked.remove({_id: marks[j]._id});
                }
                else if (keyCode === 68 && parseInt(marks[j].endPos, 10) > endPos && parseInt(marks[j].startPos, 10) < startPos) {
                    marked.update(marks[j]._id, {$set: {endPos: startPos}});
                    marked.insert({name: pids[i].name, groupId: TurkServer.group(), pId: pids[i].pid, startPos: endPos, endPos: parseInt(marks[j].endPos, 10)});
                    //Meteor.call('insertMarked',  pids[i].pid, endPos, parseInt(marks[j].endPos, 10));
                }
                else if (keyCode === 68 && parseInt(marks[j].endPos, 10) >= startPos && parseInt(marks[j].startPos, 10) < startPos) {
                    marked.update(marks[j]._id, {$set: {endPos: startPos}});
                }
                else if (keyCode === 68 && parseInt(marks[j].endPos, 10) > endPos && parseInt(marks[j].startPos, 10) <= endPos) {
                    marked.update(marks[j]._id, {$set: {startPos: endPos}});
                }
            }
            if (keyCode === 83) {
                marked.insert({name: pids[i].name, groupId: TurkServer.group(), pId: pids[i].pid, startPos: startPos, endPos: endPos});
                //Meteor.call('insertMarked',  pids[i].pid, startPos, endPos);
            }

            marks = marked.find({pId: pids[i].pid}, {sort: {endPos: -1}}).fetch();
            var markedText = pids[i].text;
            for (var j = 0; j < marks.length; j++) {
                markedText = [markedText.slice(0, parseInt(marks[j].endPos, 10)), "</mark>", markedText.slice(parseInt(marks[j].endPos, 10))].join('');
                markedText = [markedText.slice(0, parseInt(marks[j].startPos, 10)), "<mark>", markedText.slice(parseInt(marks[j].startPos, 10))].join('');
            }
            //console.log(markedText);
            mainText.update(pids[i]._id, {$set: {markedText: markedText}});
            //Meteor.call('updateMainText', pids[i]._id, markedText);
        }
        lenText += plen;
    }
};

function getDateTime() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    return {
        msec: currentdate,
        dateStr: datetime
    };
};

function logIt(e, eventId, templateId) {
    //console.log('logIt here');
    var dateTime = getDateTime();
    if (e == null)
        bigLog.insert({groupId: TurkServer.group(), eventId: eventId, templateId: templateId, currMsec: dateTime.msec, currDateStr: dateTime.dateStr});
    else
        bigLog.insert({groupId: TurkServer.group(), elementId: e.target.id.toString(), elementType: e.target.toString(), eventId: eventId, templateId: templateId, currMsec: dateTime.msec, currDateStr: dateTime.dateStr});
};

/*Template.description.onCreated(() => {
    var exp = UHexperiments.findOne();
    if (exp && exp.quizDone) {
        $("#taskTabLi").removeClass('disabled');
        return true;
    }
});*/

/*Template.quiz.onCreated(() => {
    var exp = UHexperiments.findOne();
    if (exp && exp.quizDone) {
        $("#taskTabLi").removeClass('disabled');
        if (document.getElementById('wrongQuiz'))
            document.getElementById('wrongQuiz').style.visibility = 'hidden';
        if (document.getElementById('questBudget1Right')) {
            document.getElementById('questBudget1Right').checked = true;
            document.getElementById('questBudget2Right').checked = true;
            document.getElementById('questBudget3Right').checked = true;
            document.getElementById('questBudget4Right').checked = true;
            document.getElementById('questBudget5Right').checked = true;
        }
        if (document.getElementById('questFamous1Right')) {
            document.getElementById('questFamous1Right').checked = true;
            if (exp.experimentType != "3A")
                document.getElementById('questFamous2Right1').checked = true;
            else
                document.getElementById('questFamous2Right2').checked = true;
        }
        if (document.getElementById('questEvents1Right')) {
            document.getElementById('questEvents1Right').checked = true;
            document.getElementById('questEvents2Right').checked = true;
            if (exp.experimentType != "3A")
                document.getElementById('questEvents3Right1').checked = true;
            else
                document.getElementById('questEvents3Right2').checked = true;
        }
        if (document.getElementById('right3'))
            document.getElementById('right3').checked = true;
        if (document.getElementById('right3'))
            document.getElementById('right3').checked = true;
        return true;
    }
});*/
/*
function saveCheck(cb) {
  session.log(cd, ' checked');
};*/

function checkQuiz(e) {
    //console.log('------------------------quizCheck');
    var exp = UHexperiments.findOne();
    if (exp && exp.quizDone) {
        $("#taskTabLi").removeClass('disabled');
        if (document.getElementById('wrongQuiz'))
            document.getElementById('wrongQuiz').style.visibility = 'hidden';
        return true;
    }
    else if (exp && document.getElementById('quizHeader') != null &&
            /*(exp.experimentType != "3A" ||
            exp.experimentType == "3A" &&
            document.getElementById('right3').checked &&
            document.getElementById('right4').checked) &&*/
            (exp.question == "Events" &&
            ((document.getElementById('questEvents120').checked ? 1 : 0) +
            (document.getElementById('questEvents220').checked ? 1 : 0) +
            ((exp.experimentType in ["1", "2"] && document.getElementById('questEvents3201').checked ||
            exp.experimentType == "3A" && document.getElementById('questEvents3202').checked ||
            exp.experimentType == "3B" && document.getElementById('questEvents31').checked) ? 1 : 0) +
            (document.getElementById('questEvents420').checked ? 1 : 0)) >= 3 ||
            exp.question == "Famous" &&
            ((document.getElementById('questFamous120').checked ? 1 : 0) +
            (document.getElementById('questFamous320').checked ? 1 : 0) +
            ((exp.experimentType in ["1", "2"] && document.getElementById('questFamous2201').checked ||
            exp.experimentType == "3A" && document.getElementById('questFamous2202').checked ||
            exp.experimentType == "3B" && document.getElementById('questFamous23').checked)? 1 : 0) +
            (document.getElementById('questFamous420').checked ? 1 : 0)) >= 3 ||
            /*document.getElementById('questFamous1Right').checked &&
            (exp.experimentType != "3A" && document.getElementById('questFamous2Right1').checked ||
            exp.experimentType == "3A" && document.getElementById('questFamous2Right2').checked) ||*/
            exp.question == "Budget" &&
            ((document.getElementById('questBudget120').checked ? 1 : 0) +
            (document.getElementById('questBudge220').checked ? 1 : 0) +
            (document.getElementById('questBudge320').checked ? 1 : 0) +
            (document.getElementById('questBudge520').checked ? 1 : 0)) >= 3)) {
        $("#taskTabLi").removeClass('disabled');
        UHexperiments.update(exp._id, {$set: {quizDone: true}});
        document.getElementById('wrongQuiz').style.visibility = 'hidden';
        return true;
    }
    else if (exp) {
        e.preventDefault();
        if (document.getElementById('wrongQuiz'))
            document.getElementById('wrongQuiz').style.visibility = 'visible';
        var num = parseInt(exp.quizN, 10) - 1; //parseInt(Session.get('triesLeft'), 10) - 1;
        //Session.set('triesLeft', num);
        UHexperiments.update(exp._id, {$set: {quizN: num}});
        //console.log('before checking num');
        if (num <= 0) {
            //console.log('after checking num. Router go');
            Router.go('/failed');
        }
        else {
            //console.log('after checking num return false');
            return false;
        }
    }
};

Template.layout.events({
    /*'mousedown': function(e) {
        //console.log(e.target);
        //var dateTime = getDateTime();
        //bigLog.insert({userId: 1, elementId: e.target.id.toString(), elementType: e.target.toString(), eventId: 'mousedown', templateId: 'description', currMsec: dateTime.msec, currDateStr: dateTime.dateStr});
        logIt(e, 'mousedown', 'description');
        console.log('click 1');
        e.target.click();
    },*/
    'click #taskTabLink': function(e) {
        //return checkQuiz(e);
        //console.log('click 2');
        logIt(e, 'click #taskTabLink', 'layout');
        var exp = UHexperiments.findOne();
        if (exp && exp.quizDone && exp.testN <= 3) {
            $("#taskTabLi").removeClass('disabled');
            if (document.getElementById('wrongQuiz'))
                document.getElementById('wrongQuiz').style.visibility = 'hidden';
            return true;
        }
        else
            return false;
    },
    'click .disableEnable': function(e) {
        //console.log('click 3');
        logIt(e, 'click .disableEnable', 'layout');
        if (document.getElementById('templateStart') || document.getElementById('templateThankyou') || document.getElementById('templateFailed'))
            return false;
        else
            return true;
    }/*,
    'click #menuDescription': function(e) {
    },
    'click #menuQuiz': function(e) {
    },
    'click #menuTaskA': function(e) {
    },
    'click #menuTaskB': function(e) {
    }*/
});

Template.description.events({
    /*'mousedown': function(e) {
        //console.log(e.target);
        //var dateTime = getDateTime();
        //bigLog.insert({userId: 1, elementId: e.target.id.toString(), elementType: e.target.toString(), eventId: 'mousedown', templateId: 'description', currMsec: dateTime.msec, currDateStr: dateTime.dateStr});
        logIt(e, 'mousedown', 'description');
        //e.target.click();
    },*/
    'click #nextDescr': function(e) {
        logIt(e, 'click #nextDescr', 'description');
        //var result = Meteor.call('goToBudgetExitSurvey');
        //console.log(result);
        //var dateTime = getDateTime();
        //bigLog.insert({userId: 0, ObjectId: "nextDescr", eventId: 'click', templateId: 'description', currMsec: dateTime.msec, currDateStr: dateTime.dateStr});
    }
});

Template.description.helpers({
    'experimentType': function(experimentType, experimentQuest) {
        //console.log('----------------------------experimentType:', experimentType, experimentQuest);
        var exp = UHexperiments.findOne();
        if (exp && experimentType == exp.experimentType && experimentQuest == exp.question)
            return true;
        else
            return null;
    }
});

Template.yesNo.helpers({
    'textNumber': function() {
        return Session.get('resortN');
    },
    'experimentType': function(p) {
        var exp = UHexperiments.findOne();
        if (exp && exp.question == p)
            return true;
        else
            return null;
    },
    'isDisabled': function(btn) {
        return isDisabledFunc(btn);
/*
        if (Session.get('timeoutSet'))
            return 'enabled';
        else {
            setTimeout(function () {
                if (document.getElementById('submitMarkedTest'))
                    $("#submitMarkedTest").removeClass('disabled');
                else {
                    $("#yesAnswer").removeClass('disabled');
                    $("#noAnswer").removeClass('disabled');
                }
                Session.set('timeoutSet', true);
                logIt(null, 'setTimeout', 'yesNo');
            }, 160000);
            return 'disabled';
        }
*/
    }
});

Template.quiz.helpers({
    'experimentType': function(p) {
        var exp = UHexperiments.findOne();
        if (exp && (exp.experimentType == p || exp.question == p))
            return true;
        else
            return false;
    },
    'setAnswerCB': function(name, id) {
        //console.log('------------------------setAnswerCB', name, id);
        var checkedId = Session.get(name);
        if (checkedId == id)
            return true;
        else
            return false;
    },
    'triesLeft': function() {
        //var num = Session.get('triesLeft');
        var exp = UHexperiments.findOne();
        if (exp)
            return String(exp.quizN).concat(' attempt', (parseInt(exp.quizN, 10) > 1 ? 's' : ''));
    }
});

Template.quiz.events({
    'click #quizCheck': function(e) {
        //console.log('click 4');
        logIt(e, '#quizCheck', 'quiz');
        checkQuiz(e);
/*        console.log('------------------------quizCheck');
        var exp = UHexperiments.findOne();
        if (document.getElementById('right1').checked &&
            ((exp.experimentType == '1' || exp.experimentType == '3B') && document.getElementById('right21').checked ||
             exp.experimentType == '2' && document.getElementById('right22').checked ||
             exp.experimentType == '3A' && document.getElementById('right21').checked) &&
            ((exp.experimentType == '3A' || exp.experimentType == '2') && document.getElementById('right3').checked && document.getElementById('right4').checked ||
             exp.experimentType == '1' || exp.experimentType == '2B')) {
            $("#taskTabLi").removeClass('disabled');
            //document.getElementById('taskTabLink').href = '/itemUI';
        }
        else {
            e.preventDefault();
            return false;
        }*/
    },
    'click #quizBack': function(e) {
        logIt(e, '#quizBack', 'quiz');
    },
    'click .answerCB': function(cb) {
        //console.log('------------------------click .ansterCB:', cb.target.name, cb.target.id);
        //console.log('click 5');
        var exp = UHexperiments.findOne();
        if (!(exp && exp.quizDone))
            Session.set(cb.target.name, cb.target.id);
        return true;
    }
});

Template.thankyou.events({
    'submit .survey': function (e) {
        //console.log('------thankyou submit .survey');
        e.preventDefault();
        var results = {inputAge: e.target.inputAge.value, inputGender: e.target.inputGender.value, inputEducation: e.target.inputEducation.value, confusing: e.target.confusing.value, feedback: e.target.feedback.value};
        TurkServer.submitExitSurvey(results);
    }
});


/*Template.yesNo.onCreated(() => {
    if (Session.get('timeoutSet')) {
        $("#yesAnswer").removeClass('disabled');
        $("#noAnswer").removeClass('disabled');
    }
    else {
        setTimeout(function () {
            $("#yesAnswer").removeClass('disabled');
            $("#noAnswer").removeClass('disabled');
        }, 6000);
        Session.set('timeoutSet', true);
    }
});*/

function getDateTime() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    return {
        msec: currentdate,
        dateStr: datetime
    };
};


Template.yesNo.events({
    'click button#yesAnswer': function(e) {
        //console.log('yes pressed');
        logIt(e, 'button#yesAnswer', 'yesNo');
        if (Session.get('timeoutSet')) {
            Session.set('timeoutSet', false);
            var exp = UHexperiments.findOne();
            var dateTime = getDateTime();
            if (exp && exp.resort == exp.resort1) {
                Meteor.call('sendAnswerN', 'Yes', 1, dateTime.msec);
                UHexperiments.update(exp._id, {$set: {resort: exp.resort2}});
                Session.set('resortN', 2);
                window.scrollTo(0, 0);
            }
            else if (exp && exp.resort == exp.resort2) {
                Meteor.call('sendAnswerN', 'Yes', 2, dateTime.msec);
                UHexperiments.update(exp._id, {$set: {resort: exp.resort3}});
                Session.set('resortN', 3);
                window.scrollTo(0, 0);
            }
            else if (exp) {
                var answ = document.getElementById("inputAnswer").value;
                Meteor.call('sendAnswerN', answ, 3, dateTime.msec);
                Meteor.call('goToExitSurvey');
            }
        }
    },
    'click button#noAnswer': function(e) {
        //console.log('no pressed');
        logIt(e, 'button#noAnswer', 'yesNo');
        if (Session.get('timeoutSet')) {
/*1-3
            Meteor.call('sendAnswer', 'No');
            Meteor.call('goToExitSurvey');
*/
            Session.set('timeoutSet', false);
            var exp = UHexperiments.findOne();
            var dateTime = getDateTime();
            if (exp && exp.resort == exp.resort1) {
                Meteor.call('sendAnswerN', 'No', 1, dateTime.msec);
                UHexperiments.update(exp._id, {$set: {resort: exp.resort2}});
                Session.set('resortN', 2);
                window.scrollTo(0, 0);
            }
            else if (exp && exp.resort == exp.resort2) {
                Meteor.call('sendAnswerN', 'No', 2, dateTime.msec);
                UHexperiments.update(exp._id, {$set: {resort: exp.resort3}});
                Session.set('resortN', 3);
                window.scrollTo(0, 0);
            }
            else if (exp) {
                Meteor.call('sendAnswerN', 'No', 3, dateTime.msec);
                Meteor.call('goToExitSurvey');
            }
//----1-3
        }
        //var result = {result: 'no'};
        //TurkServer.submitExitSurvey(result);
        //Router.go('thankyou');
    }
});

Template.itemText.onCreated(() => {
    $(document).on('keyup', (e) => {
        //console.log('focused', document.activeElement);
        var exp = UHexperiments.findOne();
        if (exp && /*(exp.experimentType == '2' || exp.experimentType == '3A') &&*/ (e.which === 68 || e.which === 83)) {
            markText(e.which);
        }
    });
});

function markTestText(keyCode) {
    var sStr = "";
    if (window.getSelection) {
        sStr = window.getSelection().toString();
    }
    else if (document.selection && document.selection.type != "Control") {
        sStr = document.selection.createRange().text;
    }
    sStr = sStr.replace(/(\r\n|\n|\r)/gm,"");
    var allText = testText.findOne();
    var startPos = allText.text.indexOf(sStr);
    var endPos = startPos + sStr.length;

    var marks = testMarked.find({pId: 0}).fetch();
    for (var j = 0; j < marks.length; j++) {
        if (keyCode === 83 && parseInt(marks[j].endPos, 10) >= startPos && endPos >= parseInt(marks[j].startPos, 10)) {
            startPos = Math.min(startPos, parseInt(marks[j].startPos));
            endPos = Math.max(endPos, parseInt(marks[j].endPos));
            testMarked.remove({_id: marks[j]._id});
        }
        else if (keyCode === 68 && parseInt(marks[j].endPos, 10) <= endPos && parseInt(marks[j].startPos, 10) >= startPos) {
            testMarked.remove({_id: marks[j]._id});
        }
        else if (keyCode === 68 && parseInt(marks[j].endPos, 10) > endPos && parseInt(marks[j].startPos, 10) < startPos) {
            testMarked.update(marks[j]._id, {$set: {endPos: startPos}});
            testMarked.insert({testN: allText.testN, groupId: TurkServer.group(), pId: 0, startPos: endPos, endPos: parseInt(marks[j].endPos, 10)});
        }
        else if (keyCode === 68 && parseInt(marks[j].endPos, 10) >= startPos && parseInt(marks[j].startPos, 10) < startPos) {
            testMarked.update(marks[j]._id, {$set: {endPos: startPos}});
        }
        else if (keyCode === 68 && parseInt(marks[j].endPos, 10) > endPos && parseInt(marks[j].startPos, 10) <= endPos) {
            testMarked.update(marks[j]._id, {$set: {startPos: endPos}});
        }
    }
    if (keyCode === 83) {
        testMarked.insert({testN: allText.testN, groupId: TurkServer.group(), pId: 0, startPos: startPos, endPos: endPos});
    }

    marks = testMarked.find({pId: 0}, {sort: {endPos: -1}}).fetch();
    var markedText = allText.text;
    //var testDone = true;
    for (var j = 0; j < marks.length; j++) {
        markedText = [markedText.slice(0, parseInt(marks[j].endPos, 10)), "</mark>", markedText.slice(parseInt(marks[j].endPos, 10))].join('');
        markedText = [markedText.slice(0, parseInt(marks[j].startPos, 10)), "<mark>", markedText.slice(parseInt(marks[j].startPos, 10))].join('');
        /*if (!(marks[j].startPos >= 668 && marks[j].endPos <= 699 ||
            marks[j].startPos >= 594 && marks[j].endPos <= 620 ||
            marks[j].startPos >= 507 && marks[j].endPos <= 527 ||
            marks[j].startPos >= 359 && marks[j].endPos <= 377 ||
            marks[j].startPos >= 79 && marks[j].endPos <= 100))
            testDone = false;*/
    }
    //console.log(markedText);
    testText.update(allText._id, {$set: {markedText: markedText}});

/*
    //check if the test task was accomplished:
    if (marks.length >= 5 && marks.length <= 7 && testDone) {
        var exp = UHexperiments.findOne();
        UHexperiments.update(exp._id, {$set: {testDone: true}});
    }
*/
};

function isTestTask() {
    var exp = UHexperiments.findOne();
    if (exp /*&& (exp.experimentType == '3A' || exp.experimentType == '2')*/ && !exp.testDone)
        return true;
    else
        return false;
};

Template.itemUI.onCreated(() => {
    $(document).on('keyup', (e) => {
        if (isTestTask() && (e.which === 68 || e.which === 83)) {
            markTestText(e.which);
        }
    });
});

Template.itemUI.helpers({
    'isDisabled': function(btn) {
        return isDisabledFunc(btn)
    },
    'textNumber': function() {
        return Session.get('resortN');
    },
    'provideAnswer': function() {
        var exp = UHexperiments.findOne();
        if (exp && exp.experimentType != '3A') {
            //document.getElementById('submitMarked').style.visibility = 'visible';
            return true;
        }
        else {
            //document.getElementById('submitMarked').style.visibility = 'hidden';
            return false;
        }
    },
    'testTask': function() {
        return isTestTask();
    },
    'dataLoading': function() {
        var main = testText.find({}, {sort: {pid: 1}}).fetch();
        if (!main || main.length <= 0) {
            Session.set('testChanged', Session.get('testChanged') + 1);
            return true;
        }
        else
            return false;
    },
    'showTestText': function() {
        //console.log('--------------showtestText', testText.find().count());
        var main = testText.find({}, {sort: {pid: 1}}).fetch();
        if (main)
            return main;
        else
            return null;
    },
    'testNumber': function() {
        var exp = UHexperiments.findOne();
        if (exp) {
            var num = 4 - exp.testN; //4 - Session.get('testChanged');
            return String(num).concat(' attempt', (num > 1 ? 's' : ''));
        }
    },
    'correctTestAnswer': function() {
        var exp = UHexperiments.findOne();
        var testCh = exp.testN; //Session.get('testChanged');
        if (testCh == 2)
            return 'NO'; //String(testCh).concat(" is NO");
        else
            return 'YES'; //String(testCh).concat(" is YES");
    },
    'experimentQuestion': function(quest, testN) {
        var exp = UHexperiments.findOne();
        if (exp && exp.question == quest && exp.testN == testN)
            return true;
        else
            return false;
    },
    'experimentType': function(etype, quest) {
        var exp = UHexperiments.findOne();
        if (exp && exp.experimentType == etype && (exp.question == quest || quest == "All")) {
            return true;
        }
        else {
            return false;
        }
    },
    'showRightAnswer': function(etype, quest) {
        var exp = UHexperiments.findOne();
        if (exp && (exp.testUpproved || (exp.testN != exp.testChanged)))
        //if (Session.get('testAnswer'))
            return 'visibility: visible';
        else
            return 'visibility: hidden';
    },
    'showRightAnswerYes': function(etype, quest) {
        var exp = UHexperiments.findOne();
        if (exp && exp.testUpproved)
        //if (Session.get('testAnswer'))
            return 'visibility: visible';
        else
            return 'visibility: hidden';
    },
    'showRightAnswerNo': function(etype, quest) {
        var exp = UHexperiments.findOne();
        if (exp && !exp.testUpproved && (exp.testN != exp.testChanged))
            return 'visibility: visible';
        else
            return 'visibility: hidden';
    },
    'highlightClues': function(etype, quest) {
        //if (Session.get('testAnswer'))
        var exp = UHexperiments.findOne();
        if (exp && (exp.testUpproved || (exp.testN != exp.testChanged)))
            return 'background-color: lightblue';
        else
            return '';
    },
    'isVisible': function() {
        if (Session.get('timeoutSet'))
            return 'hidden';
        else
            return 'visible';
   }
});

Template.itemUI.events({
    'click button#submitMarkedTest': function(e) {
        var exp = UHexperiments.findOne();
        if (exp && (exp.testN == exp.testChanged) && (exp.testChanged <= 3) && !exp.testUpproved) {
            var testN = exp.testN;
            var marks = testMarked.find({testN: testN}, {sort: {startPos: 1}}).fetch();
            var passed = true;
            var emptyInt = [];
            var mustSymb = [];
            if (marks && testN == 1) {
                if (exp.question == 'Budget') {
                    //emptyInt = [[60, 429], [647, 796], [845, 863], [1050, 1092]];
                    //emptyInt = [[228, 279], [578, 796], [845, 863], [1050, 1092]];
                    emptyInt = [[228, 279], [332, 428], [703, 767]];
                    mustSymb = [573, 899, 1130];
                }
                if (exp.question == 'Events') {
                    emptyInt = [[0, 329]];
                    mustSymb = [527, 803, 945];
                }
            }
            else if (marks && testN == 2) {
                if (exp.question == 'Budget') {
                    //emptyInt = [[0, 111], [287, 708], [798, 813], [922, 970]];
                    emptyInt = [[20, 73], [126, 176], [302, 545], [612, 681], [835, 891]];
                    mustSymb = [283, 793, 918];
                }
                if (exp.question == 'Events') {
                    emptyInt = [[0, 46], [420, 547], [764, 868], [910, 961]];
                    mustSymb = [637, 1196];
                }
            }
            else if (marks && testN == 3) {
                if (exp.question == 'Budget') {
                    //emptyInt = [[233, 488], [578, 869], [1141, 1270]];
                    emptyInt = [[25, 129], [263, 360], [399, 488], [650, 723], [931, 1081]];
                    mustSymb = [205, 556, 1311];
                }
                if (exp.question == 'Events') {
                    //emptyInt = [[184, 326], [339, 393], [776, 926]];
                    emptyInt = [[21, 114], [224, 328], [439, 542], [633, 713], [808, 925], [1078, 1188]];
                    mustSymb = [168, 574, 734, 1037];
                }
            }
            if (marks) {
                for (var i = 0; passed && i < marks.length; i++)
                    for (var j = 0; passed && j < emptyInt.length; j++)
                        if (emptyInt[j][0] < marks[i].endPos && emptyInt[j][1] > marks[i].startPos)
                            passed = false;
                for (var j = 0; passed && j < mustSymb.length; j++) {
                    var i = 0;
                    for (i = 0; i < marks.length; i++)
                        if (mustSymb[j] >= marks[i].startPos && mustSymb[j] <= marks[i].endPos)
                            break;
                    if (i >= marks.length)
                        passed = false;
                }
            }
            if (!marks || !passed) {
                var text = testText.findOne();
                UHexperiments.update(exp._id, {$set: {testChanged: testN + 1}});
                testText.update(text._id, {$set: {userText: text.markedText, markedText: text.correctText}});
            }
            else
                UHexperiments.update(exp._id, {$set: {testUpproved: true}});
            if (document.getElementById('rightTestAnswer'))
                document.getElementById('rightTestAnswer').style.visibility = 'visible';
        }
    },
    'click #itemUIBack': function(e) {
        logIt(e, 'click #itemUIBack', 'layout');
    },
    'click button#submitMarked': function(e) {
        //Meteor.call('sendAnswer', '');
        //Meteor.call('goToExitSurvey');
        //console.log('yes pressed');
        logIt(e, 'button#submitMarked', 'itemui');
        if (Session.get('timeoutSet')) {
            Session.set('timeoutSet', false);
            var exp = UHexperiments.findOne();
            var dateTime = getDateTime();
            if (exp && exp.resort == exp.resort1) {
                Meteor.call('sendAnswerN', 'Done', 1, dateTime.msec);
                UHexperiments.update(exp._id, {$set: {resort: exp.resort2}});
                Session.set('resortN', 2);
                window.scrollTo(0, 0);
            }
            else if (exp && exp.resort == exp.resort2) {
                Meteor.call('sendAnswerN', 'Done', 2, dateTime.msec);
                UHexperiments.update(exp._id, {$set: {resort: exp.resort3}});
                Session.set('resortN', 3);
                window.scrollTo(0, 0);
            }
            else if (exp) {
                Meteor.call('sendAnswerN', 'Done', 3, dateTime.msec);
                Meteor.call('goToExitSurvey');
            }
        }
    },
    'click button#testYesAnswer': function() {
        Session.set('testAnswer', true);
        if (document.getElementById('rightTestAnswer'))
            document.getElementById('rightTestAnswer').style.visibility = 'visible';
    },
    'click button#testNoAnswer': function() {
        Session.set('testAnswer', true);
        if (document.getElementById('rightTestAnswer'))
            document.getElementById('rightTestAnswer').style.visibility = 'visible';
        Session.set('testFailed', true);
    },
    'click button#test2YesAnswer': function(e) {
        //if (!Session.get('testAnswer')) {
        //    Session.set('testAnswer', true);
        var exp = UHexperiments.findOne();
        logIt(e, 'button#test2YesAnswer', 'itemui: '.concat(String(exp.testN)));
        if (exp && (exp.testN == exp.testChanged) && (exp.testChanged <= 3) && !exp.testUpproved) {
        //var testN = Session.get('testN');
            //var exp = UHexperiments.findOne();
            var testN = exp.testN;
            var text = testText.findOne();
            testText.update(text._id, {$set: {userText: text.markedText, markedText: text.correctText}});
            if (testN == 2) {
                //Session.set('testN', testN+1);
                UHexperiments.update(exp._id, {$set: {testChanged: testN + 1}});
                //Session.set('testAnswer', -1);
            }
            else
                UHexperiments.update(exp._id, {$set: {testUpproved: true}});
            //    Session.set('testAnswer', 1);
            if (document.getElementById('rightTestAnswer'))
                document.getElementById('rightTestAnswer').style.visibility = 'visible';
        }
    },
    'click button#test2NoAnswer': function(e) {
        /*if (!Session.get('testAnswer')) {
            Session.set('testAnswer', true);
            var text = testText.findOne();
            testText.update(text._id, {$set: {userText: text.markedText, markedText: text.correctText}});
            if (document.getElementById('rightTestAnswer'))
                document.getElementById('rightTestAnswer').style.visibility = 'visible';
            Session.set('testFailed', true);
        }*/
//        if (!Session.get('testAnswer')) {
//            Session.set('testAnswer', true);
        var exp = UHexperiments.findOne();
        logIt(e, 'button#test2NoAnswer', 'itemui: '.concat(String(exp.testN)));
        if (exp && (exp.testN == exp.testChanged) && (exp.testChanged <= 3) && !exp.testUpproved) {
            //var testN = Session.get('testN');
            //var exp = UHexperiments.findOne();
            var testN = exp.testN;
            var text = testText.findOne();
            testText.update(text._id, {$set: {userText: text.markedText, markedText: text.correctText}});
            if (testN != 2) {
                //Session.set('testN', testN+1);
                UHexperiments.update(exp._id, {$set: {testChanged: testN + 1}});
                //Session.set('testAnswer', -1);
            }
            else
                UHexperiments.update(exp._id, {$set: {testUpproved: true}});
            //    Session.set('testAnswer', 1);
            if (document.getElementById('rightTestAnswer'))
                document.getElementById('rightTestAnswer').style.visibility = 'visible';
        }
    },
    'click button#gotIt': function(e) {
        var exp = UHexperiments.findOne();
        logIt(e, 'button#gotIt', 'itemui: '.concat(String(exp.testN)));
        var testChanged = exp.testChanged; //Session.get('testN');
        if (exp && testChanged >= 4) {
            UHexperiments.update(exp._id, {$set: {testDone: false}});
            Router.go('/failed');
        }
        //else if (exp && exp.testN != testN) {
        //    UHexperiments.update(exp._id, {$set: {testN: testN}});
        //    Session.set('testChanged', testN);
        //    Session.set('testAnswer', false);
        //}
        else if (exp && !exp.testUpproved/*exp.testN != testChanged*/) {
            UHexperiments.update(exp._id, {$set: {testN: testChanged}});
            //Session.set('testAnswer', false);
            Session.set('testChanged', testChanged)
        }
        else
            UHexperiments.update(exp._id, {$set: {testDone: true}});
    }
});

Template.itemText.helpers({
    'color': function() {
        return Session.get('markColor');
    },
    'showText': function() {
        //console.log('--------------showText:');
        //var pids = mainText.find({name: 'Kitcbuel'}, {sort: {pid: 1}}).fetch();

        /*for (var i = 0; i < pids.length; i++) {
            var marks = marked.find({pId: pids[i].pid}, {sort: {endPos: -1}}).fetch();
            var markedText = pids[i].text;
            for (var j = 0; j < marks.length; j++) {
                markedText = [markedText.slice(0, parseInt(marks[j].endPos)), "</mark>", markedText.slice(parseInt(marks[j].endPos))].join('');
                markedText = [markedText.slice(0, parseInt(marks[j].startPos)), "<mark>", markedText.slice(parseInt(marks[j].startPos))].join('');
            }
            console.log(markedText);
            mainText.update(pids[i]._id, {$set: {markedText: markedText}});
        }*/
        //console.log('mainText.count: ', mainText.find().count(), 'mainText.find.count:', mainText.find().count());
        var main = mainText.find({}, {sort: {pid: 1}}).fetch();
        if (main)
            return main;
        else
            return null;
    },
    'resortName': function() {
        var exp = UHexperiments.findOne();
        if (exp)
            return 'Text #'.concat(Session.get('resortN'), '. ', exp.resort);
        else
            return false;
    }
});

function aggregateMarks() {
    var marks = marked.find().fetch();
    if (marks.length > 0) {
        aggs = [marks[0]];
        aggs[0].num = 1;
        for (var i = 1; i < marks.length; i++) {
            var newAggs = aggs.slice();
            var insertFlg = true;
            for (var j = 0; j < aggs.length; j++) {
                if (marks[i].pid == aggs[j].pid) {
                    if (marks[i].startPos == aggs[j].startPos && marks[i].endPos == aggs[j].endPos) {
                        newAggs.num += 1;
                        insertFlg = false;
                    }
                    else if (parseInt(marks[i].endPos, 10) > parseInt(aggs[j].startPos, 10) && parseInt(aggs[j].endPos, 10) > parseInt(marks[i].startPos, 10)) {
                        var mins = [parseInt(marks[i].endPos, 10), parseInt(aggs[j].startPos, 10), parseInt(marks[i].startPos, 10), parseInt(aggs[j].endPos, 10)];
                        mins.sort();
                        newAggs.push({pid: aggs[j].pid, startPos: mins[0], endPos: mins[1], num: 1});
                        newAggs.push({pid: aggs[j].pid, startPos: mins[1], endPos: mins[2], num: 1});
                        newAggs.push({pid: aggs[j].pid, startPos: mins[2], endPos: mins[3], num: 1});
                        insertFlg = false;
                    }
                }
            }
            if (insertFlg) {
                newAggs.push({pid: marks[i].pid, startPos: marks[i].startPos, endPos: marks[i].endPos, num: 1});
            }
            aggs = newAggs.slice();
        }
    }
};

function sortNumber(a,b) {
    return a - b;
}

function countMarks() {
    var markedP = [];
    var posArr = {};
    var posDict = {};
    var marks = marked.find().fetch();
    for (var j = 0; j < marks.length; j++) {
        if (!(marks[j].pId in posArr)) {
            //console.log('Create new paragraph entrance');
            markedP.push(parseInt(marks[j].pId, 10));
            posArr[marks[j].pId] = [];
            posDict[marks[j].pId] = {};
        }

        var startPos = parseInt(marks[j].startPos, 10);
        var endPos = parseInt(marks[j].endPos, 10);
        if (!(startPos in posArr[marks[j].pId])) {
            posArr[marks[j].pId].push(startPos);
            posDict[marks[j].pId][startPos] = 1;
        }
        else {
            posDict[marks[j].pId][startPos] = posDict[marks[j].pId][startPos] + 1;
        }

        if (!(endPos in posArr[marks[j].pId])) {
            posArr[marks[j].pId].push(endPos);
            posDict[marks[j].pId][endPos] = -1;
        }
        else {
            posDict[marks[j].pId][endPos] = posDict[marks[j].pId][endPos] - 1;
        }
    }

    markedP.sort(sortNumber);
    var displayArr = [];
    for (var j = 0; j < markedP.length; j++) {
        posArr[markedP[j]].sort(sortNumber);
        var pid = mainText.find({pid: markedP[j]}).fetch();
        var i = 0;
        var weight = 0;
        while (i < posArr[markedP[j]].length - 1) {
            weight = weight + posDict[markedP[j]][posArr[markedP[j]][i]];
            if (weight == 0) {
                i++;
            }
            else {
                var k = i + 1;
                while (posDict[markedP[j]][posArr[markedP[j]][k]] == 0) {
                    k++;
                }
                displayArr.push({text: pid[0].text.slice(posArr[markedP[j]][i], posArr[markedP[j]][k]), refCount: weight});
                i = k;
            }
        }
    }
    return displayArr;
};

Template.BTaskUI.events({
    "submit form#budgetForm": function (event) {
        event.preventDefault();
        Meteor.call('goToBudgetExitSurvey');
        Router.go('thankyou');
        /*Meteor.call('updateBudget', $(event.target).serializeArray(), function(err, res){
            if (!err) {
                Router.go('thankyou');
            }
        });*/
    }
});

Template.BTaskUI.helpers({
    'showMarks': function() {
        //console.log("here");
        //aggregateMarks();
    },
    'pMarks': function() {
        var displayArr = countMarks(); //[{refCount: 10, text: 'asdf'}, {refCount: 11, text: 'asdddff'}];
        return displayArr;
        /*return _.map(this.Address, function(value, key) {
            return {
                key: key,
                value: value
            };
        });*/
    }
});

Template.dbdata.helpers({
    'showMainText': function () {
        //console.log('mainText.find.count: ', mainText.find().count());
        var groupId = Session.get('groupId');
        if (groupId != null) {
            //var main = mainText.find({}, {sort: {experimentType: 1, groupId: 1, pid: 1}}).fetch();
            var main = mainText.find({groupId: groupId}, {sort: {name: 1, pid: 1}}).fetch();
            return main;
        }
        else
            return null;
    },
    'showAllUHexperiments': function () {
        //var main = UHexperiments.find({answer3: {"$exists":true}}, {sort: {answer1MsecCl: 1, experimentType: 1, question: 1}}).fetch();
        var main = UHexperiments.find({}, {sort: {answer3MsecCl: 1, experimentType: 1, question: 1}}).fetch();
        for (var j = 0; j < main.length; j++) {
            /*
            logTime = bigLog.findOne({groupId: main[j].groupId, eventId: "#quizCheck", currMsec: {$lt: main[j].answer1MsecCl}});
            if (logTime != null)
                logTime = logTime.currMsec;
            else
                logTime = main[j].answer1MsecCl;
            */
            var logTime = 0;
            var gotAns = bigLog.find({groupId: main[j].groupId, eventId: "button#gotIt", currMsec: {$lt: main[j].answer3MsecCl}}).fetch();
            if (gotAns != null)
                for (var yi = 0; yi < gotAns.length; yi++)
                    //console.log('-------------yesAnsws[yi].currMsec:', yesAnsws[yi].currMsec, logTime);
                    if (gotAns[yi].currMsec != null && gotAns[yi].currMsec > logTime)
                        logTime = gotAns[yi].currMsec;

            /*var yesAnsws = bigLog.find({groupId: main[j].groupId, eventId: "button#test2YesAnswer", currMsec: {$lt: main[j].answer1MsecCl}}).fetch();
            //console.log('-------------yesAnsws: ', yesAnsws);
            var noAnsws = bigLog.find({groupId: main[j].groupId, eventId: "button#test2NoAnswer", currMsec: {$lt: main[j].answer1MsecCl}}).fetch();
            //console.log('-------------noAnsws: ', noAnsws);
            if (yesAnsws != null)
                for (var yi = 0; yi < yesAnsws.length; yi++)
                    //console.log('-------------yesAnsws[yi].currMsec:', yesAnsws[yi].currMsec, logTime);
                    if (yesAnsws[yi].currMsec != null && yesAnsws[yi].currMsec > logTime)
                        logTime = yesAnsws[yi].currMsec;
            if (noAnsws != null)
                for (var yi = 0; yi < noAnsws.length; yi++)
                    //console.log('-------------noAnsws[yi].currMsec:', noAnsws[yi].currMsec, logTime);
                    if (noAnsws[yi].currMsec != null && noAnsws[yi].currMsec > logTime)
                        logTime = noAnsws[yi].currMsec;*/
            if (logTime == 0)
                logTime = main[j].answer3MsecCl;
            main[j].time1 = main[j].answer3MsecCl - logTime;
            main[j].time2 = main[j].answer2MsecCl - main[j].answer1MsecCl;
            main[j].time3 = main[j].answer3MsecCl - main[j].answer2MsecCl;
            main[j].correct1 = 0;
            main[j].correct2 = 0;
            main[j].correct3 = 0;
            var total = 0;
            if (main[j].question == "Budget") {
                if (main[j].resort1 == "Kitzbuel" && main[j].answer1 == "Yes") {
                    main[j].correct1 = 1;
                    total += 1;
                }
                if (main[j].resort1 == "Andorra" && main[j].answer1 == "No") {
                    main[j].correct1 = 1;
                    total += 1;
                }
                if (main[j].resort1 == "Gastein" && main[j].answer1 == "No") {
                    main[j].correct1 = 1;
                    total += 1;
                }
                if (main[j].resort2 == "Kitzbuel" && main[j].answer2 == "Yes") {
                    main[j].correct2 = 1;
                    total += 1;
                }
                if (main[j].resort2 == "Andorra" && main[j].answer2 == "No") {
                    main[j].correct2 = 1;
                    total += 1;
                }
                if (main[j].resort2 == "Gastein" && main[j].answer2 == "No") {
                    main[j].correct2 = 1;
                    total += 1;
                }
                if (main[j].resort3 == "Kitzbuel" && main[j].answer3 == "Yes") {
                    main[j].correct3 = 1;
                    total += 1;
                }
                if (main[j].resort3 == "Andorra" && main[j].answer3 == "No") {
                    main[j].correct3 = 1;
                    total += 1;
                }
                if (main[j].resort3 == "Gastein" && main[j].answer3 == "No") {
                    main[j].correct3 = 1;
                    total += 1;
                }
            }
            if (main[j].question == "Events") {
                if (main[j].resort1 == "Kitzbuel" && main[j].answer1 == "No") {
                    main[j].correct1 = 1;
                    total += 1;
                }
                if (main[j].resort1 == "Andorra" && main[j].answer1 == "Yes") {
                    main[j].correct1 = 1;
                    total += 1;
                }
                if (main[j].resort1 == "Gastein" && main[j].answer1 == "No") {
                    main[j].correct1 = 1;
                    total += 1;
                }
                if (main[j].resort2 == "Kitzbuel" && main[j].answer2 == "No") {
                    main[j].correct2 = 1;
                    total += 1;
                }
                if (main[j].resort2 == "Andorra" && main[j].answer2 == "Yes") {
                    main[j].correct2 = 1;
                    total += 1;
                }
                if (main[j].resort2 == "Gastein" && main[j].answer2 == "No") {
                    main[j].correct2 = 1;
                    total += 1;
                }
                if (main[j].resort3 == "Kitzbuel" && main[j].answer3 == "No") {
                    main[j].correct3 = 1;
                    total += 1;
                }
                if (main[j].resort3 == "Andorra" && main[j].answer3 == "Yes") {
                    main[j].correct3 = 1;
                    total += 1;
                }
                if (main[j].resort3 == "Gastein" && main[j].answer3 == "No") {
                    main[j].correct3 = 1;
                    total += 1;
                }
            }
            if (main[j].question == "Famous") {
                if (main[j].resort3 == "Kitzbuel" && main[j].answer3 == "No") {
                    main[j].correct3 = 1;
                    total += 1;
                }
                if (main[j].resort3 == "Andorra" && main[j].answer3 == "No") {
                    main[j].correct3 = 1;
                    total += 1;
                }
                if (main[j].resort3 == "Gastein" && main[j].answer3 == "Yes") {
                    main[j].correct3 = 1;
                    total += 1;
                }
            }
            main[j].totalCorrect = total;
        }
        return main;
    },
    'showUHexperiments': function () {
        //console.log('mainText.find.count: ', mainText.find().count());
        var total = 0;
        var workerId = Session.get('workerId');
        if (workerId != null) {
            var main = UHexperiments.find({workerId: workerId}).fetch();
            Session.set('groupId', main[0].groupId);
            //var main = UHexperiments.find({}, {sort: {experimentType: 1, groupId: 1}}).fetch();
            for (var j = 0; j < main.length; j++) {
                var logTime = bigLog.findOne({eventId: "setTimeout", currMsec: {$lt: main[j].answer1MsecCl}});
                if (logTime != null)
                    logTime = logTime.currMsec;
                else
                    logTime = main[j].answer1MsecCl;
                main[j].time1 = main[j].answer1MsecCl - logTime;
                main[j].time2 = main[j].answer2MsecCl - main[j].answer1MsecCl;
                main[j].time3 = main[j].answer3MsecCl - main[j].answer2MsecCl;
                main[j].correct1 = 0;
                main[j].correct2 = 0;
                main[j].correct3 = 0;
                if (main[j].question == "Budget") {
                    if (main[j].resort1 == "Kitzbuel" && main[j].answer1 == "Yes") {
                        main[j].correct1 = 1;
                        total += 1;
                    }
                    if (main[j].resort1 == "Andorra" && main[j].answer1 == "No"){
                        main[j].correct1 = 1;
                        total += 1;
                    }
                    if (main[j].resort1 == "Gastein" && main[j].answer1 == "No"){
                        main[j].correct1 = 1;
                        total += 1;
                    }
                    if (main[j].resort2 == "Kitzbuel" && main[j].answer2 == "Yes"){
                        main[j].correct2 = 1;
                        total += 1;
                    }
                    if (main[j].resort2 == "Andorra" && main[j].answer2 == "No"){
                        main[j].correct2 = 1;
                        total += 1;
                    }
                    if (main[j].resort2 == "Gastein" && main[j].answer2 == "No"){
                        main[j].correct2 = 1;
                        total += 1;
                    }
                    if (main[j].resort3 == "Kitzbuel" && main[j].answer3 == "Yes"){
                        main[j].correct3 = 1;
                        total += 1;
                    }
                    if (main[j].resort3 == "Andorra" && main[j].answer3 == "No"){
                        main[j].correct3 = 1;
                        total += 1;
                    }
                    if (main[j].resort3 == "Gastein" && main[j].answer3 == "No"){
                        main[j].correct3 = 1;
                        total += 1;
                    }
                }
                if (main[j].question == "Events") {
                    if (main[j].resort1 == "Kitzbuel" && main[j].answer1 == "No"){
                        main[j].correct1 = 1;
                        total += 1;
                    }
                    if (main[j].resort1 == "Andorra" && main[j].answer1 == "Yes"){
                        main[j].correct1 = 1;
                        total += 1;
                    }
                    if (main[j].resort1 == "Gastein" && main[j].answer1 == "No"){
                        main[j].correct1 = 1;
                        total += 1;
                    }
                    if (main[j].resort2 == "Kitzbuel" && main[j].answer2 == "No"){
                        main[j].correct2 = 1;
                        total += 1;
                    }
                    if (main[j].resort2 == "Andorra" && main[j].answer2 == "Yes"){
                        main[j].correct2 = 1;
                        total += 1;
                    }
                    if (main[j].resort2 == "Gastein" && main[j].answer2 == "No"){
                        main[j].correct2 = 1;
                        total += 1;
                    }
                    if (main[j].resort3 == "Kitzbuel" && main[j].answer3 == "No"){
                        main[j].correct3 = 1;
                        total += 1;
                    }
                    if (main[j].resort3 == "Andorra" && main[j].answer3 == "Yes"){
                        main[j].correct3 = 1;
                        total += 1;
                    }
                    if (main[j].resort3 == "Gastein" && main[j].answer3 == "No"){
                        main[j].correct3 = 1;
                        total += 1;
                    }
                }
                main[j].totalCorrect = total;
            }
                return main;
        }
        else {
            var groupId = Session.get('groupId');
            if (groupId != null) {
                var main = UHexperiments.find({groupId: groupId}).fetch();
                for (var j = 0; j < main.length; j++) {
                    if (main[j].question == "Budget") {
                        if (main[j].resort1 == "Kitzbuel" && main[j].answer1 == "Yes")
                            total += 1;
                        if (main[j].resort1 == "Andorra" && main[j].answer1 == "No")
                            total += 1;
                        if (main[j].resort1 == "Gastein" && main[j].answer1 == "No")
                            total += 1;
                        if (main[j].resort2 == "Kitzbuel" && main[j].answer2 == "Yes")
                            total += 1;
                        if (main[j].resort2 == "Andorra" && main[j].answer2 == "No")
                            total += 1;
                        if (main[j].resort2 == "Gastein" && main[j].answer2 == "No")
                            total += 1;
                        if (main[j].resort3 == "Kitzbuel" && main[j].answer3 == "Yes")
                            total += 1;
                        if (main[j].resort3 == "Andorra" && main[j].answer3 == "No")
                            total += 1;
                        if (main[j].resort3 == "Gastein" && main[j].answer3 == "No")
                            total += 1;
                    }
                    if (main[j].question == "Events") {
                        if (main[j].resort1 == "Kitzbuel" && main[j].answer1 == "No")
                            total += 1;
                        if (main[j].resort1 == "Andorra" && main[j].answer1 == "Yes")
                            total += 1;
                        if (main[j].resort1 == "Gastein" && main[j].answer1 == "No")
                            total += 1;
                        if (main[j].resort2 == "Kitzbuel" && main[j].answer2 == "No")
                            total += 1;
                        if (main[j].resort2 == "Andorra" && main[j].answer2 == "Yes")
                            total += 1;
                        if (main[j].resort2 == "Gastein" && main[j].answer2 == "No")
                            total += 1;
                        if (main[j].resort3 == "Kitzbuel" && main[j].answer3 == "No")
                            total += 1;
                        if (main[j].resort3 == "Andorra" && main[j].answer3 == "Yes")
                            total += 1;
                        if (main[j].resort3 == "Gastein" && main[j].answer3 == "No")
                            total += 1;
                    }
                    main[j].totalCorrect = total;
                }
                return main;
            }
            else
                return null;
        }
    },
    'showtestText': function () {
        //console.log('mainText.find.count: ', mainText.find().count());
        var groupId = Session.get('groupId');
        if (groupId != null) {
            //var main = testText.find({}, {sort: {experimentType: 1, groupId: 1, pid: 1}}).fetch();
            var main = testText.find({groupId: groupId}, {sort: {name: 1, pid: 1}}).fetch();
            return main;
        }
        else
            return null;
    },
    'showBigLog': function () {
        //console.log('mainText.find.count: ', mainText.find().count());
        var groupId = Session.get('groupId');
        if (groupId != null) {
            //var main = bigLog.find({}, {sort: {goupId: 1, currDateStr: 1, currMsec: 1}}).fetch();
            var main = bigLog.find({groupId: groupId}, {sort: {currDateStr: 1}}).fetch();
            return main;
        }
        else
            return null;
    },
    'show3AUHexp': function () {
        //console.log('mainText.find.count: ', mainText.find().count());
        var main = UHexperiments.find({}, {sort: {answer1MsecCl: 1}}).fetch();
        return main;
    },
    'show3ABHistory': function () {
        //console.log('mainText.find.count: ', mainText.find().count());
        var main = exp3Bhistory.find().fetch();
        for (var j = 0; j < main.length; j++) {
            main[j].countIdA = exp3Bhistory.find({idA: main[j].idA, idB: {$ne: main[j].idB}}).count();
        }
        return main;
    }
});

Template.dbdata.events({
    'click #findByWorkerId': function(e) {
        var workerId = document.getElementById("inputWorkerId").value;
        //console.log('workerId = ', workerId);
        Session.set('workerId', workerId);
        Session.set('groupId', null);
        //var main = UHexperiments.findOne({workerId: workerId}).fetch();
        //Session.set('groupId', main.groupId);
        //Router.go('/dbdata');
    },
    'click #findByGroupId': function(e) {
        var groupId = document.getElementById("inputWorkerId").value;
        //console.log('groupId = ', groupId);
        Session.set('groupId', groupId);
        Session.set('workerId', null);
        //var main = UHexperiments.findOne({workerId: workerId}).fetch();
        //Session.set('groupId', main.groupId);
        //Router.go('/dbdata');
    }
});

Template.itemText.events({
    'mousedown #pid1': function(e) {
        var pid = '1';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid1': function(e) {
        var pid = '1';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid2': function(e) {
        var pid = '2';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid2': function(e) {
        var pid = '2';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid3': function(e) {
        var pid = '3';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid3': function(e) {
        var pid = '3';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid4': function(e) {
        var pid = '4';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid4': function(e) {
        var pid = '4';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid5': function(e) {
        var pid = '5';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid5': function(e) {
        var pid = '5';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid6': function(e) {
        var pid = '6';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid6': function(e) {
        var pid = '6';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid7': function(e) {
        var pid = '7';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid7': function(e) {
        var pid = '7';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid8': function(e) {
        var pid = '8';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid8': function(e) {
        var pid = '8';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid9': function(e) {
        var pid = '9';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid9': function(e) {
        var pid = '9';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid10': function(e) {
        var pid = '10';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid10': function(e) {
        var pid = '10';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid11': function(e) {
        var pid = '11';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid11': function(e) {
        var pid = '11';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid12': function(e) {
        var pid = '12';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid12': function(e) {
        var pid = '12';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid13': function(e) {
        var pid = '13';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid13': function(e) {
        var pid = '13';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid14': function(e) {
        var pid = '14';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid14': function(e) {
        var pid = '14';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid15': function(e) {
        var pid = '15';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid15': function(e) {
        var pid = '15';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid16': function(e) {
        var pid = '16';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid16': function(e) {
        var pid = '16';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid17': function(e) {
        var pid = '17';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid17': function(e) {
        var pid = '17';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid18': function(e) {
        var pid = '18';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid18': function(e) {
        var pid = '18';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid19': function(e) {
        var pid = '19';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid19': function(e) {
        var pid = '19';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid20': function(e) {
        var pid = '20';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid20': function(e) {
        var pid = '20';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid21': function(e) {
        var pid = '21';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid21': function(e) {
        var pid = '21';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid22': function(e) {
        var pid = '22';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid22': function(e) {
        var pid = '22';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid23': function(e) {
        var pid = '23';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid23': function(e) {
        var pid = '23';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid24': function(e) {
        var pid = '24';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid24': function(e) {
        var pid = '24';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid25': function(e) {
        var pid = '25';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid25': function(e) {
        var pid = '25';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid26': function(e) {
        var pid = '26';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid26': function(e) {
        var pid = '26';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid27': function(e) {
        var pid = '27';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid27': function(e) {
        var pid = '27';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid28': function(e) {
        var pid = '28';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid28': function(e) {
        var pid = '28';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    },
    'mousedown #pid29': function(e) {
        var pid = '29';
        Session.set('downPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {downPid: pid}});
    },
    'mouseup #pid29': function(e) {
        var pid = '29';
        //Session.set('upPid', pid);
        var exp = UHexperiments.findOne();
        if (exp)
            UHexperiments.update(exp._id, {$set: {upPid: pid}});
    }
});

/*Session.setDefault('page', 'home');

Template.UI.helpers({
  isPage: function(page){
    return Session.equals('page', page)
  }
})

Template.UI.events({
  'click .clickChangesPage': function(event, template){
    Session.set('page', event.currentTarget.getAttribute('data-page'))
  }
})

Template.hello.events({
    'click button'(event, instance) {
      // Go no next page
      //Router.go('/product');
  },
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/