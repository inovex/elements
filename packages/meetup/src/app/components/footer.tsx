import { InoImg } from '@inovex.de/elements-react';

export default function Footer() {
  return (
    <footer className="bg-inovex-n-1 " aria-labelledby="footer">
      <h2 id="footer" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <a className="tailwind title-m text-inovex-primary">inovex Elements</a>
            <p className="label-l">the Universal UI Toolkit</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 gap-8 xl:mt-0 mt-6">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="label-l text-inovex-primary cursor-pointer">Home</h3>
                <ul role="list" className="mt-2 label-m space-y-2">
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Info{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Core Aspects{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Components{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Who We Are{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      FAQ{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="label-l text-inovex-primary cursor-pointer">Explore</h3>
                <ul role="list" className="mt-2 label-m space-y-2">
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Examples{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Resources{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Demos{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="label-l text-inovex-primary cursor-pointer">Guides</h3>
                <ul role="list" className="mt-2 label-m space-y-2">
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      JavaScript{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      React{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Angular{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Vue{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="label-l text-inovex-primary cursor-pointer">Library</h3>
                <ul role="list" className="mt-2 label-m space-y-2">
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Components{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Ui-Patterns{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="label-l text-inovex-primary cursor-pointer">About</h3>
                <ul role="list" className="mt-2 label-m space-y-2">
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Team{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      History{' '}
                    </a>
                  </li>
                  <li>
                    <a className="tailwind hover:text-inovex-primary" href="#">
                      {' '}
                      Activity{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3 border-t mt-6 flex flex-wrap sm:justify-start items-center g">
            <InoImg id="attributions" src="/inovex-logo.svg" height={30} width={30} className="mr-1"></InoImg>
            <a className="tailwind label-s" target="_blank" rel="noopener noreferrer" href="https://www.inovex.de/">
              inovex GmbH
            </a>
            <span className="px-2 label-s">•</span>
            <a
              className="tailwind label-s"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.inovex.de/en/legal-notice/"
            >
              Legal Notice
            </a>
            <span className="px-2 label-s">•</span>
            <a
              className="tailwind label-s"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.inovex.de/en/exclusion-of-liability/"
            >
              Exclusion of Liability
            </a>
            <span className="px-2 label-s">•</span>
            <a
              className="tailwind label-s"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.inovex.de/en/data-protection/"
            >
              Data Protection
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
