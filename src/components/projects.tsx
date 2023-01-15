import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Key } from 'react';
import Image from "next/image";
import { client } from '../pages/index';

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source)
}

export const Project = ({
  projectName,
  projectType,
  description,
  techStack,
  githubURL,
  preview,
}: { _id: Key; projectName: string; projectType: string; description: string; techStack: string[]; githubURL: string; preview: object; id: number;}) => {
  return (
    <div className="max-w rounded-3xl overflow-hidden shadow-lg mb-8">
      <Image className="w-full" width="2000" height="2000" src={urlFor(preview).url()} alt="Project Preview"/>
      <div className="bg-white px-6 py-4">
        <div className="flex justify-between">
          <h4 className="font-bold text-2xl mb-2">{projectName}</h4>
          <h4 className="inline-block bg-blue-23 rounded-3xl px-3 py-1 text-base font-semibold text-bluenavy mb-2">{projectType}</h4>
        </div>
        <p className="text-gray-700 text-base mt-3">
          {description}
        </p>
      </div>
      <div className="bg-white px-6 pb-2">
        {techStack.map((stack) => (
          <span key={stack} className="inline-block bg-beige rounded-full px-3 py-1 text-sm font-semibold text-blue-navy mr-2 mb-2">{stack}</span>
        ))}
        <div className="pt-2 pb-1 w-fit">
          <a
            href={githubURL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center rounded-xl bg-slate-700 pl-3 pr-4 py-2 font-semibold text-white outline-none hover:bg-slate-600 focus:ring focus:ring-slate-300"
          >
            <Image
              className="mr-2 h-5 w-5 fill-white"
              width="2000" height="2000"
              src="github.svg"
              alt="github icon"
            >
            </Image>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
};

