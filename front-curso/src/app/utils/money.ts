// Converte string no formato "1.234,56" para número (ex: 1234.56)
export const converterEmBigDecimal = (value: string | null | undefined): number | string => {
    if ((!value || typeof value !== 'string') ) {
        return '';
    }

    // Remove os pontos (separadores de milhar) e troca vírgula decimal por ponto
    const parsed = value.replace(/\./g, '').replace(',', '.');

    const numero = parseFloat(parsed);
    return isNaN(numero) ? 0 : numero;
};

// Formata número em formato brasileiro "1.234,56"
export const formatReal = ( valor: any ) => {
    const v = ((valor.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');

    const m = v[0].split('').reverse().join('').match(/.{1,3}/g);

    if (!m) return '';
    
    for (let i = 0; i < m.length; i++)
        m[i] = m[i].split('').reverse().join('') + '.';

    const r = m.reverse().join('');

    return r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
}
