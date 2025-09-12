import React from 'react';
import ReactSelect from 'react-select';
import * as S from './styles';

export default function Select({
    label,
    options = [],
    value,
    onChange,
    placeholder = "Selecione...",
    isMulti = false,
    isLoading = false,
}) {
    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}
            <ReactSelect
                isSearchable
                isClearable
                isMulti={isMulti}
                options={options}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                classNamePrefix="custom-select"
                isLoading={isLoading}
            />
        </S.Container>
    );
}
