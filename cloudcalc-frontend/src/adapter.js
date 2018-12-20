const BaseURL = 'localhost:3001/';

//const { formula, first, second, op } = req.body.data;
const Adapter = {
  createStoreValue(formula, first, second, op) {
    return fetch(BaseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: 
        JSON.stringify({
        data: {
          formula,
          first,
          second,
          op
        }
      })
    }).then(res => res.json())
    .then(console.log)
  }
}

export default Adapter;