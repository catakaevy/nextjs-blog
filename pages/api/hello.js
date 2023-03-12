// req is an instance of http.IncommingMessage
// res is an instance of http.ServerResponse
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello World!' });
}