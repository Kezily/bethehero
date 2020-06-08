const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
   async index(req, res) {
      const ongs = await connection('ongs').select('*');
   
      return res.json(ongs);
   },

   async create(req, res) {
      const {name, email, whatsapp, city, uf} = req.body;

      const id = crypto.randomBytes(4).toString('HEX');

      await connection('ongs').insert({
         id,
         name,
         email,
         whatsapp,
         city,
         uf
      })

      return res.json({ id });
   },

   async delete(req, res) {
      const { id } = req.params;
      const ong_id = req.headers.authorization;

      const ongs = await connection('ongs')
         .where('id', id)
         .select('id')
         .first();

      if (ongs.id != ong_id) {
         return res.status(401).json({ error: 'Operation not permitted.' });
      }

      await connection('ongs').where('id', id).delete();

      return res.status(204).send();
   }
}