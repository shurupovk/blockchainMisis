# Описание контракта
Этот контракт имеет три возможных статуса платежа: Pending, Paid и Refunded. Функция makePayment() используется для совершения платежа, а функция returnPayment() используется для возврата платежа. Функция getStatus() используется для получения текущего статуса платежа, а функция getPaymentStatus() используется для возврата текущего статуса в виде строки. Когда платеж возвращается, контракт переводит баланс обратно на счет, который инициировал возврат.
# Описание тестов
Этот тестовый сценарий охватывает основные функции платежного контракта и проверяет, что:

Контракт инициализируется со статусом «В ожидании».
Оплата может быть произведена и статус изменится на "Оплачено"
Платеж не может быть произведен повторно после того, как он уже был совершен
Возможен возврат платежа и изменение статуса на "Возвращен"
Платеж не может быть возвращен, если оплата еще не была произведена
Вы можете запустить этот тестовый скрипт, установив Mocha и Chai, а затем запустив npx mocha path/to/test/script.js. Убедитесь, что у вас запущен локальный узел Ethereum, или используйте такой сервис, как Ganache, чтобы предоставить локальный блокчейн для тестирования.
# Пример деплоя и тестов
![image](https://user-images.githubusercontent.com/44007878/227723818-e9cba889-9617-4f90-a83e-c6e73e7bed59.png)
![image](https://user-images.githubusercontent.com/44007878/227723840-81b39634-810f-46dd-8575-6bdd37ba0b45.png)
![image](https://user-images.githubusercontent.com/44007878/227723795-db30ca5f-5e20-4ae2-acc4-17eb12e00e9e.png)
