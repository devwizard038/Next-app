// @flow strict

import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import github from '/public/lottie/gitproject.json';
import axios from 'axios';

const GithubPage = async() => {
  const username = 'devwizard038';
  const forks = false;
  const sortBy = 'stars';
  const limit = 5;
  const query = `user:${username}+fork:${!forks}`;
  const url = `https://api.github.com/search/repositories?q=${query}&sort=${sortBy}&per_page=${limit}&type=Repositories`;

  const repoResponse = await axios.get(url, {
      headers: { 'Content-Type': 'application/vnd.github.v3+json' },
  });
  const repoData = repoResponse.data.items;
  
  return (
    <div id="github" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Github Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={github} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                repoData.map((project) => (
                  <a key={project.id} href={project.html_url} target='_blank'>
                    <GlowCard key={project.id} identifier={`experience-${project.id}`}>
                        <div className="p-3 relative">
                        <Image
                            src="/blur-23.svg"
                            alt="Hero"
                            width={1080}
                            height={200}
                            className="absolute bottom-0 opacity-80"
                        />
                        <div className="flex items-center gap-x-8 px-3 py-5">
                            <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                            <BsGithub size={36} />
                            </div>
                            <div>
                            <p className="text-base sm:text-xl mb-2 font-medium">
                                {project.name}
                            </p>
                            <p className="text-sm sm:text-base">
                                {project?.description}
                            </p>
                            </div>
                        </div>
                        </div>
                    </GlowCard>
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubPage;