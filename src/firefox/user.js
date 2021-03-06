user_pref("layout.word_select.eat_space_to_next_word", false); //Отключить выделение пробела за словом по двойному клику на слове
user_pref("pdfjs.disabled", true); //Отключение медленный просмотра pdf в браузере
user_pref("ui.scrollToClick", 1); //Отвечает за переход к позиции на странице при клике по scroll бару (полосе прокрутки) левой кнопкой мыши. Ставим моментальный переход
user_pref("dom.disable_beforeunload", true); //Отключить предупреждение сайтом о закрытии вкладки с важной информацией. Сообщение "Вы действительно хотите уйти с этого сайта?"
user_pref("intl.locale.matchOS", false); //Использовать локаль из general.useragent.locale, а не установленную в ОС
user_pref("browser.link.open_newwindow.restriction", 0); //Открывать попапы во вкладках вместо отдельных окон
user_pref("browser.tabs.closeWindowWithLastTab", false); //Не закрывать Firefox при закрытии последней вкладки
user_pref("dom.webnotifications.enabled", false); //отключаем надоедливые окошки с предложением включить уведомления
user_pref("dom.webnotifications.serviceworker.enabled", false); //без этого не работает
user_pref("browser.xul.error_pages.expert_bad_cert", true); // Более информативная страница показа ошибок в сертификатах сайтов.
user_pref("browser.fixup.alternate.enabled", false); //отключаем автоподстановку TLD и www, иногда мешает вводу
user_pref("layout.spellcheckDefault", 2); // включить проверку орфографии во всех полях ввода

// ссылки на русском будут копироваться как есть, без кодирования
user_pref("browser.urlbar.decodeURLsOnCopy", true);

//отдельно отключаем отправку хэшей загружаемых файлов
//хотя по идеи она и так должна быть отключена при отключении browser.safebrowsing через стандартные настройки
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

user_pref("network.proxy.socks_remote_dns", true); // dns через прокси
