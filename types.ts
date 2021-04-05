export enum Colors {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  black = 'black',
  white = 'white',
  transparent = 'transparent',
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Technology {
  id: string;
  name: string;
  slug: string;
  icon: {
    url: string;
  };
  url: string;
  experience: number;
}

export interface Client {
  slug: string;
  name: string;
  url: string;
  description: {
    html: string;
  };
}

export interface Project {
  id: string;
  description: {
    html: string;
  };
  name: string;
  slug: string;
  url: string;
  startDate: string;
  endDate: string;
  tags: Tag[];
  technologies: Technology[];
  client: Client;
}
