export default {
  // 自定义了父组件的v-model该怎么控制该组件
  model: {
    prop: 'value',
    event: 'change.value',
  },
  props: {
    // 受控的prop
    value: [String, Number],
  },
  // 这边把受控的value prop传递给组件私有状态
  data() {
    const { value } = this.$props;
    // 如果父级没传value prop，合理设置默认值
    return {
      stateValue: value === undefined ||
        this.value === null ? '' : value,
    };
  },
  watch: {
    // 当父级传了新的value prop进来时，
    // 更新私有状态中的value
    value(val) {
      if (val !== undefined || val !== null)
        this.stateValue = va;
    },
  },
  methods: {
    // 这里是组件处理value chg时的回调
    handleChange(e) {
      // https://github.com/vueComponent/ant-design-vue/issues/92
      // 当改变的input val等于对应私有状态时不应当执行任何东西
      if (isIE && !isIE9 && this.stateValue === e.target.value) {
        return;
      }
      // 父级组件就没有传递新的val prop时才更新
      // 私有状态，否则forceupdate走watch监听
      if (!hasProp(this, 'value')) {
        this.stateValue = e.target.value;
      } else {
        this.$forceUpdate();
      }

      // 无论父级有没有穿新的val进来，都要触发自定义事件
      // 使之受控
      this.$emit('change.value', e.target.value);
    },

    renderInput() {
      const { stateValue, handleChange } = this;
      const inputProps = {
        domProps: {
          value: stateValue,
        },
        on: {
          input: handleChange,
        },
      };
      return (<input {...inputProps} />);
    },
  },
};