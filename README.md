
Тестове завдання

Мета: створити картки твітів та додати інтерактивності при клікові на кнопку.

Загальний вигляд картки у двох станах - Follow та Following

Критерії виконання
● Верстка фіксована в рх, семантична та валідна.
● Немає помилок в консолі браузера.
● Робота виконана на нативному JS з використанням зборщиків або на React.
● Інтерактивність працює відповідно до технічного завдання.
● Код відформатований та без коментарів.
● В репозиторії має бути описаний README.md.

Технічне завдання
1. Відповідно до макету потрібно реалізувати картки юзера.
2. При клікові на кнопку Follow - текст змінюється на Following. Також
змінюється колір кнопки. А до кількості фоловерів додається і ваш. Тобто,
початкова кількість складає 100,500 фоловерів. При клікові на кнопку буде
100,501.

3. При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто,
якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається
в стані Following із відповідним кольором, а кількість фоловерів НЕ
зменшується до початкового значення.
4. При повторному клікові на кнопку її текст та колір змінюються до початкового
стану. Також змінюється і кількість фоловерів. Вона зменшується на 1
(100,500).
5. В коді цифра 100,500 має бути прописана одним значенням (100500). В UI -
виведено через кому (100,500).
