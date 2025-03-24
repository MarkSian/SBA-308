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
// 5. STEP 2: Filter the Due Assignments *Only assignments that are due should be included in the calculations. Account for assignments with future due dates. ###
// 6. STEP 3: Calculate Learner submssions *Process learner scores and handle cases of late submissions.

// *Turning an assignment early: Does not get evaluated as the due date is not the current date or has passed. ###
// *Turning an assignment late: The score is reduced by 10% of the total points possible. ### we only have one late assignement for learner 132.

const getLearnerData = (courseInfo, assignmentGroup, learnerSubmissions) => {
    try {
        console.log("Step 1: Validating assignmentGroup");
        // Check if the assignmentGroup ID matches the courseInfo ID
        if (assignmentGroup.course_id !== courseInfo.id) {
            // If we fail the validation, we throw an error.
            throw new Error("assignmentGroup ID does not match courseInfo ID");
        }// Passing the validation will pass this message in the console.
        console.log("assignmentGroup is valid");

        console.log("Step 2: Filtering Due Assignments");
        // A variable that stores the current date object.
        const currentDate = new Date();
        // A variable that stores the assignments from the assignmentGroup that are due.
        // The filter method will iterate through the assignments and return only the assignments that are due before the current date.
        // The due_at is a string from the assignmentInfo object and needs to be converted to a date object for comparison to currentDate.
        // Should return two assignments and ignore the third assignment 1000 years in the future.
        const dueAssignments = assignmentGroup.assignments.filter(assignments => {
            const dueDate = new Date(assignments.due_at);
            return dueDate <= currentDate;
        })
        console.log("currentDate: ", currentDate);
        console.log("Assignment Due Date:", dueAssignments);

        console.log("Step 3: Calculate Learner Submissions");
        // A new map object that will store learner data.
        // Will use learner_id as the key to access their scores and submission data..
        const learnerDataMap = new Map();
        // Iterates over learnerSubmissions. learnerSubmission data is assigned to the variable submission.
        for (const submission of learnerSubmissions) {
            // .find method is used to match the assignment_id from the submission variable to the assignment_id of the dueAssignments or assignmentGroup.
            const assignment = dueAssignments.find(assignment => assignment.id === submission.assignment_id);
            // If statemetn to validate if the assignment exists.
            if (assignment) {
                const learnerID = submission.learner_id;
                const assignmentID = assignment.id;
                const pointsPossible = assignment.points_possible;
                let score = submission.submission.score;

                console.log(`Calclating submission for learner ${learnerID} for assignment ${assignmentID}`);

                // Prevents scores being divided by 0.
                if (pointsPossible === 0) {
                    throw new Error("Points possible for an assignment cannot be 0");
                }
                // converts the date strings of assignment due date and the submitted date to date objects for comparison.
                const dateSubmitted = new Date(submission.submission.submitted_at);
                const dueDate = new Date(assignment.due_at);
                // if the dateSubmitted is greater than the dueDate, the submission is late.
                if (dateSubmitted > dueDate) {
                    console.log("Submission is late");
                    // handles the late penalty math
                    score -= 0.1 * pointsPossible;
                    // (140 - 15 = 125) score is 125
                    console.log("Score with late penalty:", score);
                }
                // Convert the score to a percentage.
                const scorePercentage = (score / pointsPossible) * 100;
                console.log(`Official Score:${scorePercentage}% `);

            }

        }

        return { message: "assignmentGroup is valid", data: { courseInfo, assignmentGroup, learnerSubmissions } };
    } catch (error) {
        console.error("error in step 1: ", error.message);
        return [];
    }

};
console.log(getLearnerData(courseInfo, assignmentGroup, learnerSubmissions));
