import {Title, Text, Section, Wrapper} from './Hero.styles'
import { Container } from '../../styles/Container.styles';
import Button from '../Button/Button';
const Hero = () => {
    return (
        <Section>
          <Container className="container">
            <Wrapper>
              <Title>Campers of your dreams</Title>
              <Text>You can find everything you want in our catalog</Text>
              <Button to="/catalog" type="link" $customStyles={{ padding: '16px 49px' }}>
                View more
              </Button>
            </Wrapper>
          </Container>
        </Section>
      );
    };

export default Hero;