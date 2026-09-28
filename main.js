/* =========================================================
   BAC LIBRE 2027 - SCIENCES PHYSIQUES
   100 UNITÉS
   29/09/2026 → 22/03/2027
   Avril = Révision
   Mai = Exercices + Examens
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const START_DATE = new Date("2026-09-29T00:00:00");
const PROGRAM_END = new Date("2027-03-22T23:59:59");
const BUFFER_END = new Date("2027-03-31T23:59:59");

const TOTAL_LESSONS = 100;

const STORAGE_KEY = "bacLibre2027Completed";


/* =========================================================
   LESSON DATA
========================================================= */

const subjects = [

    {
        name: "الرياضيات",
        icon: "fa-calculator",
        lessons: [

            ["النهايات والاتصال", "الدورة الأولى"],
            ["الاشتقاق ودراسة الدوال", "الدورة الأولى"],
            ["المتتاليات العددية", "الدورة الأولى"],
            ["الدوال الأصلية", "الدورة الأولى"],
            ["الدوال اللوغاريتمية", "الدورة الأولى"],
            ["الدوال الأسية", "الدورة الأولى"],

            ["الأعداد العقدية", "الدورة الثانية"],
            ["حساب التكامل", "الدورة الثانية"],
            ["المعادلات التفاضلية", "الدورة الثانية"],
            ["الهندسة الفضائية: الجداء السلمي والمتجهي", "الدورة الثانية"],
            ["حساب الاحتمالات", "الدورة الثانية"]

        ]
    },


    {
        name: "الفيزياء والكيمياء",
        icon: "fa-atom",
        lessons: [

            ["الموجات الميكانيكية المتوالية والموجات الدورية", "الدورة الأولى"],
            ["انتشار موجة ضوئية: الحيود والضياء", "الدورة الأولى"],
            ["التحولات النووية: التناقص الإشعاعي والنوى والكتلة والطاقة", "الدورة الأولى"],
            ["الكهرباء: ثنائي القطب RC وRL", "الدورة الأولى"],

            ["التحولات الكيميائية السريعة والبطيئة", "الدورة الأولى"],
            ["التتبع الزمني للتفاعل الكيميائي وسرعة التفاعل", "الدورة الأولى"],
            ["التحولات الكيميائية التي تحدث في منحىين وحالة التوازن", "الدورة الأولى"],

            ["الدارة المتوالية RLC والتذبذبات الحرة والقسرية وتضمين الوسع", "الدورة الثانية"],
            ["قوانين نيوتن", "الدورة الثانية"],
            ["السقوط الرأسي الحر والمقذوفات", "الدورة الثانية"],
            ["الأقمار الاصطناعية والكواكب", "الدورة الثانية"],
            ["المجموعات الميكانيكية المتذبذبة", "الدورة الثانية"],
            ["المظاهر الطاقية", "الدورة الثانية"],
            ["الذرة والميكانيك", "الدورة الثانية"],

            ["التطور التلقائي لمجموعة كيميائية: حمض - قاعدة", "الدورة الثانية"],
            ["التحولات التلقائية في الأعمدة وتحصيل الطاقة", "الدورة الثانية"],
            ["التطور القسري: التحليل الكهربائي", "الدورة الثانية"],
            ["الأسترة والتصبن والتحكم في تطور المجموعات الكيميائية", "الدورة الثانية"]

        ]
    },


    {
        name: "علوم الحياة والأرض",
        icon: "fa-dna",
        lessons: [

            ["استهلاك المادة العضوية وتدفق الطاقة", "الدورة الأولى"],
            ["العضلة الهيكلية المخططة وتحويل الطاقة", "الدورة الأولى"],
            ["طبيعة الخبر الوراثي وآلية تعبيره والهندسة الوراثية", "الدورة الأولى"],

            ["نقل الخبر الوراثي عبر التوالد الجنسي والقوانين الإحصائية", "الدورة الثانية"],
            ["علم الوراثة البشرية", "الدورة الثانية"],
            ["علم المناعة: الطبيعية والمكتسبة واضطرابات الجهاز المناعي", "الدورة الثانية"],
            ["الجيولوجيا وتكتونية الصفائح ونشأة السلاسل الجبلية", "الدورة الثانية"]

        ]
    },


    {
        name: "الفلسفة",
        icon: "fa-brain",
        lessons: [

            ["الشخص: الهوية والقيمة", "الدورة الأولى"],
            ["الشخص: الضرورة والحرية", "الدورة الأولى"],
            ["الغير: وجود الغير ومعرفة الغير", "الدورة الأولى"],
            ["الغير: العلاقة مع الغير", "الدورة الأولى"],
            ["النظرية والتجريب", "الدورة الأولى"],
            ["الحقيقة", "الدورة الأولى"],

            ["الدولة: المشروعية والغايات والسلطة والحق والعنف", "الدورة الثانية"],
            ["الحق والعدالة: الطبيعي والوضعي والإنصاف والمساواة", "الدورة الثانية"]

        ]
    },


    {
        name: "الإنجليزية",
        icon: "fa-language",
        lessons: [

            ["Unit 1: Gift of Youth", "الدورة الأولى"],
            ["Unit 2: Humour", "الدورة الأولى"],
            ["Unit 3: Formal, Non-formal and Informal Education", "الدورة الأولى"],
            ["Unit 4: Sustainable Development", "الدورة الأولى"],
            ["Unit 5: Women and Power", "الدورة الأولى"],

            ["Grammar: Passive Voice", "الدورة الأولى"],
            ["Grammar: Gerund & Infinitive", "الدورة الأولى"],
            ["Grammar: Past Perfect", "الدورة الأولى"],
            ["Grammar: Relative Clauses", "الدورة الأولى"],

            ["Unit 6-10: Cultural Values, Citizenship, International Organizations, Science & Technology, Brain Drain + Grammar", "الدورة الثانية"]

        ]
    },


    {
        name: "التربية الإسلامية",
        icon: "fa-mosque",
        lessons: [

            ["سورة يوسف: الشطر الأول", "الدورة الأولى"],
            ["سورة يوسف: الشطر الثاني والثالث", "الدورة الأولى"],
            ["الإيمان والغيب والإيمان والعلم", "الدورة الأولى"],
            ["الرسول ﷺ مفاوضاً ومستشيراً وفي بيته", "الدورة الأولى"],
            ["فقه الأسرة: الزواج", "الدورة الأولى"],
            ["حق الله: الوفاء بالأمانة والمسؤولية", "الدورة الأولى"],
            ["حق النفس: الصبر واليقين", "الدورة الأولى"],
            ["الكفاءة والاستحقاق أساس التكليف والعفو والصفح", "الدورة الأولى"],

            ["سورة يوسف: الشطر الرابع والخامس والسادس", "الدورة الثانية"],
            ["الإيمان والفلسفة وعمارة الأرض", "الدورة الثانية"],
            ["الرسول ﷺ قائداً: صلح الحديبية وفتح مكة", "الدورة الثانية"],
            ["الطلاق وحقوق الأطفال والعفة والبيئة والتنمية والوقاية من الفواحش", "الدورة الثانية"]

        ]
    },


    {
        name: "الفرنسية",
        icon: "fa-book-open",
        lessons: [

            ["La Boîte à Merveilles: الفصول 1 → 4", "الدورة الأولى"],
            ["La Boîte à Merveilles: الفصول 5 → 8", "الدورة الأولى"],
            ["La Boîte à Merveilles: الفصول 9 → 12", "الدورة الأولى"],
            ["Thèmes: solitude, superstition, solidarité, famille, voisinage", "الدورة الأولى"],

            ["Le Dernier Jour d’un Condamné: بداية الرواية", "الدورة الأولى"],
            ["Le Dernier Jour d’un Condamné: الفصول والمواضيع الأساسية", "الدورة الأولى"],

            ["Le Dernier Jour d’un Condamné: إتمام الرواية", "الدورة الثانية"],
            ["Antigone: دراسة المسرحية كاملة", "الدورة الثانية"],
            ["Antigone: rébellion, devoir, loi, générations, fatalité", "الدورة الثانية"],
            ["Langue: figures de style, discours, registres, champs lexicaux, focalisation", "الدورة الثانية"]

        ]
    },


    {
        name: "الاجتماعيات",
        icon: "fa-earth-africa",
        lessons: [

            ["التحولات الاقتصادية والمالية والاجتماعية والفكرية في العالم الرأسمالي", "الدورة الأولى"],
            ["التنافس الإمبريالي واندلاع الحرب العالمية الأولى", "الدورة الأولى"],
            ["اليقظة الفكرية في المشرق العربي", "الدورة الأولى"],
            ["الضغوط الاستعمارية على المغرب ومحاولات الإصلاح", "الدورة الأولى"],

            ["مفهوم التنمية والمقاربات والتقسيمات الكبرى للعالم", "الدورة الأولى"],
            ["المجال المغربي: الموارد الطبيعية والبشرية", "الدورة الأولى"],
            ["سياسة إعداد التراب الوطني", "الدورة الأولى"],
            ["التهيئة الحضرية والريفية وأزمة المدينة والريف", "الدورة الأولى"],

            ["أوروبا من نهاية الحرب العالمية الأولى إلى أزمة 1929", "الدورة الثانية"],
            ["الحرب العالمية الثانية: الأسباب والنتائج", "الدورة الثانية"],
            ["نظام الحماية في المغرب والاستغلال الاستعماري", "الدورة الثانية"],
            ["نضال المغرب من أجل الاستقلال واستكمال الوحدة الترابية", "الدورة الثانية"],
            ["الولايات المتحدة والاتحاد الأوروبي والصين", "الدورة الثانية"]

        ]
    },


    {
        name: "العربية",
        icon: "fa-pen-nib",
        lessons: [

            ["الخطاب الإشهاري", "الدورة الأولى"],
            ["الخطاب الصحفي", "الدورة الأولى"],
            ["الخطاب السياسي", "الدورة الأولى"],
            ["التمييز والعدد", "الدورة الأولى"],
            ["الأمر والنهي والاستفهام", "الدورة الأولى"],
            ["تحليل صورة وتوسيع فكرة", "الدورة الأولى"],

            ["الإنسان والتنمية والإنسان والتكنولوجيا", "الدورة الثانية"],
            ["الإنسان ومشاكل الهجرة", "الدورة الثانية"],
            ["القيم الإنسانية في الشعر: التضامن والتسامح والجمال", "الدورة الثانية"],
            ["المصادر والتمني والنداء والعرض والتحضيض", "الدورة الثانية"],
            ["اللامركزية والطباق والمقابلة والربط والمقارنة والاستنتاج", "الدورة الثانية"]

        ]
    }

];


