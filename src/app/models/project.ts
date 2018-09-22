export class Project
{
  name:        string;
  description: string;
  role:        string;
  skills:      string;
  resources:   string;

  constructor(name, description, role, skills, resources)
  {
    this.name = name;
    this.description = description;
    this.role = role;
    this.skills = skills;
    this.resources = resources;
  }
}
