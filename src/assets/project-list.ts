import { Project } from "../app/models/Project";

export const ProjectList: Project[] =
[
  {
    id:          0,
    name:        "Squad Command",
    description: "An RTS game developed in Node.js. Players maintain and        \
                  control their forces In an attempt to defeat their opponents. \
                  The game features robust pathfinding, physics, and behavioral \
                  systems that showcase my abilities as a developer.",
    role:        "Lead Server and Frontend Developer",
    skills:      "Significant improvement of algorithmic ability and \
                  synchronization/server programming",
    resources:   ["Node.js", "HTML", "HTML Canvas"]
  },
  {
    id:          1,
    name:        "C Shell",
    description: "An implementation of a bash-like shell in the C language.   \
                  The shell is capable of running programs in the background, \
                  piping data, and running key bash commands",
    role:        "Developer",
    skills:      "Further improved C programming abilities and increased \
                  understanding of threads and C synchronization methods.",
    resources:   ["C", "Linux"]
  },
  {
    id:          2,
    name:        "C Server-Client",
    description: "An implementation of a server-client combo that communicates \
                 using HTTP requests. The client is capable of making HTTP requests \
                 to any server. The server accepts HTTP requests with varying headers \
                 and retrieves files and information based on the headers.",
    role:        "Developer",
    skills:      "Improvement of C programming abilities and increased knowledge of \
                  server client communication. Also increased understanding of HTTP.",
    resources:   ["C", "Linux"]
  }
]
