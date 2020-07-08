import Model from '../models/model';
import { sendNotificationToClient } from '../notify';

const messagesModel = new Model('messages');

export const messagesPage = async (req, res) => {
  try {
    const data = await messagesModel.select('name, message');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addMessage = async (req, res) => {
  const { name, message } = req.body;
  const columns = 'name, message';
  const values = `'${name}', '${message}'`;
  try {
    const data = await messagesModel.insertWithReturn(columns, values);
    const tokens = [
      'fs8DTPXj7PZMIiAGfouGTT:APA91bFMXeIFEtnGRYcxzmLNXIcN857Su1t6wwU37XerJqPx91TkgvpNh5X2LCikWHruUduxNPnId3UUeCbkYFgwIvyNiV7ZuogkpxLdn4jx5AAZHYdkxvHN7lafviII7X-rMDB4VhIs'
    ];
    const notificationData = {
      title: 'New message',
      body: message,
    };
    sendNotificationToClient(tokens, notificationData);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
