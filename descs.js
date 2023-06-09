import chalk from "chalk";

export const about = `
        My name is Neza Yasser, i have experienced as
        developer for almost 2 years and product designer for more than 5 years
        i believe in teamwork and like to share knowledge with the other
`;

export const skill = `

        ${chalk.bgGreenBright("  Confident enough  ")}
        TypeScript : ✦✦✦✦✧
        JavaScript : ✦✦✦✦✧
        Golang : ✦✦✦✦✧
        FE : HTML, React (Next), Angular, Centralized State Management, NGINX web server, GSAP, SCSS, Flutter
        Other : RabbitMQ, ELK, Redis, GRPC, REST, Docker Swarm, Docker Compose, GraphQL, Microservices CQRS, Circuit Breaker, Event Driven, SQL, MongoDB

        ${chalk.bgYellow("  Currently/Will be Improving  ")}
        Python : ✦✦✦✧✧
        Rust : ✦✦✧✧✧
        Java : ✦✦✦✧✧
        FE : SolidJS, webpack, SEO, Creative 3D using ThreeJS, Vue, Svelte
        Other : Blockchain, Kafka, CI/CD, Kubernetes, Cyber Security, Monitoring, TDD, Web Socket, Service Mesh

        ${chalk.bgBlueBright("  Non Tech Skill  ")}
        Solidwork, Blender 3D : ✦✦✦✦✧
        Keyshot : ✦✦✦✦✧
        AutoCAD : ✦✦✦✦✧
        Figma : ✦✦✦✦✧
        XD : ✦✦✦✦✧
        Photoshop : ✦✦✦✦✧
        Illustrator : ✦✦✦✧✧
        Project Managing : ✦✦✦✧✧
        Document Writing : ✦✦✦✧✧

`;

