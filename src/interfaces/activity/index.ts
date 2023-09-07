import { PartsOrderInterface } from 'interfaces/parts-order';
import { ScheduleInterface } from 'interfaces/schedule';
import { ServiceRequestInterface } from 'interfaces/service-request';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ActivityInterface {
  id?: string;
  name: string;
  description: string;
  status: string;
  service_request_id: string;
  engineer_id: string;
  created_at?: any;
  updated_at?: any;
  parts_order?: PartsOrderInterface[];
  schedule?: ScheduleInterface[];
  service_request?: ServiceRequestInterface;
  user?: UserInterface;
  _count?: {
    parts_order?: number;
    schedule?: number;
  };
}

export interface ActivityGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  service_request_id?: string;
  engineer_id?: string;
}
