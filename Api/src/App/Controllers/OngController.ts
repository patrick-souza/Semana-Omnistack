import connection from 'App/database/connection';
import { Response, Request } from 'express';
import { randomBytes } from 'crypto';

class OngController {
  async index(_: Request, response: Response) {
    const ongs = await connection('ongs').select();

    return response.json(ongs);
  }
  async create(request: Request, response: Response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  }
}

export default new OngController();
