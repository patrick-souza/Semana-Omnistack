import { Request, Response } from 'express';
import connection from 'App/database/connection';

class SessionController {
  async create(request: Request, response: Response) {
    const { id } = request.body;

    const ong = await connection('ongs').where('id', id).select('name').first();

    if (!ong) {
      return response.status(404).send();
    }

    return response.json(ong);
  }
}

export default new SessionController();
