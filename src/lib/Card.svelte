<script lang="ts">
  import ToggleBtn from "./ToggleBtn.svelte";
  import LinkBtn from "./LinkBtn.svelte";
  import Tag from "./Tag.svelte";
  
  export let data: {
    id: number
    icon: string
    name: string
    company: string
    category: string
    website: string
    dlURL: string
    price: string
    platforms: string
  }
  
  const { id, icon, name, company, category, website, dlURL, price, platforms } = data
  let isOpen = false;
  const toggleOpen = () => isOpen = !isOpen
</script>

<div class="card">
  <div class="card__part card__part--up">
    <img src={ icon } alt={ name } class="card__image">
    <span class="card__name">{ name }</span>
    <div class="card__btns">
      <LinkBtn  text='install' link={ dlURL } icon='download-simple' />
      <LinkBtn  text='visit website' link={ website } icon='link' />
      <ToggleBtn { isOpen } onClick={ toggleOpen } />
    </div>
  </div>
  
  {#if isOpen}
    <hr class="card__seperator" />
    <div class="card__part card__part--down">
      <Tag text={ category } icon="list" />
      <Tag text={ company } icon="buildings" />
      <Tag text={ price } icon="currency-circle-dollar" />
      <Tag text={ platforms } icon="windows-logo" />
    </div>
  {/if}
</div>