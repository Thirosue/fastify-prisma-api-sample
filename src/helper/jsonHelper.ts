export function toJson(data: any) {
    return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? Number(v.toString()) : v);
}