const questions = [
    {
        question: "Там, дзе плач зямлі зліўся з праменем, мне далі сілу стаць вышынёй. Карміў я целы, гаіў душы раненыя, але зірваны жадна — стаў попелам і ранай. Што Жыцень уручыў, каб свет абнавіць? Хто вернасць духам здолеў захаваць?",
        answers: [
            { text: "Зярня з слязы зямлі і сонечнага праменю", correct: true },
            { text: "Саламяная лялька з тварам Велены", correct: false },
            { text: "Свяшчэнны дуб з гайка", correct: false },
            { text: "Чумны калас Тугара", correct: false }
        ],
        hint: "Дар, народжаны святлом і журбой, чыя страта асудзіла племя на пакуты. Яго захоўвала тая, чые далоні гаілі раны."
    },
    {
        question: "На краі балотаў, дзе тапі шапчуць з ценямі, стаяў ідал з вачыма з чорнага каменю. Злодзей, вырваўшы адзін вока, быў смалой пакараны, а бог ператварыў яго ў вечнага вартаўніка. Што скраў Радагост, каб выкаваць меч? Чыю страту багі не здолелі абараніць?",
        answers: [
            { text: "Зярняты авса для ахвяраванняў", correct: false },
            { text: "Свяшчэнны меч з капішча", correct: false },
            { text: "Абсідыянавае вока ідала", correct: true },
            { text: "Чорную смалу з вочніцы", correct: false }
        ],
        hint: "Гэты сімвал усёбачання быў страчаны праз імкненне да ўлады. Яго знішчэнне абудзіла гнеў багоў і ператварыла злодзея ў вечнага вартаўніка."
    },
    {
        question: "У год, калі чума касіла мацней за серпы, з'явіўся жнец з касай у месячным святле. Ён знішчаў каласы, але даў сіротцы зярняты, што ўзышлі на магілах белым звонам. Чый дар сілу даваў толькі тым, хто дзяліўся апошнім з галоднымі? Што пасеяла Мар'яна, каб смерць ператварыць у жыццё?",
        answers: [
            { text: "Саламяны капялюш жняца", correct: false },
            { text: "Зярняты з магіл ад Жыценя", correct: true },
            { text: "Серп нябачнага лязоўя", correct: false },
            { text: "Белыя каласы-саваны", correct: false }
        ],
        hint: "Гэтыя зярняты нараджаліся там, дзе сканчаецца шлях. Іх беласць — колер памяці, а звон — голас тых, хто сышоў."
    },
    {
        question: "У вёсцы ілжы, дзе млынар змяшваў попел з мукой, сляпы жабрак разарваў грудзі — кінуў сэрца-калас у раку, каб праўда змыла бруд. Грэшнік у луску апрануты, а пад вярбой — зорны звон. Што Жыцень кінуў у ваду, каб ілжы стала відна як дзень?",
        answers: [
            { text: "Гліняныя таблічкі з імёнамі", correct: false },
            { text: "Зоркі з дупла вярбы", correct: false },
            { text: "Сэрца-калас з расой на зубцах", correct: true },
            { text: "Попел з мяшка Грывоя", correct: false }
        ],
        hint: "Яно білася ў грудзях, як зярняціна на ветрах. Цяпер пад вярбой яго голас стукае, адлічваючы вечнасць."
    },
    {
        question: "Раз у сем гадоў, калі пурпурны месяц кліча Жыценя на танец, нівы хвалююцца, а на палях застаюцца кругі прымятай пшаніцы — быццам сляды босых ног, абпаленых зоркамі. Што бог пакідае, каб дзяўчаты сплялі аберэг супраць бураў?",
        answers: [
            { text: "Сляды ног, абпаленыя зорным пылам", correct: true },
            { text: "Агнявыя змяі з межаў", correct: false },
            { text: "Гліняныя збаны з мёдам", correct: false },
            { text: "Сляпату пастуха Ляшка", correct: false }
        ],
        hint: "Гэтыя адбіткі — памяць аб бажым хараводзе. Іх уплятаюць у талісманы, каб чуць песню Жыценя ў навальніцу."
    },
    {
        question: "На ўскрайку Чорнага лесу, дзе пчолы з кветкамі-абаротнямі ладзілі пір, бартаўнік скраў у бога залаты серп. Мёд стаў смалой, рой — машкарай з тварамі смутку, а злодзей — вартаўніком дупла з праклёнамі. Што Ведагон схаваў у дубе, за што набыў вечны дозор?",
        answers: [
            { text: "Машкару з чалавечымі тварамі", correct: false },
            { text: "Залатую прашчу ў форме серпа", correct: true },
            { text: "Смалу з сапсаваных соцяў", correct: false },
            { text: "Жменю полбы для падарожнікаў", correct: false }
        ],
        hint: "Яна была выкавана з сонечнага металу, каб нагадваць аб жніве. Яе крадзяж змяшаў салодасць працы з гаркатой вечнай варты."
    },
    {
        question: "Калі рака Сож, скалынутая спякотай, выйшла з берагоў, Жыцень біўся з вадзяным духам Ваданам тры дні. Іх дагавор гаварыў: рака дае мулу, але патрабуе ахвяру. Што людзі кідаюць у ваду, каб збожжа не пускала карані-душыцелі?",
        answers: [
            { text: "Пшанічныя стужкі з патоку", correct: false },
            { text: "Першы каравай новага ўраджаю", correct: true },
            { text: "Ядавітыя грыбы з берагоў", correct: false },
            { text: "Рыбіныя шкілеты з глыбінь", correct: false }
        ],
        hint: "Гэты хлеб — не ежа, а ключ ад пагаднення. Яго дробныя часткі — плата вадзе за тое, каб зямля дыхаў."
    },
    {
        question: "У вёсцы, дзе гавораць шастам лісця і стукам камянёў, нямы жнец ударыў серпам па валуне. Гуку не было, але ворагі паваліліся, хапаючыся за вушы, а іх мячы пакрыліся ажынакамі. Што выкарыстаў Жыцень, каб перамагчы захопнікаў, не прамовіўшы ні слова?",
        answers: [
            { text: "Шаст лісця з Глухамані", correct: false },
            { text: "Бязгучны ўдар серпа па каменю", correct: true },
            { text: "Вочы колеру спелай полбы ў дзяцей", correct: false },
            { text: "Шчыты-гнёзды для жаваранак", correct: false }
        ],
        hint: "Ён біў па цішы, і цішыня адказала. Тое, што ня чуюць вушы, разрывае сэрцы ворагаў і дарыць зямлі голас."
    },
    {
        question: "Перад сыходам у вечнасць Жыцень завяшчаў сплясці снап з каласоў, што перажылі засуху, паводку і град. Яго паставілі на скрыжаванні трох дарог, дзе ён стаіць некрануты бурамі. Што абараняе вёскі ад голаду, але стане смерцю багу, калі спаліць яго ў страху?",
        answers: [
            { text: "Кратар вулкана з парасткамі", correct: false },
            { text: "Іскры-свяцячкі з навальніцы", correct: false },
            { text: "Сноп з каласоў-выпрабаванняў", correct: true },
            { text: "Ажына з шыпамі з абсідыяну", correct: false }
        ],
        hint: "Ён сплецены з устойлівасці, а яго полымя — гібель надзеі. Нават шыпы на варце — не ад людзей, а ад слабасці."
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);

function initQuiz() {
    const container = document.querySelector('.quiz-slides');
    container.innerHTML = '';
    
    questions.forEach((q, index) => {
        const slide = document.createElement('div');
        slide.className = `quiz-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <h3 class="question-text">${q.question}</h3>
            <div class="answers-container">
                ${q.answers.map((a, i) => `
                    <button class="answer-btn" 
                            onclick="selectAnswer(${index}, ${i})">
                        ${a.text}
                    </button>
                `).join('')}
            </div>
        `;
        container.appendChild(slide);
    });
    
    updateControls();
    updateProgressBar();
}

function selectAnswer(questionIndex, answerIndex) {
    const buttons = document.querySelectorAll(`.quiz-slide:nth-child(${questionIndex + 1}) .answer-btn`);
    const isCorrect = questions[questionIndex].answers[answerIndex].correct;
    
    buttons.forEach(btn => btn.disabled = true);
    buttons[answerIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    
    userAnswers[questionIndex] = answerIndex;
    if(isCorrect) score++;
    
    updateControls();
    checkCompletion();
}

function updateControls() {
    document.querySelector('.slide-counter').textContent = 
        `Пытанне ${currentQuestion + 1}/${questions.length}`;

    document.querySelector('.prev-btn').disabled = currentQuestion === 0;
    document.querySelector('.next-btn').disabled = 
        userAnswers[currentQuestion] === null || currentQuestion === questions.length - 1;
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
}

function checkCompletion() {
    if(userAnswers.every(answer => answer !== null)) {
        showResult();
    }
}

function prevQuestion() {
    if(currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function nextQuestion() {
    if(currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function showQuestion() {
    document.querySelectorAll('.quiz-slide').forEach((slide, index) => {
        slide.classList.toggle('active', index === currentQuestion);
    });
    updateControls();
    updateProgressBar();
}

function showHint() {
    const hintText = document.querySelector('.hint-text');
    hintText.textContent = questions[currentQuestion].hint;
    hintText.classList.remove('hidden');
    setTimeout(() => hintText.classList.add('hidden'), 3000);
}

function showResult() {
    document.querySelector('.quiz-slides').classList.add('hidden');
    document.querySelector('.quiz-controls').classList.add('hidden');
    const result = document.querySelector('.quiz-result');
    result.classList.remove('hidden');
    
    document.querySelector('.result-score').textContent = `${score}/${questions.length}`;
    document.querySelector('.result-text').textContent = getResultText(score);
}

function getResultText(score) {
    if(score === 9) return "🎉 Ты выгадаў сноп з зярнят, што перажылі паводкі і засуху. Жыцень стукае ў тваіх грудзях, як калас аб вецер, а дарогі мёртвых, жывых і ненароджаных спляліся ў тваіх далонях. Цяпер ты — вартаўнік ураджаю, чыё імя прарастэ ў легендах зорным пылам на палях вечнасці.";
    if(score >= 6) return "🌾 Ты сабраў палову ўраджаю, але забыў, што колас спее ў цішы. Прайдзі сцежкай, дзе карані памятаюць голад, і навучыся танцу дажджу ў духаў межаў. Жніво блізка — але серп яшчэ не завостраны.";
    if(score >= 3) return "🌱 Твае зярняты яшчэ ў глебе — не ўсе парасткі прабіваюць камяні. Слухай шаптаньне зямлі, а не рэў бураў. Жыцень дае ўраджай толькі тым, хто сее нягледзячы на страх.";
    return "🌷 Паспрабуйце яшчэ раз, вясна таго варта!";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers.fill(null);
    
    const slidesContainer = document.querySelector('.quiz-slides');
    slidesContainer.innerHTML = '';
    
    document.querySelector('.quiz-result').classList.add('hidden');
    document.querySelector('.quiz-controls').classList.remove('hidden');
    
    initQuiz();
    updateProgressBar();
    updateControls();
}

document.addEventListener('DOMContentLoaded', initQuiz);