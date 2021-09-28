<script>
    import Tag from "./tag.svelte";

    export let place_holder = "Поиск";

    let input_value = "";

    let Tags = {
        tags: new Set(),

        append_many: (names) => {
            Tags.tags = Array.from(new Set([...Tags.tags, ...names]));
        },

        remove: (name) => {
            Tags.tags = Tags.tags.filter((tag) => tag !== name);
            console.log(Tags.tags);
            console.log(name);
        },

        clear: () => {
            Tags.tags = [];
        },

        tags_from_text: (text) => {
            let tags = [];
            let start = -1;
            let end = 0;

            for (var i = 0; i < text.length; ++i) {
                if (text[i] == "#") {
                    start = i;
                    end = i;
                }
                if (start != -1) {
                    if (text[i] == " ") {
                        if (end - start > 1)
                            tags.push(text.slice(start + 1, end));
                        start = -1;
                    }
                    ++end;
                }
            }

            return tags;
        },
    };

    function check_tags(e) {
        let tags = Tags.tags_from_text(input_value + e.data);
        if (tags.length) {
            Tags.append_many(tags);
            input_value = "";
        }
    }

    function on_tag_remove(e) {
        Tags.remove(e.detail.value);
    }
</script>

<div class="search-bar">
    <ul>
        {#each Array.from(Tags.tags) as tag}
            <Tag value={tag} on:remove={on_tag_remove} />
        {/each}
    </ul>
    <div class="input_area">
        <input type="text" on:input={check_tags} bind:value={input_value} placeholder={place_holder}/>
        <button>
            <svg viewBox="0 0 512.005 512.005" width="20" height="20">
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667 
                    S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6   
                    c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z  
                    M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
                />
            </svg>
        </button>
    </div>
</div>

<style>
    :root {
        --background: #e7e7ee;
        --color: #535366;
    }
    .search-bar {
        padding: 5px 7px;
        color: var(--color);
        background-color: var(--background);
        border-radius: 4px;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
    }

    input {
        margin: 0;
        margin-top: 3px;
        padding: 0 3px;
        border: none;
        background-color: var(--background);
        color: var(--color);
        outline: none;
        flex-grow: 1.1;
        font-size: 1.2em;
        font-family: "Courier New", monospace;
        text-align: center;
    }

    input::placeholder {
        font-family: "Courier New", monospace;
    }

    .input_area {
        display: flex;
        align-items: center;
    }

    button {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        fill: var(--color);
        transition: 200ms fill;
    }

    button:hover {
        fill: #39739d;
    }

</style>
