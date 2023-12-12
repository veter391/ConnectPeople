import { v4 as uuidv4 } from 'uuid';
import { sendQuery, query } from '../../db/configDB.js';

const createChat = async (req, res) => {
    try {
      const { room, userId1, userId2 } = req.body;
  
      //insertar chat en la bbdd
      const result = await sendQuery(query.createChat, [room, userId1, userId2]);
  
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getChat = async (req, res) => {
    try{
      const result = await sendQuery(query.getChat);
      res.status(200).json(result);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getChatById = async (req, res) => {
    try {
      const { room_id } = req.body;

      const result = await sendQuery(query.getChatById, [room_id]);
      res.status(200).json(result);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteChat = async (req, res) => {
    try {
      const { room_id } = req.body;

      const result = await sendQuery(query.deleteChat, [room_id]);
      res.status(200).json(result);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export default {
    createChat,
    getChat,
    getChatById,
    deleteChat
  }