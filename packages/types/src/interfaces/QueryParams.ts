export interface QueryParams<T = any> {
    where?: Partial<T> | Record<string, any>
    select?: Record<string, boolean> | undefined
    include?: Record<string, any> | undefined
    orderBy?: Record<string, 'asc' | 'desc'> | Array<Record<string, 'asc' | 'desc'>>
    skip?: number
    take?: number
    distinct?: string[]
}