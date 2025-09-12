import { FaHome, FaUser, FaCopy, FaCheck } from "react-icons/fa";

const gallery = {
    user: {
        render: (color, onClick, size = 20) => (
            <FaUser color={color} size={size} onClick={onClick} />
        ),
        label: "Ícone de usuário",
    },
    home: {
        render: (color, onClick, size = 20) => (
            <FaHome color={color} size={size} onClick={onClick} />
        ),
        label: "Ícone de casa",
    },
    check: {
        render: (color, onClick, size = 20) => (
            <FaCheck color={color} size={size} onClick={onClick} />
        ),
        label: "Ícone de correto",
    },
    copy: {
        render: (color, onClick, size = 20) => (
            <FaCopy color={color} size={size} onClick={onClick} />
        ),
        label: "Ícone de copiar",
    }
};

export default function Icons({ name, color = "#fff", size = 20, onClick }) {
    const iconRenderer = gallery?.[name]?.render;

    if (!iconRenderer) {
        return console.warn(`Icone nao encontrado -> ${name}`)
    }

    return iconRenderer(color, onClick, size);
}
