export interface IProject {
  id?: string;
  project_name: string;
  client_repo_link: string;
  server_repo_link: string;
  thumbnail: string;
  live_link: string;
  description: string;
  features: string[];
  technology: string[];
  createdAt: Date;
  updatedAt: Date;
}
