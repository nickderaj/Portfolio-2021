import ProjectCard from './ProjectCard';

export default function Projects({ setShowModal, setCurrentProject }) {
  const projectList = [
    {
      title: 'Nomad | E-Shop',
      description:
        'Front & Back-end built using Next.js, with Stripe Integration via API calls to make payments.',
      info: 'A website listing & selling luxury bags built with Next.js and payments integrated using Stripe. Shopping cart is stored as React context as well as in local storage in case the user refreshes.',
      src: '/images/projects/nomad.png',
      languages: ['Next.js', 'Stripe', 'Sass'],
      url: 'https://github.com/nickderaj/Nextjs-Stripe-Integrated-Shop',
    },
    {
      title: 'NFT Minting Dapp',
      description: 'Metamask connectivity connecting to the Ghost Cat NFT Smart Contract.',
      info: 'Simple minting Dapp that handles connectivity of a Metamask Ethereum wallet using the Ethers package as well as connecting and manipulating a Smart Contract to mint & handle whitelist features.',
      src: '/images/projects/nft.png',
      languages: ['React.js', 'Ethers', 'Docker'],
      url: 'https://github.com/nickderaj/NFT-Minting-Dapp',
    },
    {
      title: 'Natours | Tourism App',
      description:
        'Back-end development for a tourism company using Node.js, Express & MongoDB. Payments made via Stripe.',
      info: 'Fully developped back and frontend created Node.js, Express, MongoDb and Pug templates. This Tourism App has CRUD features for the database, authentication and encryption for user details. Payments are handled via Stripe.',
      src: '/images/projects/natours.png',
      languages: ['Node.js', 'Stripe', 'Mongo.DB'],
      url: 'https://github.com/nickderaj/Node-Natours-Project',
    },
  ];

  return (
    <section id="projects">
      <h2 className="title">Recent Projects</h2>
      <p className="projects-github">
        View more on Github:
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
