import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import groq from 'groq';
import { createClient } from "next-sanity"
import { Project } from '../components/projects';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  apiVersion: "2023-01-15",
  useCdn: false
});

export default function Home({
  positions,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='bg-gradient-to-b from-blue-1 to-blue-2 min-h-screen h-auto w-full'>
      {/* navbar */}
      <div className="mx-auto max-w-2xl px-4 pt-8 text-slate-900 xs:px-6 sm:px-8 md:pt-16 justify-center">
        <h1 className="text-8xl text-center mb-5">
          <span className="font-bold">HI! I&apos;m</span> {" "}
          <span className="font-bold text-bg-complement">Owen</span>
        </h1>
        <h2 className="text-2xl mb-2">
          🖥️ I&apos;m a CS student at the University of Waterloo.
        </h2>
        <h2 className="text-2xl mb-14">
          ❤️‍🔥 Passionate about delivering impactful software solutions and building beautiful full stack applications.
        </h2>

        <h3 className="text-4xl font-bold underline underline-offset-8 mb-10">Projects</h3>

        {projects.length > 0 && 
            projects.map((project: any) => (
              <Project key={project._id} {...project}></Project>
            ))
        }
        
        {/* footer */}
        <h2 className="text-4xl mb-4 mt-12 text-center">
          Get In Touch
        </h2>
        <div className="flex justify-center pb-10">
          <a
            href="mailto:owen.wong0627@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="mx-1 h-11 w-12 fill-white"
              src="email.svg"
              width="2000"
              height="2000"
              alt="email icon"
            >
            </Image>
          </a>
          <a
            href="https://github.com/OwenWong0627/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="mx-2 h-10 w-10 fill-white"
              src="github-dark.svg"
              width="2000"
              height="2000"
              alt="github icon"
            >
            </Image>
          </a>
          <a
            href="https://www.linkedin.com/in/owen-wong/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="mx-2 h-10 w-10 fill-white"
              src="linkedin.svg"
              width="2000"
              height="2000"
              alt="linkedin icon"
            >
            </Image>
          </a>
        </div>
        {/* Linkedin, Github, Email,  */}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const positions = await client.fetch(groq`*[_type == "positions"]|order(id asc)`);
  const projects = await client.fetch(groq`*[_type == "projects"]|order(id desc){
    _id, projectName, projectType, description, techStack, githubURL, preview, id
  }`);

  return {
    props: {
      positions,
      projects
    }
  }
}