import { InoButton, InoImg } from '@inovex.de/elements-react';

export default function Hero() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="flex flex-col">
        <div className="text-left">
          <div className="inline-flex items-center">
            <InoImg id="heroLogo" src="/inovex-logo.svg" height={30} width={30}></InoImg>
            <p className="title-s !m-0">inovex Elements</p>
          </div>
          <h1 className="header-d1 mt-6 text-inovex-primary">
            the
            <span className="bg-gradient-to-r from-inovex-p-6 via-green-500 to-inovex-p-6 inline-block text-transparent bg-clip-text">
              Universal UI Toolkit
            </span>
          </h1>
          <p className="mt-6 text-gray-600 font-medium leading-relaxed max-w-xl">
            It’s hard to build and maintain UI components. Don’t start from scratch every time you create a new project.
            Build them once, run them everywhere! Use our open source UI component library inovex Elements.
          </p>
        </div>
        <div className="flex gap-2 mt-12">
          <InoButton variant="filled">Get Started</InoButton>
          <InoButton variant="outlined">UI Patterns Features</InoButton>
        </div>
        <section>
          <div className="mt-12">
            <InoImg id="preview" src="/elements-preview.png" ratio-height="0.5" className="rounded-xl"></InoImg>
          </div>
        </section>
      </div>
    </section>
  );
}
