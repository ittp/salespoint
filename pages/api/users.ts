import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces';

// Fake users data

var data = [...Array(10).keys()];
console.log(data);
var data1 = Array(8)
  .fill()
  .map((_, i) => i);
console.log(data1);

const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
// const rooms: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]


// http://10.0.0.1/xml_action.cgi?method=get&module=duster&file=json_statistics1675550255000

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  // Get data from your database
  res.status(200).json(users);
}
