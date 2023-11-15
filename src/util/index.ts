export const fetcher = async (
    resource: RequestInfo,
    init?: RequestInit,
): Promise<any> => {
    const res = await fetch(resource, init)

    if (!res.ok) {
        const errorRes = await res.json()
        throw new Error(
            errorRes.message ?? 'APIリクエスト中にエラーが発生しました',
        )
    }

    return res.json()
}