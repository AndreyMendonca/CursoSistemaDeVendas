// Converte string no formato "1.234,56" para número (ex: 1234.56)
export const converterEmBigDecimal = (value: string | null | undefined): number | string => {
    if ((!value || typeof value !== 'string')) {
        return '';
    }

    // Remove os pontos (separadores de milhar) e troca vírgula decimal por ponto
    const parsed = value.replace(/\./g, '').replace(',', '.');

    const numero = parseFloat(parsed);
    return isNaN(numero) ? 0 : numero;
};

// Formata número em formato brasileiro "1.234,56"
export const formatReal = (valor: string | number) => {
    // Se já for número, formata com Intl
    if (typeof valor === 'number') {
        return valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    // Se for string (ex: vindo de input), limpa os dígitos e aplica lógica
    const clean = valor.replace(/\D/g, '');
    const number = Number(clean) / 100;

    return number.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
