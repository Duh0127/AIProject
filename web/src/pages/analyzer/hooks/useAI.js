import { useCallback, useState } from 'react'
import backendApi from '../../../services/api';

export default function useAI() {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState("");
    const [values, setValues] = useState({
        company: String(),
        niche: String()
    });

    const onSearch = useCallback(async () => {
        try {
            setLoading(true)

            const payload = {
                niche: values.niche,
                company: values.company,
                threadId: "12345678910",
            }
            const { data } = await backendApi.post("/competitors/find_by_niche", payload);
            console.log(data)
            setSearchResult(data.response || [])
        } catch (error) {
            console.error("Erro ao analisar os concorrentes", error);
        } finally {
            setLoading(false)
        }
    }, [values]);

    function handleChange(position, value) {
        setValues(prev => ({ ...prev, [position]: value }))
    }

    return {
        onSearch,
        handleChange,
        loading,
        searchResult,
        values,
        setValues,
    }
}
