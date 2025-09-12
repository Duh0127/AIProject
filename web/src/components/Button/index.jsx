import React from 'react';
import * as S from './styles';

export default function Button({
    type = "submit",
    children,
    variant = "primary",
    onClick,
    href,
    disabled = false,
    style,
}) {
    if (variant === "link") {
        return (
            <S.Button
                style={style}
                type={type}
                as="a"
                $variant={variant}
                href={href}
                aria-disabled={disabled}
                onClick={disabled ? (e) => e.preventDefault() : onClick}
            >
                {children}
            </S.Button>
        );
    }

    return (
        <S.Button
            style={style}
            $variant={variant}
            type={type}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
        >
            {children}
        </S.Button>
    );
}
