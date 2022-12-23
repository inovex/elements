import styles from './history.module.scss';
import Milestone from './milestone';
import classNames from 'classnames';

function History() {
  return (
    <>
      <h1 className="header-d3">
        the <b>history</b>
      </h1>
      <div className={styles.container}>
        <Milestone
          title="Proof of concept 🔎"
          subtitle="Febuary 2018"
          position="left"
        >
          In 2018 we started our journey. We spent weeks evaluating which
          framework matches our needs and which decision may last for the next
          few years. It’s always a bet on time in front-end worlds and never
          easy to make the right pick. We started the elements as a side project
          and evaluated which library and tools would be the best choice for
          helping us writing standards based Web Components. We tried a lot and
          looked into the available libraries Polymer, SkateJS, SlimJS,
          Switzerland and Stencil. We opposed the features and decided to use
          Stencil.
        </Milestone>
        <Milestone
          title="Getting started 🛫"
          subtitle="June 2018"
          position="right"
        >
          <div>
            With the help of packages like{' '}
            <a
              href="https://m3.material.io/develop/web"
              target="_blank"
              rel="noreferrer"
            >
              Google Material Web
            </a>
            ,{' '}
            <a
              href="https://flatpickr.js.org/"
              target="_blank"
              rel="noreferrer"
            >
              flatpickr
            </a>
            , some other 3rd party dependencies and the product design from our
            designers, we create the core components we need to build our
            applications. With Storybook we are able to create the documentation
            and the playground for our consumers with minimal effort.
          </div>
        </Milestone>
        <Milestone
          title="First internal consumers 💙"
          subtitle="September 2018"
          position="left"
        >
          Our motivation and enthusiasm brought quick success. Therefore it was
          possible that already in September one of our internal projects could
          use the elements and thereby gain an enormous added value.
        </Milestone>
        <Milestone
          title="Learning by doing 💪🏻"
          subtitle="in 2019"
          position="right"
        >
          During the journey we learned a lot about how we need to handle state,
          how we need to document the components as and provide a playground for
          the visual representation of the components. We understand what it
          means to create a library for a lot of people and being responsible
          for how to introduce breaking changes or how to handle bug fixes. It’s
          not easy, but it’s great to see the value we add to all the different
          projects.
        </Milestone>
        <Milestone
          title="First external consumers 🤝🏻"
          subtitle="in 2020"
          position="left"
        >
          The elements become better known. Our customers were also convinced.
          This led to some of them also using elements in their own projects.
        </Milestone>
        <Milestone
          title="Open Source 🌍"
          subtitle="September 2020"
          position="right"
        >
          <div>
            <mark>We’re public, we’re live!</mark> We are proud to announce our
            very first open source UI library for any framework,
            @inovex.de/elements, on{' '}
            <a
              href="https://www.npmjs.com/package/@inovex.de/elements"
              target="_blank"
              rel="noreferrer"
            >
              npm
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/inovex/elements"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{' '}
            with a total of 46 core components.
          </div>
        </Milestone>
        <Milestone
          title="Never stop optimizing 🚀"
          subtitle="ongoing"
          position="left"
        >
          <div>
            With an internal team, we are constantly developing and optimizing
            the elements. It is important to us to offer you a great experience.
            You can also support us in making it even better. Start{' '}
            <a
              href="https://github.com/inovex/elements#contributing"
              target="_blank"
              rel="noreferrer"
            >
              contributing
            </a>{' '}
            now.
          </div>
        </Milestone>
      </div>
    </>
  );
}

export default History;