export const portfolio = [
  {
    title: "Linen Management System | Tech Detail v0.0.2",
    desc: `

            The acronym LMS stands for Linen Management System, Our clients are linen producer
            companies that rent their linen to various users such as hospitals, hotels, and
            other establishments.

            For years, they have been facing the same problem of losing their linen, with
            a percentage ranging from 13% to 15% annually.

            Without a proper tracking system, this issue can have a significantly negative
            impact on their business. Therefore, we have introduced an RFID tracking solution
            and developed an LMS that caters to all the stakeholders involved, including:
            1) User (Hospital, Hotel, etc)
            2) Client (the Linen Company)
            3) Admin (our team, responsible for managing the licenses of all our clients).

        `,
    explanation: `

            From the backend side, we have designed a microservices architecture consisting of:
            1) ${chalk.bgGreenBright("API Gateway (Golang)")}
            2) ${chalk.bgYellowBright("Admin Srv (Golang)")}
            3) ${chalk.bgGreen("Auth Srv (Golang)")}
            4) ${chalk.bgYellow("User Srv (Golang)")}
            5) ${chalk.bgGreenBright("User-Query Srv (Rust)")}
            6) ${chalk.bgYellow("RFID Srv (Golang)")}
            7) ${chalk.bgGreenBright("RFID-Query Srv (Rust)")}
            8) ${chalk.bgYellow("Component Srv (Golang)")}
            9) ${chalk.bgGreenBright("Component-Query Srv (Rust)")}
            10) ${chalk.bgYellowBright("Notification Srv (Golang)")}
            11) ${chalk.bgGreenBright("Listener Srv (Golang)")}

            Frontend:
            1) ${chalk.bgGreenBright("User Desktop UI (SolidJS)")}
            2) ${chalk.bgYellowBright("Client Desktop UI (NextJS)")}
            3) ${chalk.bgGreenBright("Admin Desktop UI (Angular)")}
            4) ${chalk.bgYellowBright("Mobile Apps (Flutter)")}

            DB and Other Component:
            1) ${chalk.bgGreenBright("Message Broker (RabbitMQ)")}
            2) ${chalk.bgYellowBright("Orchestration (Docker Swarm)")}
            3) ${chalk.bgGreenBright("Scripting (Makefile)")}
            4) ${chalk.bgYellowBright("SQL (Postgres)")}
            5) ${chalk.bgGreenBright("NoSQL (MongoDB)")}
            6) ${chalk.bgYellowBright("Caching (Redis)")}
            7) ${chalk.bgGreenBright("Web Server (Caddy Golang)")}
            8) ${chalk.bgYellowBright("Logging (ELK)")}

            From our backend, we are making use of an API Gateway as a routing, authorization mechanism.
            The API Gateway requires an API key which is generated by our admin in the Admin Service.

            We have implemented CQRS (Command and Query Responsibility Segregation) throughout
            our User, RFID, and Component services. For instance, we have separate User Service
            and User Query Service. For querying tasks, we have created APIs using Rust Actix Web
            and MongoDB with caching. As we expect our app to grow, we can duplicate instances of
            our Query Service and balance the load using Docker Swarm's round-robin load balancing
            mechanism.

            The Auth Service is responsible for the authentication process. Here's a brief explanation
            of our user creation flow: Our admin creates our client's account with a random initial
            password using uuid. The password is sent to the client's email along with an API key.
            The Notification Service is responsible for managing email notifications to our users.

            The client can change their password later. Then, the client can create their user account.
            For communication between APIs, we mostly use Remote Procedure Call (RPC) between Golang,
            also we are using Rabbit MQ and Listener Service as it's aggregator and gRPC between 
            different languages. We are using the ELK stack for logging purposes.Out of all our services, 
            only the API Gateway is exposed.

            In our frontend, we are using Caddy as a web server and reverse-proxy. We have chosen SolidJS
            and NextJS, which are essentially React-based frameworks, due to their excellent performance.
            For the admin side, we are using Angular as we only require stable functionality. Also,
            we are using Flutter as it allows us to compile to both IOS and Android from one source code.

        `,
    link: [],
  },
  {
    title: "Linen Management System | UI/UX Detail v3.0.1",
    desc: `

            The acronym LMS stands for Linen Management System, Our clients are linen producer
            companies that rent their linen to various users such as hospitals, hotels, and
            other establishments.

            For years, they have been facing the same problem of losing their linen, with
            a percentage ranging from 13% to 15% annually.

            Without a proper tracking system, this issue can have a significantly negative
            impact on their business. Therefore, we have introduced an RFID tracking solution
            and developed an LMS that caters to all the stakeholders involved, including:
            1) User (Hospital, Hotel, etc)
            2) Client (the Linen Company)
            3) Admin (our team, responsible for managing the licenses of all our clients).

        `,
    explanation: `

            First, we must gather information in this process. A Product Owner is needed to delve into
            information from our users. Then, the UI/UX Designer will start a moodboard consisting of
            existing design references, color schemes, and user personas, etc. The goal of this step is
            to create a general picture of what the product will look like, without getting into too much detail,
            in order to save time. The designer will then collect detailed requirements from the Product Owner,
            such as the app flow and information architecture, before starting a Design Sprint. This sprint will
            result in a prototype for testing with the user. Only after this stage is complete will we proceed to
            engage the tech team. While the project is in the tech production phase, the UI/UX team can proceed
            with the creation of a Design System.


            This system is designed for all types of users, including linen providers, linen renters, and others,
            who may have different levels of understanding. For linen providers, who need to manage many details,
            we offer a web-based solution for managing their business. For linen renters who are not concerned
            with managing the linen, they can access the app from their mobile phone for a simpler and more convenient
            experience.

            By offering both web-based and mobile options, we aim to meet the needs of all types of users and provide
            a solution that is accessible and easy to use. The main layout of the website consists of a sidebar, header,
            and content page. This layout is designed to help users quickly find the information they need and get their
            job done efficiently. A small widget displaying the number of transactions for the day
            (e.g. "on the way to laundry", "in progress", "outgoing to client", and "paid transaction") is included
            for easier monitoring. The header also includes a breadcrumb to aid in navigation. Tab views are used
            to sort tables, and font hierarchy is implemented in cards and tables to guide the user to the
            most important information. To achieve the "Doherty Threshold" law, server-side pagination is used
            to limit the number of rows fetched from the database, resulting in smaller chunk size, faster-loading pages.
       
            `,
    link: [
      `https://www.figma.com/proto/VK2AGFov0LkiRZn9mdQkyj/LMS-v2.1?page-id=0%3A1&node-id=101-2&starting-point-node-id=109%3A986`,
      `https://www.figma.com/proto/KUAWCZekxpNtx6qZrRpewB/LMS-v2.2?page-id=107%3A394&node-id=107-395&starting-point-node-id=107%3A395`,
    ],
  },
];
