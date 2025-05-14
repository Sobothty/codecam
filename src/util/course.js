// Course data in JSON format - REPLACE THIS WITH YOUR ACTUAL DATA
const coursesData = [
  {
    id: "flutter-dev",
    title: "Flutter Developer",
    description:
      "Learn to build beautiful cross-platform mobile apps with Flutter",
    imageUrl: "https://via.placeholder.com/400x200?text=Flutter",
    rating: 4.5,
    reviewCount: 2340,
    modules: [
      {
        id: "flutter-basics",
        title: "Flutter Basics",
        lessons: [
          {
            id: "flutter-intro",
            title: "Introduction to Flutter",
            duration: "45 mins",
            videoId: "fq4N0hgOWzU",
          },
          {
            id: "dart-basics",
            title: "Dart Programming Basics",
            duration: "30 mins",
            videoId: "5rtujDjt50I",
          },
          {
            id: "flutter-widgets",
            title: "Flutter Widgets",
            duration: "35 mins",
            videoId: "b_sQ9bMltGU",
          },
        ],
      },
      {
        id: "flutter-advanced",
        title: "Advanced Flutter",
        lessons: [
          {
            id: "state-management",
            title: "State Management",
            duration: "40 mins",
            videoId: "3tm-R7ymwhc",
          },
          {
            id: "flutter-animations",
            title: "Flutter Animations",
            duration: "35 mins",
            videoId: "txLvvlooT20",
          },
        ],
      },
    ],
  },
  {
    id: "html-css",
    title: "HTML + CSS",
    description: "Master the fundamentals of web development with HTML and CSS",
    imageUrl: "https://via.placeholder.com/400x200?text=HTML+CSS",
    rating: 4.5,
    reviewCount: 2340,
    modules: [
      {
        id: "html-basics",
        title: "HTML Fundamentals",
        lessons: [
          {
            id: "html-intro",
            title: "Introduction to HTML",
            duration: "30 mins",
            videoId: "qz0aGYrrlhU",
          },
          {
            id: "html-elements",
            title: "HTML Elements & Structure",
            duration: "35 mins",
            videoId: "UB1O30fR-EE",
          },
        ],
      },
    ],
  },
];

// DOM Elements
const homePage = document.getElementById("home-page");
const coursePage = document.getElementById("course-page");
const coursesContainer = document.getElementById("courses-container");
const courseTitle = document.getElementById("course-title");
const sidebarTitle = document.getElementById("sidebar-title");
const lessonCount = document.getElementById("lesson-count");
const modulesContainer = document.getElementById("modules-container");
const videoContainer = document.getElementById("video-container");
const videoTitle = document.getElementById("video-title");
const videoDuration = document.getElementById("video-duration");
const prevLessonBtn = document.getElementById("prev-lesson");
const nextLessonBtn = document.getElementById("next-lesson");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const backToHomeBtn = document.getElementById("back-to-home");

// Current state
let currentCourseId = null;
let currentLessonId = null;
let allLessons = [];

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  renderCourses();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // Back to home button
  backToHomeBtn.addEventListener("click", function () {
    showHomePage();
  });

  // Sidebar toggle for mobile
  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (event) {
    if (
      window.innerWidth < 768 &&
      !sidebar.contains(event.target) &&
      !sidebarToggle.contains(event.target) &&
      !sidebar.classList.contains("hidden")
    ) {
      sidebar.classList.add("hidden");
    }
  });
}

// Render all courses on the home page
function renderCourses() {
  // Clear loading placeholder
  coursesContainer.innerHTML = "";

  // Render each course
  coursesData.forEach((course) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow";

    // Generate star rating HTML
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      const starClass =
        i <= Math.floor(course.rating) ? "text-yellow-400" : "text-gray-300";
      starsHtml += `<svg class="w-5 h-5 ${starClass}" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>`;
    }

    card.innerHTML = `
          <div class="relative">
            <img src="${course.imageUrl}" alt="${course.title}" class="w-full h-48 object-cover">
            <button class="course-btn absolute top-4 left-4 bg-green-400 hover:bg-green-500 text-gray-800 font-medium py-2 px-4 rounded-full transition-colors" data-id="${course.id}">
              ${course.status}
            </button>
          </div>
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2">${course.title}</h2>
            <p class="text-gray-600 mb-4">${course.description}</p>
            <div class="flex items-center mb-4">
              <div class="flex mr-2">
                ${starsHtml}
              </div>
              <span class="text-gray-600">${course.rating}</span>
              <span class="text-gray-500 ml-2">(${course.reviewCount})</span>
            </div>
            <button class="course-btn block w-full text-center bg-yellow-100 hover:bg-yellow-200 text-gray-800 font-medium py-2 px-4 rounded transition-colors" data-id="${course.id}">
              ចាប់ផ្តើមរៀនឥឡូវនេះ
            </button>
          </div>
        `;

    coursesContainer.appendChild(card);
  });

  // Add click event to all course buttons
  document.querySelectorAll(".course-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const courseId = this.getAttribute("data-id");
      openCourse(courseId);
    });
  });
}

