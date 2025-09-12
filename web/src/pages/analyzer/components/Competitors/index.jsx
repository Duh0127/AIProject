import * as S from "./styles";
import MarkdownDisplay from "../../../../components/MarkdownDisplay";
import Spinner from "../../../../components/Spinner";

export default function Competitors({ message, loading = false }) {
    const hasMessage = message && message.trim() !== "";

    if (loading) {
        return (
            <S.Container>
                <S.ContentWrapper $hasMessage={false}>
                    <Spinner size={70} label="Buscando concorrentes do seu nicho" />
                </S.ContentWrapper>
            </S.Container>
        );
    }

    return (
        <S.Container>
            <S.ContentWrapper $hasMessage={hasMessage}>
                {hasMessage ? (
                    <MarkdownDisplay message={message} />
                ) : (
                    <S.EmptyMessage>
                        Nenhum concorrente encontrado.
                        <br />
                        Por favor, realize a busca de concorrentes.
                    </S.EmptyMessage>
                )}
            </S.ContentWrapper>
        </S.Container>
    );
}
