import React from 'react';
import * as S from './styles';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
    return (
        <S.LayoutContainer>
            <Header />
            <S.Main>
                <Outlet />
            </S.Main>
            <Footer />
        </S.LayoutContainer>
    )
};
