import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const TAB_LIST = [
  {
    info: 'База знань',
    isActive: false,
  },
  {
    info: 'Інформація',
    isActive: true,
  },
]

const TAB = {
  img: '<img class="tab__image" src="/img/image.png">',
  title: ' Що таке база знань?',
  text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
}

const createTAB = () => {
  const tabList = createElement('main', 'tab__list')

  const tabBlock = createElement('div', 'tab__block')

  TAB_LIST.forEach((tabData) => {
    const tab = createElement(
      'div',
      tabData.isActive
        ? 'info__tab info__tab--active'
        : 'info__tab',
      tabData.info,
    )
    tabBlock.append(tab)
  })

  tabList.append(tabBlock)

  const infoImage = TAB.img
  tabList.insertAdjacentHTML('beforeend', infoImage)

  const infoTitle = createElement(
    'div',
    'info__title',
    TAB.title,
  )

  const infoParagraph = createElement(
    'p',
    'tab__text',
    TAB.text,
  )

  tabList.append(infoTitle, infoParagraph)

  const infoButton = createElement(
    'button',
    'info__button',
    "Перейти до ком'юніті у Телеграм",
  )

  tabList.append(infoButton)

  return tabList
}

const info = createTAB()

page.append(info)
