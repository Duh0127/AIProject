import { useMemo } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Text = ({ as = 'p', children, variant = 'normal', align = 'start', color, link, styles }) => {
    const textMap = useMemo(
        () => ({
            p: (
                <S.P $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.P>
            ),
            h1: (
                <S.H1 $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.H1>
            ),
            h2: (
                <S.H2 $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.H2>
            ),
            h3: (
                <S.H3 $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.H3>
            ),
            h4: (
                <S.H4 $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.H4>
            ),
            h5: (
                <S.H5 $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.H5>
            ),
            h6: (
                <S.H6 $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.H6>
            ),
            label: (
                <S.Label $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.Label>
            ),
            span: (
                <S.Span $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.Span>
            ),
            overline: (
                <S.Overline $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.Overline>
            ),
            link: (
                <S.Link href={link} target='_blank' $variant={variant} $align={align} $color={color} style={styles}>
                    {children}
                </S.Link>
            )
        }),
        [children, variant, color, align],
    )

    return <>{textMap[as]}</>
}

Text.propTypes = {
    as: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element, PropTypes.node]),
    variant: PropTypes.oneOf(['muted', 'normal', 'bold']),
    align: PropTypes.oneOf(['start', 'center', 'end', 'justify']),
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default Text