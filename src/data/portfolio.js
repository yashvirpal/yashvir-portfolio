// ─── Portfolio Data ────────────────────────────────────────────────────────
// Edit this file to update all content across the site.

module.exports = {
  meta: {
    title: 'Yashvir Pal — Fullstack Web Developer',
    description:
      'Professional full-stack web developer with 7+ years of experience in PHP, Laravel, React, Vue.js, Node.js, WordPress, and Tailwind CSS.',
    url: 'https://yashvirpal.com',
    image: '/assets/og-image.png',
    twitterHandle: '@devyashvirpal',
  },

  person: {
    name: 'Yashvir Pal',
    title: 'Fullstack Web Developer',
    tagline: 'Building performant, scalable web applications from backend to browser.',
    email: 'contact@yashvirpal.com',
    phone: '+91 875 667 2297',
    location: 'Delhi, India',
    birthday: 'Nov 26, 1993',
    cvUrl: '/assets/yashvirpal_developer.pdf',
  },

  socials: [
    { label: 'GitHub',   url: 'https://github.com/yashvirpal',           icon: 'github'   },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yashvirpal/', icon: 'linkedin' },
    { label: 'Twitter',  url: 'https://x.com/devyashvirpal',             icon: 'twitter'  },
    { label: 'WhatsApp', url: 'https://wa.me/918756672297',              icon: 'whatsapp' },
  ],

  about: [
    "I'm a highly skilled and motivated Software Development Engineer with over <strong>7+ years of experience</strong> in software creation and maintenance. I possess a strong foundation in website development and am adept at tackling project tasks across various levels.",
    "I specialize in designing and building <strong>responsive, user-friendly websites</strong> that deliver exceptional user experiences. I do my best work at the intersection of clean code and thoughtful UX — building visually appealing, highly functional products optimized for performance.",
    "Known for being communicative, honest, and adaptable, I have a proven track record in <strong>mentoring co-workers</strong> and assuming leadership roles in project implementation.",
  ],

  experience: [
    {
      period: 'Jan 2021 — May 2024',
      role: 'Team Lead (D&D)',
      company: 'Ez Rankings Pvt. Ltd.',
      companyUrl: 'https://www.ezrankings.com',
      description:
        'Led a development team building and maintaining client websites. Managed project architecture, code reviews, and deployment pipelines. Mentored junior developers and collaborated closely with design and product teams to deliver high-quality digital products on schedule.',
      tags: ['Laravel', 'React', 'Vue.js', 'WordPress', 'Node.js', 'MySQL'],
    },
    {
      period: 'Nov 2017 — Oct 2021',
      role: 'Associate Web Developer',
      company: 'V2web Hosting Pvt. Ltd.',
      companyUrl: '#',
      description:
        'Developed and maintained web applications for diverse clients. Built custom PHP/Laravel backends, designed responsive frontends, and integrated third-party APIs. Gained deep expertise in e-commerce solutions using WooCommerce and Shopify.',
      tags: ['PHP', 'Laravel', 'CodeIgniter', 'WooCommerce', 'JavaScript', 'CSS'],
    },
    {
      period: 'Apr 2017 — Oct 2017',
      role: 'Jr. Web Developer',
      company: 'Alltoit Pvt. Ltd.',
      companyUrl: '#',
      description:
        'Started professional career building websites and web apps. Worked on frontend development, WordPress theme customization, and core PHP applications under senior guidance.',
      tags: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Core PHP'],
    },
  ],

  skills: [
    {
      category: 'Backend',
      items: ['PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'Core PHP', 'REST APIs'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS'],
    },
    {
      category: 'CMS / E-Commerce',
      items: ['WordPress', 'WooCommerce', 'Shopify', 'Contentful'],
    },
    {
      category: 'Databases & Tools',
      items: ['MySQL', 'MongoDB', 'Git / GitHub', 'LAMP Stack', 'Photoshop', 'Figma'],
    },
  ],

  projects: [
    {
      num: 1,
      title: 'PNG Guru',
      type: 'Image Listing Platform · Laravel',
      description:
        'A high-traffic image resource platform with advanced search, filtering, and category management. Built with Laravel, optimized for performance and SEO.',
      url: 'https://www.pngguru.in/',
      github: null,
      tags: ['Laravel', 'MySQL', 'PHP'],
    },
    {
      num: 2,
      title: 'Manavta Family',
      type: 'Membership & Payments · Laravel',
      description:
        'Full-featured membership management system with integrated payment gateway, user subscriptions, and admin dashboard built in Laravel.',
      url: 'https://manavtafamily.org/',
      github: null,
      tags: ['Laravel', 'Payments', 'MySQL'],
    },
    {
      num: 3,
      title: 'Cow Wings',
      type: 'E-Commerce · Laravel',
      description:
        'End-to-end e-commerce platform with product catalog, cart management, order tracking, and secure checkout — fully custom built in Laravel.',
      url: 'https://cowwings.com/',
      github: null,
      tags: ['Laravel', 'E-Commerce', 'JavaScript'],
    },
    {
      num: 4,
      title: 'AL-Pasban',
      type: 'E-Commerce · Core PHP',
      description:
        'Custom e-commerce store built from scratch with Core PHP. Open-sourced on GitHub with a full shopping cart, product management, and order system.',
      url: 'https://www.alpasban.com/',
      github: 'https://github.com/yashvirpal/Core-PHP-Ecommerce',
      tags: ['Core PHP', 'MySQL', 'Open Source'],
    },
    {
      num: 5,
      title: 'Restaurant App',
      type: 'Web App · Vue.js',
      description:
        'A responsive restaurant management interface built with Vue.js. Features a dynamic menu, cart, and smooth UI interactions deployed on Vercel.',
      url: 'https://yashvirpal-restaurant.vercel.app/',
      github: 'https://github.com/yashvirpal/restaurant-vue',
      tags: ['Vue.js', 'Vercel', 'JavaScript'],
    },
    {
      num: 6,
      title: 'JS Projects Collection',
      type: 'Games & Utilities · JavaScript',
      description:
        'Collection of vanilla JavaScript projects — Chrome dino game clone, mosquito-hitting game, love calculator, password generator, and more.',
      url: 'https://yashvirpalprojects.netlify.app/',
      github: null,
      tags: ['JavaScript', 'HTML5', 'CSS3'],
    },
  ],
};
