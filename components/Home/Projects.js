import ProjectCard from './ProjectCard';

export default function Projects({ setShowModal, setCurrentProject }) {
  const projectList = [
    {
      title: '8SIAN ( WIP )',
      description:
        'Front-end development for one of the largest NFT Companies in South East Asia. Still a work in progress & not optimised for mobile devices.',
      info: 'Front-end development for one of the largest NFT Companies in South East Asia, built on Next.js & Tailwind based on Figma designs provided by their team.',
      src: '/images/projects/8SIAN.png',
      languages: ['Node.js', 'Stripe', 'Mongo.DB'],
      url: 'https://8sian-demo.vercel.app/',
    },
    {
      title: 'CREDS | Blockchain Licensing',
      description:
        'Front-end web development & design of a Blockchain Startup company based in London.',
      info: 'Simple website created using Next.js & deployed with Docker/NGINX to Azure.',
      src: '/images/projects/CREDS.png',
      languages: ['Next.js', 'Stripe', 'Sass'],
      url: 'https://creds-demo.vercel.app/',
    },
    {
      title: 'Ghostcat | NFT Minting Dapp',
      description: 'Metamask connectivity connecting to the Ghost Cat NFT Smart Contract.',
      info: 'Simple minting Dapp that handles connectivity of a Metamask Ethereum wallet using the Ethers package as well as connecting and manipulating a Smart Contract to mint & handle whitelist features.',
      src: '/images/projects/GhostCat.gif',
      languages: ['React.js', 'Ethers', 'Docker'],
      url: 'https://www.ghostcat.xyz/',
    },
  ];

  return (
    <section id="projects">
      <h2 className="title">Recent Projects</h2>
      <p className="projects-github">
        Github:
        <a
          href="https://github.com/nickderaj"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-github-icon"
        >
          <span />
        </a>
      </p>
      <div className="projects-wrapper">
        {projectList.map((project) => (
          <ProjectCard
            project={project}
            key={project.title}
            setCurrentProject={setCurrentProject}
            setShowModal={setShowModal}
          />
        ))}
      </div>
    </section>
  );
}
