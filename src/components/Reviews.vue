<template lang="pug">
.reviews
	.reviews__title Оставьте отзыв о вашем использовании!
	textarea(rows="10", placeholder="Напишите ваш отзыв...").reviews__input
	.reviews__actions
		.reviews__col-left
			.reviews__attachments(v-if="!files.length")
				label.reviews__attachment-label
					img(src="@/assets/images/attachment.png").reviews__attachment-icon
					input.reviews__attachment-input(
						type="file", 
						@change="uploadFile($event)"
						accept="image/png, image/jpeg, image/gif, video/mp4")
				.reviews__attachment-text Прикрепить файлы
					span.reviews__attachment-formats Jpg, png, gif, mp4 не более 15 Мб

			.reviews__files(v-if="files.length>0 && !progress")
				.reviews__files-row
					.reviews__file(v-for="(file, index) in files")
						.reviews__label
							img(src="@/assets/images/Ellipse-43.png").reviews__attachment-icon
						.reviews__attachment-text {{ fileName(file.name) }}
							span.reviews__attachment-formats {{ Extention(file.type) }}, {{ fileSize(file.size)}}
						.reviews__delete-attachment(@click="removeFile(index)")
				.reviews__load-more(v-if="files.length < 4")
					.reviews__file
						label.reviews__attachment-label
							img(src="@/assets/images/Ellipse-45.png").reviews__attachment-icon
							.reviews__attachment-text Загрузить еще
							input.reviews__attachment-input(
								type="file", 
								@change="uploadFile($event)"
								accept="image/png, image/jpeg, image/gif, video/mp4")
				
			.reviews__progress(v-if="progress > 0")
				progress-bar(
				:options="options"
				:value="progress")

		.reviews__col-right
			a(href="#").reviews__send-button Отправить отзыв

	.reviews__error(v-if="err.length > 0")
		.reviews__error-text(v-for="error in err") {{ error }}

</template>

<script>
export default {
  name: 'Reviews',
	data() {
		return {
			err: [],
			progress: 0,
			fileTypes: [
				'image/jpeg',
				'image/gif',
				'image/png',
				'video/mp4',
			],
			file: '',
			files: [],
			options: {
				text: {
					hideText: true
				},
				progress: {
					color: '#579AFF',
					backgroundColor: '#fff',
					inverted: false
				},
				layout: {
					height: 12,
					width: 170,
					progressPadding: 0,
					type: 'line'
				}
			}
		}
	},
	methods: {
		fileName(file){
			return file.substring(0, file.lastIndexOf('.')) || file;
		},
		Extention(file){
			return file.split("/").slice(1).join("/");
		},
		removeFile(file){
			 this.files.splice( file, 1 );
		},
		validFileType(file){
				for(let i = 0; i < this.fileTypes.length; i++) {
					if(file.type === this.fileTypes[i]) {
						return true;
					}
				}
  			return false;
		},
		fileSize(size) {
			
			if(size < 1024) {
				return `${size} bytes`; 
			} else if(size > 1024 && size < 1048576) {
				return `${(size/1024).toFixed(1)} KB`;
			} else if(size > 1048576) {
				return `${(size/1048576).toFixed(1)} MB`;
			}
		},
		uploadFile(e){
			e.preventDefaut();
			if(e.target.files.length > 0 && this.validFileType(e.target.files[0])){
				
				for(let i = 0; i < this.files.length; i++){
					if(this.files[i].name === e.target.files[0].name){
						this.err.push('Данный файл уже загружен');
						return;
					}	
				}

				if(e.target.files[0].size > 1048576){
					this.err.push('Файл слишком большой');
					return;
				}
				this.file = e.target.files[0];
				this.files.push(this.file);
				
				let formData = new FormData();
				formData.append('file', this.file);

				this.err = [];

				this.axios
					.post('...', formData,{
							onUploadProgress: e => {
									this.progress = Math.round((e.loaded)  / e.total) * 100;
									
							}
					})
					.then(() => {
							console.log('Файл отправлен');
					})
					.catch(() => {
						setTimeout(()=>{this.progress = 0}, 1000)
						 })
				}
			
		}
	}
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.vuejs-progress-bar
	width: 172px
	border: 1px solid #CDD3DB
	line-height: 12px

.reviews

	&__title
		font-family: "Montserrat-Bold"
		font-size: 35px
		line-height: 43px
		color: #000
		margin-bottom: 30px

	&__input
		background: #FFFFFF
		border: 1px solid #CDD3DB
		border-radius: 5px
		width: 100%
		padding: 18px 25px
		margin-bottom: 25px

		&::placeholder
			font-family: "Montserrat"
			font-size: 17px
			line-height: 29px	
			color: #000000
			opacity: 0.5

	&__actions
		display: flex
		justify-content: space-between

	&__col-left
		display: flex
		flex-wrap: wrap

	&__col-right
		width: 23%

	&__attachments
		display: flex

	&__attachment-label
		cursor: pointer
		display: flex
		align-items: center

	&__label

	&__attachment-icon
		width: 46px
		height: 46px
		margin-right: 15px

	&__attachment-input
		display: none

	&__attachment-text
		font-size: 15px
		line-height: 18px
		letter-spacing: 0.5px
		font-weight: 600
		margin-right: 15px

	&__attachment-formats
		display: block
		font-size: 13px
		line-height: 15px
		color: #000
		opacity: 0.5
		font-weight: $font-weight-normal
		margin-top: 6px
	
	&__file
		display: flex

	&__files-row
		display: flex
		flex-wrap: wrap

	&__file
		display: flex
		margin-right: 20px
		align-items: center

	&__delete-attachment
		width: 15px
		height: 30px
		background: url(../assets/images/Stroke.png) no-repeat
		cursor: pointer

	&__load-more
		width: 100%
		margin-bottom: 10px

		& .reviews__attachment-text
			cursor: pointer

	&__send-button
		font-family: "Montserrat-Bold"
		width: 204px
		height: 56px
		background: #0066FF
		border-radius: 40px
		color: $background-secondary
		display: flex
		align-items: center
		justify-content: center
		font-size: 15px
		line-height: 18px

	&__error

	&__error-text
		color: red
		font-size: 13px
		line-height: 16px
		opacity: 0.7

</style>