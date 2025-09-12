import * as S from './styles';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import useAI from './hooks/useAI';
import Competitors from './components/Competitors';
import Text from '../../components/Text';

export default function Profile() {
    const {
        onSearch,
        handleChange,
        loading,
        values,
        searchResult,
    } = useAI();

    return (
        <S.Container>
            <S.SideBar onSubmit={(e) => {
                e.preventDefault();
                onSearch()
            }}>
                <S.Header>
                    <Text as='h3'>Inteligência Competitiva</Text>
                    <Text as='p'>
                        Obtenha insights estratégicos e descubra oportunidades no mercado analisando seus concorrentes.
                    </Text>
                </S.Header>

                <hr style={{ margin: "16px 0" }} />

                <TextArea
                    label="Nicho da pesquisa"
                    placeholder="Digite o nicho da pesquisa"
                    value={values.niche || ""}
                    onChange={e => handleChange('niche', e.target.value)}
                />

                <Input
                    label="Empresa referencia"
                    placeholder="Digite o nome da empresa referencia"
                    value={values.company || ""}
                    onChange={e => handleChange('company', e.target.value)}
                />

                {!loading && (
                    <Button
                        type="submit"
                        disabled={!values.niche || !values.company}
                        style={{ height: "45px", fontSize: "18px" }}
                    >
                        Buscar Concorrentes
                    </Button>
                )}

                {loading && (
                    <Spinner label="Esta acao pode levar alguns segundos" />
                )}
            </S.SideBar>

            <S.PostsContainer>
                <Competitors message={searchResult} />
            </S.PostsContainer>
        </S.Container>
    )
}
