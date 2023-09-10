<script lang="ts">
  export let text: string;
  export let icon: string;
  export let link: string;

  const iconClass = `ph-duotone ph-${icon}`
</script>

<a href={ link } class="btn btn--link" title={ text }>
  <i class={ iconClass }></i>
</a>