<template>
  <div class="wrapper">
	  <div class="slider-wrapper">

		  <!-- Text info -->
		  <p class="descr" v-if="isText == null">{{info}}</p>

		  <!-- Button -->
		  <div class="button">
			<el-row>
  				<el-button @click="isText = true">color</el-button>
				<el-button @click="isText = false">backgroundColor</el-button>
			</el-row>
		  </div>
		  <div class="slider">

			<!-- Slider -->
			<div class="block">
    			<el-slider v-model="colors.Red" @change="onChange" :show-tooltip="false" :max="255" class="el-slider-one"></el-slider>
				<el-slider v-model="colors.Green" @change="onChange" :show-tooltip="false" :max="255" class="el-slider-two"></el-slider>
				<el-slider v-model="colors.Blue" @change="onChange" :show-tooltip="false" :max="255" class="el-slider-three"></el-slider>
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
		isText: null,
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ullam! Neque unde quia eum minima quidem quisquam nobis odit!',
		colors: {
			Red: 255,
			Green: 255,
			Blue: 255
		},
		defaultColorText: {
			Red: 255,
			Green: 255,
			Blue: 255
		},
		defaultColorBg: {
			Red: 255,
			Green: 255,
			Blue: 255
		},
		info: 'Choose type of button for changing text or background color below!'
      }
	},
	computed: {
		style() {
			return `color:rgb(${this.defaultColorText.Red}, ${this.defaultColorText.Green}, ${this.defaultColorText.Blue}); background-color:rgb(${this.defaultColorBg.Red}, ${this.defaultColorBg.Green}, ${this.defaultColorBg.Blue});`
		}
	},
	methods: {
		onChange() {
			if (this.isText === null) return false
			if (this.isText) this.upd(this.defaultColorText, this.colors);
			else this.upd(this.defaultColorBg, this.colors);

		},
		upd(obj, obj2) {
			obj.Red = obj2.Red
			obj.Green = obj2.Green
			obj.Blue = obj2.Blue
		}
	},
	watch: {
		isText() {
			if (this.isText) this.upd(this.colors, this.defaultColorText);
			else this.upd(this.colors, this.defaultColorBg);
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
	color: red;
}
</style>