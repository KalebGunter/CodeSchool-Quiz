




var app = new Vue({
    el: "#app",
    data:{
        QUIZ: [
            {
                title: "Question 1",
                questionText: "What is the 3rd letter in the alphabet?",
                answers: [
                    {text: "a", correct: false},
                    {text: "b", correct: false},
                    {text: "c", correct: true},
                    {text: "d", correct: false}
                ],
                userAnswer: ""
            },
            {
                title: "Question 2",
                questionText: "How many licks to the center of a tootsie pop?",
                answers: [
                    {text: "3", correct: true},
                    {text: "682", correct: false},
                    {text: "841", correct: false},
                    {text: "1000", correct: false},
                ],
                userAnswer: ""
            },
            {
                title: "Question 3",
                questionText: "What percentage of the Earth is covered in water?",
                answers: [
                    {text: "70", correct: false},
                    {text: "69", correct: false},
                    {text: "71", correct: true},
                    {text: "30", correct: false}
                ],
                userAnswer: ""
            },
            {
            title: "Question 4",
                questionText: "On what continent is the United States",
                answers: [
                    {text: "Africa", correct: false},
                    {text: "South America", correct: false},
                    {text: "North America", correct: true},
                    {text: "Europe", correct: false}
                ],
                userAnswer: ""
            },
            {
                title: "Question 5",
                questionText: "What is the primary language of South America",
                answers: [
                    {text: "Mandarin", correct: false},
                    {text: "English", correct: false},
                    {text: "Spanish", correct: true},
                    {text: "Portugese", correct: false}
                ],
                userAnswer: ""
            }
        ],
       currentPage: 1,
       isDisabled: 1,
  
    },
    methods:{
        // used for showing questions individually
        nextQuestion : function () {},

        // used for showing questions individually
        previousQuestion : function () {},

        setPage: function (page) {},
        
        calculateScore: function () {},
        isAllAnswered: function () {
            isDisabled = 0;
            for (let i = 0; i < this.QUIZ.length; i++) {
                if (this.QUIZ[i].userAnswer == "") {
                    isDisabled = 1;
                }
            }
        }
    },
    computed: {
        // a function that returns true if 0 userAnswer fields are blank ("")
        // IF there is still 1 or more blank ("") userAnswer field, return false
        areAllQuestionsAnswered: function () {}
    }
});