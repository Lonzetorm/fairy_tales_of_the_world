export default defineEventHandler(async (event) => {
    const query = getQuery(event).q || ''
    const page = getQuery(event).page || ''

    // Здесь должен быть реальный запрос к базе данных
    const results_1 = [
        { title: 'Результат 1' },
        { title: 'Результат 1' },
        { title: 'Результат 1' },
        { title: 'Результат 1' },
        { title: 'Результат 1' },
        { title: 'Результат 1' },
        { title: 'Результат 1' },
        { title: 'Результат 1' },
        { title: 'Результат 1' },
        { title: 'Результат 1' },
    ]

    const results_2 = [
        { title: 'Тест 2' },
        { title: 'Тест 2' },
        { title: 'Тест 2' },
        { title: 'Тест 2' },
        { title: 'Тест 2' },
        { title: 'Тест 2' },
        { title: 'Тест 2' },
    ]

    const results_3 = [
        { title: 'Пример 3' },
        { title: 'Пример 3' },
        { title: 'Пример 3' },
        { title: 'Пример 3' },
        { title: 'Пример 3' },
        { title: 'Пример 3' },
        { title: 'Пример 3' },
    ]

    let results = results_1;

    if (page) {
        if (page == 1) {
            results = results_2
        }
        if (page == 2) {
            results = results_3
        }
    }

    return results
})