/* =========================================================
   تحويل المواد إلى 100 وحدة
========================================================= */

let lessons = [];

subjects.forEach(subject => {

    subject.lessons.forEach(item => {

        lessons.push({
            subject: subject.name,
            icon: subject.icon,
            title: item[0],
            cycle: item[1]
        });

    });

});


/*
    نتأكد أن الخطة تحتوي على 100 وحدة بالضبط.
*/
if (lessons.length !== TOTAL_LESSONS) {

    console.error(
        `خطأ: عدد الوحدات الحالي هو ${lessons.length} وليس ${TOTAL_LESSONS}`
    );
}


/* =========================================================
   BALANCED SCHEDULE
   توزيع المواد بالتوازن مع الحفاظ على ترتيب كل مادة
========================================================= */

function buildBalancedSchedule() {

    const progress = {};

    subjects.forEach(subject => {
        progress[subject.name] = 0;
    });

    const result = [];

    for (let i = 0; i < TOTAL_LESSONS; i++) {

        let available = subjects.filter(subject =>
            progress[subject.name] < subject.lessons.length
        );

        /*
            نختار المادة التي قطعت أقل نسبة من برنامجها.
            هذا يمنع دراسة مادة كاملة قبل باقي المواد.
        */

        available.sort((a, b) => {

            const ratioA =
                progress[a.name] / a.lessons.length;

            const ratioB =
                progress[b.name] / b.lessons.length;

            return ratioA - ratioB;

        });

        const selected = available[0];

        const index = progress[selected.name];

        const lessonData = selected.lessons[index];

        result.push({
            subject: selected.name,
            icon: selected.icon,
            title: lessonData[0],
            cycle: lessonData[1]
        });

        progress[selected.name]++;
    }

    return result;
}


