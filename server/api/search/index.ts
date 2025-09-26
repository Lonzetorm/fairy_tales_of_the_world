export default defineEventHandler(async (event) => {
    const query = getQuery(event).q || ''

    // Здесь должен быть реальный запрос к базе данных
    const results = [
        { title: 'Результат 1' },
        { title: 'Результат 2' },
        { title: 'Результат 2' },
        { title: 'Результат 2' },
        { title: 'Результат 2' },
        { title: 'Результат 2' },
        { title: 'Результат 2' },
        { title: 'Результат 2' },
        { title: 'Результат 2' },
        { title: 'Результат 2' },
        { title: 'Результат 2' },
        { title: 'Результат 2 2' },
        { title: 'Результат 2 2' },
        { title: 'Результат 2 2' },
        { title: 'Результат 2 2' },
        { title: 'Результат 2 2' },
    ]

    // Фильтрация по запросу (простая реализация)
    return results.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    )
})