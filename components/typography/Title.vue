<template>
  <div v-if="isSubtitled" class="v-title__wrapper">
    <component
      :is="tag"
      :class="{
        [`v-title--${size}`]: size,
        [`v-title--${variant}`]: variant,
      }"
      :data-title="titleContent"
      class="v-title"
    >
      <slot />
    </component>

    <VText size="small" variant="italic">
      <slot name="subtitle" />
    </VText>
  </div>

  <component
    :is="tag"
    v-else
    :class="{
      [`v-title--${size}`]: size,
      [`v-title--${variant}`]: variant,
    }"
    class="v-title"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue, { VNode } from 'vue'

export enum TITLE_SIZES {
  MICRO = 'micro',
  SMALL = 'small',
  DEFAULT = 'default',
  LARGE = 'large',
  COLOSSAl = 'colossal',
}

export enum TITLE_VARIANTS {
  DARK = 'dark',
  LIGHT = 'light',
}

@Component({
  name: 'Title',
  components: {
    VText: () => import('@/components/typography/VText.vue'),
  },
})
export default class Title extends Vue {
  @Prop({
    type: String,
    default: 'h2',
  })
  tag!: String

  @Prop({
    type: String,
    default: 'default',
    validator: (val) => Object.values(TITLE_SIZES).includes(val),
  })
  size!: String

  @Prop({
    type: String,
    default: 'dark',
    validator: (val) => Object.values(TITLE_VARIANTS).includes(val),
  })
  variant!: String

  get title(): VNode[] | undefined {
    return this.$slots.default
  }

  get titleContent(): string {
    return this.title ? this.title[0].text || '' : ''
  }

  get subtitle(): VNode[] | undefined {
    return this.$slots.subtitle
  }

  get isSubtitled(): boolean {
    return !!this.subtitle
  }
}
</script>

<style lang="scss" scoped>
$sizes: (
  'micro': 14px,
  'small': 18px,
  'default': 24px,
  'large': 32px,
  'colossal': 96px,
);

$variants: (
  'dark': 'text',
  'light': 'light',
);

%decoration-bar {
  $decoration-height: $space-sm;

  &::before {
    background-color: #195bff;
    background-image: linear-gradient(62deg, #195bff 0%, #b721ff 100%);
    bottom: -($decoration-height + $space-xs);
    content: attr(data-title);
    height: $decoration-height;
    left: 0;
    position: absolute;
    color: transparent;
  }
}

%title-decoration {
  margin-bottom: $space-st + ($space-md * 2);
  position: relative;

  @extend %decoration-bar;
}

.v-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: $space-md;
  @include color-theme(color, 'text');

  @each $size-name, $size in $sizes {
    &.v-title--#{$size-name} {
      font-size: #{$size};

      @if $size-name == micro {
        margin-bottom: 0;
      }

      @if $size-name == large {
        @extend %title-decoration;
      }
    }
  }

  @each $variant-name, $variant in $variants {
    &.v-title--#{$variant-name} {
      @include color-theme(color, $variant);
    }
  }
}

.v-title__wrapper {
  margin-bottom: $space-xxl;
  position: relative;

  .v-title {
    margin-bottom: $space-md;
  }
}
</style>
