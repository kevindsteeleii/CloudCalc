const StoreValue = require('../models').StoreValue
const calc = require('../calculate');
module.exports = {
  test () {
    return 'it works';
  },
  doOperation(req){
    const { formula, first, second, op } = req.body.data;
    const storeVal = StoreValue.build({
      label: formula
    })
      let value = calc.operate(first, op, second);
      storeVal.value = value;
      return storeVal.save();
  },
  show(req){
    return StoreValue.findByPk(req.params.id)
  },
  showAll(){
    return StoreValue.findAll()
  }
}