const URLBASE = import.meta.env.BACKEND_URL ?? "HTTP://LOCALHOST:3000"

const ENDPOINT = {
    fileUpload: `${URLBASE}/update`
}

export default { ENDPOINT, URLBASE }