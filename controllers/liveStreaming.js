module.exports = { index ,room }

async function index(req, res){
  try{
    return res.render('../view/index');
  }catch(e){
    return res.status(500).json({
        message: 'Something went wrong, please try again later.'
    })
  }
}

async function room(req, res){
  try{
    return res.render('../view/room');
  }catch(e){
    return res.status(500).json({
        message: 'Something went wrong, please try again later.'
    })
  }
}