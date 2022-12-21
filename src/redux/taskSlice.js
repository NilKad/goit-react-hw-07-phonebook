const tasksSlice = {
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Выполнится в момент старта HTTP-запроса
    fetchingInProgress(state) {},
    // Выполнится если HTTP-запрос завершился успешно
    fetchingSuccess() {},
    // Выполнится если HTTP-запрос завершился с ошибкой
    fetchingError() {},
  },
};

export { tasksSlice };
