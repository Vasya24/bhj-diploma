/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar extends Modal {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const btn = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar-mini');
    btn.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar-open');
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
      let modalRegister = App.getModal('register');
      document.querySelector('.menu-item_register').onclick = () => modalRegister.open();

      let modalLogin = App.getModal('login');
      document.querySelector('.menu-item_login').onclick = () => modalLogin.open();

      document.querySelector('.menu-item_logout').onclick = function(e) {
        e.preventDefault();
        User.logout;
        App.setState('init')
      }
  }

}
