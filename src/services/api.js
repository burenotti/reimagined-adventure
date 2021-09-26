export let api = {

    build_url: (host, path='/', query={}) => {
        let url = new URL(host);
        url.pathname = path;
        url.search = new URLSearchParams(query)

        return url.toString();
    }

}