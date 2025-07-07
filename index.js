const login = async () => {
    const response = await fetch("https://api.sabisave.com/api/admin/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: "admin@sabisave.com",
            password: "password"
        })
    });
    const data = await response.json();
    console.log(data);
};

login();
