import React from 'react';
import * as S from './styles';

export default function Input({
    label,
    placeholder = "Digite aqui...",
    type = "text",
    value,
    onChange,
    min,
    max,
}) {
    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}
            <S.InputField
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...(type === "number" ? { min, max } : {})}
            />
        </S.Container>
    );
}
