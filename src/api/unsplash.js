import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID Ej_HgqRTTPgC1dhGr2ag61Z14txfEAHZT_Ym9Gm78v8'
    }
});