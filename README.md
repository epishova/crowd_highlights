# Research on text analysis using crowd work and text highlights

This repository contains my master’s project. In that study, I aimed to verify if the crowd can solve challenging problems of general text analysis. The repository includes a project report and source code to reproduce experiments and analyze data.

The purpose of this repository is twofold. First, to cover the project findings since they may point out to a useful direction and save some time to those who work on a similar problem. Second, I implemented the experiments using [Meteor javascript framework](https://www.meteor.com/). I couldn’t find many Meteor examples when I worked on my code. Hopefully the source code published here would be useful for other developers in their implementations when they searched for Meteor code snippets.

## Details
As a crowd platform I used [TurkServer](http://turkserver.meteorapp.com/) from Amazon that works with Meteor. Please see the report file to get a description of the experiments that I ran on the platform. The repository contains a directory with Meteor code for each experiment and each task.

As a backend I used MongoDB to store the workers' results. Here is the database schema:
* UHexperiments - main collection with the following fields: 
  * groupId - unique id to locate any assignment. It is used to join all collections.
  * goBefore - unique id of Treatment-2-annotators assignment, which is used by Treatment-2-labeler worker
  * workerId - worker id which can be used to pay bonuses
* bigLog - collection which contains all worker actions on the web page.
* mainText - collection which contains texts of each worker.
* marked - collection which contains highlights of each worker.
* exp3AB - collection which maps annotators and labelers in Treatment 2 group. You need to insert groupIds of Treatment-2-annotators workers before running labeling experiments. It will look like `exp3AB.insert({idRandom: 688, idB: "", idA: "Hk9wHJkq2sLNM2xXr"});` Where: 
  * idRandom is a unique number; 
  * idB will get value after Treatment-2-labelers worker complete their assignment; 
  * idA contains groupId of Treatment-2-annotators worker. There may be many Treatment-2-labelers workers assigned the same idA number. All of them will be listed in idB field.  

## Data files in the repository

* Gold standards_corrected.doc - contains all texts for all tasks with marked clues/traps, and correct answers. The highlights in the text are made for reference. To check the exact words which determine clues/traps see Python script  
* FN_FP_stat - false positives and false negatives counts and ratios for clues and traps for all tasks
* regression_*.csv - data which I used for regression models
* marks_FEB_2_bin.txt - highlights extracted from the database for Treatment 2 binary answers
* marks_FEB_3_bin.txt - highlights extracted from the database for Treatment 3 binary answers
* db_script_* - files containing groupId for which I extracted highlights from the database
* marks_* - dumped highlights. Those files are parsed by Python scripts to count statistics

Below are the steps which I performed in order to extract workers' highlights:

1. You need to install MongoDB shell
2. Go to the shell folder and execute:
```
>> mongo "INSTANCE" --authenticationDatabase admin --ssl --username “USER” --password “PASS”
>> use “DB”
>> show collections
>> DBQuery.shellBatchSize = 300
```

I suggest always executing the last command. Otherwise, the DB shrinks the number of output rows and you may miss some results.

3. If you need to extract the workers' highlights, you need to prepare queries like:
```
db.marked.find({groupId: "i6t4bGDwb4BkgmBnY"});
db.marked.find({groupId: "6vv7LPu8Wwsw8AY5d"});
db.marked.find({groupId: "FAnEpNQYrG2bHoyTX"});
db.marked.find({groupId: "oQikxxG9G3962SsnZ"});
db.marked.find({groupId: "HQ5STHeAp3wtKKxRt"});
db.marked.find({groupId: "Ae2ELKhYkDDg7v4tA"});
...
```

4. The DB will return you rows like following:
```
{ "_id" : "jfXQxv9gET7NJuMaY", "name" : "Kitzbuel", "groupId" : "bwXvLKDq8thSjSyBq", "pId" : 13, "startPos" : 48, "endPos" : 53 }
{ "_id" : "FSRyjopiePZ6RFaGw", "name" : "Kitzbuel", "groupId" : "bwXvLKDq8thSjSyBq", "pId" : 13, "startPos" : 100, "endPos" : 104 }
{ "_id" : "rzwm4CGc2mnzCnPvY", "name" : "Kitzbuel", "groupId" : "bwXvLKDq8thSjSyBq", "pId" : 17, "startPos" : 236, "endPos" : 241 }
{ "_id" : "X9n4bN74ELwt3cL7M", "name" : "Kitzbuel", "groupId" : "bwXvLKDq8thSjSyBq", "pId" : 13, "startPos" : 178, "endPos" : 187 }
```

6. The above rows can be parsed by `results_parser.py` parser that counts false positives, false negatives ect. for clues, traps, empty words. It counts each clue/trap/empty as highlighted if any part of it is highlighted by the worker.
