const express = require('express');
const router = express.Router();
const db = require('./db'); 

router.post('/users', async (req, res) => {
    const {name, email} = req.body;
    try {
        const [result] = await db.execute('INSERT INTO users(name, email) VALUES (?,?)',[name, email]);
        res.send({message:'Success'});
    }catch(err){
        res.status(500).send(err);
    }
})

//Read
router.get('/users', async (req,res) =>{
    try {
        const [rows] = await db.execute('SELECT * FROM users')
        res.send(rows);
    }catch (err){
        res.status(500).send(err);
    }
})

//Update
router.put('/users/:id', async (req, res) => {
  const { name, email } = req.body;
  try {
    await db.execute(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [name, email, req.params.id]
    );
    res.send({ id: req.params.id. name,email });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
 
  try {
    await db.execute(
      'DELETE FROM users WHERE id = ?',
      [req.params.id]
    );
    res.send({message: 'User Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;