// Open a course
function openCourse(courseId) {
  currentCourseId = courseId;
  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    alert("Course not found!");
    return;
  }

  // Update course title
  courseTitle.textContent = course.title;
  sidebarTitle.textContent = course.title;

  // Count total lessons
  allLessons = [];
  course.modules.forEach((module) => {
    module.lessons.forEach((lesson) => {
      allLessons.push(lesson);
    });
  });

  lessonCount.textContent = `${allLessons.length} lessons`;

  // Render modules and lessons
  renderModules(course);

  // Show course page
  showCoursePage();

  // Select first lesson if available
  if (allLessons.length > 0) {
    selectLesson(allLessons[0].id);
  }
}

// Render modules and lessons
function renderModules(course) {
  modulesContainer.innerHTML = "";

  course.modules.forEach((module, moduleIndex) => {
    const moduleElement = document.createElement("div");
    moduleElement.className = "module border-b";

    // Create module header
    const moduleHeader = document.createElement("button");
    moduleHeader.className =
      "flex items-center justify-between w-full p-4 text-left font-medium hover:bg-gray-100";
    moduleHeader.innerHTML = `
          <div class="flex items-center">
            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 mr-3">
              ${moduleIndex + 1}
            </div>
            <span>${module.title}</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="module-toggle h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        `;

    // Create lessons container
    const lessonsContainer = document.createElement("div");
    lessonsContainer.className = "lessons-container";

    // Add lessons
    module.lessons.forEach((lesson, lessonIndex) => {
      const lessonElement = document.createElement("button");
      lessonElement.className = `lesson-btn w-full flex items-center p-3 pl-12 hover:bg-gray-100 text-left ${
        lesson.id === currentLessonId
          ? "bg-blue-50 border-l-4 border-blue-500"
          : ""
      }`;
      lessonElement.setAttribute("data-id", lesson.id);
      lessonElement.innerHTML = `
            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 mr-3">
              ${lessonIndex + 1}
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate">${lesson.title}</p>
              <p class="text-xs text-gray-500">${lesson.duration}</p>
            </div>
          `;

      // Add click event
      lessonElement.addEventListener("click", function () {
        selectLesson(lesson.id);
      });

      lessonsContainer.appendChild(lessonElement);
    });

    moduleElement.appendChild(moduleHeader);
    moduleElement.appendChild(lessonsContainer);
    modulesContainer.appendChild(moduleElement);

    // Toggle module expansion
    moduleHeader.addEventListener("click", function () {
      const icon = moduleHeader.querySelector(".module-toggle");
      icon.classList.toggle("rotate-180");

      const lessonsContainer = moduleHeader.nextElementSibling;
      lessonsContainer.style.display =
        lessonsContainer.style.display === "none" ? "block" : "none";
    });
  });
}

// Select a lesson
function selectLesson(lessonId) {
  currentLessonId = lessonId;

  // Find the lesson
  let currentLesson = null;
  const course = coursesData.find((c) => c.id === currentCourseId);

  for (const module of course.modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      currentLesson = lesson;
      break;
    }
  }

  if (!currentLesson) return;

  // Update active lesson
  document.querySelectorAll(".lesson-btn").forEach((btn) => {
    if (btn.getAttribute("data-id") === lessonId) {
      btn.classList.add("bg-blue-50", "border-l-4", "border-blue-500");
    } else {
      btn.classList.remove("bg-blue-50", "border-l-4", "border-blue-500");
    }
  });

  // Update video
  videoContainer.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${currentLesson.videoId}" 
          title="${currentLesson.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          class="w-full h-full">
        </iframe>
      `;

  // Update title and duration
  videoTitle.textContent = currentLesson.title;
  videoDuration.textContent = `0:00 / ${currentLesson.duration}`;

  // Update navigation buttons
  updateNavigation();

  // Close sidebar on mobile
  if (window.innerWidth < 768) {
    sidebar.classList.add("hidden");
  }
}

// Update navigation buttons
function updateNavigation() {
  const currentIndex = allLessons.findIndex(
    (lesson) => lesson.id === currentLessonId
  );

  // Previous button
  if (currentIndex > 0) {
    prevLessonBtn.disabled = false;
    prevLessonBtn.classList.remove("opacity-50");
    prevLessonBtn.onclick = function () {
      selectLesson(allLessons[currentIndex - 1].id);
    };
  } else {
    prevLessonBtn.disabled = true;
    prevLessonBtn.classList.add("opacity-50");
    prevLessonBtn.onclick = null;
  }

  // Next button
  if (currentIndex < allLessons.length - 1) {
    nextLessonBtn.disabled = false;
    nextLessonBtn.classList.remove("opacity-50");
    nextLessonBtn.onclick = function () {
      selectLesson(allLessons[currentIndex + 1].id);
    };
  } else {
    nextLessonBtn.disabled = true;
    nextLessonBtn.classList.add("opacity-50");
    nextLessonBtn.onclick = null;
  }
}

// Show home page
function showHomePage() {
  homePage.classList.remove("hidden");
  coursePage.classList.add("hidden");
}

// Show course page
function showCoursePage() {
  homePage.classList.add("hidden");
  coursePage.classList.remove("hidden");
}
