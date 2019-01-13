<template>
<div class="main-wrapper">
  <body id="page-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Clarence Taylor</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt>
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">
            {{ name }}
            <span class="text-primary">Vetrenka</span>
          </h1>
          <div class="subheading mb-5">
            {{ address }}
            <a href="mailto:vet.andrius@gmail.com">{{ email }}</a>
          </div>
          <p class="lead mb-5">
            I am an energetic, ambitious, observant, responsible, punctual person who has developed a mature and
            responsible approach to any task that I undertake, or situation that I am presented with. I am very
            motivated to expand my knowledge in field, which is interesting to me. As a self-studying person in
            IT, I understand HTML, HTTP protocols and DOM. Have a perfect understanding of Windows, Linux,
            MacOs operating systems. I am excellent in working with others to achieve a certain objective on time
            and with excellence. As my first foreign language is German, my English language skills are not
            perfect. I didn‘t had many opportunities to practice my speaking English language skills, but as
            diligent student I am very quick in learning. Seeking to develop experience in PHP, JavaScript,
            working in preferred area of interests.
          </p>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/andrius-vetrenka-a96a2b127/?locale=de_DE">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">QA Test Engineer</h3>
              <div class="subheading mb-3">ENIGMA SOFTWARE GROUP LT</div>
              <p>
                Create and maintain test suites, designe ,
                implement, execute and debug automated test scripts for Web applications. Implement and maintain QA
                automation framework ( selenium, Larawel Dusk, White framework)
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">August 2016 - Present</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Web Developer</h3>
              <div class="subheading mb-3">Individual work:creation of Web pages</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">2014 - Present</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Chairman of the Community</h3>
              <div class="subheading mb-3">DNSB Baltijos32</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">2010 - Present</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Construction manager</h3>
              <div class="subheading mb-3">Work under patent (individual enterprise)</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">2004 - 2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Courier</h3>
              <div class="subheading mb-3">UAB LIETUVOS PAŠTAS</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">2003 - 2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Construction manager</h3>
              <div class="subheading mb-3">IĮ Grinva</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">200 - 202</span>
            </div>
          </div>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">University of Applied Sciences</h3>
              <div class="subheading mb-3">Diploma in Construction Management</div>
              <div>Engineer</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">1995 - 1999</span>
            </div>
          </div>
          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Individual studies online of Html, CSS, PHP and JavaScript,</h3>
              <div class="resume-date text-md-right">
                <span class="text-primary">2015 - 2016</span>
              </div>>
            </div>
          </div>
          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Individual studies online of English language</h3>
              <div class="resume-date text-md-right">
                <span class="text-primary">2015 - Present</span>
              </div>>
            </div>
          </div>
          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Individual studies online of English language</h3>
              <div class="resume-date text-md-right">
                <span class="text-primary">2015 - Present</span>
              </div>>
            </div>
          </div>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline dev-icons">
            <li>
              <div class="resume-item d-flex flex-column flex-md-row">
                <span>HTML</span>
                <v-rating
                background-color="purple lighten-3"
                color="purple"
                :value= 5
                :length="10"
                :readonly="readonly"></v-rating>
              </div>
            </li>
            <li>
              <div class="resume-item d-flex flex-column flex-md-row">
                <span>CSS</span>
                <v-rating
                :value= 5
                background-color="purple lighten-3"
                color="purple"
                :length="10"
                :readonly="readonly"></v-rating>
              </div>
            </li>

            <li class="list-inline-item">
              <i class="devicons-npm"></i>
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being outdoors. In the winter,
            am an avid snowboarder and skier. During the warmer months , I enjoy biking, kayaking,
            kiteboarding, wakeboarding and of course am a good basketball player :)
          </p>
          <p class="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre movies and television
            shows and I spend a large amount of my free time exploring the latest technology advancements
            in the front-end web development world.
          </p>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Udemy course complete: Build Responsive Real World Websites with HTML5 and CSS3
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Udemy course complete: Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Udemy course complete: PHP for Beginners - Become a PHP Master - CMS Project
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Udemy course complete: Selenium WebDriver with Java -Basics to Advanced+Frameworks
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Work Safety Certificate
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Fire Safety Certificate
            </li>
          </ul>
        </div>
      </section>
    </div>
  </body>
</div>
</template>

<script>
export default {
  data() {
    return {
      readonly: true,
      title: "My portfolio",
      name: "ANDRIUS",
      surname: "Vetrenka",
      address:
        " Address:​​ Baltijos str. 32-32, Kaunas, LT-48250,  tel : +370 65 258638",
      email: "vet.andrius@gmail.com",
      aboutMe:
        "I am experienced in leveraging agile frameworks to provide a robust synopsis for high  overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
      experience: [
        {
          position: "Senior Web Developer",
          company: "Intelitec Solutions",
          description:
            "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
          startDate: "March 2013",
          endDate: "Present"
        },
        {
          position: "Web Developer",
          company: "Intelitec Solutions",
          description:
            "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
          startDate: "December 2011",
          endDate: "March 2013"
        },
        {
          position: "Junior Web Designer",
          company: "Shout! Media Productions",
          description:
            "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
          startDate: "July 2010",
          endDate: "December 2011"
        },
        {
          position: "Web Design Intern",
          company: "Shout! Media Productions",
          description:
            "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
          startDate: "September 2008",
          endDate: "June 2010"
        }
      ]
    };
  },
  mounted() {
    const $ = this.jquery;
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
          location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html, body").animate(
              {
                scrollTop: target.offset().top
              },
              1000,
              "easeInOutExpo"
            );
            return false;
          }
        }
      });
      // Closes responsive menu when a scroll trigger link is clicked
      $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
      });
      // Activate scrollspy to add active class to navbar items on scroll
      $("body").scrollspy({
        target: "#sideNav"
      });
    });
  }
};
</script>

<style>
</style>
