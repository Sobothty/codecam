// Course data in JSON format
const coursesData = [
  {
    id: "flutter-dev",
    title: "Flutter Developer",
    status: "កម្រិតដំបូង",
    student: "2,230",
    description:
      "រៀនបង្កើតកម្មវិធីទូរស័ព្ទដែលប្រើប្រាស់រវៀងប្រព៏ន្ធផ្សេងគ្នាជាមួយនឹង Flutter",
    imageUrl:
      "https://beecrowd.com/wp-content/uploads/2024/04/2022-06-23-Flutter.jpg",
    rating: 3.0,
    reviewCount: 2230,
    modules: [
      {
        id: "flutter-basics",
        title: "Flutter Basics",
        lessons: [
          {
            id: "flutter-intro",
            title: "Introduction to Flutter",
            des: "នៅក្នុងមេរៀននេះយើងនឹងរៀនអំពីការណែនាំឱ្យស្គាល់អំពី Spring boot និងការ Setup IDE",
            videoId: "fq4N0hgOWzU",
          },
          {
            id: "dart-basics",
            title: "Dart Programming Basics",
            des: "ការស្គាល់អំពី Variable, Condition",
            videoId: "5rtujDjt50I",
          },
          {
            id: "flutter-widgets",
            title: "Flutter Widgets",
            des: "ការរៀបចំ layout",
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
            des: "ការរៀបចំ State ដែលមានច្រើននៅពេលយើងទាញយកនៅ data ពី API",
            videoId: "3tm-R7ymwhc",
          },
          {
            id: "flutter-animations",
            title: "Flutter Animations",
            des: "ការរៀបចំនៅ Animation",
            videoId: "txLvvlooT20",
          },
        ],
      },
    ],
  },
  {
    id: "html-css",
    title: "HTML + CSS",
    status: "កម្រិតខ្ពស់",
    student: "15,230",
    description:
      "គ្រប់គ្រងមូលដ្ឋានគ្រឹះនៃការអភិវឌ្ឍន៍គេហទំព័រជាមួយ HTML និង CSS",
    imageUrl:
      "https://futureteachinstitute.com/wp-content/uploads/2023/07/html-css-beginners.jpg",
    rating: 4,
    reviewCount: 234340,
    modules: [
      {
        id: "html-basics",
        title: "HTML Fundamentals",
        lessons: [
          {
            id: "html-intro",
            title: "Introduction to HTML",
            des: "តើអ្វីជាHTML?",
            videoId: "WXHoHeU_LWg",
          },
          {
            id: "html-elements",
            title: "Editorសម្រាប់សរសេរ HTML",
            des: "ការ setup នៅ Edito ​សម្រាប់សរសេរHTML",
            videoId: "w1Fx4GAKOqM",
          },
          {
            id: "html-editor",
            title: "Basic HTML",
            des: "មកស្គាល់អំពីBasic​ Tag និង​ HTML​ Document ",
            videoId: "nYhu1BbHfuQ",
          },
          {
            id: "html-basic",
            title: "Element HTML",
            des: "មកស្គាល់អំពីElementរបស់ភាសាHTML",
            videoId: "49jS2goXT6U",
          },
          {
            id: "html-attribute",
            title: "Attribute HTML",
            des: "មកស្គាល់អំពីAttributeរបស់ភាសាHTML",
            videoId: "ibWfd7buEpU",
          },
          {
            id: "html-format-tage",
            title: "Format HTML",
            des: "តើអ្វីជាHTML Format​ Tag?",
            videoId: "5OrVuFy7DWo",
          },
        ],
      },
      {
        id: "css-basics",
        title: "CSS Fundamentals",
        lessons: [
          {
            id: "css-pseudo-class",
            title: "Pseudo Class Selector",
            des: "Pseudo Class Selector",
            videoId: "ZUqoIFGW9HQ",
          },
          {
            id: "css-layout",
            title: "CSS Layout & Responsive",
            des: "សរសេរកូដ HTML និង CSS ដើម្បីធ្វើ Responsive",
            videoId: "Rc2WHMEafNM",
          },
        ],
      },
    ],
  },
  {
    id: "linux-commands",
    title: "Linux Commands",
    status: "កម្រិតដំបូង",
    student: "230",
    description:
      "រៀនអំពីការប្រើប្រាស់ commend linux សំខាន់ៗសម្រាប់ការគ្រប់គ្រងប្រព័ន្ធ",
    imageUrl:
      "https://cdn.slidesharecdn.com/ss_thumbnails/basiccommandsoflinux-161223121032-thumbnail.jpg?width=560&fit=bounds",
    rating: 4,
    reviewCount: 40,
    modules: [
      {
        id: "linux-basics",
        title: "Linux Basics",
        lessons: [
          {
            id: "linux-intro",
            title: "Introduction to Linux",
            des: "30 mins",
            videoId: "ROjZy1WbCIA",
          },
          {
            id: "file-system",
            title: "Linux File System",
            des: "25 mins",
            videoId: "HbgzrKJvDRw",
          },
          {
            id: "basic-commands",
            title: "Basic Linux Commands",
            des: "40 mins",
            videoId: "CpTfQ-q6MPU",
          },
        ],
      },
      {
        id: "linux-advanced",
        title: "Advanced Linux",
        lessons: [
          {
            id: "shell-scripting",
            title: "Shell Scripting",
            des: "45 mins",
            videoId: "GtovwKDemnI",
          },
          {
            id: "system-admin",
            title: "System Administration",
            des: "50 mins",
            videoId: "1hvVcEhcbLM",
          },
        ],
      },
    ],
  },
  {
    id: "spring-boot",
    title: "Spring Boot",
    status: "កម្រិតខ្ពស់",
    student: "234,900",
    description: "រៀនង និងបង្កើតកម្មវិធីជាមួយនឹង Spring Boot framework",
    imageUrl:
      "https://www.devopsschool.com/blog/wp-content/uploads/2023/12/image-168.png",
    rating: 5,
    reviewCount: 452340,
    modules: [
      {
        id: "spring-basics",
        title: "Spring Boot Basics",
        lessons: [
          {
            id: "spring-intro1",
            title: "Introduction to Spring Boot",
            des: "Getting started with Spring Framework part 1",
            videoId: "jCCTO-Bb1A8",
          },
          {
            id: "spring-intro2",
            title: "Introduction to Spring Boot",
            des: "Getting started with Spring Framework part 2",
            videoId: "HRMrjbL-B8Y",
          },
          {
            id: "spring-core1",
            title: "Spring Core",
            des: "Spring Core Technologies - Dependency Injection Part 1",
            videoId: "EFFna8ruX-A",
          },
          {
            id: "spring-core2",
            title: "Spring Core",
            des: "Spring Core Technologies - Dependency Injection Part 2",
            videoId: "g73FlWfuV9k",
          },
        ],
      },
      {
        id: "spring-advanced",
        title: "Advanced Spring Boot",
        lessons: [
          {
            id: "spring-security",
            title: "RESTful Security",
            des: "រៀនអំពីការរៀបចំ Security",
            videoId: "zISbdYhzYmk",
          },
          {
            id: "spring-rest",
            title: "RESTful Security with Spring",
            des: "45 mins",
            videoId: "cNuZ1ZrLPXc",
          },
        ],
      },
    ],
  },
];
