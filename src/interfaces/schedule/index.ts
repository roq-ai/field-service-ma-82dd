import { UserInterface } from 'interfaces/user';
import { ActivityInterface } from 'interfaces/activity';
import { GetQueryInterface } from 'interfaces';

export interface ScheduleInterface {
  id?: string;
  start_time: any;
  end_time?: any;
  status: string;
  engineer_id: string;
  activity_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  activity?: ActivityInterface;
  _count?: {};
}

export interface ScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  engineer_id?: string;
  activity_id?: string;
}
