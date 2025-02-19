import { Content, Header, Wrapper } from '../components/layout';
import Colors from '../constants/Colors';

export default function Profile() {
    return (
        <Wrapper backgroundColor={Colors.white}>
            <Header title="Mi Perfil" />
            <Content>
                {/* Profile content will be added here */}
            </Content>
        </Wrapper>
    );
}