<script lang="ts">
  export let isOpen: boolean;
  export let onClick: Function;
</script>

<button on:click={() => onClick()} class="btn btn--toggle">
  {#if isOpen}
    <i class="ph-duotone ph-minus-square" title="close"></i>
  {:else}
    <i class="ph-duotone ph-plus-square" title="open"></i>
  {/if}
</button>