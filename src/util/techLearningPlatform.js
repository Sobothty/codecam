// Array of tech categories with their details
const techCategories = [
  {
    id: "webdev",
    name: "Web Dev",
    icon: "fa-solid fa-desktop text-blue-700 p-5 bg-blue-200 rounded-full",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    courses: 24,
    title: "Web Development វគ្គសិក្សាអភិវឌ្ឍន៍",
    description:
      "វគ្គសិក្សា Web Development ដំណើរនៃបបបង្កើតអភិវឌ្ឍន៍គេហទំព័រ និងកម្មវិធីបណ្តាញ។ ចាប់ផ្តើមជាមួយនឹងមូលដ្ឋាន HTML, CSS និង JavaScript ហើយបន្តរៀនទៅកាន់ទៅកាន់ឧបករណ៍ទំនើបដូចជា React, Node.js និង MongoDB។",
    topics: [
      "មូលដ្ឋានគ្រឹះនៃ Web development",
      "ស្ថាបត្យកម្មគេហទំព័រ",
      "HTML + CSS",
      "Javascript",
      "tailwindcss",
      "Bootstrap",
      "React JS",
    ],
    duration: "47 ម៉ោង",
    lessons: 127,
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: "fa-solid fa-mobile-screen text-red-600 px-6 py-5 bg-red-200 rounded-full", //<i class=""></i>
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
    courses: 18,
    title: "Mobile Development វគ្គសិក្សាអភិវឌ្ឍន៍ទូរស័ព្ទ",
    description:
      "វគ្គសិក្សា Mobile Development ដំណើរនៃការបង្កើតកម្មវិធីទូរស័ព្ទចល័តសម្រាប់ប្រព័ន្ធប្រតិបត្តិការ Android និង iOS។ រៀនបង្កើតកម្មវិធីបែបចល័តដែលអាចដំណើរការលើឧបករណ៍ទូរស័ព្ទផ្សេងៗ។",
    topics: [
      "មូលដ្ឋានគ្រឹះនៃ Mobile development",
      "React Native",
      "Flutter",
      "Swift for iOS",
      "Kotlin for Android",
      "UI/UX for Mobile",
      "Mobile App Testing",
    ],
    duration: "52 ម៉ោង",
    lessons: 135,
  },
  {
    id: "datascience",
    name: "Data Science",
    icon: "fa-solid fa-layer-group text-green-600 p-5 rounded-full bg-green-200", //<i class=""></i>
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    courses: 16,
    title: "Data Science វគ្គសិក្សាវិទ្យាសាស្ត្រទិន្នន័យ",
    description:
      "វគ្គសិក្សា Data Science រៀនពីរបៀបវិភាគទិន្នន័យ និងប្រើប្រាស់ព័ត៌មានដើម្បីដោះស្រាយបញ្ហាក្នុងពិភពពិត។ រៀនពី SQL, Python, វិភាគទិន្នន័យ និងការបង្ហាញទិន្នន័យជាដើម។",
    topics: [
      "មូលដ្ឋានគ្រឹះនៃ Data Science",
      "Python សម្រាប់វិភាគទិន្នន័យ",
      "SQL និងគ្រប់គ្រងទិន្នន័យ",
      "វិភាគស្ថិតិ",
      "Machine Learning មូលដ្ឋាន",
      "Data Visualization",
      "Big Data ជាមួយ Hadoop",
    ],
    duration: "63 ម៉ោង",
    lessons: 142,
  },
  {
    id: "aiml",
    name: "AI & ML",
    icon: "fa-solid fa-dice-d20 text-purple-600 p-5 rounded-full bg-purple-200",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    courses: 12,
    title: "AI & ML វគ្គសិក្សាបញ្ញាសិប្បនិម្មិត",
    description:
      "វគ្គសិក្សា AI & ML រៀនពីការបង្កើតស្វ័យភាពតាមរយៈបញ្ញាសិប្បនិម្មិតនិងម៉ាស៊ីនសិក្សា។ រៀនពីប្រព័ន្ធ Neural Networks, Deep Learning, NLP និងច្រើនទៀត។",
    topics: [
      "មូលដ្ឋានគ្រឹះនៃ AI",
      "Machine Learning អនុវត្ត",
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "Natural Language Processing",
      "Reinforcement Learning",
    ],
    duration: "72 ម៉ោង",
    lessons: 158,
  },
  {
    id: "devops",
    name: "DevOps",
    icon: "fa-solid fa-hard-drive text-yellow-600 p-5 rounded-full bg-yellow-200",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    courses: 9,
    title: "DevOps វគ្គសិក្សាដំណើរការអភិវឌ្ឍន៍",
    description:
      "វគ្គសិក្សា DevOps រៀនពីការធ្វើសមាហរណកម្មរវាងការអភិវឌ្ឍន៍និងប្រតិបត្តិការ។ រៀនពី CI/CD, Docker, Kubernetes, ការគ្រប់គ្រងហេដ្ឋារចនាសម្ព័ន្ធ និងឧបករណ៍ DevOps ផ្សេងៗ។",
    topics: [
      "មូលដ្ឋានគ្រឹះនៃ DevOps",
      "Git និង Version Control",
      "Containerization ជាមួយ Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Cloud Computing",
    ],
    duration: "58 ម៉ោង",
    lessons: 121,
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: "fa-solid fa-leaf text-green-900 p-5 rounded-full bg-green-200", //<i class=""></i>
    bgColor: "bg-green-400",
    iconColor: "text-yellow-600",
    courses: 9,
    title: "Cybersecurity វគ្គសិក្សាសន្តិសុខតាមប្រព័ន្ធអ៊ីនធឺណិត",
    description:
      "វគ្គសិក្សា Cybersecurity រៀនពីការការពារប្រព័ន្ធ និងទិន្នន័យពីការគំរាមកំហែងតាមប្រព័ន្ធអ៊ីនធឺណិត។ រៀនពីការវាយប្រហារសាកល្បង, ការវិភាគកូដទំនាស់, និងការការពារប្រព័ន្ធបណ្តាញ។",
    topics: [
      "មូលដ្ឋានគ្រឹះនៃ Cybersecurity",
      "ការវាយប្រហារសាកល្បង",
      "ការវិភាគកូដទំនាស់",
      "ការការពារប្រព័ន្ធបណ្តាញ",
      "ការគ្រប់គ្រងហានិភ័យ",
      "សន្តិសុខលើ Cloud",
      "Ethical Hacking",
    ],
    duration: "61 ម៉ោង",
    lessons: 132,
  },
];

