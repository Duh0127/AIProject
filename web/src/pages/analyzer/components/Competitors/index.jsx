import * as S from "./styles";
import MarkdownDisplay from "../../../../components/MarkdownDisplay";

export default function Competitors({ message }) {
    const hasMessage = message && message.trim() !== "";

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
