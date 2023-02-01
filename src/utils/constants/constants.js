const constants = {
  messages: {
    serverError: `Во время запроса произошла ошибка.
      Возможно, проблема с соединением или сервер недоступен.
      Подождите немного и попробуйте ещё раз».`,
    requirementKeyword: 'Нужно ввести ключевое слово',
    notFound: 'Ничего не найдено',
    successfulUpdate: 'Данные успешно обновлены',
    incorrectData: 'Вы ввели неправильный логин или пароль',
    authError:
      'При авторизации произошла ошибка. Токен не передан или передан не в том формате',
    registerError: 'При регистрации пользователя произошла ошибка',
    emailIsBusy: 'Пользователь с таким email уже существует',
    updateError: 'При обновлении профиля произошла ошибка',
    nameRequirement:
      'Поле может содержать только латиницу, кириллицу, пробел или дефис от 2 до 30 знаков',
    emailRequirement: 'Введен некорреткный e-mail адрес',
    passwordRequirement: 'Пароль должен содержать не меньше 6 символов',
  },
  windowSize: {
    LARGE_SIZE: 1280,
    MEDIUM_SIZE: 1279,
    SMALL_SIZE: 767,
  },
};

export default constants;
