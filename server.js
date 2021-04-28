.catch(console.error)
})

app.post('/data/update', function (req, res) {
  client.connect()
  .then(client => {
    let id = req.body.id;
    const query = { "_id": ObjectId(id)};
    client.db('cse120-2021-db').collection('books').updateOne(query, {$set: req.body})
      .then(result => {
        console.log(result)
        res.send({"status":"updated"});
      })
      .catch(error => console.error(error))
  })
  .catch(console.error)
})




app.listen(port, function () {
    console.log('Example app listening on port 3001!')
})
