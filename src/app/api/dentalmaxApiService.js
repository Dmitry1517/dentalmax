class StomsApiService {
    options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
        email: 'dshutrin@mail.ru',
        password: 'Ltkmnf-02',
        }),
    }

    async getAnsweer() {
        const response = await fetch('http://157.22.192.187/api/login', this.options)
        if (!response.ok) throw new Error()
        else return response.json()
    }
}

export default StomsApiService;