const mapping: Record<string, string> = {
  activities: 'activity',
  organizations: 'organization',
  'parts-orders': 'parts_order',
  schedules: 'schedule',
  'service-requests': 'service_request',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
