import { gql } from '@apollo/client';
import client from '../util/apollo-client';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { Project } from '../types';

const Projects = ({ projects }: { projects: Project[] }) => {
  debugger;
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {projects.map(({ id, name, description: { html } }) => (
          <section key={id}>
            <h2>{name}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </section>
        ))}
      </main>
    </div>
  );
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
