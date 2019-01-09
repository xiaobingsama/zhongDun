<template>
  <div id="organ">
    <tab :line-width="3" custom-bar-width="10px" active-color="#5ebf83" bar-active-color="5ebf83">
      <tab-item selected @on-item-click="">培训机构</tab-item>
      <tab-item @on-item-click="">培训老师</tab-item>
      <tab-item @on-item-click="">申请入驻</tab-item>
    </tab>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'

export default {
	components: {
		Tab,
		TabItem
	},
	data () {
	    return {
	    }
  	},
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

</style>