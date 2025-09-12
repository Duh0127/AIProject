import styled from 'styled-components'

const getColor = (theme, variant, color) => {
    if (color && color === 'danger') return theme.colors.status.danger
    if (color) return color
    if (variant === 'muted') return theme.colors.text.placeholder
    return theme.colors.text.body
}

export const P = styled.p`
	margin: 0;
	font-size: 13px;
	word-wrap: break-word;
	font-weight: ${({ $variant }) => ($variant === 'bold' ? 'bold' : 'normal')};
	text-align: ${({ $align }) => $align || 'left'};
	color: ${({ theme, $variant, $color }) => getColor(theme, $variant, $color)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const H1 = styled.h1`
	text-align: ${({ $align }) => $align || 'left'};
	font-family: 'Inter';
	font-size: 36px;
	font-weight: 900;
	line-height: 1.5;
	margin: 0;
	color: ${({ theme, $variant, $color }) => getColor(theme, $variant, $color)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const H2 = styled.h2`
	margin: 0;
	font-family: 'Inter';
	font-size: 28px;
	font-weight: 700;
	line-height: 1.5;
	text-align: ${({ $align }) => $align || 'left'};
	color: ${({ theme, $variant, $color }) => getColor(theme, $variant, $color)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const H3 = styled.h3`
	margin: 0;
	text-align: ${({ $align }) => $align || 'left'};
	font-size: 24px;
	font-weight: 900;
	line-height: 1.5;
	margin: 0;
	color: ${({ theme, $variant, $color }) => getColor(theme, $variant, $color)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const H4 = styled.h4`
	margin: 0;
	text-align: ${({ $align }) => $align || 'left'};
	font-size: 22px;
	font-weight: 900;
	line-height: 1.5;
	margin: 0;
	color: ${({ theme, $variant, $color }) => getColor(theme, $variant, $color)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const H5 = styled.h5`
	font-size: 18px;
	font-weight: bold;
	margin: 0;
	text-align: ${({ $align }) => $align || 'left'};
	color: ${({ theme, $variant, $color }) => getColor(theme, $variant, $color)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const H6 = styled.h6`
	margin: 0;
	text-align: ${({ $align }) => $align || 'left'};
	color: ${({ theme, $variant, $color }) => getColor(theme, $variant, $color)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Label = styled.label`
	margin: 0;
	text-align: ${({ $align }) => $align || 'left'};
	color: ${({ theme, $variant, $color }) => getColor(theme, $variant, $color)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Span = styled.span`
	margin: 0;
	font-size: 12px;
	text-align: ${({ $align }) => $align || 'left'};
	color: ${({ theme, $variant, $color }) => getColor(theme, $variant, $color)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const Overline = styled.span`
	margin: 0;
	text-align: ${({ $align }) => $align || 'left'};
	font-weight: bold;
	text-transform: uppercase;
	font-size: 13px;
	color: ${({ theme, $color }) => ($color ? $color : theme.colors.text.placeholder)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const Link = styled.a`
	margin: 0;
	text-align: ${({ $align }) => $align || 'left'};
	text-decoration: none;
	font-size: 12px;
	color: ${({ theme, $variant, $color }) => getColor(theme, $variant, $color)};
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
		color: ${({ theme }) => theme.colors.text.link};
	}
`