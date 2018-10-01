import { Job } from '../app/models/Job';

export const JobList: Job[] =
[
  {
    id: 0,
    name: "Epic Systems",
    role: "Software Development Intern",
    skills:
    [
      "Developed a machine learning system to optimize efficiency of professional healthcare \
       network for enterprise health system that increased reliability by 6%.",
      "Interacted with national stakeholders to gather functional and technical requirements \
       gaining exposure to various experts with varying insights.",
      "Created architecture and project management plan from specified \
       technical and business scope."
    ],
    from: new Date('May 2018'),
    to:   new Date('August 2018')
  },
  {
    id: 1,
    name: "Iowa State University",
    role: "Com S 227 Teaching Assitant",
    skills:
    [
      "Oversaw and facilitated weekly course instruction to over 40 undergraduate students.",
      "Implemented new curriculum to address difficulty in object oriented programming principles."
    ],
    from: new Date('January 2018'),
    to:   new Date('May 2018')
  }
]
