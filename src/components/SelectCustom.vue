<template lang="pug">
	.select
		v-select(
			:searchable="false"
			:clearable="false"
			:options="list"
			label="text"
			:reduce="text => text.id"
			:value="selected"
			v-model="selected"
			:placeholder="placeholder"
			@input="handler")
			template(#option="{ icon, text, style, checked }" )
				.select__option(:style="style" v-if="!filter")
					img(:src="require(`@/assets/images/${icon}`)").select__icon
					.select__text {{ text }}
				label.select__option(:style="style" v-if="filter")
					input(type="checkbox" v-model="checked") 
					.select__text {{ text }}
			template(#selected-option="{ icon, text, style }" )
				.select__option(:style="style" v-if="!filter")
					img(:src="require(`@/assets/images/${icon}`)").select__icon
					.select__text {{ text }}

</template>

<script>
export default {
    name: 'Selectcustom',
		props:{
			filter: {
				type: Boolean,
				default: false,
			},
			list:{
				type: Array, 
				default: () => ([])
			},
			value:{
				default: () => (null)
			},
			placeholder: {
				type: String, 
				default: () => ('')
			},
			type: {
				type: String,
				default: '',
			},
			taskId: {
				type: Number,
				default: () => (0)
			},
		},
		data(){
			return{
				selected: null,
			}
		},
		methods:{
			handler(){
				console.log('selected',this.selected);
				if(!this.filter)
				{
					this.list.find((el) => {
						if(el.id === this.selected){
							this.$store.commit('setTask', {
								id: this.selected, taskId: this.taskId, property: this.type
							}); 
						}     
        	});
				}
				else{
					this.list.find((el) => {
						if(el.id === this.selected){
							el.checked = !el.checked;
						} 
					});
					this.$store.commit('setFilter', {filter: this.selected, type: this.type});
				}
        console.log(this.$store.state.tasks);	
			}
		},
		mounted(){
			this.value && (this.selected = this.value);
		},

}
</script>

<style lang="sass" scoped>

.select__option
	display: flex	

</style>