const plannedLessons = buildBalancedSchedule();


/* =========================================================
   LOCAL STORAGE
========================================================= */

function getCompleted() {

    try {

        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || [];

    } catch {

        return [];
    }
}


function saveCompleted(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}


let completed = getCompleted();


/* =========================================================
   DATE HELPERS
========================================================= */

function normalizeDate(date) {

    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    );
}


function isSameDay(a, b) {

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}


function formatDate(date) {

    return date.toLocaleDateString("ar-MA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}


function isFriday(date) {

    return date.getDay() === 5;
}


/* =========================================================
   PHASE
========================================================= */

function getPhase(date) {

    date = normalizeDate(date);

    if (date < START_DATE) {

        return "before";
    }

    if (date <= PROGRAM_END) {

        return "program";
    }

    if (date <= BUFFER_END) {

        return "buffer";
    }

    if (date.getFullYear() === 2027 && date.getMonth() === 3) {

        return "review";
    }

    if (date.getFullYear() === 2027 && date.getMonth() === 4) {

        return "exams";
    }

    return "after";
}


/* =========================================================
   PROGRAM PHASE
========================================================= */

/*
    كل دورة = 7 أيام:

    اليوم 1: درس جديد
    اليوم 2: درس جديد
    اليوم 3: درس جديد
    اليوم 4: الجمعة = راحة
    اليوم 5: درس جديد
    اليوم 6: مراجعة
    اليوم 7: اختبار أسبوعي

    4 دروس جديدة كل أسبوع.

    25 أسبوع × 4 = 100 وحدة.
*/

function getProgramInfo(date) {

    const diff =
        Math.floor(
            (normalizeDate(date) - START_DATE) /
            (1000 * 60 * 60 * 24)
        );

    if (diff < 0) {

        return {
            type: "before"
        };
    }

    const week = Math.floor(diff / 7);
    const day = diff % 7;

    const lessonSlots = {
        0: 0,
        1: 1,
        2: 2,
        4: 3
    };

    if (day === 3) {

        return {
            type: "rest",
            week: week + 1
        };
    }

    if (day === 5) {

        return {
            type: "review",
            week: week + 1
        };
    }

    if (day === 6) {

        return {
            type: "test",
            week: week + 1
        };
    }

    if (lessonSlots[day] !== undefined) {

        const lessonIndex =
            week * 4 + lessonSlots[day];

        if (lessonIndex < TOTAL_LESSONS) {

            return {
                type: "lesson",
                lessonIndex,
                week: week + 1
            };
        }
    }

    return {
        type: "buffer"
    };
}


/* =========================================================
   APRIL REVIEW
========================================================= */

function getAprilReview(date) {

    /*
        أبريل 2027 فيه 25 يوم دراسة
        بعد حذف الجمع.
        25 × 4 = 100 وحدة.

        لذلك كل يوم دراسة نراجع 4 وحدات.
    */

    const firstDay =
        new Date("2027-04-01T00:00:00");

    let studyDay = 0;

    for (
        let d = new Date(firstDay);
        d < date;
        d.setDate(d.getDate() + 1)
    ) {

        if (!isFriday(d)) {
            studyDay++;
        }
    }

    const startIndex = studyDay * 4;

    return {
        startIndex,
        endIndex: Math.min(
            startIndex + 4,
            TOTAL_LESSONS
        )
    };
}


/* =========================================================
   MAY PLAN
========================================================= */

const mayTasks = [

    {
        title: "محاكاة الرياضيات",
        subject: "الرياضيات",
        icon: "fa-calculator",
        hours: "3 ساعات",
        description:
            "حل موضوع امتحان كامل بالوقت، ثم تصحيح الأخطاء."
    },

    {
        title: "تمارين الفيزياء والكيمياء",
        subject: "الفيزياء والكيمياء",
        icon: "fa-atom",
        hours: "3 ساعات",
        description:
            "حل سلسلة تمارين متنوعة ومراجعة القوانين التي أخطأت فيها."
    },

    {
        title: "محاكاة علوم الحياة والأرض",
        subject: "علوم الحياة والأرض",
        icon: "fa-dna",
        hours: "2.5 ساعة",
        description:
            "موضوع كامل + تصحيح + مراجعة الرسومات والمفاهيم."
    },

    {
        title: "مراجعة الفلسفة",
        subject: "الفلسفة",
        icon: "fa-brain",
        hours: "2.5 ساعة",
        description:
            "مراجعة المفاهيم والتدرب على منهجية الكتابة."
    },

    {
        title: "محاكاة الفرنسية",
        subject: "الفرنسية",
        icon: "fa-book-open",
        hours: "2.5 ساعة",
        description:
            "قراءة وفهم + لغة + Production écrite."
    },

    {
        title: "محاكاة الإنجليزية",
        subject: "الإنجليزية",
        icon: "fa-language",
        hours: "2 ساعة",
        description:
            "Reading + Grammar + Writing + Vocabulary."
    },

    {
        title: "محاكاة العربية",
        subject: "العربية",
        icon: "fa-pen-nib",
        hours: "2 ساعة",
        description:
            "نص + علوم اللغة + التعبير والإنشاء."
    },

    {
        title: "محاكاة الاجتماعيات",
        subject: "الاجتماعيات",
        icon: "fa-earth-africa",
        hours: "2 ساعة",
        description:
            "تاريخ + جغرافيا + تدريب على المنهجية."
    },

    {
        title: "مراجعة التربية الإسلامية",
        subject: "التربية الإسلامية",
        icon: "fa-mosque",
        hours: "1.5 ساعة",
        description:
            "استرجاع الدروس والحفظ والتدرب على الإجابة."
    },

    {
        title: "اختبار شامل",
        subject: "كل المواد",
        icon: "fa-file-circle-check",
        hours: "3 ساعات",
        description:
            "محاكاة امتحان تحت ظروف قريبة من الامتحان الحقيقي."
    }
];


function getMayTask(date) {

    if (isFriday(date)) {

        return {
            rest: true
        };
    }

    const firstDay =
        new Date("2027-05-01T00:00:00");

    let studyIndex = 0;

    for (
        let d = new Date(firstDay);
        d < date;
        d.setDate(d.getDate() + 1)
    ) {

        if (!isFriday(d)) {
            studyIndex++;
        }
    }

    return mayTasks[
        studyIndex % mayTasks.length
    ];
}


/* =========================================================
   TODAY CONTENT
========================================================= */

function renderToday() {

    const today = normalizeDate(new Date());

    document.getElementById("currentDate")
        .textContent = formatDate(today);

    const phase =
        getPhase(today);

    const badge =
        document.getElementById("phaseBadge");

    const title =
        document.getElementById("phaseTitle");

    const description =
        document.getElementById("phaseDescription");

    const todayTitle =
        document.getElementById("todayTitle");

    const content =
        document.getElementById("todayContent");


    /* BEFORE */

    if (phase === "before") {

        badge.textContent = "قبل البداية";

        title.textContent =
            "استعد للانطلاق";

        description.textContent =
            "بداية الخطة يوم 29 سبتمبر 2026.";

        todayTitle.textContent =
            "الخطة لم تبدأ بعد";

        content.innerHTML = `
            <div class="empty-day">
                البداية الرسمية للخطة هي
                <strong>29 سبتمبر 2026</strong>.
            </div>
        `;

        renderRoutine("before");

        return;
    }


    /* PROGRAM */

    if (phase === "program") {

        const info =
            getProgramInfo(today);

        if (info.type === "lesson") {

            const lesson =
                plannedLessons[info.lessonIndex];

            badge.textContent =
                `المرحلة الأولى • الأسبوع ${info.week}`;

            title.textContent =
                "إنهاء البرنامج الدراسي";

            description.textContent =
                "4 وحدات جديدة أسبوعياً مع مراجعة واختبار.";

            todayTitle.textContent =
                `الوحدة ${info.lessonIndex + 1} من 100`;

            renderLessonToday(
                lesson,
                info.lessonIndex
            );

            renderRoutine("lesson");

        }

        else if (info.type === "rest") {

            badge.textContent =
                "راحة أسبوعية";

            title.textContent =
                "الجمعة = راحة";

            description.textContent =
                "لا توجد دراسة اليوم. أعد شحن طاقتك.";

            todayTitle.textContent =
                "اليوم لا توجد دراسة";

            content.innerHTML = `
                <div class="empty-day">
                    <i class="fa-solid fa-mug-hot"></i>
                    <br><br>
                    خذ يوم راحة كامل.
                    <br>
                    غداً نعود للخطة.
                </div>
            `;

            renderRoutine("rest");
        }

        else if (info.type === "review") {

            badge.textContent =
                `مراجعة الأسبوع ${info.week}`;

            title.textContent =
                "مراجعة بدون دروس جديدة";

            description.textContent =
                "استرجع ما درسته خلال الأيام السابقة وحل التمارين.";

            todayTitle.textContent =
                "مراجعة الأسبوع";

            content.innerHTML = `
                <div class="today-content">

                    <div class="today-main">
                        <h3>
                            <i class="fa-solid fa-rotate"></i>
                            مراجعة
                        </h3>

                        <p class="lesson-subject">
                            راجع الوحدات الأربعة التي درستها هذا الأسبوع.
                        </p>

                        <p class="lesson-cycle">
                            لا تبدأ درساً جديداً اليوم.
                        </p>
                    </div>

                    <div class="today-meta">

                        <div class="meta-box">
                            <i class="fa-solid fa-clock"></i>
                            <span>المدة</span>
                            <strong>3 ساعات</strong>
                        </div>

                        <div class="meta-box">
                            <i class="fa-solid fa-list-check"></i>
                            <span>المهمة</span>
                            <strong>مراجعة + تمارين</strong>
                        </div>

                    </div>

                </div>
            `;

            renderRoutine("review");
        }

        else if (info.type === "test") {

            badge.textContent =
                `اختبار الأسبوع ${info.week}`;

            title.textContent =
                "اختبر نفسك";

            description.textContent =
                "اليوم نعرف هل فعلاً فهمت دروس الأسبوع.";

            todayTitle.textContent =
                "اختبار وتصحيح";

            content.innerHTML = `
                <div class="today-content">

                    <div class="today-main">
                        <h3>
                            <i class="fa-solid fa-file-circle-check"></i>
                            اختبار أسبوعي
                        </h3>

                        <p class="lesson-subject">
                            حل تمارين أو اختبار يجمع دروس الأسبوع.
                        </p>

                        <p class="lesson-cycle">
                            سجل أخطاءك، لأنها أهم شيء ستراجعه لاحقاً.
                        </p>
                    </div>

                    <div class="today-meta">

                        <div class="meta-box">
                            <i class="fa-solid fa-clock"></i>
                            <span>المدة</span>
                            <strong>3 ساعات</strong>
                        </div>

                        <div class="meta-box">
                            <i class="fa-solid fa-pen"></i>
                            <span>المهمة</span>
                            <strong>اختبار + تصحيح</strong>
                        </div>

                    </div>

                </div>
            `;

            renderRoutine("test");
        }

        else {

            renderBuffer();
        }

        return;
    }


    /* BUFFER */

    if (phase === "buffer") {

        badge.textContent =
            "فترة احتياط";

        title.textContent =
            "تعويض ومراجعة";

        description.textContent =
            "استعمل هذه الأيام لأي درس تأخرت فيه أو نقطة ضعيفة.";

        todayTitle.textContent =
            "يوم احتياط";

        renderBuffer();

        renderRoutine("buffer");

        return;
    }


    /* APRIL */

    if (phase === "review") {

        badge.textContent =
            "المرحلة الثالثة • أبريل";

        title.textContent =
            "المراجعة الشاملة";

        description.textContent =
            "سنمر على الـ100 وحدة مرة ثانية خلال شهر أبريل.";

        const info =
            getAprilReview(today);

        const reviewLessons =
            plannedLessons.slice(
                info.startIndex,
                info.endIndex
            );

        todayTitle.textContent =
            `مراجعة الوحدات ${info.startIndex + 1} → ${info.endIndex}`;

        renderAprilReview(
            reviewLessons,
            info.startIndex
        );

        renderRoutine("april");

        return;
    }


    /* MAY */

    if (phase === "exams") {

        badge.textContent =
            "المرحلة الرابعة • ماي";

        title.textContent =
            "التمارين والامتحانات السابقة";

        description.textContent =
            "الآن نركز على التطبيق، المحاكاة وتصحيح الأخطاء.";

        const task =
            getMayTask(today);

        if (task.rest) {

            todayTitle.textContent =
                "الجمعة = راحة";

            content.innerHTML = `
                <div class="empty-day">
                    اليوم راحة. لا تضغط على نفسك.
                </div>
            `;

            renderRoutine("rest");

        } else {

            todayTitle.textContent =
                task.title;

            content.innerHTML = `
                <div class="today-content">

                    <div class="today-main">

                        <h3>
                            <i class="fa-solid ${task.icon}"></i>
                            ${task.title}
                        </h3>

                        <p class="lesson-subject">
                            ${task.subject}
                        </p>

                        <p class="lesson-cycle">
                            ${task.description}
                        </p>

                    </div>

                    <div class="today-meta">

                        <div class="meta-box">
                            <i class="fa-solid fa-clock"></i>
                            <span>المدة</span>
                            <strong>${task.hours}</strong>
                        </div>

                        <div class="meta-box">
                            <i class="fa-solid fa-repeat"></i>
                            <span>المرحلة</span>
                            <strong>تطبيق ومحاكاة</strong>
                        </div>

                    </div>

                </div>
            `;

            renderRoutine("may");
        }

        return;
    }


    /* AFTER */

    badge.textContent =
        "الخطة مكتملة";

    title.textContent =
        "أنت الآن في مرحلة الامتحان";

    description.textContent =
        "استمر في المراجعة الخفيفة حسب حاجتك.";
}


/* =========================================================
   LESSON CARD
========================================================= */

function renderLessonToday(lesson, index) {

    const isDone =
        completed.includes(index);

    document.getElementById("todayContent")
        .innerHTML = `

        <div class="today-content">

            <div class="today-main">

                <h3>
                    <i class="fa-solid ${lesson.icon}"></i>
                    ${lesson.title}
                </h3>

                <p class="lesson-subject">
                    ${lesson.subject}
                </p>

                <p class="lesson-cycle">
                    ${lesson.cycle}
                </p>

                <button
                    class="complete-btn ${isDone ? "completed" : ""}"
                    onclick="toggleLesson(${index})"
                >

                    <i class="fa-solid ${
                        isDone
                        ? "fa-circle-check"
                        : "fa-check"
                    }"></i>

                    ${
                        isDone
                        ? "تم إنجاز هذه الوحدة"
                        : "علّمتها كمكتملة"
                    }

                </button>

            </div>


            <div class="today-meta">

                <div class="meta-box">
                    <i class="fa-solid fa-clock"></i>
                    <span>مدة اليوم</span>
                    <strong>4 ساعات تقريباً</strong>
                </div>

                <div class="meta-box">
                    <i class="fa-solid fa-layer-group"></i>
                    <span>رقم الوحدة</span>
                    <strong>${index + 1} / 100</strong>
                </div>

                <div class="meta-box">
                    <i class="fa-solid fa-book"></i>
                    <span>المرحلة</span>
                    <strong>${lesson.cycle}</strong>
                </div>

                <div class="meta-box">
                    <i class="fa-solid fa-repeat"></i>
                    <span>بعد الدرس</span>
                    <strong>استرجاع + تمارين</strong>
                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   APRIL REVIEW CARD
========================================================= */

function renderAprilReview(list, startIndex) {

    const html = list.map((lesson, i) => {

        return `
            <div class="review-item">
                <strong>
                    الوحدة ${startIndex + i + 1}
                </strong>

                ${lesson.subject}

                <br>

                ${lesson.title}
            </div>
        `;

    }).join("");


    document.getElementById("todayContent")
        .innerHTML = `

        <div class="today-content">

            <div class="today-main">

                <h3>
                    <i class="fa-solid fa-rotate"></i>
                    مراجعة 4 وحدات
                </h3>

                <p class="lesson-subject">
                    اقرأ الملخص → حاول الاسترجاع بدون نظر → حل تمارين.
                </p>

                <p class="lesson-cycle">
                    إذا اكتشفت ضعفاً في وحدة، ضعها في قائمة الأخطاء.
                </p>

            </div>

            <div class="today-meta">

                <div class="meta-box">
                    <i class="fa-solid fa-clock"></i>
                    <span>مدة المراجعة</span>
                    <strong>3 - 4 ساعات</strong>
                </div>

                <div class="meta-box">
                    <i class="fa-solid fa-list-check"></i>
                    <span>الهدف</span>
                    <strong>4 وحدات</strong>
                </div>

            </div>

        </div>

        <div class="review-list">
            ${html}
        </div>
    `;
}


/* =========================================================
   BUFFER
========================================================= */

function renderBuffer() {

    document.getElementById("todayContent")
        .innerHTML = `

        <div class="today-content">

            <div class="today-main">

                <h3>
                    <i class="fa-solid fa-life-ring"></i>
                    يوم تعويض
                </h3>

                <p class="lesson-subject">
                    لا توجد وحدة جديدة في هذه الفترة.
                </p>

                <p class="lesson-cycle">
                    اختر أصعب درس بقي عندك، أو راجع الأخطاء السابقة.
                </p>

            </div>

            <div class="today-meta">

                <div class="meta-box">
                    <i class="fa-solid fa-clock"></i>
                    <span>المدة</span>
                    <strong>2 - 3 ساعات</strong>
                </div>

                <div class="meta-box">
                    <i class="fa-solid fa-bullseye"></i>
                    <span>الهدف</span>
                    <strong>سد الثغرات</strong>
                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   DAILY ROUTINE
========================================================= */

function renderRoutine(type) {

    const grid =
        document.getElementById("routineGrid");

    let routine = [];


    if (type === "lesson") {

        routine = [

            ["09:00", "فهم الدرس", "شاهد/اقرأ الدرس وافهم الأفكار الأساسية.", "fa-book-open"],

            ["11:00", "التطبيق", "حل أمثلة وتمارين مرتبطة بالدرس.", "fa-pen"],

            ["17:00", "مادة خفيفة", "لغة أو مادة تعتمد على الحفظ والفهم.", "fa-language"],

            ["20:00", "الاسترجاع", "أغلق الدفتر وحاول شرح ما تعلمته من ذاكرتك.", "fa-brain"]

        ];

    }

    else if (type === "review") {

        routine = [

            ["09:00", "مراجعة 1", "استرجاع الدرس الأول بدون النظر.", "fa-rotate"],

            ["11:00", "مراجعة 2", "استرجاع الدرسين الثاني والثالث.", "fa-rotate"],

            ["17:00", "تمارين", "حل تمارين على ما راجعته.", "fa-pen"],

            ["20:00", "الأخطاء", "راجع الأخطاء والنقاط التي نسيتها.", "fa-triangle-exclamation"]

        ];

    }

    else if (type === "test") {

        routine = [

            ["09:00", "الاختبار", "حل اختبار بدون فتح الدروس.", "fa-file-circle-check"],

            ["11:00", "التصحيح", "صحح الاختبار وحدد الأخطاء.", "fa-check-double"],

            ["17:00", "مراجعة الأخطاء", "ارجع فقط إلى النقاط التي أخطأت فيها.", "fa-triangle-exclamation"],

            ["20:00", "استرجاع", "أعد حل الأسئلة الصعبة.", "fa-brain"]

        ];

    }

    else if (type === "april") {

        routine = [

            ["09:00", "مراجعة", "وحدتان مع الاسترجاع النشط.", "fa-book-open"],

            ["11:00", "مراجعة", "وحدتان إضافيتان.", "fa-book-open"],

            ["17:00", "تمارين", "تمارين على الدروس الأربعة.", "fa-pen"],

            ["20:00", "أخطاء", "سجل ما نسيت لإعادته لاحقاً.", "fa-triangle-exclamation"]

        ];

    }

    else if (type === "may") {

        routine = [

            ["09:00", "الاختبار", "ابدأ موضوع اليوم بدون مساعدة.", "fa-file-circle-check"],

            ["11:00", "التصحيح", "قارن إجاباتك بالتصحيح.", "fa-check-double"],

            ["17:00", "تقوية", "أعد الدروس التي ظهرت فيها أخطاء.", "fa-dumbbell"],

            ["20:00", "استرجاع", "راجع القوانين والمفاهيم المهمة.", "fa-brain"]

        ];

    }

    else if (type === "rest") {

        routine = [

            ["اليوم", "راحة", "لا توجد دراسة.", "fa-mug-hot"],

            ["—", "راحة", "ابتعد عن ضغط الدراسة.", "fa-bed"],

            ["—", "عائلة", "استمتع بيومك.", "fa-house"],

            ["—", "العودة", "غداً نعود للخطة.", "fa-rotate"]

        ];

    }

    else if (type === "buffer") {

        routine = [

            ["09:00", "تحديد الضعف", "اختر درساً متأخراً أو صعباً.", "fa-bullseye"],

            ["11:00", "الدراسة", "راجع النقطة التي تحتاجها.", "fa-book-open"],

            ["17:00", "تمارين", "طبق على ما راجعته.", "fa-pen"],

            ["20:00", "استرجاع", "اختبر نفسك قبل النوم.", "fa-brain"]

        ];

    }

    else {

        routine = [

            ["09:00", "التحضير", "استعد لبداية الخطة.", "fa-calendar"],

            ["11:00", "تنظيم", "جهز الكتب والمصادر.", "fa-folder-open"],

            ["17:00", "لغة", "مراجعة بسيطة للفرنسية أو الإنجليزية.", "fa-language"],

            ["20:00", "النوم", "استعد ليوم البداية.", "fa-bed"]

        ];

    }


    grid.innerHTML = routine.map(item => `

        <div class="routine-item">

            <div class="routine-time">
                <i class="fa-solid ${item[3]}"></i>
                ${item[0]}
            </div>

            <h3>${item[1]}</h3>

            <p>${item[2]}</p>

        </div>

    `).join("");
}


/* =========================================================
   WEEK VIEW
========================================================= */

function getStartOfCurrentPlanWeek(today) {

    const diff =
        Math.floor(
            (today - START_DATE) /
            (1000 * 60 * 60 * 24)
        );

    if (diff < 0) {

        return new Date(START_DATE);
    }

    const week =
        Math.floor(diff / 7);

    const start =
        new Date(START_DATE);

    start.setDate(
        start.getDate() + week * 7
    );

    return start;
}


function renderWeek() {

    const today =
        normalizeDate(new Date());

    const grid =
        document.getElementById("weekGrid");

    const weekStart =
        getStartOfCurrentPlanWeek(today);

    const days = [
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
        "الأحد",
        "الاثنين"
    ];

    let html = "";

    for (let i = 0; i < 7; i++) {

        const date =
            new Date(weekStart);

        date.setDate(
            date.getDate() + i
        );

        const phase =
            getPhase(date);

        let task = "";
        let className = "";

        if (isFriday(date)) {

            task = "راحة";
            className = "rest";

        }

        else if (phase === "program") {

            const info =
                getProgramInfo(date);

            if (info.type === "lesson") {

                const lesson =
                    plannedLessons[info.lessonIndex];

                task =
                    `وحدة ${info.lessonIndex + 1}<br>
                     ${lesson.subject}`;

                className = "new";

            }

            else if (info.type === "review") {

                task =
                    "مراجعة + تمارين";

                className = "review";

            }

            else if (info.type === "test") {

                task =
                    "اختبار أسبوعي";

                className = "test";
            }

            else {

                task = "تعويض";
                className = "review";
            }

        }

        else if (phase === "review") {

            task = "مراجعة 4 وحدات";
            className = "review";

        }

        else if (phase === "exams") {

            const mayTask =
                getMayTask(date);

            if (mayTask.rest) {

                task = "راحة";
                className = "rest";

            } else {

                task =
                    mayTask.subject;

                className = "test";
            }

        }

        else {

            task = "تعويض / مراجعة";
            className = "review";
        }


        html += `

            <div class="day-card ${
                isSameDay(date, today)
                ? "today"
                : ""
            }">

                <div class="day-name">
                    ${days[i]}
                </div>

                <div class="day-number">
                    ${date.getDate()}
                </div>

                <div class="day-task ${className}">
                    ${task}
                </div>

            </div>
        `;
    }

    grid.innerHTML = html;
}


/* =========================================================
   SUBJECT PROGRESS
========================================================= */

function renderSubjects() {

    const grid =
        document.getElementById("subjectsGrid");

    grid.innerHTML =
        subjects.map(subject => {

            const total =
                subject.lessons.length;

            let done = 0;

            subject.lessons.forEach(lesson => {

                const globalIndex =
                    plannedLessons.findIndex(item =>
                        item.subject === subject.name &&
                        item.title === lesson[0]
                    );

                if (
                    globalIndex !== -1 &&
                    completed.includes(globalIndex)
                ) {
                    done++;
                }
            });

            const percent =
                Math.round(
                    (done / total) * 100
                );

            return `

                <div class="subject-card">

                    <div class="subject-top">

                        <div class="subject-name">
                            <i class="fa-solid ${subject.icon}"></i>
                            ${subject.name}
                        </div>

                        <div class="subject-count">
                            ${done}/${total}
                        </div>

                    </div>

                    <div class="subject-progress">
                        <div style="width:${percent}%"></div>
                    </div>

                    <div class="subject-bottom">

                        <span>
                            ${percent}%
                        </span>

                        <span>
                            ${total} وحدات
                        </span>

                    </div>

                </div>
            `;

        }).join("");
}


/* =========================================================
   GLOBAL PROGRESS
========================================================= */

function renderProgress() {

    const done =
        completed.length;

    const percent =
        Math.round(
            (done / TOTAL_LESSONS) * 100
        );

    document.getElementById("progressFill")
        .style.width = `${percent}%`;

    document.getElementById("progressPercent")
        .textContent = `${percent}%`;

    document.getElementById("completedCount")
        .textContent = done;

    document.getElementById("remainingText")
        .textContent =
        `بقي ${TOTAL_LESSONS - done} وحدة`;
}


/* =========================================================
   TOGGLE LESSON
========================================================= */

function toggleLesson(index) {

    if (completed.includes(index)) {

        completed =
            completed.filter(
                item => item !== index
            );

    } else {

        completed.push(index);
    }

    saveCompleted(completed);

    renderProgress();
    renderToday();
    renderWeek();
    renderSubjects();
}


/* =========================================================
   RESET
========================================================= */

document
    .getElementById("resetProgress")
    .addEventListener("click", () => {

        const confirmReset =
            confirm(
                "هل تريد فعلاً تصفير تقدمك؟"
            );

        if (!confirmReset) return;

        completed = [];

        saveCompleted(completed);

        renderProgress();
        renderToday();
        renderWeek();
        renderSubjects();
    });


/* =========================================================
   START
========================================================= */

renderProgress();
renderToday();
renderWeek();
renderSubjects();