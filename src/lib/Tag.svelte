<script lang="ts">
  export let text: string;
  export let icon: string;

  const iconClass = `ph-duotone ph-${icon}`
</script>

<div class="tag">
  <i class={ iconClass }></i>
  <span class="tag__text">{ text }</span>
</div>