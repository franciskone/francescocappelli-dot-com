import { gql } from '@apollo/client';
import client from '../util/apollo-client';
import { Project } from '../types';
import { ProjectsScreen } from '../screens/ProjectsScreen';

const Projects = ({ projects }: { projects: Project[] }) => {
  return <ProjectsScreen projects={projects} />;
};

export default Projects;

const projectsQuery = gql`
  query {
    projects {
      id
      name
      slug
      description {
        html
      }
      url
      startDate
      endDate
      tags {
        name
        slug
        id
      }
      technologies {
        name
        slug
        experience
        icon {
          url
        }
        url
        id
      }
      client {
        slug
        name
        url
        description {
          html
        }
      }
    }
  }
`;

export async function getServerSideProps() {
  const {
    data: { projects },
  } = await client.query<{ projects: Project[] }>({
    query: projectsQuery,
  });
  debugger;
  return {
    props: {
      projects,
    },
  };
}
