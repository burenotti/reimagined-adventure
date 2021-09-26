<header>
    <a href="/" class="logo-link">
        <svg class="logo" arial-label="logo" viewBox="0 0 150 93" height="75" width="200" preserveAspectRatio="xMinYMin meet">
            <rect x="2" y="2" width="90" height="90" stroke-width="2" stroke="#000" fill="none"/>
            <text x="10" y="22" font-weight="0" font-family="Sans">18</text>
            <text x="29" y="55" font-size="30" font-weight="350" font-family="sans" class="hover-rollup">
                Artem's blog
            </text>
            <text x="29" y="55" font-size="30" font-weight="350" font-family="sans" class="ar">
                Ar
            </text>
            <text x="17" y="74" font-size="14" font-weight="300" font-family="sans">39.948</text>
        </svg>
    </a>
    <input placeholder="Поиск..."/>
    <a href="/sign-in" class="button">Sign in</a>
</header>

<style>
    .logo {
        cursor: pointer;
    }
    .hover-rollup {
        opacity: 0;
        transition: opacity 100ms;
    }
    svg:hover .hover-rollup {
        opacity: 1;
    }

    svg:hover .ar {
        font-weight: 500;
    }
    
    header {
        border-bottom: 1px solid #000;
        padding: 10px 30px;
        display: flex;

        align-items: center;
        justify-content: space-between;
    }
    
    .logo-link {
        display: inline-block;
    }

    .button {
        border-radius: 20px;
        padding: 6px 15px;
        border: 2px solid #000;
        text-decoration: none;
        color: #000;
        transition: background 200ms, color 200ms;
        font-family: monospace;
        font-size: 1.3em;
    }

    .button:hover {
        background: #000;
        color: white;
    }

    .right-block {
        display: flex;
        align-items: center;
    }
    .search-button {
        padding: 0;
        margin: 0;
        margin-right: 15px;
        background: none;
        border: none;
        cursor:pointer;
    }

    .lens {
        transition: 200ms;
    }

    .search-button:hover .lens {
        stroke: #000;
    }

    input {
        display: inline-block;
        flex-grow: 1.1;
        font-size: 1.35em;
        padding: 10px 30px;
        max-width: 700px;
        border: none;
        border-radius: 5px;
        background: #e7e7ee;
        color: #535366;
    }

    input::placeholder {
        font-family: monospace;
        text-align: center;
        color: #535366;
    }
</style>