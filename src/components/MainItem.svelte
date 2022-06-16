<script>
    export let name;
    export let price;
    export let description;
    export let src;
    export let alt;
</script>

<div class="container">
    <img
        src="{src}"
        alt="{alt}"
        style="border: 1px solid lightgray; margin-right: 10px;"
        width="150"
        height="150"
    />
    <div style="display: flex; flex-direction: column;">
        <name>{name}</name>
        <price>${price}</price>
        <p>{description}</p>
    </div>
</div>

<style>
    name {
        font-size: xx-large;
    }
    price {
        font-size: x-large;
    }
    .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
    }
</style>
