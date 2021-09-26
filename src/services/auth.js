export let auth = {

    API_HOST: "http://127.0.0.1:8000",

    sign_in: async (username, password) => {
        
        let form = new FormData();

        form.append("username", username);
        form.append("password", password);

        const response = await fetch(auth.API_HOST + "/auth/sign-in", {
            method: 'POST',
            mode: 'cors',
            body: form,

        });
        const token = await response.json();

        if (response.status !== 200){
            throw token;
        }
        
        return token
    },

    sign_up: async (username, password, email, first_name, last_name) => {
        const response = await fetch(auth.API_HOST + "/auth/sign-up", {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                first_name: first_name,
                last_name: last_name,
            }),

        });
        const token = await response.json();

        if (!response.ok) throw token;

        return token;
    },
    
    get_current_user: async (token) => {
        const response = await fetch(auth.API_HOST + "/auth/user", {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Authorization": "Bearer " + token
            },
        });

        const result = await response.json();
        
        if(!response.ok)
            throw result;
        
        return result;
    },

};