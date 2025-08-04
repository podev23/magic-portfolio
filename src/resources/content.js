import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Fabian",
  lastName: "Weighold",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Aspiring DevOps Engineer & Fullstack Developer | M.Sc. Student",
  avatar: "/images/avatar.jpg",
  email: "fabian.weighold@s2023.tu-chemnitz.de",
  location: "Europe/Berlin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "German"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/podev23",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fweighold/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `A microservices architecture based web application showcasing web technologies and databases. ${person.role}`,
  headline: <>Building bridges web and databases</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">CultMap</strong></>,
    href: "/work/cultmap_webapplication",
  },
  subline: (
    <>
      I'm Fabian, a software engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ich bin derzeit als Werkstudent im Bereich Fullstack Webentwicklung tätig und arbeite an der Schnittstelle von Frontend- und Backend-Technologien in einem agilen Teamumfeld.<br />
        <br />
        Parallel erweitere ich meine Kenntnisse im Bereich Cloud-Architektur, indem ich ein Zertifizierungsprogramm zum Cloud Solution Architect absolviere.<br />
        <br />
        Als eingeschriebener Masterstudent im Studiengang Automotive Software Engineering (geplant: Wechsel zu Web Engineering) bringe ich fundiertes technisches Verständnis mit, das ich gezielt auf moderne Web-, Cloud- und DevOps-Technologien anwende.<br />
        <br />
        Mein mittelfristiges Ziel ist eine Position im Bereich DevOps Engineering, wo ich meine Fähigkeiten in Automation, CI/CD, Cloud-Infrastruktur und Softwarebetrieb weiter ausbauen und anwenden möchte. Ich interessiere mich besonders für ganzheitliche Systemarchitekturen, effiziente Deployment-Prozesse und stabile, skalierbare Infrastrukturen.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Porsche Leipzig GmbH",
        timeframe: "2023 - Present",
        role: "Fullstack Developer intern",
        achievements: [
          <>
            Developed a web application which automates the process of comparing a measureing system with a reference system, resulting in a 50% increase in user
            engagement for the whole process.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // Format: { src: string, alt: string, width: number, height: number, isIcon?: boolean }
        ],
      },
      {
        company: "ICM - Institut Chemnitzer Maschinen und Anlagen e.V.",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Technische Universität Chemnitz",
        description: <>Master degree in automotive software engineering.</>,
      },
      {
        name: "Hochschule Mittweida",
        description: <>Bachelors degreee in mechanical engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Docker",
        description: <>Mit Docker containerisiere ich Anwendungen für konsistente Deployment-Umgebungen. Ich nutze Docker Compose für Multi-Container-Anwendungen und habe Erfahrung mit der Erstellung von optimierten Images für verschiedene Anwendungsfälle.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "docker",
            alt: "Docker Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
      {
        title: "Kubernetes",
        description: <>Ich arbeite mit Kubernetes für die Orchestrierung von Container-Anwendungen und das Management von Microservices. Dabei sammle ich Erfahrung mit Pod-Management, Service-Discovery und der Skalierung von Anwendungen in Cloud-Umgebungen.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "kubernetes",
            alt: "Kubernetes Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
      {
        title: "Grafana",
        description: <>Mit Grafana erstelle ich aussagekräftige Dashboards für die Überwachung und Visualisierung von Metriken. Ich konfiguriere Datenquellen, erstelle benutzerdefinierte Panels und entwickle Alerting-Regeln für proaktive Systemüberwachung.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "grafana",
            alt: "Grafana Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
      {
        title: "Prometheus",
        description: <>Ich nutze Prometheus für das Sammeln und Speichern von Metriken sowie das Monitoring von Anwendungen und Infrastruktur. Dabei konfiguriere ich Exporters, erstelle PromQL-Queries und implementiere benutzerdefinierte Metriken für umfassende Systemüberwachung.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "prometheus",
            alt: "Prometheus Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Mit Next.js habe ich eine Webanwendung für mein Fußballteam entwickelt, die zur Organisation von Spielterminen und Teamkommunikation dient. Die App enthält auch spielerische Elemente zur Motivation.
        Dabei konnte ich praktische Erfahrung mit Fullstack-Entwicklung, API-Routen, SSR und dem Deployment über Vercel sammeln.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "nextjs",
            alt: "Next.js Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
      {
        title: "NestJS",
        description: <>Im Rahmen eines Uni-Projekts habe ich mit NestJS eine Microservice-Architektur mit vier Services und einem API-Gateway umgesetzt. Mithilfe von Docker konnte ich die gesamte Infrastruktur lokal und in der Cloud (AWS) für Demozwecke betreiben und testen.
Dabei sammelte ich praktische Erfahrung mit verteilten Systemen, Interservice-Kommunikation (TCP), API-Gateway-Routing und Cloud-Deployment.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "nestjs",
            alt: "NestJS Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
      {
        title: "Plotly Dash",
        description: <>Mit Plotly Dash entwickle ich datengetriebene Webanwendungen in Python – ideal für Prototyping, Datenanalyse, Dashboards und die Visualisierung komplexer Zusammenhänge in interaktiven Interfaces.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "plotly",
            alt: "Plotly Dash Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
