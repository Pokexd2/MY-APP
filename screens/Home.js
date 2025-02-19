import { Content, Header, Wrapper } from '../components/layout';
import Colors from '../constants/Colors';

export default function Home() {
    return (
        <Wrapper backgroundColor={Colors.white}>
            <Header title="Inicio" />
            <Content>
                {/* Content will be added here */}
            </Content>
        </Wrapper>
    );
}