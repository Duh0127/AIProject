import * as S from './styles';

export default function Spinner({ size = 40, label }) {
    return (
        <S.Wrapper>
            <S.Loader size={size} />
            {label && <S.Label>{label}</S.Label>}
        </S.Wrapper>
    );
}
