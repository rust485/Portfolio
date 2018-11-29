import { Project }   from "../app/models/Project";
import { SDProject } from "../app/models/SDProject";

export const ProjectList: Project[] =
[
  {
    id:          0,
    name:        "Squad Command",
    title:       "Squad Command",
    description: "Squad Command is an RTS, multiplayer game developed with Node.js. \
                  The game features a robust pathfinding, physics, and behavioral \
                  systems that showcase my abilities as a developer. The design of \
                  the game is very object-oriented and modular, attempting to increase \
                  reuse of code and to decrease the interconnection amongst modules. \
                  This project was developed as a group project for Com S 309 at \
                  Iowa State University.",
    role:        "Lead Server and Frontend Developer: in charge of overseeing the \
                  construction of all components of the game and for deciding the \
                  overall structure",
    skills:      "This project significantly improved my algorithmic abilities, \
                  knowledge of synchronization, server-client programming, and my \
                  leadership abilities.",
    resources:   ["Node.js", "HTML", "HTML Canvas"],
    link:        "https://github.com/rust485/SquadCommand",
    images:      ["sqdcmd-screenshot.png", "sqdcmd-design.png"],
    captions:    ["A screenshot of the game in action", "The component diagram describing \
                   the squad command game"]
  },
  {
    id:          1,
    name:        "C Shell",
    title:       "C Shell",
    description: "C Shell is a bash like shell developed in the C programming language. \
                  The shell is capable of running programs in the background, piping data, \
                  as well as executing many other key bash functionalities. The design of this \
                  project is somewhat modular. The shell uses a history struct, which is in \
                  charge of storing and fetching recently executed commands. The main \
                  shell method will interact the history struct as needed in order \
                  to execute the desired commands",
    role:        "Developer",
    skills:      "Further improved C programming abilities and increased \
                  understanding of threads and C synchronization methods.",
    resources:   ["C", "Linux"],
    link:        "https://github.com/rust485/shell",
    images:      ["cshell-screenshot.png"],
    captions:    ["A screenshot of the shell in action"]
  },
  {
    id:          2,
    title:       "C Server-Client",
    name:        "C Server-Client",
    description: "C server-client is a server-client combo implemented in C. The \
                  server and client communicate using HTTP requests with a variety \
                  of options possible. For this project, I used the client-server \
                  design, where the client and server are both self-contained processes \
                  that communicate with each other. With this design, both the client \
                  and the server are separate components, making the client capable \
                  of communicating with any server, such as www.google.com. The \
                  server accepts HTTP requests and retrieves files and information \
                  based on the headers sent by the client. ",
    role:        "Developer",
    skills:      "Improvement of C programming abilities and increased knowledge of \
                  server client communication. Also increased understanding of HTTP.",
    resources:   ["C", "Linux"],
    link:        "https://github.com/rust485/server-client-c",
    images:      ["cliserv-screenshot.png"],
    captions:    ["A screenshot of the client-server duo in action. The client \
                  makes a request first for one of the files running the server, \
                  then for a non-existent file. "]
  },
  {
    id:          3,
    name:        "cowchips4charity",
    title:       "Senior Design Project",
    description: "Developed a website for the Boo Radley Foundation capable of \
                  accepting donations and keeping track of donation selections \
                  used to decide a winner.",
    role:        "Backend Lead",
    skills:      "Improved skills with MongoDB and Node.js API creation and security.",
    resources:   ["Node.js", "MongoDB"],
    link:        "inactive",
    contrib:     "Backend Lead: As backend lead, I am in charge of all things server-side. \
                  one of my main responsibilities is server and database setup, as well as \
                  creating the server-side endpoints."
  } as SDProject
]
