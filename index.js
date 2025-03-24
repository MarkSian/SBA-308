/* Objectives */
// 1. Employ basic JavaScript syntax
// 2. Implement control flow structures such as conditionals and loops effectively.
// 3. Use arrays and objects to organize and mangae data.
// 4. Develop functions to create reusable code.
// 5. Utilize loops and interation to naviage through data collections.
// 6. Implement error handling to manage potential code failures gracefully.

/* Instructions */
// You will create a script that gathers data, processes it, and then outputs a consistent result as described by a specific set of requirements.
// This is a very typical situtation in industr, and this particular scenario has been modified from a real application.

/* Data Structures */
// courseInfo: an object that contains information about a course
// courseInfo = { "id": number, "name": string,}

// assignmentGroup: an object that contains information about an assignment
// assignmentGroup = { "id": number, "name": string, "course_id": number, "group_weight": number, "assignments": [assignmentInfo]}

// assignmentInfo: an object within the assignments array
// assignmentInfo = { "id": number, "name": string, "due_at": Date string, "points_possible": number,}

// learnerSubmission: an object that contains information a student's submsssion and grade
// learnerSubmission = { "learner_id": number, "assignment_id": number, "submission":{ "submitted_at": Date string, "score": number,}}






/* Provided Data */
// cousrInfo, assignmentGroup, learnerSubmissions are passed in as arguments within the function
const courseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

const assignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

const learnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];


/* Checklist */
// 1. create a function that takes in courseInfo, assignmentGroup, and learnerSubmissions as arguments. ###
// 2. the function should include try/catch to handle any errors that may occur. ###
// 3. use an arrow function to create the function. const functionName = (parameter) => {function body} ###
// 4. STEP 1: Validation for Assignment Group *the assignmentGroup must match the courseInfo. id:451 ###


const getLeranerData = (courseInfo, assignmentGroup, learnerSubmissions) => {
    try {
        console.log("Step 1: Validating assignmentGroup");
        if (assignmentGroup.course_id !== courseInfo.id) {
            throw new Error("assignmentGroup ID does not match courseInfo ID");
        }
        console.log("assignmentGroup is valid");
        return { message: "assignmentGroup is valid", data: { courseInfo, assignmentGroup, learnerSubmissions } };
    } catch (error) {
        console.error("error in step 1: ", error.message);
        return [];
    }

};
console.log(getLeranerData(courseInfo, assignmentGroup, learnerSubmissions));