// Function to render category cards
function renderCategoryCards() {
  const cardContainer = document.querySelector(".status");

  techCategories.forEach((category, index) => {
    const card = document.createElement("div");
    card.className = `card ${category.bgColor} rounded-lg shadow p-4 flex flex-col items-center justify-center cursor-pointer`;
    card.setAttribute("data-id", category.id);
    card.innerHTML = `
                    <div class="w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center text-3xl mb-2">
                    <i class="${category.icon}"></i>
                        
                    </div>
                    <h3 class="font-bold text-center">${category.name}</h3>
                    <p class="text-sm text-gray-600 text-center">${category.courses} មេរៀន</p>
                `;

    // Add click event listener
    card.addEventListener("click", () => {
      // Remove active class from all cards
      document.querySelectorAll(".card").forEach((c) => {
        c.classList.remove("active-card");
      });

      // Add active class to clicked card
      card.classList.add("active-card");

      // Render content for selected category
      renderCategoryContent(category.id);
    });

    cardContainer.appendChild(card);
  });

  // Set first category as active by default
  if (techCategories.length > 0) {
    const firstCard = document.querySelector(".card");
    firstCard.classList.add("active-card");
    renderCategoryContent(techCategories[0].id);
  }
}

// Function to render content for selected category
function renderCategoryContent(categoryId) {
  const contentSection = document.getElementById("content-section");
  const category = techCategories.find((cat) => cat.id === categoryId);

  if (!category) return;

  // Create topic list HTML
  let topicListHTML = "";
  category.topics.forEach((topic) => {
    topicListHTML += `<li class="flex items-center my-2"><span class="mr-2 text-sm">•</span> ${topic}</li>`;
  });

  // Set content HTML
  contentSection.innerHTML = `
                <h2 class="text-2xl font-bold text-indigo-700 mb-4">${category.title}</h2>
                
                <p class="text-gray-700 mb-6">${category.description}</p>
                
                <div class="mb-8">
                    <h3 class="font-semibold mb-2 text-lg">មេរៀននៃវគ្គសិក្សា</h3>
                    <ul class="pl-4 text-gray-700">
                        ${topicListHTML}
                    </ul>
                </div>
                
                <div class="flex flex-wrap justify-between items-center">
                    <div class="flex items-center mb-4">
                        <div class="flex">
                            <span class="text-yellow-500 text-2xl">★★★★★</span>
                            <span class="ml-2 font-bold">5.0</span>
                        </div>
                    </div>
                    
                    <div class="flex flex-wrap gap-3 mb-4">
                        <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-md flex items-center">
                            <span class="mr-2">📚</span> ${category.courses} មេរៀន
                        </div>
                        <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-md flex items-center">
                            <span class="mr-2">🖥️</span> ${category.duration}
                        </div>
                        <div class="bg-green-100 text-green-800 px-4 py-2 rounded-md flex items-center">
                            <span class="mr-2">🕒</span> ${category.lessons} ម៉ោង
                        </div>
                    </div>
                </div>
                
                <button class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-md mt-4 w-full md:w-auto md:ml-auto md:block">
                    ចាប់ផ្តើមរៀនឥឡូវ!
                </button>
            `;
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryCards();
});
