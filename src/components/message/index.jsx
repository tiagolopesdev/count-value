
export const Message = ({count}) => {
    return (
        <h3>
            { count === 0 ? 
                'Ainda não incrementamos o valor, algo de errado não está certo' : 
                `Agora tá funfando: ${count}`
            }
        </h3>
    );
}
