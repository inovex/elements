import { InoButton } from '@inovex.de/elements-react';
import preview from '../../../../assets/elements-preview-small.png';
import logo from '../../../../assets/logo/mstile-70x70.png';

function HeroSection() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="flex flex-col">
        <div className="text-left">
          <div className="inline-flex items-center">
            <img src={logo} className="h-12"></img>
            <p className="title-s">inovex Elements</p>
          </div>
          <h1 className="header-d1 mt-6 text-inovex-primary">
            the{' '}
            <span className="bg-gradient-to-r from-inovex-p-6 via-inovex-success to-inovex-p-6 inline-block text-transparent bg-clip-text">
              Universal UI Toolkit
            </span>
          </h1>
          <p className="mt-6 text-gray-600 font-medium leading-relaxed max-w-xl ">
            It’s hard to build and maintain UI components. Don’t start from
            scratch every time you create a new project. Build them once, run
            them everywhere! Use our open source UI component library inovex
            Elements.
          </p>
        </div>
        <div className="flex gap-2 mt-12">
          <InoButton variant="filled">Get Started</InoButton>
          <InoButton variant="outlined">UI Patterns Features</InoButton>
        </div>
        <section>
          <div className="bg-gradient-to-r from-inovex-p-5 via-inovex-success to-inovex-p-4 rounded-2xl mt-12 p-2 max-w-3xl ">
            <img className="rounded-xl" src={preview}></img>
          </div>
        </section>
      </div>
    </section>
  );
}

export default HeroSection;
