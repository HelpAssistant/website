import * as React from 'react';
import Section, { SectionKind } from '../Section';
import {
  CmttLogo,
  Content,
  FatLlamaLogo,
  GoogleLogo,
  FramerLogo,
  Mark,
  LogoText,
  TitleContentWrapper,
  CommonLogo,
} from './styled';

const ClientsSection = () => (
  <Section title="Cases" sectionKind={SectionKind.VERTICAL}>
    <TitleContentWrapper title={<GoogleLogo />}>
      <Content>
        <p>
          We worked with Google on educating developers about web performance.
          This targets the long-term goal of making the web faster.
        </p>
        <ul>
          <li>
            <a href="https://developers.google.com/web/fundamentals/performance/webpack/decrease-frontend-size">
              A guide to making web apps faster with webpack
            </a>{' '}
          </li>
          <li>
            <a href="https://github.com/GoogleChromeLabs/webpack-libs-optimizations">
              A list of tricks
            </a>{' '}
            to optimize dependencies
          </li>
          <li>
            <a href="https://github.com/GoogleChromeLabs/webpack-training-project">
              A training project
            </a>{' '}
            to practice optimization strategies
          </li>
        </ul>

        <blockquote>
          <p>
            This is some of the highest quality tutorial style documentation on
            webpack I’ve come across
          </p>
          <footer>
            <a href="https://twitter.com/TheLarkInn/status/961988627801587712">
              Sean Larkin
            </a>
            , a member of the webpack’s core team
          </footer>
        </blockquote>
      </Content>
    </TitleContentWrapper>

    <TitleContentWrapper
      title={
        <LogoText>
          <FramerLogo />
          <p>
            <a href="https://framer.com/">Framer</a> is a web-based tool for
            interactive interface design – one of the hottest ones, today.
          </p>
        </LogoText>
      }
    >
      <Content>
        <p>
          We worked with Framer to perfect their user experience – by making
          user interactions smoother and app loading faster.
        </p>
        <p>
          By working together,{' '}
          <Mark>
            we reduced Speed Index and First CPU Idle of Framer Web by 40-45%
          </Mark>
          . We also set up tooling around runtime perf – to help Framer keep
          &amp; maintain achieved results in the future.
        </p>
        <blockquote>
          <p>
            We’ve been very satisfied by working with Ivan! Ivan helped us to
            improve loading performance, runtime performance, and tooling around
            it.{' '}
            <Mark>
              The quality of his work, approach, documentation, etc. has been
              outstanding.
            </Mark>
          </p>
          <footer>
            <a href="https://twitter.com/eelco">Eelco Lempsink</a>, VP of
            Engineering @ Framer
          </footer>
        </blockquote>
      </Content>
    </TitleContentWrapper>

    <TitleContentWrapper
      title={
        <LogoText>
          <CommonLogo />
          <p>
            <a href="https://common.com/">Common</a> is a modern coliving rental
            company. They pride themselves on the design of their housing.
          </p>
        </LogoText>
      }
    >
      <Content>
        <p>
          Common wanted to improve their marketing ROI – and reached to us to
          help make their website faster. We jumped in and{' '}
          <Mark>improved the PageSpeed Insights score from 39 to 75.</Mark>
        </p>
        <blockquote>
          <p>
            Working with Ivan was <Mark>an absolute joy</Mark>. He reliably
            produces world-class work, communicates effectively and often, and
            is always willing to share his deep expertise in application
            performance optimization.
          </p>
          <footer>
            <a href="https://www.linkedin.com/in/ldthorne/">Daniel Thorne</a>,
            Software Engineer @ Common
          </footer>
        </blockquote>
      </Content>
    </TitleContentWrapper>

    <TitleContentWrapper
      title={
        <LogoText>
          <FatLlamaLogo />
          <p>
            <a href="https://fatllama.com/">Fat Llama</a> is an e-commerce
            service that helps people borrow things (cameras, cars, games, tech,
            anything) from other people.
          </p>
        </LogoText>
      }
    >
      <Content>
        <p>
          Fat Llama had issues with page loading performance. They successfully
          improved a lot of things themselves, but reached to us before
          finishing the optimization.
        </p>
        <p>
          We helped Fat Llama to find low-hanging (and not so low-hanging)
          fruits that went unnoticed – and improve performance metrics even
          further.
        </p>
        <blockquote>
          <p>
            Ivan gave a ton of extremely useful, actionable feedback that{' '}
            <Mark>
              directly improved our First Meaningful Paint, Time to Interactive,
              Speed Index, First CPU Idle metrics significantly
            </Mark>
            . Also, he helped with some bundle size optimization too.
          </p>
          <p>
            Interaction with Ivan is{' '}
            <Mark>
              dense in terms of knowledge transfer, and I guarantee you that you
              will learn a lot of new things.
            </Mark>{' '}
            On top of all these, he’s a super smooth person to work with. All in
            all, I cannot recommend Ivan enough!
          </p>
          <footer>
            <a href="https://twitter.com/cihatimamoglu">Cihat Imamoglu</a>,
            Senior Software Engineer @ Fat Llama
          </footer>
        </blockquote>
      </Content>
    </TitleContentWrapper>

    <TitleContentWrapper
      title={
        <LogoText>
          <CmttLogo />
          <p>
            <a href="https://cmtt.ru/">CMTT</a> is a media company specializing
            in tech and entertainment content. Their sites (like{' '}
            <a href="https://vc.ru">VC</a> and{' '}
            <a href="https://tjournal.ru">TJournal</a>) together reach 15
            million views a month.
          </p>
        </LogoText>
      }
    >
      <Content>
        <p>
          CMTT had an issue: when an article on one of their sites had a lot of
          comments, scrolling the page was freezing the browser.
        </p>
        <p>
          We helped CMTT to optimize the scrolling performance of comments on
          their sites.{' '}
          <Mark>
            The frames-per-second rate got 4–10× higher depending on the device.
          </Mark>
        </p>
        <blockquote>
          <p>
            Ivan Akulov found a beautiful solution and implemented it on his
            own. We’ve been satisfied with the results!
          </p>
          <footer>
            <a href="https://chekalskiy.ru/">Ilya Chekalskiy</a>, CMTT’s CTO
          </footer>
        </blockquote>
      </Content>
    </TitleContentWrapper>
  </Section>
);

export default ClientsSection;
