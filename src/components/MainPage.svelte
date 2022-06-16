<script>
    import MainItem from "./MainItem.svelte";
    import { hotelSearch, search } from "../logic/search";

    let origin = "";
    let destination = "";
    let flightsList = [];
    let hotelsList = [];
    let date = "2022-06-16";
    let outDate = "2022-06-24";
    let loading = false;

    function getSrcPic(airlineName) {
        if (airlineName == "Delta Airlines") {
            return "https://bit.ly/3Q02Jrp";
        } else if (airlineName == "United Airlines") {
            return "https://bit.ly/3MgHiiI";
        } else {
            return "https://bit.ly/3NhgLmF";
        }
    }
</script>

<header>
    <p class="heading">GoVenture</p>
    <div class="search">
        <label>
            Arrival
            <input
                type="date"
                class="padding"
                style="width: 150px;"
                bind:value={date}
            />
        </label>
        <label>
            Departure
            <input
                type="date"
                class="padding"
                style="width: 150px;"
                bind:value={outDate}
            />
        </label>
        <input
            bind:value={origin}
            class="padding"
            style="width: 175px"
            placeholder="Where from?"
        />
        <input
            bind:value={destination}
            class="padding"
            style="width: 175px"
            placeholder="Where to?"
        />
        <button
            class="padding btn btn-primary"
            on:click={async () => {
                loading = true;
                const res = await search(origin, destination, date);
                const res2 = await hotelSearch(destination, date, outDate)
                flightsList = res["data"];
                hotelsList = res2["data"]
                loading = false;
            }}>Search</button
        >
    </div>
</header>
<div class="content">
    {#if loading}
        <div
            style="display: flex; flex-direction: column; align-items: center; width: 100%;"
        >
            <h1>Searching for the best flights, hotels, and cars...</h1>
            <div class="spinner-border text-primary" />
        </div>
    {:else}
        <div class="items">
            <p class="trifold">Flights</p>
            <hr />
            {#each flightsList as flight}
                <MainItem
                    name={flight["airline"]}
                    price={flight["fare"]}
                    description=""
                    src={getSrcPic(flight["airline"])}
                    alt={flight["airline"]}
                />
            {/each}
        </div>
        <div class="vl" />
        <div class="items">
            <p class="trifold">Hotels</p>
            <hr />
            {#each hotelsList as hotel}
                <MainItem
                    name={hotel["name"]}
                    price={hotel["fare"]}
                    description=""
                    src="https://d2s2rtcxxwjegp.cloudfront.net/images/hotels/hotel_placeholder.png"
                />
            {/each}
        </div>
        <div class="vl" />
        <div class="items">
            <p class="trifold">Rental Cars</p>
            <hr />
        </div>
    {/if}
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
