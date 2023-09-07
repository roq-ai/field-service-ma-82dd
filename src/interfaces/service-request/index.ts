import { ActivityInterface } from 'interfaces/activity';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ServiceRequestInterface {
  id?: string;
  status: string;
  problem_description: string;
  solution_description?: string;
  organization_id: string;
  customer_id: string;
  created_at?: any;
  updated_at?: any;
  activity?: ActivityInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    activity?: number;
  };
}

export interface ServiceRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  problem_description?: string;
  solution_description?: string;
  organization_id?: string;
  customer_id?: string;
}
