app.use(express.json());

app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});

app.listen(4000, () => console.log('Listening on port 4000'));
