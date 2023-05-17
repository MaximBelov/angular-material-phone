import { getSupportedRegionCodes } from 'awesome-phonenumber';
import CountryList from 'country-list-with-dial-code-and-flag';

export interface CountryCodes {
    code: string;
    country: string;
    flag?: string;
    dial_code?: string;
}

export const ISO_3166_1_CODES = getSupportedRegionCodes().map(code => {
    // @ts-ignore
    const ff = CountryList.findOneByCountryCode(code);
    if (!ff) {
        console.log(code);
    } else {
        const country: CountryCodes = {
            code: ff.code,
            country: ff.name,
            dial_code: ff.dial_code,
            flag: ff.flag,
        };

        return country;
    }
}).filter(c => c).sort((a, b) =>  a.country.localeCompare(b.country));
