<template lang="pug">
  .info
    h3.info__title {{ info.title }}
    p.info__text {{ info.descr }}
    .info__picture
      .info__picture-wrapper
        img(:src="require(`@/assets/images/${info.pic.img}`)", alt="workplace").info__img
        .info__img-layer
      .info__picture-text {{ info.pic.descr}}
    h4.info__ul-title {{ info.issues.title}}
    ul.info__ul
      li(v-for="issue in info.issues.list").info__ul-item 
        span.info__item-text-ul {{ issue }}
    h3.info__ol-title {{ info.goals.title}}
    ol.info__ol 
      li(v-for="goal in info.goals.list").info__ol-item 
        span.info__item-text-ol {{ goal }}

</template>

<script>
export default {
  name: 'GeneralInfo',
  data() {
    return{
      info: {
        title: "Общая информация",
        descr: "Если ранее бизнес рассматривал риск-подразделения как сдерживающий фактор развития, то сейчас они выступают в роли партнеров. Формальными правилами достичь такого результата вряд ли возможно, требуется соответствующая корпоративная культура.",
        pic: {
          img: "info-pic.jpg",
          descr: "Риск-культура - это устоявшиеся нормы поведения сотрудников, направленные на выявление рисков и управление ими.",
        },
        issues: {
          title: "Какие могут быть задачи у данного решения:",
          list: ["Сформировать у линейных руководителей набор управленческих знаний и навыков, необходимых для эффективного выполнения ими своих обязанностей в соответствии со стратегией Банка и корпоративной моделью компетенций;", 
                "Сформировать мотивацию к дальнейшему развитию;", 
                "Выявить высоко-потенциальных руководителей Банка для дальнейшего карьерного развития.",],
        },
        goals: {
          title: "Для чего это нужно?",
          list: ["Команда и управление людьми;",
                "Побуждение, мотивирование подчиненных и коллег к участию в улучшениях;",
                "Эффективное управление людьми;",
                "Определение факторов, влияющих на вовлеченность в коллективе использование управленческих инструментов / рычагов влияния на эти факторы; подбор адекватных / убедительных тезисов и аргументов для различных целевых аудиторий влияния; воодушевление людей в личном общении;",
                "Построение эффективных команд, лидерство и личная эффективность;",
                "Принятие на себя лидерства и выбор стиля лидерства;",
                "Фиксация и анализ своих эмоций с целью повышения эффективности профессиональной деятельности;",
                "Навык постоянного личностного развития;",],
        }
      },
      
    }
  },
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.info

  &__title
    font-size: 25px
    line-height: 31px
    font-family: "Montserrat-Bold"
    margin-bottom: 26px

  &__text
    line-height: 29px
    margin-bottom: 36px

  &__picture
    width: 100%
    position: relative
    margin-bottom: 33px

  &__picture-wrapper
    position: relative
    
  &__img
    display: block
    border-radius: 5px

  &__img-layer
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: linear-gradient(262.57deg, #DCC9C9 18.75%, #77655A 85.28%)
    mix-blend-mode: hard-light
    opacity: 0.75
    border-radius: 5px

  &__picture-text
    position: absolute
    bottom: -1px
    font-size: 14px
    line-height: 21px
    background-color: $background-secondary
    border-radius: 5px
    padding: 14px 15px 18px
    text-align: center

  &__ul-title
    font-family: "Montserrat-Bold"
    font-size: $font-size-base
    line-height: 28px
    margin-bottom: 14px

  &__ul
    margin-bottom: 35px

  &__ul-item
    margin-bottom: 11px
    position: relative

    &::before
      position: absolute
      display: block
      content: "\2013"

  &__item-text-ul
    font-size: $font-size-base
    line-height: 24px
    padding-left: 35px
    display: inline-block
    width: calc(100% - 50px)

    &:first-child
      line-height: 29px

  &__ol-title
    font-family: "Montserrat-Bold"
    font-size: 25px
    line-height: 30px
    margin-bottom: 25px

  &__ol
    list-style: decimal

  &__ol-item
    list-style-position: inside
    margin-bottom: 13px
    font-family: "Gilroy-Regular"
    line-height: 29px


  &__item-text-ol
    font-family: "Montserrat"
    display: inline-block
    padding-left: 19px
    width: calc(100% - 50px)
    vertical-align: top
    font-size: $font-size-base
    line-height: 29px
    

</style>