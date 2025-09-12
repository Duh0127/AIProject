import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Content>
                <S.Title>Descubra seus Concorrentes em Qualquer Nicho</S.Title>
                <S.Subtitle>
                    Utilize nossa inteligência competitiva para analisar empresas do seu setor
                    e obter insights estratégicos que vão impulsionar seu negócio.
                </S.Subtitle>
                <S.Button onClick={() => navigate("/competitors-analyzer")}>
                    Acessar Agora
                </S.Button>
            </S.Content>
        </S.Container>
    )
}
