/**
 * Класс TransactionsPage управляет
 * страницей отображения доходов и
 * расходов конкретного счёта
 * */
class TransactionsPage {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor( element ) {
    if (element) {
      this.element = element;
      this.registerEvents();
      this.update();
    } else throw 'Нет такого элемента! Вращайте барабан!';
  }

  /**
   * Вызывает метод render для отрисовки страницы
   * */
  update() {
    this.render()
  }

  /**
   * Отслеживает нажатие на кнопку удаления транзакции
   * и удаления самого счёта. Внутри обработчика пользуйтесь
   * методами TransactionsPage.removeTransaction и
   * TransactionsPage.removeAccount соответственно
   * */
  registerEvents() {
  //   if (User) {
  //   let removeAcc = this.querySelector('.remove-account');
  //   let removeTrans = this.querySelector('.transaction__remove');
  //   removeAcc.addEventListener('click', () => {
  //     TransactionsPage.removeAccount()
  //   });
  //   removeTrans.addEventListener('click', () => {
  //     TransactionsPage.removeTransaction()
  //   })
  // }
  }

  /**
   * Удаляет счёт. Необходимо показать диаголовое окно (с помощью confirm())
   * Если пользователь согласен удалить счёт, вызовите
   * Account.remove, а также TransactionsPage.clear с
   * пустыми данными для того, чтобы очистить страницу.
   * По успешному удалению необходимо вызвать метод App.update()
   * для обновления приложения
   * */
  removeAccount() {
    // let accRemoveConf = confirm('Ты всё? Стираем?')
    // if (accRemoveConf === true) {
    //   AccountsWidget.remove(this);
    //   TransactionsPage.clear();
    //   App.update();
    // } else {
    //   return false
    // }
  }

  /**
   * Удаляет транзакцию (доход или расход). Требует
   * подтверждеия действия (с помощью confirm()).
   * По удалению транзакции вызовите метод App.update()
   * */
  removeTransaction( id ) {
    
    // let transRemoveConf = confirm('Это больше не нужно?');
    // if (transRemoveConf === true) {
    //   this.remove()
    //   App.update();
    // } else {
    //   return false
    // }
  }

  /**
   * С помощью Account.get() получает название счёта и отображает
   * его через TransactionsPage.renderTitle.
   * Получает список Transaction.list и полученные данные передаёт
   * в TransactionsPage.renderTransactions()
   * */
  render( options ) {
    // TransactionsPage.renderTitle;
    // Transactions.list;
    // TransactionsPage.renderTransactions()
  }

  /**
   * Очищает страницу. Вызывает
   * TransactionsPage.renderTransactions() с пустым массивом.
   * Устанавливает заголовок: «Название счёта»
   * */
  clear() {

  }

  /**
   * Устанавливает заголовок в элемент .content-title
   * */
  renderTitle( name ) {
    document.querySelector('.content-title').innerHTML = name;
  }

  /**
   * Форматирует дату в формате 2019-03-10 03:20:41 (строка)
   * в формат «10 марта 2019 г. в 03:20»
   * */
  formatDate( date ) {
      date = new Date();
      let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }
      date.toLocaleString("ru", options)
  }

  /**
   * Формирует HTML-код транзакции (дохода или расхода).
   * item - объект с информацией о транзакции
   * */
  getTransactionHTML( item ) {

  }

  /**
   * Отрисовывает список транзакций на странице
   * используя getTransactionHTML
   * */
  renderTransactions( data ) {

  }
}
