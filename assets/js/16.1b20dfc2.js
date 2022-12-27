(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{290:function(t,_,s){"use strict";s.r(_);var v=s(13),a=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_2-введение"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-введение"}},[t._v("#")]),t._v(" 2. Введение")]),t._v(" "),_("h2",{attrs:{id:"_2-1-краткое-описание-робота"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-краткое-описание-робота"}},[t._v("#")]),t._v(" 2.1. Краткое описание робота")]),t._v(" "),_("p",[t._v("Данный робот может торговать несколькими одинаковыми алгоритмами. Один алгоритм со всеми его настройками далее будем называть портфелем. Каждый портфель робота должен содержать биржевые инструменты, которыми предполагается торговать или использовать их в расчётах. В портфеле может содержаться минимум один инструмент.")]),t._v(" "),_("p",[t._v("Один из инструментов портфеля должен быть отмечен признаком Is first, такой инструмент будем называть главным или первой ногой портфеля. Инструменты портфеля, не отмеченные признаком Is first, будем называть второй ногой портфеля. В каждом портфеле робота есть параметры, которые задаются на весь портфель, назовём их Параметры портфеля. Кроме них в портфеле есть параметры, которые задаются отдельно для каждого из инструментов портфеля, будем называть их Параметры инструментов портфеля. Так же, для всего портфеля задаются Параметры уведомлений (Notifications).")]),t._v(" "),_("p",[t._v("Есть еще несколько параметров, которые задаются для каждого используемого инструмента каждого транзакционного подключения (Параметры позиций по инструментам и Параметры позиций по валютам). Параметры делятся на редактируемые (т.е. собственно настройки) и отображаемые или расчётные (например, финансовый результат).")]),t._v(" "),_("p",[t._v("Некоторые параметры портфеля и инструментов для большей гибкости могут быть заданы как формулы на Написание_формул_на_языке_программирования_C++.")]),t._v(" "),_("p",[t._v("Для каждого из портфелей робота можно выбрать Type используемого алгоритма. Основной алгоритм робота арбитражный. Цена заявок на покупку и продажу по главному инструменту в общем случае рассчитывается на основе цен других инструментов портфеля. Поддерживается работа в двух режимах. В режиме котирования (флаг Quote взведен) после включения торговли на покупку и продажу, в стакане по главному инструменту портфеля держатся заявки на покупку и продажу соответственно. Котирующая заявка переставляется при выполнении определенных условий, например, при отклонении цены выставленной заявки от расчетной цены. Если котирование отключено, то заявки по главному инструменту выставляются при появлении сигнала (выполнении определенного условия).")]),t._v(" "),_("p",[t._v("Заявки по инструментам второй ноги выставляются после прохождения сделки по первой ноге. Направление заявок по инструментам второй ноги определяется направлением сделки по первой ноге, а также значением параметра On buy соответствующего инструмента.")]),t._v(" "),_("p",[t._v('Робот может быть настроен, как на выставление заявок второй ноги после прохождение каждой сделки по первой ноге, так и на более редкое выставление заявок по второй ноге. Объем для выставления каждого инструмента второй ноги вычисляется исходя из текущей позиции в портфеле по первой ноге и Count обеих бумаг, таким образом чтобы отношение "новой" позиции текущей бумаги (которая будет после прохождения сделки по еще невыставленной, но выставляемой в данный момент заявке) к позиции первой ноги было равно отношению Count второй ноги к Count первой ноги. Причем если при определении "новой" позиции по бумаге в портфеле есть неисполненные заявки, то исходим из того, что они будут полностью сведены в сделку.')]),t._v(" "),_("p",[t._v("Все заявки, выставляемые роботом, являются лимитными котировочными на всех поддерживаемых биржах.")]),t._v(" "),_("h2",{attrs:{id:"_2-2-краткое-описание-интерфеиса"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-краткое-описание-интерфеиса"}},[t._v("#")]),t._v(" 2.2. Краткое описание интерфейса")]),t._v(" "),_("p",[t._v("Основная страница интерфейса поделена на три части: левую, правую и нижнюю. В левой части отображается древовидная структура, верхний уровень которой это робот. Если продолжить открывать элементы дерева от верхнего уровня к более глубоким уровням, можно увидеть портфели робота и используемые в роботе подключения. Содержимое выбранного пункта отображается на правой части экрана. Например, если выбрать в левом списке имя конкретного портфеля, то справа отобразятся его настройки. В нижней части отображаются ошибки, предупреждения и другая информация.")]),t._v(" "),_("p",[t._v("В большинстве случаев, информация, представленная в правой части экрана отображается в виде таблицы. Над таблицей могут отображаются кнопки с дополнительными функциями. Стоит заметить, что все таблицы робота настраиваемые. Можно менять местами столбцы, а так же отключать ненужные. Для перетаскивания столбца достаточно зажать левую кнопку мыши на его заголовке и перетащить столбец в нужное место таблицы. Для отключения лишних столбцов нужно в окне с портфелями нажать кнопку Table - Columns. В том же меню есть пункты применения фильтра к таблице.")]),t._v(" "),_("p",[t._v("Для Начало работы с роботом необходимо активировать нужные подключения для получения маркетдаты и добавить необходимые транзакционные подключения. Только после этого следует создавать портфели.")]),t._v(" "),_("p",[t._v("Во время работы робота могут возникать различные ошибки при выставлении и удалении заявок, такие ситуации не являются нештатной работой робота и могут быть вызваны причинами, не связанными с некорректной работой торгового робота, например, отсутствием денег на счете клиента. Все ошибки и еще некоторую информацию, связанную с работой программы, можно посмотреть в логе, войдя во вкладку Log. Некоторые слишком часто приходящие сообщения будут отображаться в логе не все, а 1 раз в 10 секунд и будут отмечены в конце сообщения символом xN, где N - количество не показанных сообщений.")]),t._v(" "),_("p",[t._v("В роботе есть возможность посмотреть свои Параметры позиций (Пока доступно только для криптовалютных бирж). Для того чтобы посмотреть текущие позиции на бирже необходимо открыть вкладку Connections и выбрать необходимое подключение и далее нажать Positions/balance. В открывшемся окне вы можете посмотреть позиции по бумагам и/или баланс по деньгам в соответствующих таблицах.")])])}),[],!1,null,null,null);_.default=a.exports}}]);