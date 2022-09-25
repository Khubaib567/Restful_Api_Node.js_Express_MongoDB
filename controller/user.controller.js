const User = require('../model/user.model')


const createUser = (async(req,res)=>{
    let object = req.body

    if (!object) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    var final_id = object.userId
    final_id = final_id === undefined ? 0 : undefined
    // Add auto increment to the user id.
    User.count().then( (count) => {
      return count
    }).then(async(data)=>{
      final_id = data + 1 
      console.log(final_id)

      //  save the user into db
      let user = {
        userId: final_id,
        name: req.body.name,
        email:req.body.email,
        age: req.body.age,
        phoneNo:req.body.phoneNo
      };
      console.log(user)
      await User.create(user)
      res.status(201).json({ user })
    })  
})

const getAllUser = (async(req,res)=>{
  const user = await User.find({})
  res.status(200).json({ user })
})

const getUser = (async(req,res) => {
  const { userId: userId } = req.params
  const user = await User.findOne({ userId: userId })
  if (!user) {
    res.status(404).send({
      message: `Cannot find User with id=${userId}.`
    });
  }

  res.status(200).json({ user })
})

const updateUser = (async(req,res)=>{
  const { userId: userId } = req.params
  const user = await User.findOneAndUpdate({ userId: userId }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!user) {
    res.status(404).send({
      message: `Cannot find User with id=${userId}.`
    });
  }

  res.status(200).json({message:`User with id ${userId} has been updated!`})
  
})

const deleteUser = (async(req,res)=>{
  const { userId: userId } = req.params
  const user = await User.findOneAndDelete({ userId: userId })
  if (!user) {
    res.status(404).send({
      message: `Cannot find User with id=${userId}.`
    });
  }

  res.status(200).json({message:`User with id ${userId} has been deleted!`})
})

const deleteAllUser = (async(req,res)=>{
  await User.deleteMany()
  res.status(201).json({ message:"All user has been deleted!"})
})

module.exports = {getAllUser,createUser,getUser,updateUser,deleteUser,deleteAllUser}
