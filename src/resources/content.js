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
  languages: ["Deutsch", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false, // Temporär deaktiviert
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
  headline: <>Schnittstelle zwischen Entwicklung und Betrieb mit der Ausrichtung zur Cloud.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">CultMap</strong></>,
    href: "/work/cultmap_webapplication",
  },
  subline: (
    <>
       Ich bin Fabian Weighold , Fullstack trainee.
      <br /> Mit Fokus auf Fullstack Development, DevOps und Cloud setze ich auf Automatisierung und den Aufbau moderner, skalierbarer Systeme.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Über mich",
  title: `Über mich – ${person.name}`,
  description: `Lerne ${person.name} kennen, ${person.role} aus ${person.location}`,
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
    title: "Über mich",
    description: (
      <>
        Ich bin derzeit als Werkstudent im Bereich Fullstack Webentwicklung tätig und arbeite an der Schnittstelle von Frontend- und Backend-Technologien in einem agilen Teamumfeld.<br />
        <br />
        Parallel erweitere ich meine Kenntnisse im Bereich Cloud-Architektur, indem ich ein Zertifizierungsprogramm zum Cloud Solution Architect absolviere.<br />
        <br />
        Als Masterstudent im Studiengang Automotive Software Engineering bringe ich fundiertes technisches Verständnis mit, das ich gezielt auf moderne Web-, Cloud- und DevOps-Technologien anwende.<br />
        <br />
        Mein mittelfristiges Ziel ist eine Position, in der ich meine Fähigkeiten in Automation, CI/CD, Cloud-Infrastruktur und Softwarebetrieb weiter ausbauen und anwenden kann. Besonders spannend finde ich Rollen im Bereich DevOps Engineering, bin jedoch ebenso offen für verwandte Tätigkeiten wie Fullstack-Entwicklung oder Systemadministration, die den Aufbau ganzheitlicher Systemarchitekturen und stabiler Infrastrukturen fördern.“      </>
    ),
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technische Fähigkeiten",
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
        title: "GitHub",
        description: <>Ich nutze GitHub für die Versionskontrolle und kollaborative Softwareentwicklung. Dabei arbeite ich mit Git-Workflows, Pull Requests, Code Reviews und der Integration von GitHub Actions für automatisierte Build- und Test-Prozesse.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "github",
            alt: "GitHub Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
      {
        title: "GitLab",
        description: <>Mit GitLab arbeite ich in Unternehmensumgebungen für die Versionskontrolle und das Management von Code-Repositories. Ich nutze GitLab's integrierte Features für Issue-Tracking, Wiki-Dokumentation und kollaborative Entwicklung.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "gitlab",
            alt: "GitLab Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
      {
        title: "GitLab CI/CD",
        description: <>Ich konfiguriere und optimiere GitLab CI/CD-Pipelines für automatisierte Build-, Test- und Deployment-Prozesse. Dabei erstelle ich .gitlab-ci.yml-Dateien, definiere Stages, Jobs und implementiere Deployment-Strategien für verschiedene Umgebungen.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "gitlab",
            alt: "GitLab CI/CD Logo",
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
      {
        title: "Node.js",
        description: <>Mit Node.js entwickle ich serverseitige JavaScript-Anwendungen und APIs. Ich nutze es für Backend-Services, Microservices-Architekturen und die Erstellung von RESTful APIs mit Express.js. Dabei sammle ich Erfahrung mit asynchroner Programmierung, Package Management mit npm und der Integration verschiedener Datenbanken.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "nodejs",
            alt: "Node.js Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
      {
        title: "AWS",
        description: <>Ich arbeite mit Amazon Web Services für Cloud-Infrastruktur und -Services. Dabei sammle ich Erfahrung mit EC2-Instanzen, Container-Orchestrierung mit ECS, Storage-Lösungen mit S3, und Datenbankservices wie RDS. Aktuell absolviere ich eine Zertifizierung zum AWS Solution Architect, um meine Cloud-Kenntnisse weiter zu vertiefen.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "aws",
            alt: "AWS Logo",
            width: 16,
            height: 9,
            isIcon: true,
          },
        ],
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Erfahrungen",
    experiences: [
      {
        company: "Porsche Leipzig GmbH",
        timeframe: "2023 - Gegenwart",
        role: "Fullstack Developer Werkstudent",
        achievements: [
          <>
            Aufbau und Pflege einer Systemarchitektur mit mehreren Datenbankservern (MSSQL, PI Web API) sowie Linux-Servern mit Docker-Containern (MongoDB für User-Verwaltung mit gehashten Passwörtern, Redis Cache für Performanceoptimierung, monolithische WebApp).
          </>,
          <>
            CI/CD-Pipeline (GitLab): Automatisierte Feature-Rollouts und Deployments.
          </>,
          <>
            Versionskontrolle und Projektmanagement via GitLab (Branches, Merge Requests, Code Reviews).
          </>,
          <>
            Administration von Zugriffskontrollen (SSH), Cronjobs und Docker-Compose auf SUSE Linux Enterprise 15.
          </>,
          <>
            Netzwerkmanagement inkl. Firewall-Regeln zur sicheren On-Prem-Kommunikation der Systeme.
          </>,
          <>
            Requirements Engineering: Analyse, Abstimmung und Dokumentation von Anforderungen.
          </>,
          <>
            Debugging und Troubleshooting komplexer Systeme (Backend, Datenbanken, Container).
          </>,
          <>
            Package Management: Aktualisierung und Absicherung von Python-Paketen.
          </>,
          <>
            Schnittstellenkoordination: Kommunikation mit Netzwerk-, Datenbank-Teams und Kunden.
          </>,
          <>
            Dokumentation der Architektur, Deployments und Prozesse.
          </>,
          <>
            Automatisierung von Abläufen durch Skripte, Cronjobs und Pipeline-Jobs.
          </>,
          <>
            Performanceoptimierung durch Caching (Redis) und Reduktion von Datenladezeiten.
          </>,
          <>
            UI/UX-Anpassungen nach Anforderungen beziehungsweise Userfeedback.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // Format: { src: string, alt: string, width: number, height: number, isIcon?: boolean }
        ],
      },
      {
        company: "ICM - Institut Chemnitzer Maschinen und Anlagen e.V.",
        timeframe: "2022 - 2023",
        role: "Hilfswissenschaftler Produktionstechnik",
        achievements: [
          <>
            Durchführung von Recherchen im Bereich Produktionstechnik und erste Erfahrungen mit MATLAB.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Bildung",
    institutions: [
      {
        name: "Technische Universität Chemnitz",
        description: <>Master-Abschluss in Automotive Software Engineering.</>,
      },
      {
        name: "Hochschule Mittweida",
        description: <>Bachelor-Abschluss in Maschinenbau.</>,
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

const certificates = {
  path: "/certificates",
  label: "Zertifikate",
  title: `Zertifikate & Fähigkeiten – ${person.name}`,
  description: `Erworbene Zertifikate und nachgewiesene Fähigkeiten von ${person.name}`,
};

export { person, social, newsletter, home, about, blog, work, gallery, certificates };
