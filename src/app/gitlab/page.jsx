import { Link, Typography } from "@mui/material";
import Image from "next/image";

const page = () => {
	return (
		<div className='overflow-x-auto text-sm'>
			<div className="flex items-center mt-5">
				<Image src="/gitlab-logo-500-svg.svg" width={70} height={0} className="-mt-8" alt="GitLab logo" />
				<Typography variant="h5" sx={{ fontWeight: '600' }} mb={4}>
					GitLab CI/CD DevOps
				</Typography>
			</div>
			<Typography variant="body1" mb={4}>
				<span className="text-link font-semibold">CI/CD </span>
				{`automates the software development process, from coding through deployment. Falls under DevOps (the joining of development and operations teams) and combines the practices of continuous integration and continuous delivery. 
				CI/CD automates much or all of the manual human intervention traditionally needed to get new code from a commit into production, encompassing the build, test (including integration tests, unit tests, and regression tests), and deploy phases, as well as infrastructure provisioning. 
				`}
			</Typography>
			<Typography variant="body1" mb={4}>
				With a <span className="text-link font-semibold">CI/CD </span> pipeline, development teams can make changes to code that are then automatically tested and pushed out for delivery and deployment.
				Get CI/CD right and downtime is minimized and code releases happen faster.
			</Typography>
			<Typography variant="body1" mb={4}>
				<span className="text-link font-semibold">CI/CD </span>
				{`also allows for quicker feedback loops with stakeholders, ensuring that the final product aligns closely with user expectations. 
				Overall, it's a foundational practice for any team aiming for high-speed, high-quality software development.`}
			</Typography>
			<Typography sx={{ mb: 4 }}>
				<Link href="https://about.gitlab.com/topics/ci-cd/" target="_blank">
					https://about.gitlab.com/topics/ci-cd/
				</Link>
			</Typography>
		</div>
	)
}

export default page