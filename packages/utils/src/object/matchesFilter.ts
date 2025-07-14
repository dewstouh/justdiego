export function matchesFilter<T>(obj: T, params: Partial<T>): boolean {
    return Object.entries(params).every(([key, value]) => {
        if (value === undefined) return true;
        const objValue = obj[key as keyof T];

        if (typeof value === "string" && typeof objValue === "string") {
            return objValue.includes(value);
        }

        if (Array.isArray(value) && Array.isArray(objValue)) {
            return value.every(v => objValue.includes(v));
        }

        return objValue === value;
    });
}