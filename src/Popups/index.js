import { getTargetUrl } from '../Helpers'

const streetlightPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-book smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Purple flag</span>
  </div>
  </div>`

  layer.bindPopup(content)
}

export {
  streetlightPopup
}