import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

type HeaderProps = {
    onOpenNewTransitionModal: () => void;
}

export function Header ({onOpenNewTransitionModal}: HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney"/>
                <button type="button" onClick={onOpenNewTransitionModal}>
                    Nova transação
                </button>
                
            </Content>
        </Container>
    )
}