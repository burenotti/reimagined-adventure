<li>
    <button on:click={emit_click}>
        <svg width="9" height="9" viewBox="0 0 329.26933 329">
            <path class="cross" xmlns="http://www.w3.org/2000/svg" fill="rgb(147, 173, 190)" d="m194.800781 164.769531
            128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 
            0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 
            21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625
            4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 
            128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
            />
        </svg>
    </button>
    <span>{ value }</span>
</li>

<style>
    li {
        display: inline-flex;
        align-items: center;
        border-radius: 20px;
        padding: 0px 10px;
        border: 1px solid rgb(147, 173, 190);
        color: rgb(147, 173, 190);
        cursor: default;
        margin-left: 2px;
        margin-bottom: 2px;
    }

    li:hover {
        border-color: #39739d;
    }
    li:hover .cross {
        fill: #39739d;
    }
    li:hover span{
        color: #39739d;
    }

    button {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        margin-right: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    span {
        margin: 0px;
        padding: 0;
        line-height: 18px;
        vertical-align: middle;
        font-size: 0.7em;
    }
</style>

<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function emit_click(){
        dispatch("remove", {
            id: id,
            value: value,
        })
    }

    export let value = "";
    export let id = 0;
</script>