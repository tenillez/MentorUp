var quizQuestions = [
    {
        question: "Are you interested in being a Mentor or a Mentee?",
        answers: [
            {
                value: 0,
                content: "Mentor"
            },
            {
                value: 1,
                content: "Mentee"
            },
            // {
            //     value: "2",
            //     content: "both"
            // }
        ]
    },
    {
        question: "How many years of experience do you have?",
        weight: 10,
        answers: [
            {
                value: 1,
                content: "0-3 years"
            },
            {
                value: 2,
                content: "3-5 years"
            },
            {
                value: 3,
                content: "5-10 years"
            },
            {
                value: 4,
                content: "10-15 years"
            },
            {
                value: 5,
                content: "15+ years"
            }
        ]
    },
    {
        question: "As a mentee, what adjective best describes the role you would like your mentor to play?  As a mentor, what adjective best describes the role you would play?",
        weight: 9,
        answers: [
            {
                value: 1,
                content: "Motivator"
            },
            {
                value: 2,
                content: "Teacher"
            },
            {
                value: 3,
                content: "Colleague"
            },
            {
                value: 4,
                content: "Sounding Board"
            }

        ]
    },
    {
        question: "As a mentee, which area do you most want support? As a mentor, which area are you interested in supporting most?",
        weight: 8,
        answers: [
            {
                value: 1,
                content: "Increase self-confidence"
            },
            {
                value: 2,
                content: "Improve communication skills"
            },
            {
                value: 3,
                content: "Knowledge of professional etiquette and standards of personal presentation"
            },
            {
                value: 4,
                content: "Increase professional network"
            }

        ]
    },
    {
        question: "Which department do you belong to (or are interested in)?",
        weight: 7,
        answers: [
            {
                value: 1,
                content: "Sales, Business Development, or Customer Support"
            },
            {
                value: 2,
                content: "Operations, Marketing, Accounting, Finance, or HR"
            },
            {
                value: 3,
                content: "Software Development or IT"
            },
            {
                value: 4,
                content: "Looking for the next opportunity"
            }
        ]
    },
    {
        question: "I am driven by which of the following?",
        weight: 6,
        answers: [
            {
                value: 1,
                content: "Learning something new and creativity"
            },
            {
                value: 2,
                content: "Goals and/or the end-result"
            },
            {
                value: 3,
                content: "Money"
            },
            {
                value: 4,
                content: "Numbers and Statistics"
            }
        ]
    },
    {
        question: "Which statement best describes you?",
        weight: 5,
        answers: [
            {
                value: 1,
                content: "I want to be known"
            },
            {
                value: 2,
                content: "I want to enjoy life"
            },
            {
                value: 3,
                content: "I want to learn as much as possible"
            },
            {
                value: 4,
                content: "I want to help people"
            }

        ]
    },
    {
        question: "What do you like to do during your free time?",
        weight: 4,
        answers: [
            {
                value: 1,
                content: "High Impact, Physical movement, i.e. hiking, sports, etc."
            },
            {
                value: 2,
                content: "Who has hobbies?  I have kids! "
            },
            {
                value: 3,
                content: "Low Impact, Low-key activity, i.e. reading, television, etc. "
            },
            {
                value: 4,
                content: "Creating art/content or pursuing side-projects"
            }
        ]
    },
    {
        question: "My priorities in life from most important to least important more closely resemble which of the following?",
        weight: 3,
        answers: [
            {
                value: 1,
                content: "Work, Creative Endeavors, Family, Friends"
            },
            {
                value: 2,
                content: "Family, Work, Friends, Creative Endeavors"
            },
            {
                value: 3,
                content: "Family, Friends, Work, Creative Endeavors"
            },
            {
                value: 4,
                content: "Creative Endeavors, Work, Family, Friends"
            }
        ]
    },
    {
        question: "If I have a problem or conflict with someone at work:",
        weight: 2,
        answers: [
            {
                value: 1,
                content: "I speak up right away"
            },
            {
                value: 2,
                content: "I wait for an appropriate time, then bring it up"
            },
            {
                value: 3,
                content: "I wait to see if the problem persists, then eventually say something about it"
            },
            {
                value: 4,
                content: "I probably wouldn't say anything"
            }
        ]
    },
    {
        question: "When someone comes up with a 'new' plan or procedure, you usually think:",
        weight: 1,
        answers: [
            {
                value: 1,
                content: "Excited. I like staying on the cutting edge and experimenting"
            },
            {
                value: 2,
                content: "Irritated. Things run more smoothly with the established procedures"
            },
            {
                value: 3,
                content: "Interested. I like changing things up so that I don't get bored"
            },
            {
                value: 4,
                content: "Slightly apprehensive. I might not be comfortable with the new routine"
            }
        ]
    }
];

export default quizQuestions;
