'use client';
import { Button } from "@/components/ui/button";
import projectsData from "@/components/data/projects.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface ProjectType {
  title: string;
  description: string;
  image: string;
  id: number;
  language: string;
  link: string;
}

const projectGroups = {
  All: projectsData.projects,
  "Next.js": projectsData.projects.filter(project => project.language === "nextjs"),
  Typescript: projectsData.projects.filter(project => project.language === "typescript"),
  Javascript: projectsData.projects.filter(project => project.language === "javascript"),
  "HTML&CSS": projectsData.projects.filter(project => project.language === "HTMLnCSS"),
};

const ProjectCard = ({ project }: { project: ProjectType }) => (
  <Card key={project.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col justify-between mt-[5rem] sm:mt-6">
    <div>
      <CardHeader className="p-4">
        <Image src={project.image} width={160} height={160} alt={project.title} className="mx-auto" />
        <CardTitle className="text-lg font-bold mt-2 text-center">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-gray-600 dark:text-gray-300 text-sm text-center">{project.description}</CardDescription>
      </CardContent>
    </div>
    <CardFooter className="p-4 mt-auto">
      <Button onClick={() => window.open(project.link, "_blank")} className="w-full bg-[#4a60f0] text-white rounded-md hover:bg-[#3b51e0]">
        View
      </Button>
    </CardFooter>
  </Card>
);

function Project() {
  return (
    <div className="w-full mx-auto min-h-screen dark:bg-slate-900 flex items-center flex-col">
      <h1 className="text-5xl font-bold mt-12 text-black dark:text-white">Projects</h1>
      <Tabs defaultValue="All" className="w-full max-w-5xl my-6 px-10">
      <TabsList className="flex flex-wrap sm:flex-nowrap justify-center w-full gap-2 mt-4">
          {Object.keys(projectGroups).map(group => (
            <TabsTrigger
              key={group}
              value={group}
              className="text-white bg-[#4a60f0] w-[7rem] sm:w-[15rem] py-1 text-sm cursor-pointer z-10"
            >
              {group}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(projectGroups).map(([group, projects]) => (
          <TabsContent key={group} value={group} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {projects.map(project => <ProjectCard project={project} key={project.id} />)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default Project;

