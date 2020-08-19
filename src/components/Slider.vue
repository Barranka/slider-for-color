<template>
  <div class="wrapper">
	  <div class="slider-wrapper">

		  <!-- Text info -->
		  <p class="descr" v-if="showColor == null">{{info}}</p>

		  <!-- Button -->
		  <div class="button">
			<el-row>
  				<el-button @click="showColor = true">color</el-button>
				<el-button @click="showColor = false">backgroundColor</el-button>
			</el-row>
		  </div>
		  <div class="slider">

			<!-- Slider -->
			<div class="block">
    			<el-slider v-model="colors.textRed" :show-tooltip="false" :max="255" class="el-slider-one"></el-slider>
				<el-slider v-model="colors.textGreen" :show-tooltip="true" :max="255" class="el-slider-two"></el-slider>
				<el-slider v-model="colors.textBlue" :show-tooltip="false" :max="255" class="el-slider-three"></el-slider>
  			</div>

			<!-- Field of content -->
			<div class="content">
				<p
				class="content__text"
				:style="style"
				>{{text}}</p>
			</div>

		  </div>
	  </div>

  </div>
</template>

<script>

export default {
	data() {
      return {
		showColor: null,
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ullam! Neque unde quia eum minima quidem quisquam nobis odit!',
		colors: {
			textRed: 84,
			textGreen: 222,
			textBlue: 255
		},
		defaultColorText: {
			active: false,
			textRed: 84,
			textGreen: 222,
			textBlue: 255
		},
		defaultColorBg: {
			active: false,
			textRed: 255,
			textGreen: 255,
			textBlue: 255
		},
		color: '',
		bgColor: '',
		info: 'Choose type of button for changing text or background color!'
      }
	},
	computed: {
		style() {
			if (this.showColor === null) return false
			if (this.showColor === true) {
				if (this.defaultColorText.active === false) {
					this.color = `color:rgb(${this.colors.textRed}, ${this.colors.textGreen}, ${this.colors.textBlue}); background-color:rgb(${this.defaultColorBg.textRed}, ${this.defaultColorBg.textGreen}, ${this.defaultColorBg.textBlue});`
					this.defaultColorText.active === true
				}
				this.color = `color:rgb(${this.defaultColorText.textRed}, ${this.defaultColorText.textGreen}, ${this.defaultColorText.textBlue}); background-color:rgb(${this.defaultColorBg.textRed}, ${this.defaultColorBg.textGreen}, ${this.defaultColorBg.textBlue});`
				this.defaultColorText.textRed = this.colors.textRed
				this.defaultColorText.textGreen = this.colors.textGreen
				this.defaultColorText.textBlue = this.colors.textBlue
				return this.color
			} else if (this.showColor === false) {
				if (this.defaultColorBg.active === false) {
					this.color = `background-color:rgb(${this.colors.textRed}, ${this.colors.textGreen}, ${this.colors.textBlue}); color:rgb(${this.defaultColorBg.textRed}, ${this.defaultColorBg.textGreen}, ${this.defaultColorBg.textBlue});`
					this.defaultColorBg.active === true
				}
				this.bgColor = `background-color:rgb(${this.defaultColorBg.textRed}, ${this.defaultColorBg.textGreen}, ${this.defaultColorBg.textBlue}); color:rgb(${this.defaultColorText.textRed}, ${this.defaultColorText.textGreen}, ${this.defaultColorText.textBlue});`
				this.defaultColorBg.textRed = this.colors.textRed
				this.defaultColorBg.textGreen = this.colors.textGreen
				this.defaultColorBg.textBlue = this.colors.textBlue
				return this.bgColor
			}
		}
    }
}
</script>

<style lang="scss">
.button {
	margin: 40px 0;
	min-width: 900px;
	padding: 30px;
	border: 1px solid #DCDFE6;
}
.slider {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
}
.content {
	max-width: 300px;
	margin: 20px;
	border: 1px solid #DCDFE6;
	&__text {
		padding: 30px;
	}
}
.block {
	min-width: 400px;
}
.el-slider-one>.el-slider__runway>.el-slider__bar {
	background-color:red;
}
.el-slider-one>.el-slider__runway>.el-slider__button-wrapper>.el-slider__button {
	border: 2px solid red;
}
.el-slider-two>.el-slider__runway>.el-slider__bar {
	background-color:green;
}
.el-slider-two>.el-slider__runway>.el-slider__button-wrapper>.el-slider__button {
	border: 2px solid green;
}
.el-slider-three>.el-slider__runway>.el-slider__bar {
	background-color:blue;
}
.el-slider-three>.el-slider__runway>.el-slider__button-wrapper>.el-slider__button {
	border: 2px solid blue;
}
.descr {
	margin: 30px 0;
    min-width: 400px;
	font-size: 24px;
}
</style>