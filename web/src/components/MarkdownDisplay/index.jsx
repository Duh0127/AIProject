import { useState } from 'react'
import * as S from './styles'
import Text from '../Text'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import emoji from 'remark-emoji'
import Icons from '../../utils/icons'
import { convertHtmlToMarkdown } from './convert'

export const CustomCodeBlock = ({ children }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(children)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <S.CodeWrapper>
            <S.CopyButton onClick={handleCopy} title='Copiar código'>
                {copied
                    ? Icons({ name: 'check', size: 14, color: '#fff' })
                    : Icons({ name: 'copy', size: 14, color: '#fff' })}
            </S.CopyButton>

            <S.CustomPre>{children}</S.CustomPre>
        </S.CodeWrapper>
    )
}

/**
 * Componente de renderização de Markdown.
 *
 * Recebe uma string HTML (ou já em Markdown) via `message`,
 * converte trechos HTML para Markdown, preserva blocos de código e
 * injeta plugins (GFM, footnotes, emoji) para renderizar corretamente.
 *
 * @param {Object} props
 * @param {string} props.message - Conteúdo em HTML (ou Markdown) recebido, que será convertido e exibido.
 * @param {string} props.scale - Scala de tamanho dos componentes markdown
 * @returns {JSX.Element}
 */
export default function MarkdownRender({ message, scale = 1 }) {

    if (typeof message !== 'string') {
        return <S.MessageContent $highlighted={true}>{message}</S.MessageContent>
    }

    const VideoEmbed = ({ src }) => {
        const isYoutube = src.includes('youtube') || src.includes('youtu.be')
        const isVimeo = src.includes('vimeo')
        if (!isYoutube && !isVimeo) return null
        const embedUrl = isYoutube
            ? `https://www.youtube.com/embed/${src.split('v=')[1]}`
            : `https://player.vimeo.com/video/${src.split('/').pop()}`
        return (
            <S.VideoWrapper>
                <iframe src={embedUrl} allowFullScreen></iframe>
            </S.VideoWrapper>
        )
    }

    const renderers = {
        code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <CustomCodeBlock language={match[1]}>{String(children).trim()}</CustomCodeBlock>
            ) : (
                <S.InlineCode $scale={scale}>{children}</S.InlineCode>
            )
        },
        blockquote({ children }) {
            return <S.Blockquote $scale={scale}>{children}</S.Blockquote>
        },
        table({ children }) {
            return (
                <S.TableWrapper>
                    <table>{children}</table>
                </S.TableWrapper>
            )
        },
        th: props => <S.TableHeader $scale={scale} {...props} />,
        td: props => <S.TableCell $scale={scale} {...props} />,
        hr: () => <S.Hr $scale={scale} />,
        li: ({ children, checked }) => (
            <S.ListItem $scale={scale} checked={checked}>
                {typeof checked === 'boolean' && <input type="checkbox" checked={checked} readOnly />}
                {children}
            </S.ListItem>
        ),
        a: ({ href, children }) => (
            <>
                <S.Link $scale={scale} href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                </S.Link>
                <VideoEmbed src={href} />
            </>
        ),
        ol: ({ children }) => (
            <S.List $scale={scale} $ordered>
                {children}
            </S.List>
        ),
        ul: ({ children }) => <S.List $scale={scale}>{children}</S.List>,
        img: ({ src, alt }) => (
            <S.ImageWrapper>
                <S.Image src={src} alt={alt} />
                <Text>{alt}</Text>
            </S.ImageWrapper>
        ),
        footnote: ({ children }) => (
            <S.Footnote $scale={scale}>
                <Text>{children}</Text>
            </S.Footnote>
        ),
        h1: ({ children }) => <S.H1 $scale={scale}>{children}</S.H1>,
        h2: ({ children }) => <S.H2 $scale={scale}>{children}</S.H2>,
        h3: ({ children }) => <S.H3 $scale={scale}>{children}</S.H3>,
        h4: ({ children }) => <S.H4 $scale={scale}>{children}</S.H4>,
        h5: ({ children }) => <S.H5 $scale={scale}>{children}</S.H5>,
        h6: ({ children }) => <S.H6 $scale={scale}>{children}</S.H6>,
        strong: ({ children }) => <S.Strong $scale={scale}>{children}</S.Strong>,
        em: ({ children }) => <S.Emphasis $scale={scale}>{children}</S.Emphasis>,
        del: ({ children }) => <S.Strikethrough $scale={scale}>{children}</S.Strikethrough>,
        p: ({ children }) => <S.Paragraph $scale={scale}>{children}</S.Paragraph>,
        span: ({ children }) => <S.Span $scale={scale}>{children}</S.Span>,
    }

    const parsedMessage = convertHtmlToMarkdown(message)

    return (
        <S.MessageContent>
            <ReactMarkdown components={renderers} remarkPlugins={[remarkGfm, [remarkFootnotes, { inlineNotes: true }], emoji]}>
                {parsedMessage}
            </ReactMarkdown>
        </S.MessageContent>
    )
}
