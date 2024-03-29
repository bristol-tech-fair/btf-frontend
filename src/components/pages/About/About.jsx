import React from 'react';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import SponsorCard from 'components/pages/About/SponsorCard';
import List from 'components/common/Layout/List';
import Spinner from 'components/common/Spinner';
import { MainContainer, PageTitle, ListContainer } from './About.styles';
import { LyingRobot, LoveIllustration } from '../../common/Illustrations';

const About = () => {
  // TODO: Replace this temporary data with API call
  const sponsorData = [
    {
      sponsorLogo: 'https://via.placeholder.com/240x140',
      sponsorName: 'WTPageTitle'
    },
    {
      sponsorLogo: 'https://via.placeholder.com/240x140',
      sponsorName: 'WTH2'
    },
    {
      sponsorLogo: 'https://via.placeholder.com/240x140',
      sponsorName: 'WTH3'
    },
    {
      sponsorLogo: 'https://via.placeholder.com/240x140',
      sponsorName: 'WTH4'
    },
    {
      sponsorLogo: 'https://via.placeholder.com/240x140',
      sponsorName: 'WTH5'
    }
  ];

  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>About Us</PageTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad
          impedit, nobis ducimus animi recusandae optio obcaecati ut amet
          aliquam aliquid sunt quos enim eum consectetur incidunt voluptates
          commodi architecto quod deleniti dolorum? Earum neque culpa fugit
          perferendis magni minima pariatur ullam, aliquid eos facere, repellat
          libero dolores! Odit, ratione?
        </p>
        <div>
          <LyingRobot />
        </div>

        <PageTitle>Mission & Values </PageTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque
          deserunt eligendi omnis odit labore in debitis repellendus minus
          voluptates repellat, dolorum sunt maxime inventore cupiditate
          distinctio harum mollitia incidunt delectus, facilis at. Officiis
          culpa recusandae omnis! Aspernatur, odio blanditiis ex nihil hic
          tempore aut facere, neque perferendis deleniti recusandae dolore ea
          libero, nostrum iste pariatur vero. Repudiandae ea pariatur, velit
          atque magnam eos enim placeat adipisci unde soluta maiores, corporis,
          quasi ad laborum! A mollitia quis assumenda facere consequuntur
          debitis, nam totam autem neque architecto cumque laborum est quo ipsa
          laudantium temporibus amet. Voluptatem modi ad veniam laborum
          obcaecati.
        </p>
        <div>
          <LoveIllustration />
        </div>

        <PageTitle>Diversity & Inclusion</PageTitle>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          illo blanditiis minima dolor cumque quia eos fugiat omnis aliquid
          sequi et, nemo, dolorem modi tempore, dicta voluptatum porro. A
          pariatur sed, eos eligendi quibusdam deserunt itaque ipsa quod eaque
          facere neque suscipit, minus quae libero quidem ipsum doloremque enim
          tenetur. Qui doloribus itaque dolorem libero consequuntur, sit nostrum
          maxime? Inventore deserunt, dignissimos labore perspiciatis ullam
          dolorum earum, eligendi libero dolores unde non voluptate itaque
          exercitationem expedita velit iusto ea praesentium?
        </p>

        <PageTitle>Sponsors</PageTitle>
        <ListContainer>
          {sponsorData ? (
            <List Component={SponsorCard} data={sponsorData} />
          ) : (
            <Spinner />
          )}
        </ListContainer>
      </MainContainer>
    </DefaultPageLayout>
  );
};

export default About;
