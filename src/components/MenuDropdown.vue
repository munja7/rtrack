<template lang="pug">
	v-popover(offset="11").menu-dropdown
		.menu-dropdown__btn-wrapper
			.menu-dropdown__btn
				slot(name="target")
			.menu-dropdown__arrow
		template(slot="popover")
			.menu-dropdown__content
				slot(name="menu")
</template>

<script>
export default {
	name: "MenuDropdown",
	data() {
		return {
		}
  }
}
</script>

<style lang="sass">
@import '@/common/index'

.menu-dropdown

	&__btn-wrapper
		display: flex
		align-items: center
		cursor: pointer

	&__btn
		display: flex
		cursor: pointer

	&__arrow
		background: url("../assets/images/Vector.png") no-repeat right center
		width: 11px
		height: 6px
		margin-left: 10px
		vertical-align: middle
		transition: all 0.3s  ease-in-out
		
		.menu-dropdown.open &
			transform: rotate(180deg)
			transition: all 0.3s  ease-in-out

	&__content
		position: relative
		background-color: $background-secondary
		border: 1px solid #CDD3DB
		left: -60px
		margin-top: 15px
		border-radius: 0 0 5px 5px

		&::before,
		&::after
			content:""
			position: absolute
			top:-10px
			left: calc(50% + 40px)
			border-bottom:11px solid $background-secondary
			border-left:11px solid transparent
			border-right:11px solid transparent

		&::before
			top:-11px
			border-bottom-color:#CDD3DB

	
</style>