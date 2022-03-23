import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="title">Work Experience</h2>
      <VerticalTimeline>
        <VerticalTimelineElement date="2013 - 2016" icon={<span className="timeline-study" />}>
          <h3 className="vertical-timeline-element-title">Bsc | Economics & Mathematics</h3>
          <h4 className="vertical-timeline-element-subtitle">Bristol University, UK</h4>
          <p>Statistics, Probability, Macro & Micro Economics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement date="2016 - 2019" icon={<span />}>
          <h3 className="vertical-timeline-element-title">Management | Asset Leasing</h3>
          <h4 className="vertical-timeline-element-subtitle">Kuala Lumpur, Malaysia</h4>
          <p>Business growth, Marketing, Financial forecasts, Risk Management</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement date="2020 - present" icon={<span />}>
          <h3 className="vertical-timeline-element-title">Fullstack Engineer | AI</h3>
          <h4 className="vertical-timeline-element-subtitle">Kuala Lumpur, Malaysia</h4>
          <p>
            Data Labelling for AI Machine Learning. Main technologies used:{' '}
            <span>Ruby on Rails, React, Next.js, AWS Infstracture & Docker</span>.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
