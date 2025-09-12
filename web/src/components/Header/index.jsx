import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/aiverse_logo.png';
import Button from '../Button';
import Icons from '../../utils/icons';

export default function Header() {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Logo src={Logo} />
            <Button
                variant='outline'
                onClick={() => navigate('/competitors-analyzer')}
            >
                {Icons({ name: "user" })} Analisar Concorrencia
            </Button>
        </S.Container>
    )
}
