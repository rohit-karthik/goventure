<script>
    import MainItem from "./MainItem.svelte";
    import { search } from "../logic/search";
</script>

<header>
    <p class="heading">GoVenture</p>
    <div class="search">
        <input type="date" class="padding" style="width: 150px;">
        <input
            class="padding"
            style="width: 250px"
            placeholder="Search for your destination:"
        />
        <button class="padding btn btn-primary" on:click={search}>Search</button>
    </div>
</header>
<div class="content">
    <div class="items">
        <p class="trifold">Flights</p>
        <hr />
        <MainItem
        name="Delta Airlines"
        price="500"
        description="This is a desc"
        src="https://bit.ly/3Q02Jrp"
        alt="Delta Airlines"
    />
    <MainItem
    name="American Airlines"
    price="500"
    description="This is a desc"
    src="https://bit.ly/3NhgLmF"
    alt="American Airlines"
    />
            <MainItem
        name="United Airlines"
        price="500"
        description="This is a desc"
        src="https://bit.ly/3MgHiiI"
        alt="United Airlines"
    />
    </div>
    <div class="vl" />
    <div class="items">
        <p class="trifold">Hotels</p>
        <hr />
    </div>
    <div class="vl" />
    <div class="items">
        <p class="trifold">Rental Cars</p>
        <hr />
    </div>
</div>

<style>
    .trifold {
        text-align: center;
        font-size: xxx-large;
    }
    .content {
        display: flex;
        justify-content: space-between;
    }
    .heading {
        font-size: 2rem;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        width: full;
        height: 10vh;
        background-color: darkslateblue;
        color: white;
    }
</style>
