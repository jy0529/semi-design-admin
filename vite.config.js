import react from '@vitejs/plugin-react'

export default (params) => {
    return {
        plugins: [
            react(),
        ]
    }
}