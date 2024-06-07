import ProjectCard from "./ProjectCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

type ProjectTabsType = {
	projects: {
		title: string;
		value: string;
		contents: {
			description: string;
			id: number;
			name: string;
			images: string[];
			visit: {
				ios?: string | undefined;
				android?: string | undefined;
				web?: string | undefined;
				github?: string | undefined;
			};
			tags: string[];
		}[];
	}[];
};

const ProjectTabs = ({ projects }: ProjectTabsType) => {
	return (
		<div className="px-3">
			<Tabs
				defaultValue={projects[0]!.value}
				className="d-flex justify-center"
			>
				<div className="grid overflow-x-auto">
					<TabsList className="justify-self-center">
						{projects.map((project) => (
							<TabsTrigger
								key={project.value}
								value={project.value}
							>
								{project.title}
							</TabsTrigger>
						))}
					</TabsList>
				</div>
				{projects.map((project) => (
					<TabsContent key={project.value} value={project.value}>
						{project.contents.map((content) => (
							<ProjectCard
								key={content.id}
								name={content.name}
								description={content.description}
								images={content.images}
							/>
						))}
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
};

export default ProjectTabs;
