// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'powplowdevs', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/sleekPortfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['powplowdevs/WINSPAR-Windows-TCP-Optimizer', 'powplowdevs/ASIO-Client-Server-Framework'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'WINSPAR',
          description:
            'WINSPAR is a command-line tool designed to optimize TCP settings and download speeds of applications on Windows systems for improved network performance. It provides features for tuning various TCP parameters, managing application bandwidth usage, and conducting network speed tests.',
          imageUrl:
            'https://private-user-images.githubusercontent.com/74332267/334842018-35a06366-b22b-421b-a18f-9a6131c1e2d8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDU5Mzc1OTcsIm5iZiI6MTc0NTkzNzI5NywicGF0aCI6Ii83NDMzMjI2Ny8zMzQ4NDIwMTgtMzVhMDYzNjYtYjIyYi00MjFiLWExOGYtOWE2MTMxYzFlMmQ4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDI5VDE0MzQ1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMwYTIzYzMwYTQxN2EyYjAyYjQ5NzgyNDRkZTM4NzkwM2JhMTM3NDgwYzk1Zjk3MDAxODgyMTk1ZDY4NDk2NWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.k1MjweSb9aTy96yeWwK4G9k9vtpCftwRJYYihd2GZ6o',
          link: 'https://github.com/powplowdevs/WINSPAR-Windows-TCP-Optimizer',
        },
        {
          title: 'ASIO Client-Server Framework',
          description:
            'This framework is a baseline setup for asynchronous communication between a server and multiple clients using Boost ASIO.',
          imageUrl:
            'https://img.freepik.com/free-vector/server-status-concept-illustration_114360-1293.jpg?t=st=1745937637~exp=1745941237~hmac=40ba38c07bc1399459133aba736be14225203cdc21f717c13b3740a40b4c9812&w=826',
          link: 'https://github.com/powplowdevs/ASIO-Client-Server-Framework',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ayoub Mohamed',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ayoub-mohamed-3179112a2',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'ayoubsmohamed07',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://powplowdevs.github.io',
    phone: '',
    email: 'ayoubsmohamed07@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'CyberSec',
    'C++',
    'Java',
    'JavaScript',
    'Node.js',
    'Python',
    'MySQL',
    'Git',
    'CSS',
    'HTML',
  ],
  experiences: [
    {
      company: ' FCP: Cub Run Rec Center',
      position: 'General Support Assistant (Volunteer)',
      from: 'April 2024',
      to: 'May 2024',
      companyLink: 'https://www.fairfaxcounty.gov/parks/reccenter/cub-run',
    },
    {
      company: 'James Lee Community Center',
      position: 'General Support Assistant (Volunteer)',
      from: 'April 2025',
      to: 'May 2025',
      companyLink: 'https://www.fairfaxcounty.gov/neighborhood-community-services/james-lee-community-center',
    },
  ],
  certifications: [
    {
      name: 'Certificate of CS Achievement',
      body: 'Woodson CSHS award displaying a students above and beyond expertise in computer science',
      year: 'May 2023',
      link: 'https://csteachers.org/cshs/',
    },
    {
      name: 'Learning Data Analytics Certificate Linked in',
      body: '',
      year: '2022',
    },
    {
      name: 'Google Foundations of Cyber-security Certificate',
      body: 'First course in the Google Cybersecurity Certificate. Introduceing the cybersecurity profession, including the primary job responsibilities and core skills of entry-level analysts; significant events that led to the development of the cybersecurity field; and security’s continued importance to organizational operations. ',
      year: '2024',
      link: 'https://csteachers.org/cshs/',
    },
    {
      name: 'Google Manage Security Risks Cybersecurity Certificate',
      body: 'Course within that Google Cybersecurity Certificate covers CISSP eight security domains, steps of risk management, security frameworks and controls (e.g., NIST, CIA triad, OWASP), as well as common security threats, risks, and vulnerabilities.',
      year: '2024',
      link: 'http://coursera.org/learn/foundations-of-cybersecurity',
    },
  ],
  educations: [
    {
      institution: 'Carter G. Woodson High School,',
      degree: 'adv high school diploma',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'George Mason University',
      degree: 'Information Technology - B.S.',
      from: '2025',
      to: 'present',
    },
  ],
  publications: [
    {
      title: 'Python linear regression',
      conferenceName: '',
      journalName: '',
      authors: 'Ayoub Mohamed',
      link: 'https://medium.com/@ayoubsmohamed07/python-linear-regression-5f91b7bf1e56',
      description:
        'a description of linear regression using python',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
