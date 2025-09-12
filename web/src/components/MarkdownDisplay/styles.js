import styled from 'styled-components'

// Estrutura geral
export const MessageContent = styled.div`
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text.body};
  margin: ${({ $highlighted }) => ($highlighted ? "16px 0px" : "")};
`;

// Citações
export const Blockquote = styled.blockquote`
  border-left: 4px solid ${({ theme }) => theme.colors.border.accent};
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text.description};
`

// Tabelas
export const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 1rem 0;
  /* border-radius: 8px; */
  width: 100%;

  table {
    border-collapse: collapse;
    table-layout: auto;
    width: auto;
    max-width: 100%;
  }
`
export const TableHeader = styled.th`
  background: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.text.body};
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.border.field};
  border-radius: 8px 8px 0 0;
`

export const TableCell = styled.td`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border.field};
  color: ${({ theme }) => theme.colors.text.body};
  
  // Aplica border-radius apenas no último td da última linha
  &:last-child:last-of-type {
    border-radius: 0 0 8px 0;
  }
`

// Horizontal Rule
export const Hr = styled.hr`
  margin: 2rem 0;
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border.field};
`

// Código em linha
export const InlineCode = styled.code`
  background: ${({ theme }) => theme.colors.background.tertiary};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.body};
`

// Blocos de código
export const CodeWrapper = styled.div`
  background: #0d1117;
  border-radius: 10px;
  margin: 1.5rem 0;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
`

export const CopyButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: ${({ theme }) => theme.colors.text.body};
  cursor: pointer;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  z-index: 2;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`

export const CustomPre = styled.pre`
  margin: 0;
  padding: 1rem 1.5rem;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  overflow-x: auto;
  white-space: pre;
  color: #e6edf3;
  background: transparent;
  word-break: break-all;
  word-wrap: break-word;
  max-width: 700px;

  code {
    display: block;
    white-space: pre;
    word-break: break-all;
    word-wrap: break-word;
  }

  /* .keyword {
    color: #ff7b72;
    font-weight: 600;
  }

  .string {
    color: #a5d6ff;
  }

  .number {
    color: #d2a8ff;
  }

  .constant {
    color: #79c0ff;
    font-weight: bold;
  }

  .comment {
    color: #8b949e;
    font-style: italic;
  } */
`

// Listas e Itens
export const List = styled.ul`
  list-style: ${({ $ordered }) => ($ordered ? 'decimal' : 'disc')};
  margin-left: 1.5rem;
  padding-left: 0.5rem;
  font-size: ${({ $scale }) => 0.9 * $scale}rem;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  * {
    font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  }
`

export const ListItem = styled.li`
  margin: 0.5rem 0;
  font-size: ${({ $scale }) => 1 * $scale}rem;
  list-style: ${({ checked }) => (typeof checked === 'boolean' ? 'none' : 'disc')};
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;

  * {
    font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  }

  input {
    margin-right: 0.5rem;
  }
`

// Links
export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text.link};
  text-decoration: underline;
  cursor: pointer;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;

  &:hover {
    text-decoration: none;
  }
`

// Imagens e Vídeos
export const ImageWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;

  figcaption {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.description};
  }
`

export const Image = styled.img`
  /* max-width: 100%; */
  max-width: 250px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
`

export const VideoWrapper = styled.div`
  margin: 1rem 0;
  iframe {
    width: 100%;
    height: 315px;
    border: none;
    border-radius: 8px;
  }
`

// Tipografia
export const Paragraph = styled.p`
  margin: 1rem 0;
  line-height: 1.8;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  font-size: ${({ $scale }) => 1 * $scale}rem;
`

export const H1 = styled.h1`
  /* font-size: 2.5rem; */
  font-size: ${({ $scale }) => 2.5 * $scale}rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
`

export const H2 = styled.h2`
  /* font-size: 2rem; */
  font-size: ${({ $scale }) => 2 * $scale}rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
`

export const H3 = styled.h3`
  /* font-size: 1.75rem; */
  font-size: ${({ $scale }) => 1.75 * $scale}rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
`

export const H4 = styled.h4`
  /* font-size: 1.5rem; */
  font-size: ${({ $scale }) => 1.5 * $scale}rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
`

export const H5 = styled.h5`
  /* font-size: 1.25rem; */
  font-size: ${({ $scale }) => 1.25 * $scale}rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
`

export const H6 = styled.h6`
  /* font-size: 1rem; */
  font-size: ${({ $scale }) => 1 * $scale}rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
`

export const Strong = styled.strong`
  font-weight: 700;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  font-size: ${({ $scale }) => 1 * $scale}rem;
`

export const Emphasis = styled.em`
  font-style: italic;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  font-size: ${({ $scale }) => 1 * $scale}rem;
`

export const Strikethrough = styled.del`
  text-decoration: line-through;
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  font-size: ${({ $scale }) => 1 * $scale}rem;
`

export const Span = styled.span`
  /* font-size: 1rem; */
  font-size: ${({ $scale }) => 1 * $scale}rem;
  color: ${({ theme }) => theme.colors.text.body};
  font-family: 'OpenAI', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
`

export const Footnote = styled.sup`
  /* font-size: 0.75rem; */
  font-size: ${({ $scale }) => 0.75 * $scale}rem;
  color: ${({ theme }) => theme.colors.text.description};
  vertical-align: super;
  margin-left: 0.2rem;
`

// Container para os artefatos
export const ArtifactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`
export const Highlight = styled.span`
  background: ${({ theme }) => theme.colors.status.infoAlt};
  font-weight: bold;
`