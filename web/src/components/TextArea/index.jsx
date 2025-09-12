import React from 'react';
import * as S from './styles';

export default function TextArea({
    label,
    placeholder = "Digite aqui...",
    value,
    onChange,
    rows = 4,
    maxLength, // novo parâmetro
}) {
    const isOverLimit = maxLength && value?.length > maxLength;

    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}
            <S.Wrapper>
                <S.TextAreaField
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={rows}
                />
                {maxLength && (
                    <S.CharCounter $isOverLimit={isOverLimit}>
                        {value?.length || 0}/{maxLength}
                    </S.CharCounter>
                )}
            </S.Wrapper>
        </S.Container>
    );
}
