import { Grid } from '@mui/material';
import ProjectData from '../../../helper/ProjectData';
import Project from './Project';
import './Projects.css';
import AnimatedHeader from '../../animations/AnimatedHeader';
const Projects = () => {
  return (
    <div className='projects'>
      <div className='projects__intro'>
        <h1 className='header'>My Work</h1>
        <h2 className='subheader'>
          <AnimatedHeader>
            A collection of various websites that I have designed and developed,
            and other programming projects that I'm proud of
          </AnimatedHeader>
        </h2>
      </div>
      <Grid container spacing={2}>
        {ProjectData.map((project, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Project
              title={project.title}
              src={project.src}
              link={project.link}
              credit={project.photoCredit}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
