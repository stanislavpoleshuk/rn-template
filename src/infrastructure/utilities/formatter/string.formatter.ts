export class StringFormatter {
    static CountryCode = "+ (373) ";

    static ToPhone(value: string): string {
        const x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,5})/);
        value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        value = `+ ${value}`;
        if (value.length <= this.CountryCode.trim().length)
            value = this.CountryCode
        return value;
    }
}