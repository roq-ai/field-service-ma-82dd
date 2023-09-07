interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Service Request Manager'],
  customerRoles: ['Customer'],
  tenantRoles: [
    'Service Request Manager',
    'Field Service Engineer',
    'Customer Service Representative',
    'Parts Order Manager',
  ],
  tenantName: 'Organization',
  applicationName: 'Field Service Managment Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Submit a service request', 'Receive updates on service request status'],
  ownerAbilities: [
    'Receive and process service requests',
    'Manage service request verification',
    'Generate activities for service and assign to field service engineer',
    'Close the service request once resolved',
  ],
};
