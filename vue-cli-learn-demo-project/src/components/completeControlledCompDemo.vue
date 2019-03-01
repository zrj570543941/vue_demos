<template>
  <input
    :value="nativeInputValue"
    ref="input"
    @input="handleInput"
  >
</template>

<script>
  export default {
    props: {
      // 这个是受控的prop
      value: [String, Number],
    },
    computed: {
      // 组件内不会直接用props.value当做input的val
      // 而是基于props.val做了一个computed val
      // 原因是为了在没传value时设置默认值
      nativeInputValue() {
        return this.value === null || this.value === undefined ? '' : this.value;
      },
    },
    methods: {
      // 组件内input val chg时怎么使它受父级控制
      handleInput(event) {
        // hack for https://github.com/ElemeFE/element/issues/8548
        // should remove the following line when we don't support IE
        // 当input val等于相应计算值时不应当执行任何东西
        if (event.target.value === this.nativeInputValue) return;
        // 受控关键代码，通过自定义事件支持父组件通过v-model的受控
        this.$emit('input', event.target.value);
        // 这段也很重要
        // set input's value to value prop, in case parent refuses the change
        // the value props when input val chg
        // see: https://github.com/ElemeFE/element/issues/12850
        this.$nextTick(() => {
          let input = this.getInput();
          input.value = this.value;
        });
      },
    },
  };
</script>

<style scoped>

</style>