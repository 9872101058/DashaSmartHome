exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Метод не разрешён" }),
    };
  }

  try {
    // Получаем данные из тела запроса
    const data = JSON.parse(event.body);

    // Пример обработки данных
    const result = {
      message: `Данные получены: ${JSON.stringify(data)}`,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Ошибка сервера" }),
    };
  }
};