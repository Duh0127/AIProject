import React from 'react';
import * as S from './styles';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <S.Container>
            <div>AIVerse</div>
            <small>© {year} - Todos os direitos reservados.</small>
        </S.Container>
    );
}
