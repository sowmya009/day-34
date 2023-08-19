db.users.insertMany([
    {
        'userId': 1,
        'name': 'Sowmya',
        'email': 'sowmya123@gmail.com',
        'mobile': '8100329475'
    },
    {
        'userId': 2,
        'name': 'Giri',
        'email': 'Giri@gmail.com',
        'mobile': '9432849390'
    },
    {
        'userId': 3,
        'name': 'Samyu',
        'email': 'samyu@gmail.com',
        'mobile': '8178657983'
    },
    {
        'userId': 4,
        'name': 'Jansi',
        'email': 'jansi@gmail.com',
        'mobile': '9376523288'
    },

]);

//codekata
db.codekata.insertMany([
    {
        'userId': 1,
        'problemsSolved': 200,
        'rank': 40000,
        'geekscoins': 4800
    },
    {
        'userId': 2,
        'problemsSolved': 300,
        'rank': 20000,
        'geekscoins': 7800
    },
    {
        'userId': 3,
        'problemsSolved': 250,
        'rank': 30000,
        'geekscoins': 6800
    },
    {
        'userId': 4,
        'problemsSolved': 100,
        'rank': 50000,
        'geekscoins': 2800
    },
]);

//attendance
db.attendance.insertMany([
    {
        'userId': 1,
        'date': new Date("2020-10-15"),
        'status': 'absent'
    },
    {
        'userId': 2,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
    {
        'userId': 3,
        'date': new Date("2020-10-15"),
        'status': 'absent'
    },
    {
        'userId': 4,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
]);

//topics
db.topics.insertMany([
    {
        'topic_id': 1,
        'topic_name': 'Javascript-functions',
        'tasks': ["arrow-functions", "inline-functions", "IIFE"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 2,
        'topic_name': 'Javascript-variables',
        'tasks': ["var", "let"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 3,
        'topic_name': 'Javascript-events',
        'tasks': ["event-bubbling", "event-listeners"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 4,
        'topic_name': 'mysql-crud',
        'tasks': ["create-table", "update-table", "insert"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 5,
        'topic_name': 'mongo',
        'tasks': ["find", "aggregate"],
        'date': new Date("2020-10-15"),
    }
]);

//tasks
db.tasks.insertMany([
    {
        'user_id': 1,
        'task_name': 'TV application design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-10-21")
    },
    {
        'user_id': 2,
        'task_name': 'TV application design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
    {
        'user_id': 3,
        'task_name': 'TV application design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
    {
        'user_id': 4,
        'task_name': 'TV application design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
    {
        'user_id': 5,
        'task_name': 'TV application design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
]);

//drives
db.drives.insertMany([
    {
        'drive_id': 1,
        'drive_name': 'google',
        'user_ids': [1, 2, 3, 4],
        'date': new Date("2020-10-15")
    },
    {
        'drive_id': 2,
        'drive_name': 'hotstar',
        'user_ids': [1, 2, 3, 4],
        'date': new Date("2020-10-15")
    },
    {
        'drive_id': 3,
        'drive_name': 'microsoft',
        'user_ids': [3, 4],
        'date': new Date("2020-10-25")
    },
    {
        'drive_id': 4,
        'drive_name': 'amazon',
        'user_ids': [1, 2, 3],
        'date': new Date("2020-10-30")
    },
    {
        'drive_id': 5,
        'drive_name': 'redbus',
        'user_ids': [1, 2, 3, 4],
        'date': new Date("2020-09-15")
    },
]);

//mentors
db.mentors.insertMany([
    {
        'mentor_id': 5,
        'mentee_ids': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    },
    {
        'mentor_id': 6,
        'mentee_ids': [1, 2, 3, 4]
    },
    {
        'mentor_id': 7,
        'mentee_ids': [1, 2, 3]
    },
    {
        'mentor_id': 8,
        'mentee_ids': [1]
    },
    {
        'mentor_id': 9,
        'mentee_ids': [1, 2, 3, 4, 5, 6, 7, 8]
    },
]);


//queries
//1)Find all the topics and tasks which are thought in the month of October

db.topics.aggregate([
    {
        $project :{
            'topic_name': 1,
            'date': '$date',
            'month' : {
                $month: '$date'
            },
            'year': {
                $year: '$date'
            },
            
        }
    },
    {
        $match:{
            'month': 10,
            'year': 2020
        }
    },
    {
        $project:{
            'topic_name': 1,
            'date': 1
        }
    }
    
]).pretty()


//2) Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.drives.aggregate([
    {
       $project:{
           'drive_name': '$dirve_name',
           'date': 1,
           'day': { $dayOfMonth : '$date'},
           'month': {$month : '$date'},
           'year': {$year: '$date'}
       }
    },
    {
        $match: {
            'year':{
                $eq : 2020
            },
            'month':{
                $eq : 10
            },
            'day': {
                $gte: 15,
                $lte:31
            }
        }
    },
    {
        $project: {
            'drive_name': 1,
            'date': 1
        }
    }

]).pretty()


//3) Find all the company drives and students who are appeared for the placement.
db.drives.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'user_ids',
            foreignField: 'userdId',
            as: 'res'
        }
    }
]).pretty()

//4) Find the number of problems solved by the user in codekata
db.codekata.aggregate([
    {
        $lookup:{
            from: 'users',
            localField: 'userId',
            foreignField: 'userdId',
            as: 'user_details'
        }
    },
    {
        $project: { 
            'name' : '$user_details.name',
            'problems_solved': '$problemsSolved'
        }
    }
]).pretty()


//5) Find all the mentors with who has the mentee's count more than 15
db.mentors.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'mentor_id',
            foreignField: 'userdId',
            as: 'mentor_details'
        }
    },
    {
        $project: {
            'mentor_name': '$mentor_details.name',
            'mentees_count': {
                $size: '$mentee_ids'
            }
        }
    },
    {
        $match: {
            'mentees_count': {
                $gte: 15
            }
        }
    }
]).pretty()

//6)Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance.aggregate([
    {
        $lookup:{
            from: 'tasks',
            localField: 'userId',
            foreignField: 'user_id',
            as: 'userTasks'
        }
    },
    {
        $match: {
            'userTasks.submission_date': {
                $gte: ISODate("2020-10-15T00:00:00Z"),
                $lte: ISODate("2020-11-01T00:00:00Z"),
            },
            'status': 'absent'
        }
    },
    {
        $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: 'userdId',
            as: 'userDetails'

        }
    },
    {
        $project: {
            'userDetails': {
                $arrayElemAt: ["$userDetails", 0]
            },
            'taskDetails': {
                $arrayElemAt: ["$userTasks", 0]
            },
            'status': 1
        }
    },
    {
        $project: {
            'Name': "$userDetails.name",
            'Task Name': '$taskDetails.task_name',
            'status': 1,
            'Submission date': '$taskDetails.submission_date',

        }
    }
]).pretty()