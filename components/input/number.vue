<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: number;
    min?: number;
    max?: number;
    step?: number;
    width?: string;
  }>(),
  {
    min: 0,
    max: 100,
    step: 1,
    width: "w-10"
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: number];
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = Number(target.value);
  if (!isNaN(value)) {
    emit("update:modelValue", Math.min(Math.max(value, props.min), props.max));
  }
};

const increase = () => {
  if (props.modelValue + props.step <= props.max) {
    emit("update:modelValue", props.modelValue + props.step);
  }
};

const decrease = () => {
  if (props.modelValue - props.step >= props.min) {
    emit("update:modelValue", props.modelValue - props.step);
  }
};
</script>

<template>
  <div class="flex items-center w-full" >
    <button
      @click="decrease"
      class="font-bold w-7 h-7 flex items-center justify-center bg-wonder-orange text-white rounded-l-lg hover:bg-orange-600 transition-colors"
      :disabled="modelValue <= min"
    >
      -
    </button>
    <input
      type="number"
      :value="modelValue"
      @input="updateValue($event)"
      class="text-center border-y border-gray-300 h-7 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      :class="width"
      :min="min"
      :max="max"
      :step="step"
    />
    <button
      @click="increase"
      class="font-bold w-7 h-7 flex items-center justify-center bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors"
      :disabled="modelValue >= max"
    >
      +
    </button>
  </div>
</template>
