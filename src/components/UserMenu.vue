<template lang="pug">
	.user-menu
		ul.user-menu__list
			li(v-for="item in userMenu").user-menu__item
				a(href="#").user-menu__link {{ item.label }}
		a(href="#").user-menu__logout Выход
</template>

<script>
export default {
	name: 'UserMenu',
	data(){
    return{
      userMenu: [
				{
					label: "Профиль",
					url: "#",
				},
				{
					label: "Статистика",
					url: "#",
				},
				{
					label: "Токены",
					url: "#",
				},
				{
					label: "API",
					url: "#",
				},
			],
    }
  },
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.user-menu
	min-width: 200px 
	padding: 15px 20px 20px 20px

	&__list
		font-family: "Montserrat"
		border-bottom: 1px solid #CDD3DB
		margin-bottom: 11px

	&__item
		margin-bottom: 11px

	&__link
		font-size: 14px
		line-height: 17px
		color: $text-primary

		&:hover
			text-decoration: underline

	&__logout
		font-family: "Montserrat"
		font-size: 14px
		line-height: 17px
		color: $text-secondary

</style>