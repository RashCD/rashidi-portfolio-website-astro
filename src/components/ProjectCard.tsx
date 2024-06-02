import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "./ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselPrevious,
	CarouselNext,
	CarouselItem,
} from "./ui/carousel";

type ProjectCardProps = {
	name: string;
	description: string;
	images: string[];
};

function ProjectCard({ name, images, description }: ProjectCardProps) {
	return (
		<Card key={name} className="w-full overflow-hidden mb-8">
			<CardContent className="p-0">
				<Carousel>
					<CarouselContent>
						{images.map((image) => (
							<CarouselItem className="" key={image}>
								<img
									src={image}
									alt={name}
									style={{
										objectFit: "cover",
										width: "100%",
										height: "100%",
										aspectRatio: "3 / 2",
										borderRadius: 0,
									}}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					{images.length > 1 && (
						<>
							<CarouselPrevious className="left-2" />
							<CarouselNext className="right-2" />
						</>
					)}
				</Carousel>
			</CardContent>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				<CardDescription className="text-justify">
					{description}
				</CardDescription>
			</CardHeader>
			<CardFooter>
				{/* <Link to={'123'} className="text-blue-500">
					Read More
				</Link> */}
			</CardFooter>
		</Card>
	);
}

export default ProjectCard;
