/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */
class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (element) {
      this.element = element;
      this.registerEvents();
    } else throw 'Нет такого элемента! Вращайте барабан!';
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const buttonIncome = this.element.querySelector('.create-income-button');
    const buttonExpense = this.element.querySelector('.create-expense-button');
    buttonIncome.onclick = () => {
      App.getModal('newIncome').open();
    };
    buttonExpense.onclick = () => {
      App.getModal('newExpense').open();
    };
  }
  
}
