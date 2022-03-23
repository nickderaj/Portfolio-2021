import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Experience from '../components/Home/Experience';
import Header from '../components/Home/Header';
import Projects from '../components/Home/Projects';
import Skills from '../components/Home/Skills';
import Layout from '../components/Nav/Layout';
import Modal from '../components/Reusable/Modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const setTheme = () => {
    let newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
  };

  const escKeyPress = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        showModal && setShowModal(false);
        document.getElementById('navi-toggle').checked = false;
      }
    },
    [showModal, setShowModal],
  );

  useEffect(() => {
    if (document.body.getAttribute('data-theme') === 'dark')
      document.getElementById('dn').checked = true;

    document.addEventListener('keydown', escKeyPress);
    return () => document.removeEventListener('keydown', escKeyPress);
  }, [escKeyPress]);

  return (
    <Layout
      title="Nick De Raj"
      description="Fullstack Engineer - work experience & personal projects"
    >
      <Modal showModal={showModal} setShowModal={setShowModal} project={currentProject} />
      <Header setTheme={setTheme} />
      <About />
      <Projects setShowModal={setShowModal} setCurrentProject={setCurrentProject} />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  );
}
