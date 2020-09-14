<template>
    <div class="card p-3 bg-white mt-3">
      <div class="card-header d-flex ai-center">
        <i class="iconfont icon-cc-menu-circle"></i>
        <div class="fs-xxl flex-1 mx-2">{{title}}</div>
        <i>---</i>
      </div>
      <div class="card-body pt-3">
          <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}
</script>