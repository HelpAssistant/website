import * as React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import AboutSection from '../components/HomeSectionAbout';
import ClientsSection from '../components/HomeSectionClients';
import MaterialsSection from '../components/HomeSectionMaterials';
import PerfConversionSection from '../components/HomeSectionPerfConversion';
import ServicesSection from '../components/HomeSectionServices';
import HomeSectionTestimonials from '../components/HomeSectionTestimonials';
import Layout from '../components/Layout';
import { LogoKind } from '../components/Logo';
import { NavKind } from '../components/NavBase';
import WidthWrapper from '../components/WidthWrapper';
import {
  ChatButton,
  ColumnSectionWrapper,
  ColumnsWrapper,
  ContactFooterBackground,
  ContactSection,
  Content,
  Header,
  HeaderBackground,
  H1,
  Nav,
  SectionWrapper,
  ServicesBackground,
} from '../pages-styled/index.styled';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>PerfPerfPerf · Web performance consulting</title>
      <meta
        name="description"
        content="We’re helping companies to earn more by making web apps faster. We worked with Google, CMTT, Jochen Schweizer"
      />
      <meta
        name="keywords"
        content="perf perf perf, performance, performance consulting, performance optimization, performance agency, performance company, web performance, web performance optimization, web performance consulting"
      />
    </Helmet>
    <Content>
      <HeaderBackground>
        <WidthWrapper>
          <Nav
            logoKind={LogoKind.White}
            logoLinksToHome={false}
            isLogoPlayful={true}
            navKind={NavKind.Light}
          />
          <Header>
            <H1>Make your web app faster → earn more</H1>
          </Header>
          <ChatButton kind="light" />
        </WidthWrapper>
      </HeaderBackground>
      <div>
        <WidthWrapper>
          <SectionWrapper id="testimonials">
            <HomeSectionTestimonials />
          </SectionWrapper>
        </WidthWrapper>
        <WidthWrapper>
          <SectionWrapper id="why">
            <PerfConversionSection />
          </SectionWrapper>
        </WidthWrapper>
        <SectionWrapper>
          <ServicesBackground>
            <WidthWrapper id="services">
              <ServicesSection />
            </WidthWrapper>
          </ServicesBackground>
        </SectionWrapper>
        <WidthWrapper>
          <SectionWrapper id="clients">
            <ClientsSection />
          </SectionWrapper>
          <ColumnsWrapper>
            <ColumnSectionWrapper id="about">
              <AboutSection />
            </ColumnSectionWrapper>
            <ColumnSectionWrapper id="materials">
              <MaterialsSection />
            </ColumnSectionWrapper>
          </ColumnsWrapper>
        </WidthWrapper>
        <SectionWrapper id="contact" marginBottom={0}>
          <ContactFooterBackground>
            <WidthWrapper>
              <ContactSection />
              <Footer linkToHome={false} license={false} />
            </WidthWrapper>
          </ContactFooterBackground>
        </SectionWrapper>
      </div>
    </Content>
  </Layout>
);

export default IndexPage;