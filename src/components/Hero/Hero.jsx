import Button from "../Button/Button";
import {Title, Text, Section, HeroWrapper} from './Hero.styles'


const Hero = () => {
  return (
    <Section>
      <div className="container">
        <HeroWrapper>
          <Title>Campers of your dreams</Title>
          <Text>You can find everything you want in our catalog</Text>
          <Button to="/catalog" type="link" $padding="49px">
            View more
          </Button>
        </HeroWrapper>
      </div>
    </Section>
  );
};

export default Hero;
