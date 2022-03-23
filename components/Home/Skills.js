import Image from 'next/image';

export default function Skills() {
  const skills = [
    'aws',
    'docker',
    'javascript',
    'typescript',
    'node.js',
    'mongo.db',
    'react',
    'next.js',
    'ruby_on_rails',
    'html',
    'css',
    'sass',
    'bootstrap',
    'figma',
    'aseprite',
  ];

  const skillsMap = skills.map((skill) => (
    <div className="skill" key={skill}>
      <div className="skill-image">
        <Image src={`/icons/skills/${skill}.svg`} alt={skill} height="100%" width="100%" />
      </div>
      <p className="skill-text">{skill.replace(/_/g, ' ')}</p>
    </div>
  ));

  return (
    <section id="skills">
      <h2 className="title">Skills</h2>
      <div className="container">{skillsMap}</div>
    </section>
  );
}
