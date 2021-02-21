interface PaginationResponse<T> {
    current_page: number,
    data: Array<T>,
    from: number,
    per_page: number,
    total: number,
    last_page: number
}