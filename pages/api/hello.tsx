// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

interface ResData {
  name: string;
  nickname: string;
}

export default (req: NextApiRequest, res: NextApiResponse<ResData>) => {
  res.statusCode = 200;
  res.json({ name: 'Francesco Cappelli', nickname: 'Fran' });
};
