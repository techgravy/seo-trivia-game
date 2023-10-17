let gameArea;
let question;
let answer1;
let answer2;
let answer3;
let answer4;
let answer5;
let answer6;
let answer7;
let answer8;
let answer9;
let answer10;
let correctAnswer;
let score = 0;

let questions = [
    {
        question: "What is the primary purpose of a robots.txt file?",
        answer1: "To block search engines from crawling a website",
        answer2: "To verify a website's ownership with Google",
        answer3: "To specify the preferred domain for a website",
        answer4: "To increase a website's PageRank",
        correctAnswer: "To block search engines from crawling a website"
    },
    {
        question: "Which of the following is an example of a black hat SEO technique?",
        answer1: "Optimizing title tags and meta descriptions",
        answer2: "Creating high-quality content",
        answer3: "Keyword stuffing",
        answer4: "Submitting a sitemap to search engines",
        correctAnswer: "Keyword stuffing"
    },
    {
        question: "Which of the following is a type of structured data?",
        answer1: "CSS",
        answer2: "JavaScript",
        answer3: "Schema.org",
        answer4: "HTML",
        correctAnswer: "Schema.org"
    },
    {
        question: "What is the primary benefit of using alt text for images on a webpage?",
        answer1: "To improve the website's load time",
        answer2: "To improve the website's design",
        answer3: "To improve accessibility and SEO",
        answer4: "To improve the website's security",
        correctAnswer: "To improve accessibility and SEO"
    },
    {
        question: "Which of the following is a common cause of duplicate content?",
        answer1: "Poor website design",
        answer2: "Limited server resources",
        answer3: "Multiple URLs leading to the same content",
        answer4: "Insufficient backlinks",
        correctAnswer: "Multiple URLs leading to the same content"
    },
    {
        question: "What is the primary benefit of using a CDN?",
        answer1: "To reduce the amount of spam on a website",
		answer2: "To improve website security",
		answer3: "To improve website speed and performance",
		answer4: "To increase the amount of traffic to a website",
		correctAnswer: "To improve website speed and performance"
		},
		{
		question: "Which of the following is an example of a crawl error?",
		answer1: "A broken link",
		answer2: "A slow-loading webpage",
		answer3: "An incorrect robot.txt file",
		answer4: "A missing title tag",
		correctAnswer: "A broken link"
		},
		{
		question: "What is the primary benefit of using an XML sitemap?",
		answer1: "To improve website design",
		answer2: "To improve website security",
		answer3: "To help search engines discover and index the pages of a website",
		answer4: "To increase the amount of traffic to a website",
		correctAnswer: "To help search engines discover and index the pages of a website"
		},
		{
		question: "What is the primary benefit of using HTTP/2?",
		answer1: "To improve website security",
		answer2: "To improve website speed and performance",
		answer3: "To improve website design",
		answer4: "To increase the amount of traffic to a website",
		correctAnswer: "To improve website speed and performance"
		},
		{
		question: "Which of the following is an example of a website's URL structure?",
		answer1: "www.example.com/category1/page1",
		answer2: "example.com/category-1/page-1",
		answer3: "example.com?cat=1&page=1",
		answer4: "www.example.com?category=1&page=1",
		correctAnswer: "www.example.com/category1/page1"
}

];

let currentQuestion = 0;

function setup() {
    gameArea = createCanvas(400, 400);
    gameArea.parent("game-area");
    displayQuestion();
}

function displayQuestion() {
    question = createElement('h2', questions[currentQuestion].question);
    question.position(50, 50);

    answer1 = createButton(questions[currentQuestion].answer1);
    answer1.position(50, 100);
    answer1.mousePressed(checkAnswer);

    answer2 = createButton(questions[currentQuestion].answer2);
    answer2.position(50, 150);
    answer2.mousePressed(checkAnswer);

    answer3 = createButton(questions[currentQuestion].answer3);
    answer3.position(50, 200);
    answer3.mousePressed(checkAnswer);

    answer4 = createButton(questions[currentQuestion].answer4);
    answer4.position(50, 250);
    answer4.mousePressed(checkAnswer);
}

function checkAnswer() {
    let userAnswer = this.html();
    if (userAnswer === questions[currentQuestion].correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
        alert("Game Over! Your score is: " + score);
    } else {
        question.remove();
        answer1.remove();
        answer2.remove();
        answer3.remove();
        answer4.remove();
        displayQuestion();
    }
}