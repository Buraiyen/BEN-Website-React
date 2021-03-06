import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { SIMDData } from '../../helper/JumbotronData';
import { SIMDPageTitle } from '../../helper/PageTitleData';
import Button from '../../components/ui/button/Button';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import './ProjectView.css';

const SIMDView = () => {
  const jumboTitle = SIMDData.title;
  useEffect(() => {
    document.title = SIMDPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div>
        <Jumbotron title={jumboTitle} />
        <Container maxWidth='md'>
          <p className='project-view__description'>
            <span className='project-view__description__title'>
              SIMD Enhanced MIPS Instructions
            </span>{' '}
            is a custom instruction set architecture (ISA) that utilizes the
            million instructions per second (MIPS) ISA. This process is
            documented in the Programmers' Reference Manual (100+ pages) which
            provides an in-depth understanding of computer architecture. All
            instructions are written in assembly code
          </p>

          <div>
            <p>
              <a
                href='https://github.com/Buraiyen/SIMD-Enhanced-MIPS-Instructions/blob/master/SMID-Enhanced-MIPS-Instructions.pdf'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Documentation</Button>
              </a>
            </p>
            <p>
              <a
                href='https://github.com/Buraiyen/SIMD-Enhanced-MIPS-Instructions'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/v1620240514/BEN_Website/projects/simd_ndwgst.jpg'
              className='project-view__image'
              alt=''
            />
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default SIMDView;
