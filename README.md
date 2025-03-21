Introduction

This assessment evaluates your understanding of fundamental JavaScript concepts and your ability to apply them in practical scenarios. You are encouraged to be creative with your implementation while ensuring that your project incorporates the required concepts correctly.

This is a take-home assessment with a total duration of two (2) days, including weekends and holidays. The deadline for submission is 5:00 PM on the second day after the assessment is assigned. Your instructor may provide class time for you to work on the assessment if the schedule permits.

Objectives

Your implementation should demonstrate proficiency in the following areas:

Accurate use of basic JavaScript syntax.

Effective use of control flow structures such as conditionals and loops.

Organization and management of data using arrays and objects.

Development of reusable functions.

Iteration and navigation through data collections.

Implementation of error handling to manage potential failures gracefully.

Submission Guidelines

Submit the link to your completed assessment via the Start Assignment button on the Assignment page in Canvas. Your submission should include:

A GitHub repository link containing your completed project.

Task Overview

You will create a script that gathers, processes, and outputs data according to a given specification. This scenario is adapted from a real-world application. Below are the types of data you will work with.

Data Structures

CourseInfo Object

{
  "id": number,
  "name": string
}

AssignmentGroup Object

{
  "id": number,
  "name": string,
  "course_id": number,  // ID of the course the assignment group belongs to
  "group_weight": number,  // Percentage weight of the assignment group
  "assignments": [AssignmentInfo]
}

AssignmentInfo Object

{
  "id": number,
  "name": string,
  "due_at": "YYYY-MM-DDTHH:MM:SSZ",  // Due date of the assignment
  "points_possible": number
}

LearnerSubmission Object

{
  "learner_id": number,
  "assignment_id": number,
  "submission": {
    "submitted_at": "YYYY-MM-DDTHH:MM:SSZ",
    "score": number
  }
}

Expected Output

Your program should return an array of objects formatted as follows:

[
  {
    "id": number,  // Learner ID
    "avg": number,  // Weighted average score
    "<assignment_id>": number  // Percentage score for each assignment
  }
]

Processing Rules

If an AssignmentGroup does not belong to its course (mismatched course_id), throw an error.

Validate data for inconsistencies (e.g., incorrect data types, missing fields).

If points_possible is 0, handle gracefully to avoid division by zero.

Ignore assignments that are not yet due in both the average calculation and individual scores.

If a submission is late (submitted_at is past due_at), deduct 10% of total possible points.

Implementation

You will create a function named getLearnerData() that processes the data:

Function Signature

function getLearnerData(courseInfo, assignmentGroups, learnerSubmissions) {
  // Implementation here
}

The function should return an array of formatted objects as described in the expected output.

You may use helper functions to keep your code organized.

Example

A working example is provided here:
Live Example on CodeSandbox

Use the sample data provided in the sandbox to begin your implementation. Modify the data to test for:

Edge cases

Error handling

Potential data issues

Notes

Ensure proper documentation and comments in your code.

Write clear and readable code, following best practices.

Test your function rigorously before submission.

Good luck!