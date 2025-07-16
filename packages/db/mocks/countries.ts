import { Prisma } from "../generated/prisma";

export const countriesMock: Prisma.CountryCreateInput[] = [
    // Africa
    { id: 'country-algeria', code: 'dz', name: 'Algeria', flag: '🇩🇿' },
    { id: 'country-angola', code: 'ao', name: 'Angola', flag: '🇦🇴' },
    { id: 'country-benin', code: 'bj', name: 'Benin', flag: '🇧🇯' },
    { id: 'country-botswana', code: 'bw', name: 'Botswana', flag: '🇧🇼' },
    { id: 'country-burkina-faso', code: 'bf', name: 'Burkina Faso', flag: '🇧🇫' },
    { id: 'country-burundi', code: 'bi', name: 'Burundi', flag: '🇧🇮' },
    { id: 'country-cameroon', code: 'cm', name: 'Cameroon', flag: '🇨🇲' },
    { id: 'country-cape-verde', code: 'cv', name: 'Cape Verde', flag: '🇨🇻' },
    { id: 'country-chad', code: 'td', name: 'Chad', flag: '🇹🇩' },
    { id: 'country-comoros', code: 'km', name: 'Comoros', flag: '🇰🇲' },
    { id: 'country-congo', code: 'cg', name: 'Congo', flag: '🇨🇬' },
    { id: 'country-congo-drc', code: 'cd', name: 'Congo (DRC)', flag: '🇨🇩' },
    { id: 'country-djibouti', code: 'dj', name: 'Djibouti', flag: '🇩🇯' },
    { id: 'country-egypt', code: 'eg', name: 'Egypt', flag: '🇪🇬' },
    { id: 'country-equatorial-guinea', code: 'gq', name: 'Equatorial Guinea', flag: '🇬🇶' },
    { id: 'country-eritrea', code: 'er', name: 'Eritrea', flag: '🇪🇷' },
    { id: 'country-eswatini', code: 'sz', name: 'Eswatini', flag: '🇸🇿' },
    { id: 'country-ethiopia', code: 'et', name: 'Ethiopia', flag: '🇪🇹' },
    { id: 'country-gabon', code: 'ga', name: 'Gabon', flag: '🇬🇦' },
    { id: 'country-gambia', code: 'gm', name: 'Gambia', flag: '🇬🇲' },
    { id: 'country-ghana', code: 'gh', name: 'Ghana', flag: '🇬🇭' },
    { id: 'country-guinea', code: 'gn', name: 'Guinea', flag: '🇬🇳' },
    { id: 'country-guinea-bissau', code: 'gw', name: 'Guinea-Bissau', flag: '🇬🇼' },
    { id: 'country-ivory-coast', code: 'ci', name: 'Ivory Coast', flag: '🇨🇮' },
    { id: 'country-kenya', code: 'ke', name: 'Kenya', flag: '🇰🇪' },
    { id: 'country-lesotho', code: 'ls', name: 'Lesotho', flag: '🇱🇸' },
    { id: 'country-liberia', code: 'lr', name: 'Liberia', flag: '🇱🇷' },
    { id: 'country-libya', code: 'ly', name: 'Libya', flag: '🇱🇾' },
    { id: 'country-madagascar', code: 'mg', name: 'Madagascar', flag: '🇲🇬' },
    { id: 'country-malawi', code: 'mw', name: 'Malawi', flag: '🇲🇼' },
    { id: 'country-mali', code: 'ml', name: 'Mali', flag: '🇲🇱' },
    { id: 'country-mauritania', code: 'mr', name: 'Mauritania', flag: '🇲🇷' },
    { id: 'country-mauritius', code: 'mu', name: 'Mauritius', flag: '🇲🇺' },
    { id: 'country-morocco', code: 'ma', name: 'Morocco', flag: '🇲🇦' },
    { id: 'country-mozambique', code: 'mz', name: 'Mozambique', flag: '🇲🇿' },
    { id: 'country-namibia', code: 'na', name: 'Namibia', flag: '🇳🇦' },
    { id: 'country-niger', code: 'ne', name: 'Niger', flag: '🇳🇪' },
    { id: 'country-nigeria', code: 'ng', name: 'Nigeria', flag: '🇳🇬' },
    { id: 'country-rwanda', code: 'rw', name: 'Rwanda', flag: '🇷🇼' },
    { id: 'country-sao-tome', code: 'st', name: 'São Tomé and Príncipe', flag: '🇸🇹' },
    { id: 'country-senegal', code: 'sn', name: 'Senegal', flag: '🇸🇳' },
    { id: 'country-seychelles', code: 'sc', name: 'Seychelles', flag: '🇸🇨' },
    { id: 'country-sierra-leone', code: 'sl', name: 'Sierra Leone', flag: '🇸🇱' },
    { id: 'country-somalia', code: 'so', name: 'Somalia', flag: '🇸🇴' },
    { id: 'country-south-africa', code: 'za', name: 'South Africa', flag: '🇿🇦' },
    { id: 'country-south-sudan', code: 'ss', name: 'South Sudan', flag: '🇸🇸' },
    { id: 'country-sudan', code: 'sd', name: 'Sudan', flag: '🇸🇩' },
    { id: 'country-tanzania', code: 'tz', name: 'Tanzania', flag: '🇹🇿' },
    { id: 'country-togo', code: 'tg', name: 'Togo', flag: '🇹🇬' },
    { id: 'country-tunisia', code: 'tn', name: 'Tunisia', flag: '🇹🇳' },
    { id: 'country-uganda', code: 'ug', name: 'Uganda', flag: '🇺🇬' },
    { id: 'country-zambia', code: 'zm', name: 'Zambia', flag: '🇿🇲' },
    { id: 'country-zimbabwe', code: 'zw', name: 'Zimbabwe', flag: '🇿🇼' },

    // Asia
    { id: 'country-afghanistan', code: 'af', name: 'Afghanistan', flag: '🇦🇫' },
    { id: 'country-armenia', code: 'am', name: 'Armenia', flag: '🇦🇲' },
    { id: 'country-azerbaijan', code: 'az', name: 'Azerbaijan', flag: '🇦🇿' },
    { id: 'country-bahrain', code: 'bh', name: 'Bahrain', flag: '🇧🇭' },
    { id: 'country-bangladesh', code: 'bd', name: 'Bangladesh', flag: '🇧🇩' },
    { id: 'country-bhutan', code: 'bt', name: 'Bhutan', flag: '🇧🇹' },
    { id: 'country-brunei', code: 'bn', name: 'Brunei', flag: '🇧🇳' },
    { id: 'country-cambodia', code: 'kh', name: 'Cambodia', flag: '🇰🇭' },
    { id: 'country-china', code: 'cn', name: 'China', flag: '🇨🇳' },
    { id: 'country-cyprus', code: 'cy', name: 'Cyprus', flag: '🇨🇾' },
    { id: 'country-georgia', code: 'ge', name: 'Georgia', flag: '🇬🇪' },
    { id: 'country-india', code: 'in', name: 'India', flag: '🇮🇳' },
    { id: 'country-indonesia', code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    { id: 'country-iran', code: 'ir', name: 'Iran', flag: '🇮🇷' },
    { id: 'country-iraq', code: 'iq', name: 'Iraq', flag: '🇮🇶' },
    { id: 'country-israel', code: 'il', name: 'Israel', flag: '🇮🇱' },
    { id: 'country-japan', code: 'jp', name: 'Japan', flag: '🇯🇵' },
    { id: 'country-jordan', code: 'jo', name: 'Jordan', flag: '🇯🇴' },
    { id: 'country-kazakhstan', code: 'kz', name: 'Kazakhstan', flag: '🇰🇿' },
    { id: 'country-kuwait', code: 'kw', name: 'Kuwait', flag: '🇰🇼' },
    { id: 'country-kyrgyzstan', code: 'kg', name: 'Kyrgyzstan', flag: '🇰🇬' },
    { id: 'country-laos', code: 'la', name: 'Laos', flag: '🇱🇦' },
    { id: 'country-lebanon', code: 'lb', name: 'Lebanon', flag: '🇱🇧' },
    { id: 'country-malaysia', code: 'my', name: 'Malaysia', flag: '🇲🇾' },
    { id: 'country-maldives', code: 'mv', name: 'Maldives', flag: '🇲🇻' },
    { id: 'country-mongolia', code: 'mn', name: 'Mongolia', flag: '🇲🇳' },
    { id: 'country-myanmar', code: 'mm', name: 'Myanmar', flag: '🇲🇲' },
    { id: 'country-nepal', code: 'np', name: 'Nepal', flag: '🇳🇵' },
    { id: 'country-north-korea', code: 'kp', name: 'North Korea', flag: '🇰🇵' },
    { id: 'country-oman', code: 'om', name: 'Oman', flag: '🇴🇲' },
    { id: 'country-pakistan', code: 'pk', name: 'Pakistan', flag: '🇵🇰' },
    { id: 'country-palestine', code: 'ps', name: 'Palestine', flag: '🇵🇸' },
    { id: 'country-philippines', code: 'ph', name: 'Philippines', flag: '🇵🇭' },
    { id: 'country-qatar', code: 'qa', name: 'Qatar', flag: '🇶🇦' },
    { id: 'country-saudi-arabia', code: 'sa', name: 'Saudi Arabia', flag: '🇸🇦' },
    { id: 'country-singapore', code: 'sg', name: 'Singapore', flag: '🇸🇬' },
    { id: 'country-south-korea', code: 'kr', name: 'South Korea', flag: '🇰🇷' },
    { id: 'country-sri-lanka', code: 'lk', name: 'Sri Lanka', flag: '🇱🇰' },
    { id: 'country-syria', code: 'sy', name: 'Syria', flag: '🇸🇾' },
    { id: 'country-taiwan', code: 'tw', name: 'Taiwan', flag: '🇹🇼' },
    { id: 'country-tajikistan', code: 'tj', name: 'Tajikistan', flag: '🇹🇯' },
    { id: 'country-thailand', code: 'th', name: 'Thailand', flag: '🇹🇭' },
    { id: 'country-timor-leste', code: 'tl', name: 'Timor-Leste', flag: '🇹🇱' },
    { id: 'country-turkey', code: 'tr', name: 'Turkey', flag: '🇹🇷' },
    { id: 'country-turkmenistan', code: 'tm', name: 'Turkmenistan', flag: '🇹🇲' },
    { id: 'country-uae', code: 'ae', name: 'United Arab Emirates', flag: '🇦🇪' },
    { id: 'country-uzbekistan', code: 'uz', name: 'Uzbekistan', flag: '🇺🇿' },
    { id: 'country-vietnam', code: 'vn', name: 'Vietnam', flag: '🇻🇳' },
    { id: 'country-yemen', code: 'ye', name: 'Yemen', flag: '🇾🇪' },

    // Europe
    { id: 'country-albania', code: 'al', name: 'Albania', flag: '🇦🇱' },
    { id: 'country-andorra', code: 'ad', name: 'Andorra', flag: '🇦🇩' },
    { id: 'country-austria', code: 'at', name: 'Austria', flag: '🇦🇹' },
    { id: 'country-belarus', code: 'by', name: 'Belarus', flag: '🇧🇾' },
    { id: 'country-belgium', code: 'be', name: 'Belgium', flag: '🇧🇪' },
    { id: 'country-bosnia', code: 'ba', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { id: 'country-bulgaria', code: 'bg', name: 'Bulgaria', flag: '🇧🇬' },
    { id: 'country-croatia', code: 'hr', name: 'Croatia', flag: '🇭🇷' },
    { id: 'country-czech-republic', code: 'cz', name: 'Czech Republic', flag: '🇨🇿' },
    { id: 'country-denmark', code: 'dk', name: 'Denmark', flag: '🇩🇰' },
    { id: 'country-estonia', code: 'ee', name: 'Estonia', flag: '🇪�' },
    { id: 'country-finland', code: 'fi', name: 'Finland', flag: '🇫🇮' },
    { id: 'country-france', code: 'fr', name: 'France', flag: '🇫🇷' },
    { id: 'country-germany', code: 'de', name: 'Germany', flag: '🇩🇪' },
    { id: 'country-greece', code: 'gr', name: 'Greece', flag: '🇬🇷' },
    { id: 'country-hungary', code: 'hu', name: 'Hungary', flag: '🇭🇺' },
    { id: 'country-iceland', code: 'is', name: 'Iceland', flag: '🇮�🇸' },
    { id: 'country-ireland', code: 'ie', name: 'Ireland', flag: '🇮🇪' },
    { id: 'country-italy', code: 'it', name: 'Italy', flag: '🇮🇹' },
    { id: 'country-kosovo', code: 'xk', name: 'Kosovo', flag: '🇽🇰' },
    { id: 'country-latvia', code: 'lv', name: 'Latvia', flag: '🇱🇻' },
    { id: 'country-liechtenstein', code: 'li', name: 'Liechtenstein', flag: '🇱🇮' },
    { id: 'country-lithuania', code: 'lt', name: 'Lithuania', flag: '🇱🇹' },
    { id: 'country-luxembourg', code: 'lu', name: 'Luxembourg', flag: '🇱🇺' },
    { id: 'country-malta', code: 'mt', name: 'Malta', flag: '🇲🇹' },
    { id: 'country-moldova', code: 'md', name: 'Moldova', flag: '🇲🇩' },
    { id: 'country-monaco', code: 'mc', name: 'Monaco', flag: '🇲🇨' },
    { id: 'country-montenegro', code: 'me', name: 'Montenegro', flag: '🇲🇪' },
    { id: 'country-netherlands', code: 'nl', name: 'Netherlands', flag: '🇳🇱' },
    { id: 'country-north-macedonia', code: 'mk', name: 'North Macedonia', flag: '🇲🇰' },
    { id: 'country-norway', code: 'no', name: 'Norway', flag: '🇳🇴' },
    { id: 'country-poland', code: 'pl', name: 'Poland', flag: '🇵🇱' },
    { id: 'country-portugal', code: 'pt', name: 'Portugal', flag: '🇵🇹' },
    { id: 'country-romania', code: 'ro', name: 'Romania', flag: '🇷🇴' },
    { id: 'country-russia', code: 'ru', name: 'Russia', flag: '🇷🇺' },
    { id: 'country-san-marino', code: 'sm', name: 'San Marino', flag: '🇸🇲' },
    { id: 'country-serbia', code: 'rs', name: 'Serbia', flag: '🇷🇸' },
    { id: 'country-slovakia', code: 'sk', name: 'Slovakia', flag: '🇸🇰' },
    { id: 'country-slovenia', code: 'si', name: 'Slovenia', flag: '🇸🇮' },
    { id: 'country-spain', code: 'es', name: 'Spain', flag: '🇪🇸' },
    { id: 'country-sweden', code: 'se', name: 'Sweden', flag: '�🇪' },
    { id: 'country-switzerland', code: 'ch', name: 'Switzerland', flag: '🇨🇭' },
    { id: 'country-ukraine', code: 'ua', name: 'Ukraine', flag: '�🇺🇦' },
    { id: 'country-uk', code: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
    { id: 'country-vatican', code: 'va', name: 'Vatican City', flag: '🇻🇦' },

    // North America
    { id: 'country-antigua', code: 'ag', name: 'Antigua and Barbuda', flag: '�🇬' },
    { id: 'country-bahamas', code: 'bs', name: 'Bahamas', flag: '🇧�🇸' },
    { id: 'country-barbados', code: 'bb', name: 'Barbados', flag: '🇧🇧' },
    { id: 'country-belize', code: 'bz', name: 'Belize', flag: '🇧🇿' },
    { id: 'country-canada', code: 'ca', name: 'Canada', flag: '🇨🇦' },
    { id: 'country-costa-rica', code: 'cr', name: 'Costa Rica', flag: '🇨🇷' },
    { id: 'country-cuba', code: 'cu', name: 'Cuba', flag: '🇨🇺' },
    { id: 'country-dominica', code: 'dm', name: 'Dominica', flag: '🇩🇲' },
    { id: 'country-dominican-republic', code: 'do', name: 'Dominican Republic', flag: '🇩🇴' },
    { id: 'country-el-salvador', code: 'sv', name: 'El Salvador', flag: '🇸🇻' },
    { id: 'country-grenada', code: 'gd', name: 'Grenada', flag: '🇬🇩' },
    { id: 'country-guatemala', code: 'gt', name: 'Guatemala', flag: '🇬🇹' },
    { id: 'country-haiti', code: 'ht', name: 'Haiti', flag: '🇭🇹' },
    { id: 'country-honduras', code: 'hn', name: 'Honduras', flag: '🇭🇳' },
    { id: 'country-jamaica', code: 'jm', name: 'Jamaica', flag: '🇯🇲' },
    { id: 'country-mexico', code: 'mx', name: 'Mexico', flag: '🇲🇽' },
    { id: 'country-nicaragua', code: 'ni', name: 'Nicaragua', flag: '🇳🇮' },
    { id: 'country-panama', code: 'pa', name: 'Panama', flag: '🇵🇦' },
    { id: 'country-saint-kitts', code: 'kn', name: 'Saint Kitts and Nevis', flag: '🇰🇳' },
    { id: 'country-saint-lucia', code: 'lc', name: 'Saint Lucia', flag: '🇱🇨' },
    { id: 'country-saint-vincent', code: 'vc', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨' },
    { id: 'country-trinidad', code: 'tt', name: 'Trinidad and Tobago', flag: '🇹🇹' },
    { id: 'country-usa', code: 'us', name: 'United States', flag: '🇺🇸' },

    // South America
    { id: 'country-argentina', code: 'ar', name: 'Argentina', flag: '🇦🇷' },
    { id: 'country-bolivia', code: 'bo', name: 'Bolivia', flag: '🇧🇴' },
    { id: 'country-brazil', code: 'br', name: 'Brazil', flag: '🇧🇷' },
    { id: 'country-chile', code: 'cl', name: 'Chile', flag: '🇨🇱' },
    { id: 'country-colombia', code: 'co', name: 'Colombia', flag: '🇨🇴' },
    { id: 'country-ecuador', code: 'ec', name: 'Ecuador', flag: '🇪🇨' },
    { id: 'country-guyana', code: 'gy', name: 'Guyana', flag: '🇬�' },
    { id: 'country-paraguay', code: 'py', name: 'Paraguay', flag: '🇵🇾' },
    { id: 'country-peru', code: 'pe', name: 'Peru', flag: '🇵🇪' },
    { id: 'country-suriname', code: 'sr', name: 'Suriname', flag: '🇸🇷' },
    { id: 'country-uruguay', code: 'uy', name: 'Uruguay', flag: '🇺🇾' },
    { id: 'country-venezuela', code: 've', name: 'Venezuela', flag: '🇻🇪' },

    // Oceania
    { id: 'country-australia', code: 'au', name: 'Australia', flag: '🇦🇺' },
    { id: 'country-fiji', code: 'fj', name: 'Fiji', flag: '🇫🇯' },
    { id: 'country-kiribati', code: 'ki', name: 'Kiribati', flag: '🇰🇮' },
    { id: 'country-marshall-islands', code: 'mh', name: 'Marshall Islands', flag: '🇲🇭' },
    { id: 'country-micronesia', code: 'fm', name: 'Micronesia', flag: '🇫🇲' },
    { id: 'country-nauru', code: 'nr', name: 'Nauru', flag: '🇳🇷' },
    { id: 'country-new-zealand', code: 'nz', name: 'New Zealand', flag: '🇳🇿' },
    { id: 'country-palau', code: 'pw', name: 'Palau', flag: '🇵🇼' },
    { id: 'country-papua-new-guinea', code: 'pg', name: 'Papua New Guinea', flag: '🇵🇬' },
    { id: 'country-samoa', code: 'ws', name: 'Samoa', flag: '🇼�' },
    { id: 'country-solomon-islands', code: 'sb', name: 'Solomon Islands', flag: '🇸🇧' },
    { id: 'country-tonga', code: 'to', name: 'Tonga', flag: '🇹🇴' },
    { id: 'country-tuvalu', code: 'tv', name: 'Tuvalu', flag: '🇹🇻' },
    { id: 'country-vanuatu', code: 'vu', name: 'Vanuatu', flag: '🇻🇺' },
];

/**
 * Search countries by name or country code
 * @param query - Search term (case insensitive)
 * @returns Array of countries matching the search query
 */
export const searchCountries = (query: string): Prisma.CountryCreateInput[] => {
    if (!query || query.trim() === '') {
        return countriesMock;
    }

    const searchTerm = query.toLowerCase().trim();
    
    return countriesMock.filter(country => 
        country.name.toLowerCase().includes(searchTerm) ||
        country.code.toLowerCase().includes(searchTerm)
    );
};

/**
 * Get countries by continent/region
 * @param region - The region to filter by
 * @returns Array of countries in the specified region
 */
/**
 * Get a random selection of countries
 * @param count - Number of countries to return
 * @returns Array of randomly selected countries
 */
export const getRandomCountries = (count: number = 10): Prisma.CountryCreateInput[] => {
    const shuffled = [...countriesMock].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
