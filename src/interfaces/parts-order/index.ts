import { ActivityInterface } from 'interfaces/activity';
import { GetQueryInterface } from 'interfaces';

export interface PartsOrderInterface {
  id?: string;
  part_name: string;
  quantity: number;
  status: string;
  activity_id: string;
  created_at?: any;
  updated_at?: any;

  activity?: ActivityInterface;
  _count?: {};
}

export interface PartsOrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  part_name?: string;
  status?: string;
  activity_id?: string;
}
