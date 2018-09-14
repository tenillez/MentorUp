var quizQuestions = [
    {
        question: "Are you interested in being a Mentor or a Mentee?",
        id: 1,
        answers: [
            {
                value: "True",
                content: "Mentor"
            },
            {
                value: "False",
                content: "Mentee"
            },
            // {
            //     value: "B",
            //     content: "both"
            // }
        ]
    },
    {
        question: "How many years of experience do you have?",
        weight: 10,
        id: 2,
        answers: [
            {
                value: "A",
                content: "0-3 years"
            },
            {
                value: "B",
                content: "3-5 years"
            },
            {
                value: "C",
                content: "5-10 years"
            },
            {
                value: "D",
                content: "10+ years"
            },
            // {
            //     value: "5",
            //     content: "15+ years"
            // }
        ]
    },
    {
        question: "As a mentee, what adjective best describes the role you would like your mentor to play?  As a mentor, what adjective best describes the role you would play?",
        weight: 9,
        id: 3,
        answers: [
            {
                value: "A",
                content: "Motivator"
            },
            {
                value: "B",
                content: "Teacher"
            },
            {
                value: "C",
                content: "Colleague"
            },
            {
                value: "D",
                content: "Sounding Board"
            }

        ]
    },
    {
        question: "As a mentee, which area do you most want support? As a mentor, which area are you interested in supporting most?",
        weight: 8,
        id: 4,
        answers: [
            {
                value: "A",
                content: "Increase self-confidence"
            },
            {
                value: "B",
                content: "Improve communication skills"
            },
            {
                value: "C",
                content: "Knowledge of professional etiquette and standards of personal presentation"
            },
            {
                value: "D",
                content: "Increase professional network"
            }

        ]
    },
    {
        question: "Which department do you belong to (or are interested in)?",
        weight: 7,
        id: 5,
        answers: [
            {
                value: "A",
                content: "Sales, Business Development, or Customer Support"
            },
            {
                value: "B",
                content: "Operations, Marketing, Accounting, Finance, or HR"
            },
            {
                value: "C",
                content: "Software Development or IT"
            },
            {
                value: "D",
                content: "Looking for the next opportunity"
            }
        ]
    },
    {
        question: "I am driven by which of the following?",
        weight: 6,
        id: 6,
        answers: [
            {
                value: "A",
                content: "Learning something new and creativity"
            },
            {
                value: "B",
                content: "Goals and/or the end-result"
            },
            {
                value: "C",
                content: "Money"
            },
            {
                value: "D",
                content: "Numbers and Statistics"
            }
        ]
    },
    {
        question: "Which statement best describes you?",
        weight: 5,
        id: 7,
        answers: [
            {
                value: "A",
                content: "I want to be known"
            },
            {
                value: "B",
                content: "I want to enjoy life"
            },
            {
                value: "C",
                content: "I want to learn as much as possible"
            },
            {
                value: "D",
                content: "I want to help people"
            }

        ]
    },
    {
        question: "What do you like to do during your free time?",
        weight: 4,
        id: 8,
        answers: [
            {
                value: "A",
                content: "High Impact, Physical movement, i.e. hiking, sports, etc."
            },
            {
                value: "B",
                content: "Who has hobbies?  I have kids! "
            },
            {
                value: "C",
                content: "Low Impact, Low-key activity, i.e. reading, television, etc. "
            },
            {
                value: "D",
                content: "Creating art/content or pursuing side-projects"
            }
        ]
    },
    {
        question: "My priorities in life from most important to least important more closely resemble which of the following?",
        weight: 3,
        id: 9,
        answers: [
            {
                value: "A",
                content: "Work, Creative Endeavors, Family, Friends"
            },
            {
                value: "B",
                content: "Family, Work, Friends, Creative Endeavors"
            },
            {
                value: "C",
                content: "Family, Friends, Work, Creative Endeavors"
            },
            {
                value: "D",
                content: "Creative Endeavors, Work, Family, Friends"
            }
        ]
    },
    {
        question: "If I have a problem or conflict with someone at work:",
        weight: 2,
        id: 10,
        answers: [
            {
                value: "A",
                content: "I speak up right away"
            },
            {
                value: "B",
                content: "I wait for an appropriate time, then bring it up"
            },
            {
                value: "C",
                content: "I wait to see if the problem persists, then eventually say something about it"
            },
            {
                value: "D",
                content: "I probably wouldn't say anything"
            }
        ]
    },
    {
        question: "When someone comes up with a 'new' plan or procedure, you usually think:",
        weight: 1,
        id: 11,
        answers: [
            {
                value: "A",
                content: "Excited. I like staying on the cutting edge and experimenting"
            },
            {
                value: "B",
                content: "Irritated. Things run more smoothly with the established procedures"
            },
            {
                value: "C",
                content: "Interested. I like changing things up so that I don't get bored"
            },
            {
                value: "D",
                content: "Slightly apprehensive. I might not be comfortable with the new routine"
            }
        ]
    }
];

export default quizQuestions;
