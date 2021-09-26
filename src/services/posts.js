import { api } from "./api.js"

export let posts = {

    API_HOST: "http://127.0.0.1:8000",

    get_post: async (post_id, return_content = false) => {

        let url = api.build_url(posts.API_HOST, '/posts/get', {
            post_id: post_id,
        });

        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
        });

        let data = await response.json();
        return data;
    },

    create_post: async (token, post) => {
        const url = api.build_url(posts.API_HOST, '/posts/create')

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "Application/json",
            },

            body: JSON.stringify({
                title: post.title,
                content: post.content,
                tags: post.tags,
            }),
        })

        const data = await response.json();

        return data;
    },

    search: async (
        query=null,
        tags=[], 
        order_by="creation_time",
        offset=0,
        limit=20
    ) => {
        
        const url = api.build_url(posts.API_HOST, '/posts/search')

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },

            body: JSON.stringify({
                query: query,
                tags: tags,
                order_by: order_by,
                offset: offset,
                limit: limit,
            }),
        })

        const data = await response.json();

        return data;

    }

};